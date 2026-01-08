"use client";

import { useState } from "react";
import { Separator } from "@/components/ui/separator";
import ChapterBasicInfo from "./ChapterBasicInfo";
import ChapterFileUpload from "./ChapterFileUpload";
import ChapterMarkdownEditor from "./ChapterMarkdownEditor";
import ChapterFormActions from "./ChapterFormActions";
import CreateSectionDialog from "./CreateSectionDialog";
import Breadnav from "../course/Breadnav";
import { BreadPath } from "@/lib/types";

const paths: BreadPath[] = [
  {
    path: "Home",
    link: "/",
    active: false,
  },
  {
    path: "Admin Panel",
    link: "/admin",
    active: false,
  },
  {
    path: "Create Chapter",
    link: "/admin/chapters/new",
    active: true,
  },
];

export default function ChapterCreationView() {
  const [sectionDialogOpen, setSectionDialogOpen] = useState(false);

  const handleSubmit = () => {
    console.log("Creating chapter...");
    window.location.href = "/admin";
  };

  const handleCreateSection = () => {
    setSectionDialogOpen(true);
  };

  return (
    <section className="px-6 pt-2 lg:py-6 lg:px-0">
      <div className="rounded-md lg:rounded-lg border bg-white border-neutral-200 space-y-10 lg:space-y-4 px-6 py-6 lg:px-10 lg:py-10 w-full">
        <div className="hidden lg:block">
          <Breadnav paths={paths} className="px-0" />
        </div>

        <div className="space-y-4 lg:space-y-8">
          <div className="flex flex-col lg:hidden gap-4">
            <Breadnav paths={paths} className="px-0" />
            <h2 className="text-xl font-semibold text-neutral-800">
              Create New Chapter
            </h2>
          </div>

          <h2 className="hidden lg:block text-2xl font-semibold text-neutral-800">
            Create New Chapter
          </h2>

          <div className="space-y-8">
            <ChapterBasicInfo />
            <Separator />
            <ChapterFileUpload />
            <Separator />
            <ChapterMarkdownEditor />
          </div>

          <ChapterFormActions
            onSubmit={handleSubmit}
            onCreateSection={handleCreateSection}
          />
        </div>
      </div>

      <CreateSectionDialog
        open={sectionDialogOpen}
        onOpenChange={setSectionDialogOpen}
      />
    </section>
  );
}
