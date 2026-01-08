"use client";
import { useAuthDialogStore } from "@/lib/useDialogStore";
import { cn } from "@/lib/utils";
import { Menu, TextAlignJustify, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Navbar({ className }: { className?: string }) {
  const [pressed, setPressed] = useState(false);
  const setAuthDialogOpen = useAuthDialogStore(
    (state) => state.setAuthDialogOpen
  );
  return (
    <nav className="w-full bg-white font-geist border-b-[1.5px] border-b-neutral-200/80 sticky top-0 z-50">
      <div
        className={cn(
          "w-full flex items-center justify-between px-6 pr-4 py-3 lg:py-3 max-w-[1230px] lg:mx-auto",
          className
        )}
      >
        <Link className="flex flex-col select-none" href={"/"}>
          <h2 className="font-bold text-2xl lg:text-3xl text-emerald-600/80 text-pretty">
            OquEasy
          </h2>
          <p className="text-xs font-medium text-neutral-600 self-start pl-2">
            Learn DSA
          </p>
        </Link>
        <ul className="text-sm font-medium text-gray-700 overflow-hidden w-full lg:flex flex-row justify-center gap-6 items-center hidden">
          <Link
            className="px-4 py-2 transition-colors hover:text-emerald-600"
            href={"#"}
          >
            About
          </Link>
          <Link
            className="px-4 py-2 transition-colors hover:text-emerald-600"
            href={"#"}
            onClick={() => setAuthDialogOpen(true)}
          >
            Course
          </Link>
          <Link
            className="px-4 py-2 transition-colors hover:text-emerald-600"
            href={"#"}
          >
            Contact
          </Link>
          <Link
            className="px-4 py-2 transition-colors hover:text-emerald-600"
            href={"#"}
            onClick={() => setAuthDialogOpen(true)}
          >
            Sign Up
          </Link>
        </ul>
        <div
          className="flex items-center justify-center p-2.5 rounded-full hover:bg-neutral-50 active:bg-neutral-50 tansition-colors lg:hidden"
          onClick={() => setPressed((prev) => !prev)}
        >
          {pressed ? (
            <X className="size-5.5 text-neutral-600 hover:text-neutral-700/80 active:text-neutral-700/80 transition-colors" />
          ) : (
            <TextAlignJustify className="size-5.5 text-neutral-600 hover:text-neutral-700/80 active:text-neutral-700/80 transition-colors" />
          )}
        </div>
        <Link
          className="px-6 py-2 text-sm font-medium text-emerald-600 rounded-sm text-nowrap border-[1.5px] border-emerald-500 hover:bg-emerald-500 hover:border-emerald-500 transition-colors hover:text-white hidden lg:inline-block"
          href={"#"}
          onClick={() => setAuthDialogOpen(true)}
        >
          Log In
        </Link>
      </div>
      <div
        className={cn(
          "grid transition-[grid-template-rows] ease-in-out duration-300 w-full px-2 lg:hidden",
          pressed ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        )}
      >
        <ul className="text-sm font-medium text-gray-800  overflow-hidden w-full flex flex-col mb-5">
          <Link
            className="px-5 py-2.5 hover:bg-neutral-50 transition-colors hover:text-emerald-600 w-full"
            href={"#"}
          >
            About
          </Link>
          <Link
            className="px-5 py-2.5 hover:bg-neutral-50 transition-colors hover:text-emerald-600 w-full"
            href={"#"}
            onClick={() => setAuthDialogOpen(true)}
          >
            Course
          </Link>
          <Link
            className="px-5 py-2.5 hover:bg-neutral-50 transition-colors hover:text-emerald-600 w-full"
            href={"#"}
          >
            Contact
          </Link>
          <Link
            className="px-5 py-2.5 hover:bg-neutral-50 transition-colors hover:text-emerald-600 w-full"
            href={"#"}
            onClick={() => setAuthDialogOpen(true)}
          >
            Log In
          </Link>
          <Link
            className="px-5 py-2.5 hover:bg-neutral-50 transition-colors hover:text-emerald-600 w-full"
            href={"#"}
            onClick={() => setAuthDialogOpen(true)}
          >
            Sign Up
          </Link>
        </ul>
      </div>
    </nav>
  );
}
