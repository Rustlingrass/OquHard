import { MoveUpRight, Star, Zap, Users, Target } from "lucide-react";
import pro1 from "@/assets/images/pro4.jpg";
import Image from "next/image";

const advantages = [
  {
    icon: Zap,
    title: "Fast Learning Path",
    description:
      "Accelerate your skills with structured lessons, real-world problems, and instant feedback to master competitive programming concepts quickly.",
  },
  // {
  //   icon: Users,
  //   title: "Community Support",
  //   description:
  //     "Connect with thousands of learners, share solutions, participate in group contests, and get help from experienced mentors.",
  // },
  {
    icon: Target,
    title: "Contest-Ready Practice",
    description:
      "Solve problems from real coding competitions, practice under time constraints, and build strategies to excel in competitive programming contests.",
  },
];

export default function Info2() {
  return (
    <section className="w-full px-6 py-6 lg:py-10 font-geist">
      <div className="lg:grid lg:grid-cols-2 lg:gap-18 max-w-[1200px] mx-auto">
        <div className="hidden lg:block">
          <Image
            src={pro1}
            alt="Programming"
            className="w-full min-h-120 object-cover rounded-lg shadow-lg"
          />
        </div>
        <div className="flex flex-col gap-4 items-start">
          <p className="text-xs font-normal border-emerald-400 bg-transparent border-2 text-emerald-800 rounded-sm p-2 flex items-center gap-1.5">
            <Star className="size-4 fill-emerald-700 text-emerald-700" /> Our
            Easy Learning
          </p>
          <div className="space-y-4">
            <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900">
              Learn Anywhere with our Easy-to-Use Platform
            </h2>
            <p className="text-sm lg:font-medium lg:text-[0.92rem] text-neutral-600 text-pretty lg:max-w-7/8">
              Our course teaches competitive programming problem solving through
              algorithmic thinking.
            </p>
            <div className="space-y-4">
              {advantages.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    className="space-y-3 p-5 rounded-md bg-emerald-50/95 lg:p-6"
                    key={index}
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="p-2 rounded-sm bg-emerald-100 flex items-center justify-center">
                        <Icon className="size-5 text-emerald-500" />
                      </div>
                      <h3 className="text-sm font-medium text-neutral-800">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-xs lg:text-[0.81rem] leading-normal text-neutral-600">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
          {/* <button className="text-sm font-medium text-neutral-800 hover:bg-emerald-500 active:bg-emerald-500 transition-colors flex gap-2 items-center bg-emerald-400 px-4 py-1.5 pr-1.5 rounded-full mt-4 lg:mt-6 cursor-pointer">
            Learn More
            <MoveUpRight className="size-4 text-emerald-400 p-2 rounded-full shrink-0 box-content transition-colors bg-neutral-800" />
          </button> */}
        </div>
      </div>
    </section>
  );
}
