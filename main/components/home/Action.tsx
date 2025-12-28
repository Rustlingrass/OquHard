import { MoveUpRight } from "lucide-react";
import { actionPeople } from "@/lib/constants";
import Image from "next/image";
import { cn } from "@/lib/utils";

export default function Action() {
  return (
    <section className="w-full px-6 pb-6 lg:pt-8 lg:pb-12 font-geist">
      <div className="grid grid-cols-1 lg:grid-cols-[0.23fr_0.54fr_0.23fr] max-h-130 max-w-[1200px] mx-auto p-7 lg:p-13 lg:rounded-3xl lg:gap-12 rounded-2xl bg-emerald-200/72">
        <div className="hidden lg:flex lg:flex-col lg:items-start lg:gap-0">
          {actionPeople.slice(0, 5).map((item, index) => {
            const even = index % 2 === 0;
            const rel = index === 1 ? 6 : index * 5;

            return (
              <Image
                src={item}
                key={index}
                alt="img"
                className={cn(
                  even && `lg:self-end`,
                  "size-25 rounded-lg object-cover",
                  `relative -top-${rel}`,
                  index === 2 && "-top-10",
                  index === 4 && "-top-18"
                )}
              />
            );
          })}
        </div>
        <main className="flex flex-col gap-12 lg:gap-16 items-start lg:mt-10 lg:items-center">
          <div className="space-y-2 lg:text-center lg:space-y-6">
            <h2 className="text-2xl lg:text-6xl font-bold text-neutral-800">
              Ready to Elevate Your Learning?
            </h2>
            <p className="text-sm lg:text-lg text-pretty font-normal text-neutral-600">
              Join thousands of students already transforming their programming
              skills and careers with OquEasy. Start your journey today and take
              the first step toward your future.
            </p>
          </div>
          <button className="text-xs lg:text-base font-medium text-neutral-800 hover:bg-emerald-500 active:bg-emerald-500 transition-colors flex gap-2.5 items-center bg-emerald-400 px-4 lg:px-5.5 lg:py-2.5 lg:pr-2.5 py-1.5 pr-1.5 rounded-full cursor-pointer font-geist">
            Start Learning Now
            <MoveUpRight className="size-3.5 lg:size-4 text-emerald-400 p-2 rounded-full shrink-0 box-content transition-colors bg-neutral-800" />
          </button>
        </main>
        <div className="hidden lg:flex lg:flex-col lg:items-end lg:gap-0">
          {actionPeople.slice(5, 10).map((item, index) => {
            const even = index % 2 === 0;
            const rel = index === 1 ? 6 : index * 5;

            return (
              <Image
                src={item}
                key={index}
                alt="img"
                className={cn(
                  even && `lg:self-start`,
                  "size-25 rounded-lg object-cover",
                  `relative -top-${rel}`,
                  index === 2 && "-top-10",
                  index === 4 && "-top-18"
                )}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
