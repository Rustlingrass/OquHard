import { courseSections } from "@/lib/constants";
import { cn } from "@/lib/utils";
import CourseInfoClientSection from "./CourseInfoClientSection";

function CourseInfoContentHeader() {
  return (
    <header className="space-y-2 px-[25px]">
      <h3 className="text-base lg:text-lg font-semibold text-neutral-800">
        Course content
      </h3>
      <div className="flex items-center flex-wrap justify-between gap-2">
        <div className="flex items-center gap-1 text-sm lg:text-[0.92rem] lg:font-normal lg:gap-2 font-normal text-neutral-500">
          <p className="">14 sections</p>
          <span className="text-neutral-400 text-sm lg:text-base">•</span>
          <p>80 lectures</p>
          <span className="text-neutral-400 text-sm lg:text-base">•</span>
          <p>18h total length</p>
        </div>
        <button className="text-sm lg:text-[0.92rem] cursor-pointer hover:text-emerald-600 active:text-emerald-600 transition-colors font-medium text-emerald-700 underline">
          Expand all sections
        </button>
      </div>
    </header>
  );
}

function CourseInfoContentList() {
  return (
    <div className="flex flex-col border-2 border-neutral-200 rounded-md mx-5.5">
      {courseSections.map((item, index) => (
        <CourseInfoClientSection
          className={index === courseSections.length - 1 ? "border-b-0" : ""}
          section={item}
          key={index}
        />
      ))}
    </div>
  );
}

export default function CourseInfoContent() {
  return (
    <section className="mt-6 space-y-6 lg:mt-12 font-geist">
      <CourseInfoContentHeader />
      <CourseInfoContentList />
    </section>
  );
}
