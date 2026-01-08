import { courseFiles, courseSections } from "@/lib/constants";
import emeraldFolder from "@/assets/images/Folder2.svg";
import Image from "next/image";
import { capitalizeFirstLetter, cn } from "@/lib/utils";
import {
  Copy,
  Delete,
  Download,
  EllipsisVertical,
  Share,
  SquarePen,
  Trash,
} from "lucide-react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import docx from "@/assets/images/DOCX.svg";
import jpg from "@/assets/images/JPG.svg";
import pdf from "@/assets/images/PDF.svg";
import png from "@/assets/images/PNG.svg";
import ppt from "@/assets/images/PPT.svg";
import txt from "@/assets/images/TXT.svg";
import mp4 from "@/assets/images/MP4.svg";
import zip from "@/assets/images/ZIP.svg";
import markdown from "@/assets/images/image.png";
import { AvatarImage } from "../course/Avatar";
import Link from "next/link";
import { Separator } from "../ui/separator";
import BasedCheckbox from "../core/CustomCheckbox";
import Breadnav from "../course/Breadnav";
import { BreadPath, FileResourceType } from "@/lib/types";
import { JSX } from "react";
import AdminPanelHeader from "./AdminPanelHeader";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "../ui/drawer";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

function switchFileIcon(extension: string) {
  switch (extension) {
    case "doc":
      return docx;
    case "docx":
      return docx;
    case "jpg":
      return jpg;
    case "png":
      return png;
    case "pdf":
      return pdf;
    case "mp4":
      return mp4;
    case "ppt":
      return ppt;
    case "txt":
      return txt;
    case "zip":
      return zip;
    case "md":
      return markdown;
    default:
      return txt;
  }
}

export function FolderEmerald({ className }: { className?: string }) {
  return (
    <Image
      src={emeraldFolder}
      className={cn("size-5 object-contain shrink-0", className)}
      alt="folder"
    />
  );
}

