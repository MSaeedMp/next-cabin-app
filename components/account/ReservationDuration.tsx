import { formatDate } from "@/utils/helper";

const ReservationDuration = ({
  startDate,
  endDate,
}: {
  startDate: Date;
  endDate: Date;
}) => {
  return (
    <p className="text-sm">
      You have resered this cabin from{" "}
      <span className="text-primary font-semibold">
        {formatDate(startDate)}
      </span>{" "}
      to
      <span className="text-primary font-semibold">{formatDate(endDate)}.</span>
    </p>
  );
};
export default ReservationDuration;
