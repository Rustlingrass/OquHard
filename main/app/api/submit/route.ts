const JUDGE0_URL = 'http://localhost:2358';

async function pollSubmission(token: string) {
    let attempts = 0;
    while (attempts < 30) {  // Poll up to ~1 minute
        const res = await fetch(`${JUDGE0_URL}/submissions/${token}?fields=stdout,stderr,time,memory,status`);
        if (!res.ok) throw new Error('Failed to fetch submission');
        const data = await res.json();
        if (data.status?.id > 2) return data;  // Done if not "In Queue" (1) or "Processing" (2)
        await new Promise(resolve => setTimeout(resolve, 2000));  // Wait 2 seconds
        attempts++;
    }
    throw new Error('Timeout waiting for results');
}

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { source_code, language_id, stdin, mode = "run", problemId } = body;

        if (mode === "run") {
            // Existing single-run logic
            const submissionRes = await fetch(`${JUDGE0_URL}/submissions`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ source_code, language_id, stdin }),
            });
            if (!submissionRes.ok) throw new Error('Submission failed');
            const { token } = await submissionRes.json();
            const result = await pollSubmission(token);
            return new Response(JSON.stringify(result), { status: 200 });
        } else if (mode === "submit") {
            // Define test cases (hardcoded for now; replace with DB fetch)
            const testCases = [
                { stdin: "1\n 2\n", expected_output: "3\n" },
                { stdin: "5\n 5\n", expected_output: "10\n" },
            ];

            // Run each test asynchronously for speed (use Promise.all)
            const testResults = await Promise.all(
                testCases.map(async (test) => {
                    const submissionRes = await fetch(`${JUDGE0_URL}/submissions`, {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                            source_code,
                            language_id,
                            stdin: test.stdin,
                            expected_output: test.expected_output,  // Judge0 compares this
                        }),
                    });
                    if (!submissionRes.ok) throw new Error('Submission failed');
                    const { token } = await submissionRes.json();
                    return await pollSubmission(token);
                })
            );

            // Aggregate
            const passed = testResults.filter(r => r.status?.id === 3).length;  // 3 = Accepted
            const verdict = passed === testCases.length ? "Accepted" : "Wrong Answer";
            return new Response(JSON.stringify({
                tests: testResults,
                passed,
                total: testCases.length,
                verdict,
            }), { status: 200 });
        }

        throw new Error('Invalid mode');
    } catch (error) {
        const message = error instanceof Error ? error.message : String(error);
        return new Response(JSON.stringify({ error: message }), { status: 500 });
    }
}