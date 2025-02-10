import { RangePickerContext } from "@/contexts/RangePickerContext";
import { useContext } from "react";

export const useRangePicker = () => {
  const context = useContext(RangePickerContext);
  if (!context) {
    throw new Error("useRangePicker must be used within RangePickerProvider");
  }
  return context;
};
