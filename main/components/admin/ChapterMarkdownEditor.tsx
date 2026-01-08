"use client";

import { Label } from "@/components/ui/label";
import ForwardRefEditor from "./ForwardRefEditor";
import { useRef, useState } from "react";
import { MDXEditorMethods } from "@mdxeditor/editor";
import { Editor } from "./ForwardRefEditor";
import dynamic from "next/dynamic";

import * as commands from "@uiw/react-md-editor/commands";

const MDEditor = dynamic(() => import("@uiw/react-md-editor"), { ssr: false });

export default function ChapterMarkdownEditor() {
  const editorRef = useRef<MDXEditorMethods>(null);
  const [value, setValue] = useState("**Hello world!!!**");

  return (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold text-neutral-800">
        Chapter Content (Markdown)
      </h3>

      <div className="space-y-2">
        <Label>Chapter Content</Label>
        <div
          className="border border-neutral-200 rounded-md"
          data-color-mode="light"
        >
          {/* <ForwardRefEditor
            ref={editorRef}
            markdown="# Hello World!\n- damn"
            onChange={console.log}
            className="min-h-[300px] lg:min-h-[400px]"
            contentEditableClassName=""
          /> */}
          <MDEditor
            className="lg:min-h-106"
            value={value}
            onChange={setValue}
          />
        </div>
      </div>
    </div>
  );
}
