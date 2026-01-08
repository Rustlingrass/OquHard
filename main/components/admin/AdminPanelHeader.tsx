import { JSX } from "react";
import Breadnav from "../course/Breadnav";
import { BreadPath } from "@/lib/types";
import { NativeSelect, NativeSelectOption } from "../ui/native-select";
import { Search, FileText, Plus } from "lucide-react";
import Link from "next/link";

const paths: BreadPath[] = [
  {
    path: "Home",
    link: "/",
    active: false,
  },
  {
    path: "Admin Panel",
    link: "/admin",
    active: true,
  },
];

function SortFilterMenu() {
  return (
    <div className="flex flex-row gap-3 w-full mt-5 lg:mt-0">
      <NativeSelect className="rounded-sm h-10 pl-4 min-w-40 lg:min-w-40 w-full space-y-4 shadow-none bg-white">
        <NativeSelectOption value="">Sorty by</NativeSelectOption>
        <NativeSelectOption value="filename">File name</NativeSelectOption>
        <NativeSelectOption value="lastopened">Last opened</NativeSelectOption>
        <NativeSelectOption value="filesize">File size</NativeSelectOption>
      </NativeSelect>
      <NativeSelect className="rounded-sm h-10 pl-4 pr-10 min-w-40 lg:min-w-40 w-full shadow-none bg-white">
        <NativeSelectOption value="all">Filter by</NativeSelectOption>
        <NativeSelectOption value="presentations">
          Presentations
        </NativeSelectOption>
        <NativeSelectOption value="images">Images</NativeSelectOption>
        <NativeSelectOption value="documents">Documents</NativeSelectOption>
        <NativeSelectOption value="markdowns">
          Content markdowns
        </NativeSelectOption>
      </NativeSelect>
    </div>
  );
}

function FileSearch() {
  return (
    <div className="px-4 py-2.5 pr-2 rounded-md border-[1.5px] border-neutral-200 flex items-center gap-2 w-full bg-white hover:bg-neutral-50 active:bg-neutral-50 hover:border-neutral-300/90 active:border-neutral-300/90 transition-colors">
      <Search className="size-5 text-neutral-600" />
      <input
        type="text"
        placeholder="Search content..."
        className="focus-within:outline-0 w-full text-sm text-neutral-800 font-normal"
      />
    </div>
  );
}

function CreateNewSectionChapter() {
  return (
    <Link href="/admin/chapters/new">
      <button
        type="button"
        className="flex items-center gap-1.5 lg:gap-2 justify-center rounded-sm px-4 lg:px-6 py-2.5 lg:py-2.5 text-sm lg:text-sm font-medium bg-emerald-500 hover:bg-emerald-500/90 active:bg-emerald-500/90 transition-colors text-white cursor-pointer"
      >
        <Plus className="size-4 shrink-0" />
        New
      </button>
    </Link>
  );
}

export default function AdminPanelHeader({
  children,
}: {
  children?: React.ReactNode;
}): JSX.Element {
  return (
    <section className="px-6 lg:px-0">
      <header className="space-y-0 lg:space-y-2">
        <Breadnav paths={paths} className="px-0" />
        <div className="flex items-end justify-between gap-4 w-full">
          <h2 className="text-xl lg:text-2xl font-semibold text-neutral-800">
            Admin Panel
          </h2>
          {children}
        </div>
        <div className="flex flex-col gap-0 lg:gap-4 lg:flex-row lg:items-center lg:mt-5">
          <SortFilterMenu />
          <div className="flex items-center gap-2.5 mt-5 lg:mt-0 lg:flex-2/3">
            <FileSearch />
            <CreateNewSectionChapter />
          </div>
        </div>
      </header>
    </section>
  );
}
