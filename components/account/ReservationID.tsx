const ReservationID = ({ reservationId }: { reservationId: string }) => {
  return (
    <div className="flex flex-col ">
      <span className="text-sm text-primary font-semibold text-end">
        Reservation ID
      </span>
      <span className="text-xs text-muted-foreground text-end">
        {reservationId}
      </span>
    </div>
  );
};
export default ReservationID;
