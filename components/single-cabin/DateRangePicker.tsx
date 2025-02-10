"use client";

import { isPast, isSameDay, isWithinInterval } from "date-fns";
import { Calendar } from "../ui/calendar";
import { useRangePicker } from "@/hooks/useRangePicker";

type DateRange = { from?: Date; to?: Date };

const DateRangePicker = ({ reservedDates }: { reservedDates: Date[] }) => {
  const { dateRange, setDateRange } = useRangePicker();

  const displayRange =
    dateRange && !isDateReserved(dateRange, reservedDates)
      ? dateRange
      : undefined;

  return (
    <Calendar
      mode="range"
      defaultMonth={dateRange?.from || new Date()}
      selected={displayRange}
      onSelect={setDateRange}
      numberOfMonths={2}
      fromDate={new Date()}
      toYear={new Date().getFullYear() + 5}
      captionLayout="buttons"
      className="rounded-xl border shadow-lg border-stone-200 max-w-[280px] sm:max-w-[520px] p-6 sm:mx-0 mx-auto"
      disabled={(curDate) =>
        isPast(curDate) ||
        reservedDates.some((date) => isSameDay(date, curDate))
      }
    />
  );
};

export default DateRangePicker;

function isDateReserved(range: DateRange, datesArr: Date[]) {
  if (!range?.from || !range?.to) return false;

  return datesArr.some((date) =>
    isWithinInterval(date, { start: range.from as Date, end: range.to as Date })
  );
}
