import { cn } from "@/lib/utils";
import { useSidebar } from "../ui/sidebar";

export default function ClientNavWrapper({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  const { open } = useSidebar();
  return (
    <nav
      className={cn(
        "flex gap-4 px-4 py-4 border-b-2 border-neutral-200 items-center sticky top-0 bg-white transition-transform",
        open ? "lg:max-w-[calc(100%-24rem)]" : "lg:max-w-full",
        className
      )}
    >
      {children}
    </nav>
  );
}
