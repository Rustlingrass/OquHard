"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { NativeSelect, NativeSelectOption } from "../ui/native-select";

export default function ChapterBasicInfo() {
  return (
    <div className="space-y-6">
      {/* <h3 className="text-lg font-semibold text-neutral-800">
        Chapter Details
      </h3> */}

      <div className="space-y-4 lg:space-y-0 mt-6 lg:flex lg:flex-row lg:items-center lg:gap-6 w-full">
        <div className="space-y-2 lg:flex-1">
          <Label>Chapter Title</Label>
          <Input
            type="text"
            placeholder="e.g., Basic C++ syntax refresher"
            className="h-9 text-sm"
          />
        </div>

        <div className="space-y-2">
          <Label>Estimated Read Time</Label>
          <div className="grid grid-cols-[1fr_auto] gap-2">
            <Input
              type="number"
              placeholder="5"
              min="1"
              className="h-9 text-sm"
            />
            <div className="flex items-center">
              <NativeSelect className="h-9 min-w-[5rem] shadow-none bg-white text-sm">
                <NativeSelectOption value="min">min</NativeSelectOption>
                <NativeSelectOption value="hrs">hrs</NativeSelectOption>
              </NativeSelect>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
