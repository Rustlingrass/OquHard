import pose1 from "@/assets/images/pro2.jpg";
import {
  BookText,
  Calendar,
  CirclePlay,
  CloudDownload,
  Code,
  Heart,
  Smartphone,
} from "lucide-react";
import Image from "next/image";

export default function LearnAction() {
  return (
    <section className="px-5.5">
      <div className="p-6 lg:p-7 rounded-md border border-neutral-200 shadow-sm space-y-5">
        <div className="space-y-4">
          <Image
            src={pose1}
            alt="pose1"
            className="w-full h-47 rounded-sm object-cover"
          />
          <div className="flex justify-between items-center">
            <h3 className="text-lg text-neutral-800 font-semibold">
              Completely Free
            </h3>
            <p className="text-sm font-medium text-red-600">100% off</p>
          </div>
          <div className="flex gap-2 w-full">
            <button className="rounded-sm cursor-pointer px-4 py-2.5 w-full bg-emerald-500 hover:bg-emerald-500/90 active:bg-emerald-500/90 transition-colors text-sm font-medium text-white">
              Continue Learning
            </button>
            <button className="flex items-center hover:bg-neutral-50 active:bg-neutral-50 transition-colors cursor-pointer justify-center p-2.5 rounded-sm border border-neutral-200">
              <Heart className="size-4.5 text-neutral-600" />
            </button>
          </div>
        </div>
        <hr className="h-[0.5px] bg-neutral-200 rounded-full" />
        <LearnActionAdditions />
      </div>
    </section>
  );
}

function LearnActionAdditions() {
  return (
    <div className="space-y-3">
      <h3 className="text-sm font-medium text-neutral-800">
        This course includes
      </h3>
      <div className="flex gap-2 lg:gap-2.5 items-center">
        <CirclePlay className=" text-neutral-500 size-4.5" />
        <p className="text-sm text-neutral-600">12 hours on-demand video</p>
      </div>
      <div className="flex gap-2 lg:gap-2.5 items-center">
        <CloudDownload className=" text-neutral-500 size-4.5" />
        <p className="text-sm text-neutral-600">25 hours on-demand video</p>
      </div>
      <div className="flex gap-2 lg:gap-2.5 items-center">
        <BookText className=" text-neutral-500 size-4.5" />
        <p className="text-sm text-neutral-600">49 lectures</p>
      </div>
      <div className="flex gap-2 lg:gap-2.5 items-center">
        <Code className=" text-neutral-500 size-4.5" />
        <p className="text-sm text-neutral-600">28 coding exercises</p>
      </div>
      <div className="flex gap-2 lg:gap-2.5 items-center">
        <Calendar className=" text-neutral-500 size-4.5" />
        <p className="text-sm text-neutral-600">No due date expiration</p>
      </div>
    </div>
  );
}
