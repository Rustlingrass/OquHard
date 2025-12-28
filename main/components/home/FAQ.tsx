"use client";
import { faqs } from "@/lib/constants";
import { cn } from "@/lib/utils";
import {
  ChevronDown,
  ChevronUp,
  Mails,
  MessageSquare,
  MoveUpRight,
  Star,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function FAQ() {
  return (
    <section className="w-full px-6 font-geist">
      <div className="space-y-8 lg:space-y-14 max-w-[1200px] mx-auto">
        <header className="flex flex-col items-start lg:items-center lg:text-center gap-4 lg:gap-6">
          <p className="text-xs font-normal bg-emerald-300/70 text-emerald-900 rounded-sm p-2 flex items-center gap-1.5">
            <Star className="size-4 fill-emerald-900 text-emerald-900" />
            Frequent Questions
          </p>
          <div className="space-y-2 lg:space-y-4">
            <h2 className="text-2xl lg:text-5xl font-bold text-neutral-800">
              Frequently Asked Questions
            </h2>
            <h4 className="text-sm lg:text-base text-pretty lg:max-w-140 lg:mx-auto font-medium text-neutral-600">
              Quick answers to questions you may have about OquEasy and
              competitive programming. Cant't find what you're looking for?
              Check out our full documentation
            </h4>
          </div>
          <div className="flex gap-2.5 mt-4 lg:mt-8 lg:gap-4">
            <Link
              href={"/login"}
              className="text-emerald-600 text-sm bg-white rounded-sm lg:text-sm lg:px-6 lg:py-3 px-5 py-2.5 font-medium hover:bg-emerald-500 active:bg-emerald-500 border-[1.5px] border-emerald-400 hover:border-emerald-500 active:border-emerald-500 hover:text-white active:text-white transition-colors"
            >
              Documentation
            </Link>
            <Link
              href={"/login"}
              className="text-white flex items-center gap-2 text-sm lg:text-sm bg-emerald-500 rounded-sm lg:px-6 lg:py-3 lg:pr-5 px-5 pr-4 py-2.5 font-medium hover:bg-white active:bg-white border-[1.5px] border-emerald-500 hover:text-emerald-600 active:text-emerald-600 transition-colors"
            >
              Get in Touch
              <Mails className="size-4.5 lg:size-5 transition-colors" />
            </Link>
          </div>
        </header>
        <main className="space-y-2 lg:space-y-4 lg:max-w-6/7 lg:mx-auto">
          {faqs.map((item, index) => (
            <FAQItem key={index} item={item} />
          ))}
        </main>
      </div>
    </section>
  );
}

function FAQItem({ item }: { item: { question: string; answer: string } }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className={cn(
        "flex flex-col cursor-pointer items-start w-full p-4 lg:p-6 lg:rounded-lg hover:bg-neutral-50 active:bg-neutral-50 transition-colors rounded-md font-geist",
        open && "bg-neutral-100"
      )}
      onClick={() => setOpen((prev) => !prev)}
    >
      <div className="flex justify-start lg:justify-between gap-2.5 lg:gap-3 items-center w-full">
        <h3 className="text-sm lg:text-base lg:font-semibold font-medium text-neutral-800">
          {item.question}
        </h3>
        <button className="lg:flex items-center justify-center p-1.5 lg:p-2 shrink-0 hidden rounded-full hover:bg-neutral-100 active:bg-neutral-100 transition-colors">
          {open ? (
            <ChevronUp className="shrink-0 size-5 text-neutral-600 lg:size-5.5" />
          ) : (
            <ChevronDown className="shrink-0 size-5 text-neutral-600 lg:size-5.5" />
          )}
        </button>
      </div>
      <div
        className={cn(
          "grid grid-rows-[0fr] transition-[grid-template-rows] overflow-hidden",
          open && "grid-rows-[1fr] mt-3 lg:mt-3"
        )}
      >
        <p className="text-xs lg:text-sm lg:font-medium font-normal text-neutral-600 text-pretty overflow-hidden">
          {item.answer}
        </p>
      </div>
    </div>
  );
}
