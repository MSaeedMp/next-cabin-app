"use client";

import Image from "next/image";
import Logo from "../header/Logo";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { authSliderImages } from "@/utils/constants";

const AuthSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % authSliderImages.length);
    }, 4500);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="relative w-full h-full">
      {authSliderImages.map((slide, index) => {
        const { image, alt, text } = slide;
        return (
          <div
            key={index}
            className={cn(
              "absolute inset-0 transition-opacity duration-1000",
              activeIndex === index ? "opacity-100" : "opacity-0"
            )}
          >
            <Image
              src={image}
              alt={alt}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover rounded-l-xl"
            />

            <div className="absolute inset-0 bg-primary opacity-50"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full">
              <div className="flex flex-col justify-center items-center gap-20">
                <Logo type="white" className="!w-[250px] !h-[100px]" />
                <h3
                  className="text-4xl text-center font-archivo-narrow leading-[1.4] tracking-tight capitalize text-white font-bold w-[65%] h-[200px]"
                  style={{ textShadow: "0 0 8px rgba(0, 0, 0, .4)" }}
                >
                  {text}
                </h3>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AuthSlider;
