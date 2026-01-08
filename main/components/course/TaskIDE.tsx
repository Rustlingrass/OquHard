"use client";

import {
  Code,
  CodeXml,
  LucideProps,
  RotateCcw,
  TextAlignStart,
} from "lucide-react";
import { Paragraph, SmallHeader } from "./TaskDescription";
import {
  NativeSelect,
  NativeSelectOptGroup,
  NativeSelectOption,
} from "@/components/ui/native-select";
import { ForwardRefExoticComponent, RefAttributes, useState } from "react";
import dynamic from "next/dynamic";
import rehypePrism from "rehype-prism-plus";

export default function TaskIDE() {
  const languages = [
    { value: "python", label: "Python3", id: 71, editorLang: "python" },
    { value: "C++", label: "C++", id: 54, editorLang: "cpp" },
    { value: "C", label: "C", id: 50, editorLang: "c" },
    { value: "javascript", label: "JavaScript", id: 63, editorLang: "js" },
    { value: "typescript", label: "TypeScript", id: 74, editorLang: "typescript" },
    { value: "java", label: "Java", id: 62, editorLang: "java" },
  ];

  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);
  const [code, setCode] = useState(`class Solution:
    def solution(self, s: str) -> int:
    pass`);
  const [stdin, setStdin] = useState("");
  const [result, setResult] = useState<any | null>(null); // changed code
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null); // changed code

  const handleSubmit = async (isRun = false) => {
    setLoading(true);
    setError(null);
    setResult(null);
    try {
      const response = await fetch("/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          source_code: code,
          language_id: selectedLanguage.id,
          stdin: isRun ? stdin : "",  // For "Run" only
          mode: isRun ? "run" : "submit",  // NEW: Flag for mode
          problemId: "your-problem-id-here",  // NEW: If problem-specific; replace with actual ID from props/state
        }),
      });
      if (!response.ok) throw new Error("API call failed");
      const data = await response.json();
      setResult(data);  // Now data could be an array of results or aggregated
    } catch (err) {
      const message = err instanceof Error ? err.message : String(err);
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="px-5 space-y-8">
      <header className="space-y-1">
        <SmallHeader className="pl-1">
          Write a solution program. stdin {"->"} stdout.
        </SmallHeader>
        <div className="px-1">
          <Paragraph className="flex items-center gap-2">
            <span className="font-medium">Time Limit:</span>
            <span className="text-neutral-600">1 second</span>
          </Paragraph>
          <Paragraph className="flex items-center gap-2">
            <span className="font-medium">Memory Limit:</span>
            <span className="text-neutral-600">10 MB</span>
          </Paragraph>
        </div>
      </header>
      <IDE
        code={code}
        setCode={setCode}
        selectedLanguage={selectedLanguage}
        setSelectedLanguage={setSelectedLanguage}
        languages={languages}
        stdin={stdin}
        setStdin={setStdin}
      />
      <div className="w-full flex justify-between">
        <button
          onClick={() => handleSubmit(false)}
          disabled={loading}
          className="px-4 lg:px-8 lg:font-normal lg:py-2.5 py-2 rounded-sm text-white text-sm bg-emerald-500 font-normal hover:bg-emerald-500/90 active:bg-emerald-500/90 transition-colors cursor-pointer disabled:opacity-50"
        >
          {loading ? "Submitting..." : "Submit"}
        </button>
        <button
          onClick={() => handleSubmit(true)}
          disabled={loading}
          className="px-4 lg:px-8 lg:font-normal py-2 lg:py-2.5 rounded-sm text-white text-sm bg-neutral-800 font-normal hover:bg-neutral-700 active:bg-neutral-700 transition-colors cursor-pointer disabled:opacity-50"
        >
          {loading ? "Running..." : "Run"}
        </button>
      </div>
      {error && (
        <div className="p-4 bg-red-100 border border-red-300 rounded-md">
          <p className="text-red-700">{error}</p>
        </div>
      )}
      {result && Array.isArray(result.tests) ? (
        <div className="p-4 bg-gray-100 border border-gray-300 rounded-md space-y-2">
          <p className="font-medium">Overall: {result.verdict} ({result.passed}/{result.total} tests passed)</p>
          {result.tests.map((test: { status?: { description?: string }; stdout?: string; stderr?: string },  index: number) => (
            <div key={index}>
              <p>Test {index + 1}: {test.status?.description}</p>
              <pre>Stdout: {test.stdout || "N/A"}</pre>
              <pre>Stderr: {test.stderr || "N/A"}</pre>
            </div>
          ))}
        </div>
      ) : (
        // Existing single-result display
        result && (
          <div className="p-4 bg-gray-100 border border-gray-300 rounded-md space-y-2">
            <p className="font-medium">Status: {result.status?.description || "Unknown"}</p>
            <pre className="bg-white p-2 border rounded-md overflow-auto">
              <strong>Stdout:</strong> {result.stdout || "N/A"}
            </pre>
            <pre className="bg-white p-2 border rounded-md overflow-auto">
              <strong>Stderr:</strong> {result.stderr || "N/A"}
            </pre>
            <p>Time: {result.time || "N/A"}s</p>
            <p>Memory: {result.memory || "N/A"} bytes</p>
          </div>
        )
      )}
    </section>
  );
}

