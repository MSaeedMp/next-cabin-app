"use client";

import { createContext, useState, ReactNode } from "react";
import { DateRange } from "react-day-picker";

type RangePickerContextType = {
  resetRange: () => void;
  dateRange: DateRange | undefined;
  setDateRange: React.Dispatch<React.SetStateAction<DateRange | undefined>>;
};

export const RangePickerContext = createContext<RangePickerContextType | null>(
  null
);

const initialDateRange = { from: undefined, to: undefined };

export const RangePickerProvider = ({ children }: { children: ReactNode }) => {
  const [dateRange, setDateRange] = useState<DateRange | undefined>(
    initialDateRange
  );

  const resetRange = () => setDateRange(initialDateRange);

  const value: RangePickerContextType = {
    resetRange,
    dateRange,
    setDateRange,
  };

  return (
    <RangePickerContext.Provider value={value}>
      {children}
    </RangePickerContext.Provider>
  );
};
