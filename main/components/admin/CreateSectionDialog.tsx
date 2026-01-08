"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { NativeSelect, NativeSelectOption } from "../ui/native-select";
import { useIsMobile } from "@/lib/useIsMobile";

export default function CreateSectionDialog({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const isMobile = useIsMobile();
  const [sectionTitle, setSectionTitle] = useState("");
  const [readTime, setReadTime] = useState("");

  const handleCreateSection = () => {
    console.log("Creating section:", { sectionTitle, readTime });
    onOpenChange(false);
  };

  if (isMobile) {
    return (
      <Drawer open={open} onOpenChange={onOpenChange}>
        <DrawerContent>
          <DrawerHeader className="p-6 pb-4">
            <DrawerTitle>Create Course Section</DrawerTitle>
            <DrawerDescription>
              Add your new chapter to a course section
            </DrawerDescription>
          </DrawerHeader>
          <div className="px-6 py-4 space-y-4">
            <div className="space-y-2">
              <Label>Section Title</Label>
              <Input
                type="text"
                placeholder="e.g., Introduction to DSA"
                value={sectionTitle}
                onChange={(e) => setSectionTitle(e.target.value)}
                className="h-9 text-sm"
              />
            </div>

            <div className="space-y-2">
              <Label>Estimated Read Time</Label>
              <Input
                type="text"
                placeholder="e.g., 45 min"
                value={readTime}
                onChange={(e) => setReadTime(e.target.value)}
                className="h-9 text-sm"
              />
            </div>

            <div className="space-y-2 w-full">
              <Label>Select Chapter</Label>
              <NativeSelect className="h-9 shadow-none bg-white w-full">
                <NativeSelectOption value="w-full">
                  Choose a chapter
                </NativeSelectOption>
                <NativeSelectOption value="new-chapter w-full">
                  New Chapter (Just Created)
                </NativeSelectOption>
              </NativeSelect>
            </div>
          </div>
          <DrawerFooter className="p-6 pt-4">
            <DrawerClose asChild>
              <Button variant="outline" className="w-full">
                Cancel
              </Button>
            </DrawerClose>
            <Button
              onClick={handleCreateSection}
              className="w-full bg-emerald-500 hover:bg-emerald-500/90"
            >
              Create Section
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    );
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Create Course Section</DialogTitle>
          <DialogDescription>
            Add your new chapter to a course section
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4 py-4">
          <div className="space-y-2">
            <Label>Section Title</Label>
            <Input
              type="text"
              placeholder="e.g., Introduction to DSA"
              value={sectionTitle}
              onChange={(e) => setSectionTitle(e.target.value)}
              className="h-9"
            />
          </div>

          <div className="space-y-2">
            <Label>Estimated Read Time</Label>
            <Input
              type="text"
              placeholder="e.g., 45 min"
              value={readTime}
              onChange={(e) => setReadTime(e.target.value)}
              className="h-9"
            />
          </div>

          <div className="space-y-2">
            <Label>Select Chapter</Label>
            <NativeSelect className="h-9 shadow-none bg-white">
              <NativeSelectOption value="">Choose a chapter</NativeSelectOption>
              <NativeSelectOption value="new-chapter">
                New Chapter (Just Created)
              </NativeSelectOption>
            </NativeSelect>
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Cancel
          </Button>
          <Button
            onClick={handleCreateSection}
            className="bg-emerald-500 hover:bg-emerald-500/90"
          >
            Create Section
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
