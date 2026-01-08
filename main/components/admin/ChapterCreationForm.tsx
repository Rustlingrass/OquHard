"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { NativeSelect, NativeSelectOption } from "../ui/native-select";

export default function ChapterCreationForm() {
  return (
    <form className="space-y-4">
      <div className="space-y-2">
        <Label>Chapter Title</Label>
        <Input
          type="text"
          placeholder="e.g., Basic C++ syntax refresher"
          className="h-9"
        />
      </div>

      <div className="space-y-2">
        <Label>Estimated Read Time</Label>
        <div className="grid grid-cols-[1fr_auto] gap-2">
          <Input
            type="number"
            placeholder="5"
            min="1"
            className="h-9"
          />
          <div className="flex items-center">
            <NativeSelect className="h-9 min-w-[5rem] shadow-none bg-white">
              <NativeSelectOption value="min">min</NativeSelectOption>
              <NativeSelectOption value="hrs">hrs</NativeSelectOption>
            </NativeSelect>
          </div>
        </div>
      </div>
    </form>
  );
}
