"use client";

import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function ChapterFormActions({
  onSubmit,
  onCreateSection,
}: {
  onSubmit?: () => void;
  onCreateSection?: () => void;
}) {
  return (
    <div className="flex flex-col sm:flex-row gap-2 sm:justify-end pt-4 border-t border-neutral-200">
      <Link href="/admin">
        <Button
          type="button"
          variant="outline"
          className="w-full sm:w-auto"
        >
          <ArrowLeft className="size-4 mr-1" />
          Cancel
        </Button>
      </Link>

      <Button
        type="button"
        variant="secondary"
        className="w-full sm:w-auto"
        onClick={onSubmit}
      >
        Create Chapter
      </Button>

      <Button
        type="button"
        className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-600/90"
        onClick={onCreateSection}
      >
        Create & Add to Section
      </Button>
    </div>
  );
}
