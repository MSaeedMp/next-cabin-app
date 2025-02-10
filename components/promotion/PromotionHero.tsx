"use client";
import VideoPlayer from "../Global/VideoPlayer";
import { cn } from "@/lib/utils";
import { MotionBottomToTop } from "../motion/MotionBottoToTop";

const PromotionHero = () => {
  const mainHeadingBaseStyle =
    "sm:text-7xl text-5xl font-bold font-archivo-narrow";
  return (
    <div className="relative overflow-hidden rounded-b-3xl">
      <VideoPlayer src="/promotion-hero-video.mp4" className="min-h-[640px]" />
      <div className="absolute inset-0 z-20 bg-slate-900 opacity-30"></div>
      <div className="absolute z-30 flex flex-col gap-10 bottom-24 sm:bottom-36 lg:bottom-60 left-1/2 -translate-x-1/2 text-center text-white w-full">
        <div className="flex flex-col sm:flex-row gap-2 items-center justify-center">
          <MotionBottomToTop>
            <h1
              className={cn(
                "bg-gradient-to-r from-secondary-300 to-primary-300 bg-clip-text text-transparent",
                mainHeadingBaseStyle
              )}
              style={{ textShadow: "0 0 20px rgba(0, 0, 0, .1)" }}
            >
              Save at least 15% on stays
            </h1>
          </MotionBottomToTop>
        </div>
        <MotionBottomToTop>
          <h3
            className="text-lg max-w-[300px] md:max-w-[560px] mx-auto tracking-tight font-[400] text-white"
            style={{ textShadow: "0 0 8px rgba(0, 0, 0, 1)" }}
          >
            Time out at the beginning of the year: Save at least 15% on
            accommodation worldwide with offers at the beginning of 2025.
          </h3>
        </MotionBottomToTop>
      </div>
    </div>
  );
};

export default PromotionHero;
