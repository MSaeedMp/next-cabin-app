"use client";

import { useRangePicker } from "@/hooks/useRangePicker";
import { useReservationCalc } from "@/hooks/useReservationCalc";

type ReservationSummaryProps = {
  discount: number | null;
  regularPrice: number;
};

const ReservationSummary = ({
  regularPrice,
  discount,
}: ReservationSummaryProps) => {
  const { dateRange } = useRangePicker();
  const { discountValue, numNights, totalPrice } = useReservationCalc(
    dateRange,
    discount,
    regularPrice
  );

  return (
    <div className="flex items-center min-h-16">
      <p className="flex gap-2 items-baseline">
        {discountValue > 0 ? (
          <>
            <span className="md:text-2xl text-xl font-bold">
              ${regularPrice - discountValue}
            </span>
            <span className="line-through font-semibold text-red-500">
              ${regularPrice}
            </span>
          </>
        ) : (
          <span className="sm:text-2xl text-base">${regularPrice}</span>
        )}
        <span className="text-sm">/night</span>
      </p>
      {numNights ? (
        <>
          <p className="bg-accent-600 px-3 py-2 text-lg md:text-2xl">
            <span>&times;</span> <span>{numNights}</span>
          </p>
          <p className="space-x-2 flex items-center">
            <span className="text-base md:text-xl font-bold uppercase text-primary">
              Total
            </span>{" "}
            <span className="md:text-2xl text-lg font-semibold">
              ${totalPrice}
            </span>
          </p>
        </>
      ) : null}
    </div>
  );
};
export default ReservationSummary;
