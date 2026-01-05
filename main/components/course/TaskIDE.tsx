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
      <IDE />
      <div className="w-full flex justify-between">
        <button className="px-4 lg:px-8 lg:font-normal lg:py-2.5 py-2 rounded-sm text-white text-sm bg-emerald-500 font-normal hover:bg-emerald-500/90 active:bg-emerald-500/90 transition-colors cursor-pointer">
          Submit
        </button>
        <button className="px-4 lg:px-8 lg:font-normal py-2 lg:py-2.5 rounded-sm text-white text-sm bg-neutral-800 font-normal hover:bg-neutral-700 active:bg-neutral-700 transition-colors cursor-pointer">
          Run
        </button>
      </div>
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

function LanguageSelect() {
  return (
    <NativeSelect className="py-1 border-none shadow-none hover:bg-neutral-200/70 active:bg-neutral-200/70 transition-colors">
      <NativeSelectOption value="python">Python3</NativeSelectOption>
      <NativeSelectOption value="C++">C++</NativeSelectOption>
      <NativeSelectOption value="C">C</NativeSelectOption>
      <NativeSelectOption value="javascript">JavaScript</NativeSelectOption>
      <NativeSelectOption value="typescript">TypeScript</NativeSelectOption>
      <NativeSelectOption value="java">Java</NativeSelectOption>
    </NativeSelect>
  );
}

const CodeEditor = dynamic(
  () => import("@uiw/react-textarea-code-editor").then((mod) => mod.default),
  { ssr: false }
);

function IDE() {
  const [code, setCode] = useState(`class Solution:
    def solution(self, s: str) -> int:
    pass`);

  return (
    <div className="border-2 rounded-md border-neutral-200">
      <header className="flex items-center gap-1 px-4 py-2 bg-slate-50 rounded-t-md">
        <CodeXml className="size-4.5 text-emerald-500" />
        <p className="text-sm font-medium text-neutral-800">Code</p>
      </header>
      <main className="">
        <div className="w-full flex justify-between pr-4 pl-2 py-1 bg-neutral-100 border-b border-neutral-300">
          <LanguageSelect />
          <div className="flex gap-2">
            <SmallIconButton icon={TextAlignStart} />
            <SmallIconButton icon={RotateCcw} />
          </div>
        </div>
        <div className="px-2 bg-neutral-100">
          <CodeEditor
            value={code}
            language="python"
            placeholder="Please enter JS code."
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
