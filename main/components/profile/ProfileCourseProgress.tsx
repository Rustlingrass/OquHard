import { Award, TrendingUp } from "lucide-react";
import coursepfp from "@/assets/images/coursepfp3.png";
import Image from "next/image";
import { Progress } from "@base-ui/react/progress";

function BaseProgress() {
  return (
    <Progress.Root className="grid w-full grid-cols-2 gap-y-2 mt-2" value={41}>
      <Progress.Label className="text-sm font-medium text-neutral-700">
        Course Progress
      </Progress.Label>
      <Progress.Value className="col-start-2 text-right text-sm text-neutral-700" />
      <Progress.Track className="col-span-full h-2 overflow-hidden rounded bg-neutral-200 shadow-[inset_0_0_0_1px] shadow-neutral-200">
        <Progress.Indicator className="block bg-emerald-500 transition-all duration-500" />
      </Progress.Track>
    </Progress.Root>
  );
}

function PointsCard() {
  return (
    <div className="rounded-lg bg-slate-200/60 py-3 px-4 flex items-center gap-6 w-full justify-between">
      <div className="space-y-1">
        <p className="uppercase text-xs text-neutral-600">Points</p>
        <p className="text-xs font-normal text-neutral-600">
          <span className="text-base font-semibold text-neutral-800 mr-1">
            148.89
          </span>
          / 404
        </p>
      </div>
      <div className="flex items-center justify-center p-3 bg-emerald-100 shrink-0 rounded-full">
        <Award className="size-6 text-emerald-500 shrink-0" />
      </div>
    </div>
  );
}

export default function ProfileCourseProgress() {
  return (
    <section className="rounded-md bg-linear-to-br from-stone-50 via-gray-100 to-slate-100 p-7 flex flex-col gap-6">
      <div className="flex items-start lg:items-center justify-between gap-6 lg:gap-10">
        <div className="flex flex-col items-start gap-2 lg:gap-3">
          <h3 className="text-sm lg:text-base lg:font-semibold font-medium text-neutral-800">
            Advanced Data Structures & Algorithms Course in C++
          </h3>
          <span className="text-xs p-1 px-2 rounded-sm bg-emerald-100 text-emerald-600 font-normal tracking-wide flex items-center gap-1">
            <TrendingUp className="size-3.5 text-emerald-600 shrink-0" /> 41%
            Complete
          </span>
        </div>
        <Image
          src={coursepfp}
          className="size-18 lg:size-22 rounded-full object-cover object-center shrink-0"
          alt="coursepfp"
        />
      </div>
      <BaseProgress />
      <PointsCard />
      <div className="mt-2">
        <button className="flex w-full lg:w-auto lg:px-8 items-center gap-1.5 lg:gap-2 justify-center rounded-sm px-4 py-2.5 lg:py-2.5 text-xs lg:text-sm font-medium bg-emerald-500 hover:bg-emerald-500/90 active:bg-emerald-500/90 transition-colors text-white cursor-pointer">
          Continue
        </button>
      </div>
    </section>
  );
}
