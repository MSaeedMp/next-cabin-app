"use client";

import FormContainer from "../form/FormContainer";
import FormInput from "../form/FormInput";
import { createReservation } from "@/actions/reserve-action";
import { useRangePicker } from "@/hooks/useRangePicker";
import PrimaryLinkButton from "../buttons/LinkButton";
import { AuthUserType } from "@/utils/types";
import { useReservationCalc } from "@/hooks/useReservationCalc";
import { SubmitButton } from "../buttons/SubmitButton";

const ReservationForm = ({
  user,
  cabinId,
  isCabinReserved,
  discount,
  regularPrice,
}: {
  user: AuthUserType | undefined;
  cabinId: string;
  isCabinReserved: boolean;
  discount: number | null;
  regularPrice: number;
}) => {
  const { dateRange } = useRangePicker();
  const { totalPrice, startDate, endDate } = useReservationCalc(
    dateRange,
    discount,
    regularPrice
  );

  const startDateString = startDate ? startDate.toISOString() : "";
  const endDateString = endDate ? endDate.toISOString() : "";

  return (
    <FormContainer action={createReservation} schemaName="reservationSchema">
      <FormInput
        name="startDate"
        type="text"
        value={startDateString}
        hide={true}
      />
      <FormInput name="endDate" type="text" value={endDateString} hide={true} />
      <FormInput name="userId" type="text" value={user?.userId} hide={true} />
      <FormInput name="cabinId" type="text" value={cabinId} hide={true} />
      <FormInput name="status" type="text" value={"UNCONFIRMED"} hide={true} />
      <FormInput
        name="totalPrice"
        type="number"
        value={totalPrice}
        hide={true}
      />
      {isCabinReserved && (
        <p className="text-center text-green-600 font-medium bg-green-50 px-4 py-2 rounded-xl">
          You have reserved this cabin.
        </p>
      )}
      {!isCabinReserved && user && startDate && endDate && (
        <SubmitButton text="Reserve now" />
      )}
      {!isCabinReserved && !user && (
        <PrimaryLinkButton text="Login to Reserve" to="/api/auth/signin" />
      )}
      {!isCabinReserved && user && (!startDate || !endDate) && (
        <p className="text-center text-primary font-medium bg-blue-50 px-4 py-2 rounded-xl">
          Please select your arrival and depature dates from the calendar.
        </p>
      )}
    </FormContainer>
  );
};

export default ReservationForm;
