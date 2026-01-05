import { ChevronLeft, FileText } from "lucide-react";
import Link from "next/link";
import ClientNavWrapper from "./ClientNavWrapper";
import { cn } from "@/lib/utils";
import { useSidebar } from "../ui/sidebar";
import { ProfileAvatarMenu } from "./Avatar";

export default function ChapterNavbar({
  title,
  children,
}: {
  title?: string;
  children: React.ReactNode;
}) {
  const { open } = useSidebar();
  return (
    <nav
      className={cn(
        "flex gap-4 z-20 lg:gap-8 px-4 lg:px-10 lg:py-3.5 py-4 border-b-2 border-neutral-200 items-center sticky top-0 bg-white transition-transform",
        open ? "lg:max-w-[calc(100%-24.5rem)]" : "lg:max-w-full"
      )}
    >
      <Link
        href={"/course"}
        className="p-1.5 lg:p-2 rounded-sm flex items-center justify-center bg-neutral-50 hover:bg-neutral-100 active:bg-neutral-100 transition-colors"
      >
        <ChevronLeft className="size-4.5 lg:size-5 text-neutral-600 shrink-0" />
      </Link>
      <div className="flex gap-2 lg:gap-4 items-center min-w-0">
        <div className="p-1.5 lg:p-1.5 bg-emerald-500 flex items-center justify-center rounded-sm">
          <FileText className="size-4 lg:size-4.5 text-white shrink-0" />
        </div>
        <h2 className="text-sm lg:text-[0.92rem] leading-[1.43] lg:font-medium font-medium text-neutral-800 truncate">
          {"Heurestics: 10 Usability Principles To Improve UI"}
        </h2>
      </div>
      <ProfileAvatarMenu className="hidden lg:block ml-auto" />
      {children}
    </nav>
  );
}