function SmallIconButton({
  icon,
}: {
  icon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
}) {
  const Icon = icon;
  return (
    <span className="flex items-center justify-center p-1.5 rounded-sm self-center shrink-0 bg-transparent hover:bg-neutral-200/90 active:bg-neutral-200/90 transition-colors">
      <Icon className="size-4 text-neutral-500" />
    </span>
  );
}

import type { Dispatch, SetStateAction } from "react";

type Language = { value: string; label: string; id: number; editorLang: string };

interface IDEProps {
  code: string;
  setCode: Dispatch<SetStateAction<string>>;
  selectedLanguage: Language;
  setSelectedLanguage: Dispatch<SetStateAction<Language>>; // changed code
  languages: Language[];
  stdin: string;
  setStdin: Dispatch<SetStateAction<string>>;
}

function IDE({
  code,
  setCode,
  selectedLanguage,
  setSelectedLanguage,
  languages,
  stdin,
  setStdin,
}: IDEProps) {
  return (
    <div className="border-2 rounded-md border-neutral-200">
      <header className="flex items-center gap-1 px-4 py-2 bg-slate-50 rounded-t-md">
        <CodeXml className="size-4.5 text-emerald-500" />
        <p className="text-sm font-medium text-neutral-800">Code</p>
      </header>
      <main className="">
        <div className="w-full flex justify-between pr-4 pl-2 py-1 bg-neutral-100 border-b border-neutral-300">
          <LanguageSelect
            selectedLanguage={selectedLanguage}
            setSelectedLanguage={setSelectedLanguage}
            languages={languages}
          />
          <div className="flex gap-2">
            <SmallIconButton icon={TextAlignStart} />
            <SmallIconButton icon={RotateCcw} />
          </div>
        </div>
        <div className="px-2 bg-neutral-100">
          <CodeEditor
            value={code}
            language={selectedLanguage.editorLang}
            placeholder="Please enter code."
            onChange={(evn) => setCode(evn.target.value)}
            // rehypePlugins={[
            //   [rehypePrism, { ignoreMissing: true, showLineNumbers: true }],
            // ]}
            padding={15}
            className="bg-neutral-100 min-h-50"
            style={{
              fontSize: 14,
              fontFamily:
                "ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace",
            }}
          />
        </div>
        <div className="px-4 py-2 bg-neutral-100 border-t border-neutral-300">
          <label className="block text-sm font-medium text-neutral-800 mb-1">Stdin (Input):</label>
          <textarea
            value={stdin}
            onChange={(e) => setStdin(e.target.value)}
            placeholder="Enter input data (optional for Submit)"
            className="w-full p-2 border border-neutral-300 rounded-md bg-white min-h-[100px] font-mono text-sm"
          />
        </div>
      </main>
      <footer className="rounded-b-md bg-neutral-100 px-4 py-2 pb-3 flex justify-between">
        <Paragraph className="text-xs lg:text-sm text-neutral-500">
          Saved
        </Paragraph>
        <Paragraph className="text-xs lg:text-sm text-neutral-500">
          Ln 1, Col 1
        </Paragraph>
      </footer>
    </div>
  );
}

function LanguageSelect({
  selectedLanguage,
  setSelectedLanguage,
  languages,
}: {
  selectedLanguage: Language;
  setSelectedLanguage: Dispatch<SetStateAction<Language>>;
  languages: Language[];
}) {
  return (
    <NativeSelect
      value={selectedLanguage.id}
      onChange={(e) =>
        setSelectedLanguage(
          languages.find((lang) => lang.id === parseInt(e.target.value, 10)) ?? languages[0]
        )
      }
      className="py-1 border-none shadow-none hover:bg-neutral-200/70 active:bg-neutral-200/70 transition-colors"
    >
      {languages.map((lang) => (
        <NativeSelectOption key={lang.id} value={lang.id}>
          {lang.label}
        </NativeSelectOption>
      ))}
    </NativeSelect>
  );
}

const CodeEditor = dynamic(
  () => import("@uiw/react-textarea-code-editor").then((mod) => mod.default),
  { ssr: false }
);