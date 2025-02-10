"use client";

import { useScrollState } from "../../hooks/useScrollState";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";
import { Suspense } from "react";
import LoadingScrollArea from "./LoadingScrollArea";
import ScrollButton from "./ScrollButton";

const ScrollBox = ({ children }: { children: React.ReactNode }) => {
  const { viewportRef, scrollPosition, maxScroll, updateScrollState } =
    useScrollState();

  const isRightEnd = scrollPosition >= maxScroll;
  const isLeftEnd = scrollPosition <= 0;

  const handleLeftScroll = () => {
    if (viewportRef.current) {
      viewportRef.current.scrollLeft -= 280;
      updateScrollState();
    }
  };

  const handleRightScroll = () => {
    if (viewportRef.current) {
      viewportRef.current.scrollLeft += 280;
      updateScrollState();
    }
  };

  return (
    <section>
      <div className="relative">
        <ScrollButton
          direction="left"
          onClick={handleLeftScroll}
          isVisible={!isLeftEnd}
        />
        <ScrollButton
          direction="right"
          onClick={handleRightScroll}
          isVisible={!isRightEnd}
        />
        <ScrollArea
          className="w-full whitespace-nowrap rounded-none"
          viewportRef={viewportRef}
        >
          <Suspense fallback={<LoadingScrollArea />}>{children}</Suspense>
          <ScrollBar orientation="horizontal" className="h-2 hidden" />
        </ScrollArea>
      </div>
    </section>
  );
};

export default ScrollBox;
