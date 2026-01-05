"use client";
import ChapterNavbar from "@/components/course/ChapterNavbar";
import { CourseSidebar } from "@/components/course/CourseSidebar";
import { SidebarProvider, useSidebar } from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import { useState } from "react";
import ChapterFooter from "./ChapterFooter";

export default function AsideContent({
  chapter,
  children,
  className,
}: {
  chapter: string;
  children: React.ReactNode;
  className?: string;
}) {
  const { toggleSidebar, open, openMobile } = useSidebar();
  return (
    <div>
      <ChapterNavbar title={chapter}>
        <button
          onClick={toggleSidebar}
          className={cn(
            " p-1.5 rounded-sm flex items-center justify-center bg-neutral-50 hover:bg-neutral-100 active:bg-neutral-100 transition-colors",
            open && "lg:hidden"
          )}
        >
          <Menu className="size-4.5 text-neutral-600 shrink-0" />
        </button>
      </ChapterNavbar>
      <div>
        <CourseSidebar />
        <main
          className={cn(
            "space-y-2 ",
            className,
            open ? "lg:max-w-[calc(100%-24.5rem)]" : "lg:max-w-full"
          )}
        >
          {children}
        </main>
      </div>
      <ChapterFooter />
    </div>
  );
}
