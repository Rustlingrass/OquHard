import { MoveUpRight, Star } from "lucide-react";
import pro1 from "@/assets/images/pro5.jpg";
import Image from "next/image";

export default function Info() {
  return (
    <section className="w-full bg-emerald-50 px-6 py-10 lg:py-28 font-geist">
      <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:max-w-[1180px] mx-auto">
        <div className="flex flex-col gap-4 items-start">
          <p className="text-xs font-normal bg-emerald-300/70 text-emerald-900 rounded-sm p-2 flex items-center gap-1.5">
            <Star className="size-4 fill-emerald-900 text-emerald-900" /> Our
            Detailed Course
          </p>
          <div className="space-y-4 lg:space-y-6">
            <h2 className="text-3xl lg:text-5xl font-bold lg:font-bold text-neutral-900">
              Learn how to Solve Hard Programming Problems
            </h2>
            <p className="text-sm lg:font-medium lg:text-[0.92rem] text-neutral-600 text-pretty lg:max-w-7/8">
              Our course teaches competitive programming problem solving through
              algorithmic thinking, pattern recognition, efficient
              implementation, and timed, contest-style practice with guided
              solutions and feedback. Our course teaches competitive programming
              problem solving through algorithmic thinking.
            </p>
          </div>
          <button className="text-sm font-medium text-neutral-800 hover:bg-emerald-500 active:bg-emerald-500 transition-colors flex gap-2 lg:gap-3 items-center bg-emerald-400 px-4 py-1.5 pr-1.5 rounded-full mt-6 lg:mt-8 cursor-pointer">
            Learn More
            <MoveUpRight className="size-4 text-emerald-400 p-2 rounded-full shrink-0 box-content transition-colors bg-neutral-800" />
          </button>
        </div>
        <div className="relative hidden lg:block">
          <Image
            src={pro1}
            alt="Programming"
            className="w-full min-h-104 object-cover rounded-lg shadow-lg"
          />
          <div className="absolute top-0 -left-20 flex flex-col gap-3 items-end">
            <p className="text-xs px-3 py-2 rounded-sm bg-emerald-300 shadow-lg text-neutral-800 font-medium">
              Observe the Course
            </p>
            <p className="text-xs px-3 py-2 rounded-sm bg-emerald-300 shadow-lg text-neutral-800 font-medium">
              Track Progress
            </p>
            <p className="text-xs px-3 py-2 rounded-sm bg-emerald-300 shadow-lg text-neutral-800 font-medium">
              Solve Tasks
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
