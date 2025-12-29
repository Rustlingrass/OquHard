import Image from "next/image";
import person1 from "@/assets/images/boy1.jpg";
import person2 from "@/assets/images/boy2.jpg";
import person3 from "@/assets/images/girl2.jpg";
import posing from "@/assets/images/posing2(1).jpg";
import Link from "next/link";
import { MoveUpRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="w-full px-6 py-2 lg:py-9">
      <div className="lg:grid lg:grid-cols-[0.55fr_0.5fr] lg:items-center lg:gap-8 max-w-[1200px] lg:mx-auto lg:pl-4">
        <div className="flex flex-col gap-4 items-stretch">
          {/* <div className="w-full flex justify-center">
            <Image
            src={"/studentsbooks.png"}
            width={600}
            height={600}
            className="w-full max-w-[320px] object-cover"
            alt="students"
            />
            </div> */}
          <div className="flex flex-col ml-0.5">
            <div className="flex items-center">
              <Image
                src={person1}
                alt="person1"
                className="size-7.5 lg:size-8 rounded-full border border-neutral-300 object-cover"
              />
              <Image
                src={person2}
                alt="person1"
                className="size-7.5 lg:size-8 rounded-full border border-neutral-300 relative -left-2 object-cover"
              />
              <Image
                src={person3}
                alt="person1"
                className="size-7.5 lg:size-8 rounded-full border border-neutral-300 relative -left-4 object-cover"
              />
              <h3 className="text-3xl font-bold text-emerald-600 relative -left-1">
                1K+
              </h3>
            </div>
            <p className="text-sm font-medium text-neutral-500">
              Trusted by learners
            </p>
          </div>
          <div className="flex justify-center items-center flex-col gap-10 lg:gap-12">
            <div className="flex justify-start items-start flex-col gap-4">
              <h1 className="text-4xl lg:text-6xl lg:leading-[1.05] lg:tracking-tight lg:font-semibold font-geist font-semibold font-mont text-pretty leading-[1.1] text-neutral-800">
                Learn Competitive{" "}
                <span className="custom-slant text-emerald-600/85">
                  Programming
                </span>{" "}
                & Start Solving
              </h1>
              <p className="text-sm lg:text-base text-neutral-500 font-medium leading-relaxed max-w-120">
                Изучайте структуры данных и алгоритмы для эффективного решения
                олимпиадных и спортивных задач.
              </p>
            </div>
            <div className="self-start flex gap-4 lg:gap-6 items-center">
              <Link
                href={"/login"}
                className="text-white flex items-center gap-1.5 text-sm lg:text-base bg-emerald-500 rounded-sm lg:px-7 lg:py-3 lg:pr-5 px-6 pr-4 py-2.5 font-medium hover:bg-white active:bg-white border-[1.5px] border-emerald-500 hover:text-emerald-600 active:text-emerald-600 transition-colors"
              >
                Browse Course
                <MoveUpRight className="size-4.5 lg:size-5 transition-colors" />
              </Link>
              <Link
                href={"/login"}
                className="text-emerald-600 text-sm bg-white rounded-sm lg:text-base lg:px-8 lg:py-3 px-6 py-2.5 font-medium hover:bg-emerald-500 active:bg-emerald-500 border-[1.5px] border-emerald-400 hover:border-emerald-500 active:border-emerald-500 hover:text-white active:text-white transition-colors"
              >
                Start Now
              </Link>
            </div>
          </div>
          <div className="flex justify-start items-center gap-8 lg:gap-14 mt-4 lg:mt-8">
            <div className="space-y-1 lg:space-y-2">
              <h2 className="text-3xl lg:text-4xl font-semibold text-gray-800">
                20+
              </h2>
              <p className="text-sm lg:text-base font-medium text-neutral-500">
                Total Modules
              </p>
            </div>
            <div className="space-y-1 lg:space-y-2">
              <h2 className="text-3xl lg:text-4xl font-semibold text-gray-800">
                100+
              </h2>
              <p className="text-sm lg:text-base font-medium text-neutral-500">
                Total Questions
              </p>
            </div>
            <div className="space-y-1 lg:space-y-2">
              <h2 className="text-3xl lg:text-4xl font-semibold text-gray-800">
                35+
              </h2>
              <p className="text-sm lg:text-base font-medium text-neutral-500">
                Hours Study
              </p>
            </div>
          </div>
        </div>
        <Image
          src={posing}
          alt="girl posing"
          className="flex-1/2 lg:scale-115 h-120 lg:mt-6 lg:ml-4 hidden lg:block object-contain"
        />
      </div>
    </section>
  );
}
