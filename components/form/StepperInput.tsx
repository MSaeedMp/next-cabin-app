"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FaMinus, FaPlus } from "react-icons/fa";
import { cn } from "@/lib/utils";
import { Label } from "../ui/label";
import { useState, useEffect } from "react";

type StepperInputProps = {
  labelText?: string;
  defaultValue: number;
  min: number;
  max: number;
  onChange: (value: number) => void;
};

const StepperInput = ({
  onChange,
  labelText,
  defaultValue,
  min,
  max,
}: StepperInputProps) => {
  const [step, setStep] = useState(defaultValue);

  useEffect(() => {
    onChange(step);
  }, [step, onChange]);

  const handleInc = () => {
    setStep((prev) => (prev < max ? prev + 1 : prev));
  };

  const handleDec = () => {
    setStep((prev) => (prev > min ? prev - 1 : prev));
  };

  const buttonStyle = "bg-white hover:bg-accent shadow-none py-5";
  const iconStyle = "text-primary !w-3 !h-3";
  return (
    <div className="flex items-center justify-between">
      <Label>{labelText || ""}</Label>
      <div className="flex items-center border border-accent rounded-md">
        <Button
          onClick={handleDec}
          className={cn(buttonStyle, "rounded-l-md rounded-r-none")}
        >
          <FaMinus className={iconStyle} />
        </Button>
        <Input
          type="number"
          className="border-none w-14 focus:border-none focus:outline-none focus:ring-0 shadow-none focus-visible:ring-0 text-center"
          min={min}
          max={max}
          value={step}
          readOnly
        />
        <Button
          onClick={handleInc}
          className={cn(buttonStyle, "rounded-r-md rounded-l-none")}
        >
          <FaPlus className={iconStyle} />
        </Button>
      </div>
    </div>
  );
};

export default StepperInput;
