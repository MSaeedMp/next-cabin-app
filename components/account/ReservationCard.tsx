import Image from "next/image";
import ReservationID from "./ReservationID";
import TotalPayment from "./TotalPayment";
import ReservationDuration from "./ReservationDuration";
import FormContainer from "../form/FormContainer";
import CabinCardLinkHeading from "../cabins/CabinCardLinkHeading";
import CabinCardFeatures from "../cabins/CabinCardFeatures";
import CabinCardLocation from "../home/CabinCardLocation";
import { Card, CardContent } from "../ui/card";
import { deleteReserveAction } from "@/actions/reserve-action";
import { Cabin } from "@prisma/client";
import { SubmitButton } from "../buttons/SubmitButton";

type CustomCabinType = Cabin & {
  reservationId: string;
  startDate: Date;
  endDate: Date;
  totalPrice: number;
};

const ReservationCard = ({ cabin }: { cabin: CustomCabinType }) => {
  const {
    id: cabinId,
    name,
    features,
    country,
    city,
    image,
    reservationId,
    totalPrice,
    startDate,
    endDate,
    latitude,
    longitude,
  } = cabin;

  return (
    <Card className="p-4 shadow-none">
      <CardContent className="grid xl:grid-cols-[1.3fr_3fr] grid-cols-1 p-0 lg:mb-0 mb-6">
        <div className="relative w-full h-full min-h-[220px] rounde-md mb-4 xl:mb-0">
          <Image
            src={image}
            alt={name}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            fill
            priority
            className="object-cover rounded-md"
          />
        </div>
        <div className="flex flex-col xl:pl-4 pl-0 h-full lg:mt-0 mt-4">
          <div className="flex flex-col">
            <div className="flex justify-between gap-4">
              <CabinCardLinkHeading
                href={`/cabins/${cabinId}`}
                view="list"
                heading={name}
              />
              <ReservationID reservationId={reservationId} />
            </div>
            <CabinCardLocation
              country={country}
              city={city}
              center={[latitude.toNumber(), longitude.toNumber()]}
            />
          </div>
          <div className="flex justify-between gap-4 mt-10">
            <CabinCardFeatures features={features} />
            <TotalPayment totalPrice={totalPrice} />
          </div>
          <div className="my-5">
            <ReservationDuration startDate={startDate} endDate={endDate} />
          </div>
          <div className="flex justify-end mt-auto">
            <CancelReservation reservationId={reservationId} />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
export default ReservationCard;

function CancelReservation({ reservationId }: { reservationId: string }) {
  const deleteAction = deleteReserveAction.bind(null, { reservationId });
  return (
    <FormContainer action={deleteAction}>
      <SubmitButton
        className="bg-red-500 hover:bg-red-600"
        text="Cancel reservation"
        size="default"
      />
    </FormContainer>
  );
}
