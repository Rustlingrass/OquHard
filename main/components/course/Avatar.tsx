import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import evil from "@/assets/images/evil.jpg";
import { cn } from "@/lib/utils";
import Link from "next/link";

export function AvatarImage({ className }: { className?: string }) {
  return (
    <Image
      src={evil}
      alt="avatar"
      className={cn(
        "size-8 object-cover object-center rounded-full border-[1.5px] border-neutral-200 shrink-0",
        className
      )}
    />
  );
}

export function AvatarMenu({ className }: { className?: string }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className={cn("", className)}>
        <AvatarImage />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="rounded-sm mr-2">
        <DropdownMenuItem className="text-xs px-3 py-2">
          <Link href={"/profile"}>Profile</Link>
        </DropdownMenuItem>
        <DropdownMenuItem className="text-xs px-3 py-2">
          Log Out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export function ProfileAvatarMenu({ className }: { className?: string }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className={cn("", className)}>
        <div className="flex items-center text-start gap-3 py-0 px-2 rounded-md pl-3">
          <AvatarImage className="size-8.5" />
          <div className="">
            <h3 className="text-sm font-medium text-neutral-800/96">
              Margs The Dev
            </h3>
            <p className="text-xs font-normal tracking-wide text-neutral-600/94">
              Student
            </p>
          </div>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="rounded-sm ml-4 mt-1 min-w-39">
        <DropdownMenuItem className="text-xs px-3 py-2">
          <Link href={"/profile"}>Profile</Link>
        </DropdownMenuItem>
        <DropdownMenuItem className="text-xs px-3 py-2">
          Log Out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
