import ReservationCard from "./ReservationCard";
import { auth } from "@/lib/auth";
import { fetchAllReservationsByUser } from "@/actions/reserve-action";

const ReservationCardList = async () => {
  const session = await auth();
  const userId = session?.user.userId;
  if (!userId) throw new Error("You are not logged in");

  const allReservations = await fetchAllReservationsByUser(userId);

  const allReservedCabins = allReservations.map((reservation) => {
    return {
      ...reservation.cabin,
      reservationId: reservation.id,
      startDate: reservation.startDate,
      endDate: reservation.endDate,
      totalPrice: Number(reservation.totalPrice),
    };
  });

  return (
    <div className="space-y-4 mt-6">
      {allReservedCabins.map((cabin) => (
        <ReservationCard key={cabin.id} cabin={cabin} />
      ))}
    </div>
  );
};
export default ReservationCardList;
