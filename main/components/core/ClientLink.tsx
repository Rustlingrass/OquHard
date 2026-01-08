"use client";

import { useAuthDialogStore } from "@/lib/useDialogStore";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React, { useEffect } from "react";
import AuthDialog from "../auth/AuthDialog";
import { useRouter } from "next/navigation";

export default function ClientLink({
  className,
  children,
  href,
  replace = false,
}: {
  className: string;
  href: string;
  children: React.ReactNode;
  replace?: boolean;
}) {
  const setAuthDialogOpen = useAuthDialogStore(
    (state) => state.setAuthDialogOpen
  );
  const router = useRouter();

  useEffect(() => {
    router.prefetch(href);
  }, [href, router]);
  return (
    <a
      href={href}
      className={cn("", className)}
      onClick={(event) => {
        event.preventDefault();
        setAuthDialogOpen(true);
        // if (replace) {
        //   router.replace(href);
        // } else {
        //   router.push(href);
        // }
      }}
    >
      {children}
    </a>
  );
}
