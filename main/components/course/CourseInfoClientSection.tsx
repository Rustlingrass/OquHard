"use client";

import { CourseInfoSectionType } from "@/lib/types";
import { cn } from "@/lib/utils";
import {
  Check,
  ChevronDown,
  Clipboard,
  ClipboardPen,
  ClipboardPenLine,
  File,
} from "lucide-react";
import { useMemo, useState } from "react";
import "react-circular-progressbar/dist/styles.css";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import Link from "next/link";

function RoundedProgress({ value, color }: { value: number; color: string }) {
  return (
    <div className="size-4.5 lg:size-5 shrink-0">
      <CircularProgressbar
        strokeWidth={12}
        className=""
        counterClockwise
        styles={buildStyles({ pathColor: color })}
        value={value}
      />
    </div>
  );
}

export default function CourseInfoClientSection({
  section,
  className,
}: {
  section: CourseInfoSectionType;
  className?: string;
}) {
  const [expanded, setExpanded] = useState(false);
  const donePercentage = useMemo(() => {
    const exted = [...section.chapters, ...section.questions];
    const doneFilt = exted.filter((item) => item.done);

    return Math.round((doneFilt.length / exted.length) * 100);
  }, [
    section.chapters.map((item) => item.done).join(","),
    section.questions.map((item) => item.done).join(","),
  ]);

  return (
    <div
      className={cn(
        "px-4 py-4 lg:px-5 lg:py-5 pb-0 lg:pb-0.5 border-b-2",
        className
      )}
    >
      <header
        className="flex items-start justify-between gap-3.5 cursor-pointer"
        onClick={() => setExpanded((prev) => !prev)}
      >
        <div className="flex items-start gap-2">
          <ChevronDown
            className={cn(
              "size-5 text-neutral-500 transition-transform shrink-0",
              expanded && "rotate-180"
            )}
          />
          <h3 className="text-sm lg:text-[0.90rem] font-medium text-neutral-800">
            {section.title}
          </h3>
        </div>
        {donePercentage > 0 ? (
          <RoundedProgress
            color="oklch(69.6% 0.17 162.48)"
            value={donePercentage}
          />
        ) : (
          <RoundedProgress color="oklch(70.8% 0 0)" value={donePercentage} />
        )}
      </header>
      <main
        className={cn(
          "grid grid-rows-[0fr] transition-[grid-template-rows] ease-in-out duration-300 mt-4 lg:mt-4",
          expanded && "grid-rows-[1fr] mb-4.5 lg:mb-5"
        )}
      >
        <ul className="overflow-hidden space-y-0.5">
          {section.chapters.map((chapt, ind) => (
            <li
              key={ind}
              className="pl-6 pr-1 lg:pr-1 hover:bg-neutral-50 active:bg-neutral-50 transition-colors py-2 lg:py-2.5"
            >
              <Link
                href={"#"}
                className="flex justify-between items-center gap-4"
              >
                <div className="flex items-center gap-2">
                  <File
                    className={cn(
                      "text-neutral-600 size-4 lg:size-4.5 shrink-0",
                      chapt.done && "text-neutral-500"
                    )}
                  />
                  <p
                    className={cn(
                      "text-xs lg:text-sm font-normal text-neutral-800",
                      chapt.done && "text-neutral-600"
                    )}
                  >
                    {chapt.title}
                  </p>
                  {chapt.done && (
                    <Check className="size-4 lg:size-4.5 text-emerald-500 shrink-0 hidden lg:block" />
                  )}
                </div>
                <p
                  className={cn(
                    "text-xs lg:text-sm font-normal text-neutral-800 hidden lg:block",
                    chapt.done && "text-neutral-600"
                  )}
                >
                  {chapt.readTime}
                </p>
              </Link>
            </li>
          ))}
          {section.questions.map((quest, inx) => (
            <li
              key={inx}
              className="pl-6 pr-1 hover:bg-neutral-50 active:bg-neutral-50 transition-colors py-2 lg:py-2.5"
            >
              <Link
                href={"#"}
                className="flex justify-between items-center gap-4"
              >
                <div className="flex items-center gap-2">
                  <ClipboardPenLine
                    className={cn(
                      "text-neutral-600 size-4 lg:size-4.5 shrink-0",
                      quest.done && "text-neutral-500"
                    )}
                  />
                  <p
                    className={cn(
                      "text-xs lg:text-sm font-normal text-neutral-800",
                      quest.done && "text-neutral-600"
                    )}
                  >
                    {quest.text}
                  </p>
                  {quest.done && (
                    <Check className="size-4 lg:size-4.5 text-emerald-500 hidden lg:block shrink-0" />
                  )}
                </div>
                <p
                  className={cn(
                    "text-xs lg:text-sm font-normal text-neutral-800 hidden lg:block",
                    quest.done && "text-neutral-600"
                  )}
                >
                  1 question
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
