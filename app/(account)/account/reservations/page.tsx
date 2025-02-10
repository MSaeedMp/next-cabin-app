import ReservationCardList from "@/components/account/ReservationCardList";
import SectionSubTitle from "@/components/Global/SectionSubTitle";
import SectionTitle from "@/components/Global/SectionTitle";

const ReservationPage = () => {
  return (
    <>
      <SectionTitle className="mt-10 mb-4">Your Bookings</SectionTitle>
      <SectionSubTitle>
        The following list shows all your bookings. You can cancel or delete the
        passed reservations.
      </SectionSubTitle>
      <ReservationCardList />
    </>
  );
};
export default ReservationPage;