function FileOptionMenu({
  children,
  file,
}: {
  children: React.ReactNode;
  file?: FileResourceType;
}): JSX.Element {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel className="font-medium text-neutral-800 max-w-36 truncate">
          {capitalizeFirstLetter(
            file?.fileName?.split("_")?.join(" ") ?? "Edit files"
          )}
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <div className="flex items-center gap-2.5 px-1 pr-2 w-full hover:bg-neutral-50 active:bg-neutral-100 rounded-sm">
            <div className="flex items-center justify-center shrink-0">
              <Download className="size-4 text-neutral-600 shrink-0" />
            </div>
            <h3 className="text-sm font-normal text-neutral-800">Download</h3>
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <div className="flex items-center gap-2.5 px-1 pr-2 hover:bg-neutral-50 active:bg-neutral-100 rounded-sm">
            <div className="flex items-center justify-center shrink-0">
              <SquarePen className="size-4 text-neutral-600 shrink-0" />
            </div>
            <h3 className="text-sm font-normal text-neutral-800">Rename</h3>
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <div className="flex items-center gap-2.5 px-1 pr-2 hover:bg-neutral-50 active:bg-neutral-100 rounded-sm">
            <div className="flex items-center justify-center shrink-0">
              <Trash className="size-4 text-neutral-600 shrink-0" />
            </div>
            <h3 className="text-sm font-normal text-neutral-800">Delete</h3>
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <div className="flex items-center gap-2.5 px-1 pr-2 hover:bg-neutral-50 active:bg-neutral-100 rounded-sm">
            <div className="flex items-center justify-center shrink-0">
              <Copy className="size-4 text-neutral-600 shrink-0" />
            </div>
            <h3 className="text-sm font-normal text-neutral-800">Duplicate</h3>
          </div>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

function FileOptionDrawer({
  file,
  children,
}: {
  file?: FileResourceType;
  children: React.ReactNode;
}) {
  return (
    <Drawer direction="bottom">
      <DrawerTrigger asChild>{children}</DrawerTrigger>
      <DrawerContent className="overflow-y-scroll m-0">
        <DrawerHeader className="p-6 pb-4">
          <DrawerTitle>
            {capitalizeFirstLetter(
              file?.fileName?.split("_")?.join(" ") ?? "Edit files"
            )}
          </DrawerTitle>
          <DrawerDescription>Edit selected file(s).</DrawerDescription>
        </DrawerHeader>
        <div className=" space-y-2 mb-10 px-4 mt-4">
          <div className="flex items-center gap-2.5 px-4 py-2 hover:bg-neutral-50 active:bg-neutral-100 rounded-sm">
            <div className="flex items-center justify-center shrink-0">
              <Download className="size-4 text-neutral-600 shrink-0" />
            </div>
            <h3 className="text-sm font-normal text-neutral-800">Download</h3>
          </div>
          <div className="flex items-center gap-2.5 px-4 py-2 hover:bg-neutral-50 active:bg-neutral-100 rounded-sm">
            <div className="flex items-center justify-center shrink-0">
              <SquarePen className="size-4 text-neutral-600 shrink-0" />
            </div>
            <h3 className="text-sm font-normal text-neutral-800">Rename</h3>
          </div>
          <div className="flex items-center gap-2.5 px-4 py-2 hover:bg-neutral-50 active:bg-neutral-100 rounded-sm">
            <div className="flex items-center justify-center shrink-0">
              <Trash className="size-4 text-neutral-600 shrink-0" />
            </div>
            <h3 className="text-sm font-normal text-neutral-800">Delete</h3>
          </div>
          <div className="flex items-center gap-2.5 px-4 py-2 hover:bg-neutral-50 active:bg-neutral-100 rounded-sm">
            <div className="flex items-center justify-center shrink-0">
              <Copy className="size-4 text-neutral-600 shrink-0" />
            </div>
            <h3 className="text-sm font-normal text-neutral-800">Duplicate</h3>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
}

const editedSections = courseSections.map((item, index) => ({
  ...item,
  title: item.title.split("— ")[1].trim(),
}));

export default function MainFileSection() {
  return (
    <section className="px-6 pt-6 lg:px-0">
      <div className="rounded-md lg:rounded-lg border bg-white border-neutral-200 lg:space-y-10 px-6 py-6 lg:px-10 lg:py-10 w-full">
        <div className="hidden lg:block">
          <AdminPanelHeader />
        </div>
        <div className="space-y-8">
          <h3 className="text-lg font-semibold text-neutral-800">
            Suggested Folders
          </h3>
          <SuggestedFolders />
          <FilesTable />
        </div>
      </div>
    </section>
  );
}

function FileOptionButton({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}): JSX.Element {
  return (
    <button
      type="submit"
      className={cn(
        " flex items-center gap-2 lg:gap-2 justify-center rounded-sm px-4 lg:px-5 py-2.5 lg:py-2.5 text-sm lg:text-sm font-normal lg:font-medium bg-neutral-100 hover:bg-neutral-200/80 active:bg-neutral-200 transition-colors text-neutral-800 cursor-pointer",
        className
      )}
    >
      {children}
    </button>
  );
}

function SuggestedFolders() {
  return (
    <div className="flex gap-8 lg:gap-6 flex-col lg:flex-row">
      {editedSections.slice(0, 4).map((item, index) => (
        <div key={index} className="group lg:flex-1/4">
          <div className="flex items-center justify-center rounded-sm bg-neutral-100 min-h-40">
            <FolderEmerald className="size-24 lg:size-22 object-contain saturate-105 hue-rotate-5 drop-shadow-md" />
            {/* saturate-90 -hue-rotate-10 brightness-100 */}
          </div>
          <div className="flex justify-between items-center px-3 pr-2 py-4 gap-2 w-full group-hover:bg-neutral-50 rounded-b-sm transition-colors group-active:bg-neutral-100 ">
            <div className="flex items-center gap-3 w-full">
              <div className="flex items-center justify-center shrink-0">
                <FolderEmerald className="size-5.5" />
              </div>
              <div className="min-w-0">
                <h3 className="text-sm font-normal max-w-44 leading-none truncate text-neutral-800">
                  {item.chapters[0].title}
                </h3>
                <p className="text-xs font-normal leading-none text-neutral-500 flex items-center gap-1">
                  Folder{" "}
                  <span className="text-xl font-semibold text-neutral-500">
                    ·
                  </span>
                  Margs TheDev
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center p-1 shrink-0">
              <EllipsisVertical className="size-4 text-neutral-800 shrink-0" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

const filesPaths: BreadPath[] = [
  {
    path: "All Files",
    link: "/",
    active: false,
  },
  {
    path: "Introduction",
    link: "/intro",
    active: true,
  },
];

function FilesTable() {
  return (
    <div className=" space-y-8">
      <div className="space-y-6">
        <div className="space-y-4">
          <Breadnav paths={filesPaths} className="pl-1" />
          <div className="flex justify-between items-center gap-2">
            <div className="flex gap-4 items-center">
              <FileOptionButton>
                <Download className="size-4 text-neutral-600 shrink-0" />{" "}
                <span>Download</span>
              </FileOptionButton>
              <FileOptionButton className="hidden lg:flex">
                <Share className="size-4 text-neutral-600 shrink-0" />{" "}
                <span className="">Share</span>
              </FileOptionButton>
              <FileOptionButton className="hidden lg:flex">
                <Trash className="size-4 text-neutral-600 shrink-0" />{" "}
                <span>Delete</span>
              </FileOptionButton>
            </div>
            <p className="text-sm font-normal text-neutral-500">2 selected</p>
          </div>
        </div>
        <Table className=" table-fixed">
          <TableHeader>
            <TableRow className="bg-neutral-50 rounded-md">
              <TableHead className="w-9 lg:w-8 text-neutral-500 border border-b-0 pl-2 border-r-0 rounded-md border-neutral-200">
                <div className="flex items-center shrink-0 justify-center">
                  <BasedCheckbox className="shrink-0" />
                </div>
              </TableHead>
              <TableHead className=" text-neutral-500 lg:w-[48%] pl-2 lg:pl-4 border border-b-0 border-l-0 border-r-0 rounded-md border-neutral-200">
                Name
              </TableHead>
              <TableHead className="hidden lg:w-1/7 lg:pl-4 md:table-cell text-neutral-500 border border-b-0 rounded-md border-neutral-200">
                Owner
              </TableHead>
              <TableHead className="hidden lg:w-1/6 lg:pl-4 md:table-cell text-neutral-500 border border-b-0 rounded-md border-neutral-200">
                Upload date
              </TableHead>
              <TableHead className="hidden lg:w-1/8 lg:pl-4 md:table-cell text-neutral-500 border border-b-0 rounded-md border-neutral-200">
                File Size
              </TableHead>
              <TableHead className="w-10 lg:w-8 align-midddle text-center border border-b-0 rounded-md border-neutral-200">
                <div className="lg:hidden">
                  <FileOptionDrawer>
                    <div className="flex items-center justify-center shrink-0">
                      <EllipsisVertical className="size-5 text-neutral-600 shrink-0" />
                    </div>
                  </FileOptionDrawer>
                </div>
                <div className="hidden lg:block">
                  <FileOptionMenu>
                    <div className="flex items-center justify-center shrink-0">
                      <EllipsisVertical className="size-5 text-neutral-600 shrink-0" />
                    </div>
                  </FileOptionMenu>
                </div>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="border-b border-neutral-200 rounded-md">
            {courseFiles.map((file, index) => {
              const fileImg = switchFileIcon(file.fileExtension);
              return (
                <TableRow
                  key={file.fileName}
                  className={cn(
                    " rounded-md border-neutral-200",
                    index === courseFiles.length - 1 && "border-b-2"
                  )}
                >
                  <TableCell className="align-middle pl-2 border-l border-neutral-200 lg:align-middle text-neutral-600 text-wrap">
                    <div className="flex items-center shrink-0 justify-center">
                      <BasedCheckbox className="shrink-0" />
                    </div>
                  </TableCell>
                  <TableCell className="font-normal lg:py-3.5 pr-3 py-2.5 pl-2 lg:pl-4 border-l-0 border-neutral-200 text-wrap whitespace-normal break-all">
                    <div className="flex items-center gap-2.5 text-wrap">
                      <Image
                        src={fileImg}
                        className="size-5.5 object-contain shrink-0"
                        alt={file.fileName}
                      />
                      <span className="text-sm text-neutral-800 text-wrap">
                        {capitalizeFirstLetter(
                          file.fileName + "." + file.fileExtension
                        )}
                      </span>
                    </div>
                  </TableCell>

                  <TableCell className="align-top hidden lg:pl-4 md:table-cell lg:border-x border-neutral-200 text-center lg:align-middle text-neutral-600 text-wrap">
                    <div className="flex items-center gap-2">
                      <AvatarImage className="size-6" />
                      <h3 className="text-sm font-normal text-neutral-600">
                        {file.owner}
                      </h3>
                    </div>
                  </TableCell>

                  <TableCell className="hidden lg:border-x lg:pl-4 lg:border-neutral-200 md:table-cell text-left align-top lg:align-middle">
                    <p className="text-sm font-normal text-neutral-600">
                      {file.uploadDate}
                    </p>
                  </TableCell>

                  <TableCell className="hidden md:table-cell lg:pl-4 text-left align-top lg:align-middle">
                    <p className="text-sm font-normal text-neutral-600">
                      {file.fileSize}
                    </p>
                  </TableCell>
                  <TableCell className="table-cell text-right align-middle border-r border-l border-neutral-200 lg:align-middle">
                    <div className="lg:hidden">
                      <FileOptionDrawer file={file}>
                        <div className="flex items-center justify-center shrink-0">
                          <EllipsisVertical className="size-5 text-neutral-600 shrink-0" />
                        </div>
                      </FileOptionDrawer>
                    </div>
                    <div className="hidden lg:block">
                      <FileOptionMenu file={file}>
                        <div className="flex items-center justify-center shrink-0">
                          <EllipsisVertical className="size-5 text-neutral-600 shrink-0" />
                        </div>
                      </FileOptionMenu>
                    </div>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
      <div className="flex gap-4 mt-6 lg:mt-10 lg:ml-4 px-2">
        <Link
          href={"#"}
          className="text-sm lg:font-base font-medium text-emerald-700 hover:text-emerald-600 visited:text-emerald-600 active:text-emerald-600 transition-colors"
        >
          Previous
        </Link>
        <Separator
          orientation="vertical"
          className="w-0.5 shrink-0 bg-gray-300"
        />
        <Link
          href={"#"}
          className="text-sm lg:font-base font-medium text-emerald-700  hover:text-emerald-600 visited:text-emerald-600 active:text-emerald-600 transition-colors"
        >
          Next
        </Link>
      </div>
    </div>
  );
}
