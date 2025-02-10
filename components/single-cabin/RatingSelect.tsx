"use client";

import { useFormContext } from "react-hook-form";
import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useEffect } from "react";
import { cn } from "@/lib/utils";

const RatingSelect = ({
  name,
  label,
  className,
}: {
  name: string;
  label?: string;
  className?: string;
}) => {
  const ratingNumbers = Array.from({ length: 5 }, (_, i) => {
    const value = i + 1;
    return value.toString();
  }).reverse();
  const { setValue } = useFormContext();

  useEffect(() => {
    setValue(name, ratingNumbers[0]);
  }, [name, setValue, ratingNumbers]);

  return (
    <div className={cn("mb-2 max-w-[100px]", className)}>
      <Label htmlFor={name} className="capitalize !text-sm md:!text-base">
        {label || name}
      </Label>
      <Select
        defaultValue={ratingNumbers[0]}
        onValueChange={(value) => setValue(name, value)}
      >
        <SelectTrigger className="rounded-xl py-5">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {ratingNumbers.map((number) => {
            return (
              <SelectItem key={number} value={number}>
                {number}
              </SelectItem>
            );
          })}
        </SelectContent>
      </Select>
    </div>
  );
};
export default RatingSelect;
