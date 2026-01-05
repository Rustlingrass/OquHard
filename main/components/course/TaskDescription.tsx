import { cn } from "@/lib/utils";

export function InlineCode({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <code
      className={cn(
        "bg-neutral-100 relative rounded px-[0.3rem] py-[0.22rem] font-mono text-xs font-semibold lg:text-sm",
        className
      )}
    >
      {children}
    </code>
  );
}

export function Paragraph({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "text-sm lg:text-[0.94rem] font-normal text-neutral-800/96 leading-[1.7] text-pretty",
        className
      )}
    >
      {children}
    </p>
  );
}

export function SmallHeader({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h3
      className={cn(
        "text-base lg:text-[1.1rem] leading-[1.5] font-semibold text-neutral-800",
        className
      )}
    >
      {children}
    </h3>
  );
}

function TaskExample({
  title,
  input,
  output,
  explanation,
}: {
  title: string;
  input: string;
  output: string;
  explanation: React.ReactNode;
}) {
  return (
    <div className="p-4 lg:p-5 bg-neutral-100/92 space-y-2 rounded-sm w-full">
      <SmallHeader>{title}</SmallHeader>
      <div className="">
        <Paragraph className="flex items-center gap-2">
          <span className="text-neutral-600">Input:</span>
          <span className="">{input}</span>
        </Paragraph>
        <Paragraph className="flex items-center gap-2">
          <span className="text-neutral-600">Output:</span>
          <span className="">{output}</span>
        </Paragraph>
        <Paragraph className="text-neutral-600">
          Explanation: {explanation}
        </Paragraph>
      </div>
    </div>
  );
}

export default function TaskDescription() {
  return (
    <section className="px-5 space-y-4 ">
      <SmallHeader>Problem Description</SmallHeader>
      <div className="space-y-6 lg:space-y-8">
        <Paragraph>
          A palindrome is a number that reads the same backward as forward. For
          example, 121 is a palindrome, while 123 is not. Given an integer x,
          write a function that determines whether it is a palindrome without
          converting the integer into a string. Your task is to implement a
          function that returns true if x is a palindrome integer and false
          otherwise.
        </Paragraph>
        <div className="p-4 lg:p-5 rounded-sm lg:rounded-md border-2 border-neutral-200 space-y-3 lg:space-y-6">
          <div className="space-y-1">
            <SmallHeader>Input</SmallHeader>
            <Paragraph>
              <InlineCode>x (integer):</InlineCode> The number to be checked for
              palindrome properties
            </Paragraph>
          </div>
          <hr className="h-[0.5px] bg-neutral-200 rounded-full" />
          <div className="space-y-1">
            <SmallHeader>Output</SmallHeader>
            <Paragraph>
              <InlineCode>true</InlineCode> if x is a palindrome, otherwise{" "}
              <InlineCode>false</InlineCode>
            </Paragraph>
          </div>
        </div>
        {/* <div className="grid lg:grid-cols-[repeat(auto-fit,minmax(400px,1fr))] gap-4 mt-4 lg:mt-8"> */}
        <div className="flex flex-col gap-4 mt-4 lg:mt-8">
          <TaskExample
            title="Example 1"
            input="x = 121"
            output="true"
            explanation={
              <span className="text-neutral-800">
                121 reads the same as forward
              </span>
            }
          />
          <TaskExample
            title="Example 2"
            input="x = -121"
            output="false"
            explanation={
              <span className="text-neutral-800">
                -121 reads from left ro right and 121- reads from right to left.
                Hence, it is not a palindrome
              </span>
            }
          />
          <TaskExample
            title="Example 1"
            input="x = 121"
            output="true"
            explanation={
              <span className="text-neutral-800">
                121 reads the same as forward
              </span>
            }
          />
        </div>
        <div className="space-y-2">
          <SmallHeader>Constraints:</SmallHeader>
          <ul className=" ml-4 list-disc [&>li]:mt-2 text-sm lg:text-[0.91rem] lg:font-normal font-normal text-neutral-800/96 leading-[1.7] text-pretty">
            <li>
              <InlineCode className="font-medium lg:font-semibold">
                {"0 <= s.length <= 5 * 10^4"}
              </InlineCode>
            </li>
            <li>
              <InlineCode className="font-medium lg:font-semibold">
                s
              </InlineCode>{" "}
              consists of English letters, digits, symbols and spaces.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
