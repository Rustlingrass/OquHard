"use client";
import { modules } from "@/lib/constants";
import { cn, getUniqueByAttribute } from "@/lib/utils";
import { AlarmClock, Clock, Printer, Star, Timer } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { title } from "process";
import { useMemo, useState } from "react";

const unique = getUniqueByAttribute(modules, "category");

export default function Modules() {
  const [filters, setFilters] = useState(["all"]);
  const filtered = useMemo(() => {
    return modules.filter((item) => {
      if (filters.includes("all")) {
        return true;
      }
      return filters.includes(item.category.toLowerCase());
    });
  }, [filters]);

  return (
    <section className="px-6 lg:mt-6">
      <div className="flex flex-col gap-8 lg:gap-10 max-w-[1210px] lg:mx-auto">
        <header className="space-y-2 text-center">
          <h2 className="text-2xl lg:text-4xl font-bold text-emerald-600">
            Explore Our Popular Categories
          </h2>
          <p className="text-sm lg:text-base font-medium text-neutral-600">
            Choose from the most in-demand learning modules to grow faster
          </p>
        </header>
        <main className="space-y-8 lg:space-y-16">
          <div className="flex flex-wrap justify-center gap-2 lg:gap-3">
            <button
              className={cn(
                "rounded-sm px-4 py-2 bg-neutral-200 hover:bg-neutral-300/80 active:bg-neutral-300/80 cursor-pointer transition-colors",
                filters.includes("all") &&
                  "bg-emerald-500 hover:bg-emerald-600/80 active:bg-neutral-600/80"
              )}
              onClick={() =>
                setFilters((prev) => {
                  const sliced = [...prev];
                  const cond = prev.includes("all");
                  return cond && prev.length > 1
                    ? sliced.filter((el) => el !== "all")
                    : [...sliced, "all"];
                })
              }
            >
              <h3
                className={cn(
                  "text-xs lg:text-sm font-medium text-neutral-800 transition-colors",
                  filters.includes("all") && "text-neutral-50"
                )}
              >
                All
              </h3>
            </button>
            {unique.map((item, index) => {
              return (
                <button
                  key={index}
                  className={cn(
                    "rounded-sm px-4 py-2 bg-neutral-100 hover:bg-neutral-200/70 active:bg-neutral-300/80 cursor-pointer transition-colors",
                    filters.includes(item.category.toLowerCase()) &&
                      "bg-emerald-500 hover:bg-emerald-600/80 active:bg-neutral-600/80"
                  )}
                  onClick={() =>
                    setFilters((prev) => {
                      const sliced = [...prev];
                      const cond = prev.includes(item.category.toLowerCase());
                      if (prev.length === 1 && cond) {
                        return ["all"];
                      }
                      return cond
                        ? sliced.filter(
                            (el) => el !== item.category.toLowerCase()
                          )
                        : [...sliced, item.category.toLowerCase()];
                    })
                  }
                >
                  <h3
                    className={cn(
                      "text-xs lg:text-sm font-medium text-neutral-800 transition-colors",
                      filters.includes(item.category.toLowerCase()) &&
                        "text-neutral-50"
                    )}
                  >
                    {item.category}
                  </h3>
                </button>
              );
            })}
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-11">
            {filtered.map((item, index) => (
              <div
                key={index}
                className="p-6 lg:p-6 rounded-xl lg:rounded-3xl transition-colors hover:bg-emerald-50 hover:border-emerald-200 bg-white border-2 border-neutral-200 flex flex-col gap-5 lg:gap-6"
              >
                <Image
                  src={item.img}
                  alt={item.title}
                  className="w-full object-cover h-44 lg:h-50 rounded-md lg:rounded-lg"
                />
                <div className="space-y-5 lg:space-y-6">
                  <div className="flex justify-between items-center">
                    <h2 className="text-sm lg:text-base font-medium text-neutral-800">
                      {item.title}
                    </h2>
                    <div className="flex items-center gap-1.5">
                      <Star className="size-4.5 fill-yellow-400 text-yellow-400 shrink-0" />
                      <p className="text-xs font-normal text-neutral-600">
                        4.9
                      </p>
                    </div>
                  </div>
                  <p className="text-xs lg:text-sm font-normal text-neutral-600">
                    {item.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <div className="flex gap-2 items-center">
                      <div className="flex items-center gap-1">
                        <AlarmClock className="size-4 text-neutral-600" />{" "}
                        <p className="text-xs font-normal text-neutral-600">
                          {item.hours} {" hr"}
                        </p>
                      </div>
                      <div className="flex items-center gap-1">
                        <Printer className="size-4 text-neutral-600" />{" "}
                        <p className="text-xs font-normal text-neutral-600">
                          {item.lectures}
                          {" lec"}
                        </p>
                      </div>
                    </div>
                    <Link
                      href={"#"}
                      className="px-4 py-2 rounded-sm border-2 border-emerald-400 text-emerald-700 bg-transparent text-sm font-medium hover:border-emerald-500 hover:bg-emerald-500 hover:text-white active:border-emerald-500 active:bg-emerald-500 active:text-white transition-colors"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </section>
  );
}
