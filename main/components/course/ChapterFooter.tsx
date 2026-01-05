import { Flag } from "lucide-react";
import Link from "next/link";
import { useSidebar } from "../ui/sidebar";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";

export default function ChapterFooter() {
  const { open } = useSidebar();
  const mobile = useIsMobile();
  return (
    <footer
      className={cn(
        "fixed bottom-0 bg-white px-4 lg:px-18 py-3.5 border-t border-neutral-200 flex justify-between items-center w-full",
        open ? "lg:max-w-[calc(100%-24rem)]" : "lg:max-w-full"
      )}
    >
      <div>
        <p className="text-sm font-normal text-neutral-500 hidden lg:block">
          Have an issue for this content?
        </p>
        <Link
          href={"#"}
          className="flex gap-1 items-center text-neutral-600 text-sm hover:text-neutral-500"
        >
          <Flag className="size-4" />
          Report An Issue
        </Link>
      </div>
      <div className="flex gap-2 lg:gap-3">
        <Link
          href={"#"}
          className="px-4 lg:px-6 py-2 lg:py-2.5 hover:bg-neutral-100 active:bg-neutral-100 transition-colors border-[1.5px] border-neutral-300 text-sm font-medium text-neutral-800 bg-transparent rounded-md"
        >
          Back
        </Link>
        <Link
          href={"#"}
          className="px-4 lg:px-6 hover:bg-neutral-700 active:bg-neutral-700 transition-colors py-2 lg:py-2.5 border-[1.5px] border-neutral-800 text-sm font-medium text-neutral-50 bg-neutral-800 rounded-md"
        >
          Next {!mobile && "Chapter"}
        </Link>
      </div>
    </footer>
  );
}
