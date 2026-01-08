import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Folder, FolderOpen } from "lucide-react";
import { Collapsible } from "@base-ui/react/collapsible";
import { courseSections } from "@/lib/constants";
import { ScrollArea } from "../ui/scroll-area";

const editedSections = courseSections.map((item, index) => ({
  ...item,
  title: item.title.split("— ")[1].trim(),
}));

function FoldersContent() {
  return (
    <div className="space-y-2  lg:space-y-2.5">
      {editedSections.map((item, index) => (
        <Collapsible.Root className={"w-full"} key={index}>
          <Collapsible.Trigger
            className={
              "w-full flex items-center gap-2.5 text-start group rounded-sm px-3 py-2 text-sm font-medium hover:bg-gray-50 focus-visible:outline-2 focus-visible:outline-blue-800 active:bg-neutral-100 data-panel-open:bg-neutral-100/80 data-panel-open:mb-2 transition-colors"
            }
          >
            <Folder className="size-4 lg:size-4.5 shrink-0 group-data-panel-open:text-emerald-500 fill-neutral-500 group-data-panel-open:fill-emerald-500 text-neutral-500" />
            <h3 className="text-sm max-w-58 text-neutral-600 group-hover:text-neutral-800 group-data-panel-open:text-neutral-800 font-normal truncate">
              {item.title}
            </h3>
          </Collapsible.Trigger>
          <Collapsible.Panel
            className={
              "flex [&[hidden]:not([hidden='until-found'])]:hidden h-(--collapsible-panel-height) flex-col justify-end overflow-hidden text-sm transition-all ease-out data-ending-style:h-0 data-starting-style:h-0 duration-150"
            }
          >
            {item.chapters.map((chapt, ind) => (
              <div
                key={ind}
                className="flex gap-2.5 border-l-2 ml-5 pl-2 border-neutral-200"
              >
                <div className="w-full px-3 group rounded-sm hover:bg-neutral-50 py-2.5 flex items-center gap-2 shrink-0 transition-colors">
                  <Folder className="size-4 lg:size-4.5 fill-neutral-500 text-neutral-500 shrink-0" />
                  <h3 className="text-sm truncate max-w-48 text-neutral-600 group-hover:text-neutral-800">
                    {chapt.title}
                  </h3>
                </div>
              </div>
            ))}
          </Collapsible.Panel>
        </Collapsible.Root>
      ))}
    </div>
  );
}

export default function StructureSide() {
  return (
    <aside className="lg:px-6 lg:pl-0 m-0 space-y-0 pt-0 h-full">
      <Drawer direction="left">
        <DrawerTrigger>
          <div className="p-2 lg:hidden rounded-sm border border-neutral-200 flex items-center justify-center shadow-none bg-white hover:bg-neutral-50 active:bg-neutral-100 transition-colors">
            <Folder className="size-4.5 shrink-0 text-emerald-500" />
          </div>
        </DrawerTrigger>
        <DrawerContent className="overflow-y-scroll m-0">
          <DrawerHeader className="p-6 pb-4">
            <DrawerTitle>Material Folders</DrawerTitle>
            <DrawerDescription>Observe the course materials.</DrawerDescription>
          </DrawerHeader>
          <div className="px-4 py-2">
            <FoldersContent />
          </div>
        </DrawerContent>
      </Drawer>
      <div className="space-y-6.5 p-5 hidden lg:block rounded-lg border border-neutral-200 lg:h-screen lg:sticky lg:top-24 bg-white">
        <div className=" p-4 pl-4 pb-0 lg:space-y-0.5">
          <h2 className="text-neutral-800 lg:text-xl font-semibold">
            Material Folders
          </h2>
          <p className="text-sm font-medium text-neutral-500">
            Observe the course materials.
          </p>
        </div>
        <ScrollArea className="h-[calc(100%-7.5rem)] overflow-y-scroll w-full pr-4 pl-1.5">
          <FoldersContent />
        </ScrollArea>
      </div>
    </aside>
  );
}
