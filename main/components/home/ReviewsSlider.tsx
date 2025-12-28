"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import { MoveLeft, MoveRight, Star } from "lucide-react";
import { reviews } from "@/lib/constants";
import Image from "next/image";
import { useIsMobile } from "@/lib/useIsMobile";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export default function ReviewsSlider() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const isMobile = useIsMobile();

  useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap() + 1);
    console.log(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <section className="px-6 font-geist">
      <div className="max-w-[1240px] lg:mx-auto space-y-4 lg:space-y-12">
        <header className="flex flex-col gap-3 items-start lg:items-center">
          <h5 className="px-2 py-1.5 rounded-md bg-emerald-200 text-xs font-medium text-emerald-800 flex items-center gap-1.5">
            <Star className="size-4 lg:size-4.5 text-emerald-700 fill-emerald-700" />
            Our Reviews
          </h5>
          <h2 className="text-2xl lg:text-4xl font-bold text-neutral-800">
            What Our Learners Say
          </h2>
        </header>
        <main>
          <Carousel
            opts={{
              align: "start",
            }}
            setApi={setApi}
            className="w-full"
          >
            <CarouselContent className="p-2 py-4 lg:py-6.5">
              {reviews.map((item, index) => {
                return current === index || isMobile ? (
                  <CarouselItem
                    key={index}
                    className={cn("basis-full lg:basis-[47%] pl-4 lg:pl-14")}
                  >
                    <div className="rounded-lg w-full">
                      <div className="space-y-6 p-6 lg:p-8 lg:scale-115 lg:rounded-3xl lg:min-h-62 rounded-lg bg-white border-2 border-neutral-200 shadow-sm lg:shadow-md lg:w-full h-full">
                        <div className="flex flex-row gap-3 items-center">
                          <Image
                            src={item.img}
                            className="size-13 object-cover rounded-full"
                            alt="avatar"
                          />
                          <div className="text-start">
                            <h4 className="text-base font-medium text-neutral-800">
                              {item.name}
                            </h4>
                            <p className="text-xs font-normal text-neutral-600">
                              {item.occupation}
                            </p>
                          </div>
                          <div className="flex gap-0.5 items-center ml-auto">
                            {Array.from({ length: item.rating }).map(
                              (_, ind) => (
                                <Star
                                  key={ind}
                                  className="text-yellow-400 fill-yellow-400 size-4 lg:size-5"
                                />
                              )
                            )}
                          </div>
                        </div>
                        <div className="flex flex-col gap-4 items-center mb-2">
                          <p className="text-sm font-normal text-neutral-600">
                            {item.review}
                          </p>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ) : (
                  <CarouselItem key={index} className="lg:basis-[27%] lg:pl-14">
                    <Image
                      src={item.img}
                      alt="avatar"
                      className="w-full h-60 rounded-lg lg:scale-90 lg:rounded-2xl object-cover"
                    />
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <div className="flex items-center justify-center gap-6 lg:gap-8 w-full mt-6 lg:mt-10">
              <CarouselPrevious className="static scale-110 lg:scale-115" />
              <CarouselNext className="static scale-110 lg:scale-115" />
            </div>
          </Carousel>
        </main>
      </div>
    </section>
  );
}
