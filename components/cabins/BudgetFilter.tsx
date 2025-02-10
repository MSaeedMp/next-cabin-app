"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";
import { Slider } from "../ui/slider";
import { formatCurrency } from "@/utils/helper";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

const lowerBound = 50;
const upperBound = 1000;
const step = 50;

function BudgetFilter() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const initialMinValue = Number(searchParams.get("minPrice")) || lowerBound;
  const initialMaxValue = Number(searchParams.get("maxPrice")) || upperBound;

  const [budgetInterval, setBudgetInterval] = useState([
    initialMinValue,
    initialMaxValue,
  ]);

  // Debounced function to update the URL
  const updateIntervalUrl = useDebouncedCallback((newInterval: number[]) => {
    const [minValue, maxValue] = newInterval;
    const newParams = new URLSearchParams(searchParams.toString());

    if (minValue > lowerBound) {
      newParams.set("minPrice", minValue.toString());
    } else {
      newParams.delete("minPrice");
    }

    if (maxValue < upperBound) {
      newParams.set("maxPrice", maxValue.toString());
    } else {
      newParams.delete("maxPrice");
    }

    router.replace(`${pathname}?${newParams.toString()}`, { scroll: false });
  }, 500);

  const handleIntervalChange = (newInterval: number[]) => {
    setBudgetInterval(newInterval);
    updateIntervalUrl(newInterval);
  };

  return (
    <div className="flex flex-col gap-6 items-center p-4 w-full max-w-80">
      <label className="text-lg font-bold leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
        {formatCurrency(budgetInterval[0])} -{" "}
        {formatCurrency(budgetInterval[1])}
      </label>
      <Slider
        defaultValue={[initialMinValue, initialMaxValue]}
        minStepsBetweenThumbs={1}
        max={upperBound}
        min={lowerBound}
        step={step}
        onValueChange={handleIntervalChange}
        className={cn("w-full bg-primary rounded-sm")}
      />
    </div>
  );
}

export default BudgetFilter;
