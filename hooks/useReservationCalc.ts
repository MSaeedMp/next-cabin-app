import { differenceInDays } from "date-fns";
import { DateRange } from "react-day-picker";

export const useReservationCalc = (
  dateRange: DateRange | undefined,
  discount: number | null,
  regularPrice: number
) => {
  const startDate = dateRange?.from;
  const endDate = dateRange?.to;

  const numNights =
    startDate && endDate ? differenceInDays(endDate, startDate) : 0;

  const discountValue = discount ?? 0;

  const totalPrice = discountValue
    ? numNights * (regularPrice - discountValue)
    : numNights * regularPrice;

  return { totalPrice, startDate, endDate, numNights, discountValue };
};
