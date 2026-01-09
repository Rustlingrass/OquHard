import { cn } from "@/lib/utils";

export default function InputErrorMessage({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <p
      className={cn(
        "text-xs font-normal text-red-600 tracking-wide",
        className
      )}
    >
      {children}
    </p>
  );
}
