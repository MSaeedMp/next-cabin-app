import DateRangePicker from "./DateRangePicker";
import CabinReservationDetails from "./CabinReservationDetails";
import ReservationForm from "./ReservationForm";
import ReservationSummary from "./ReservationSummary";
import { CabinFeature, CabinType } from "@prisma/client";
import { auth } from "@/lib/auth";
import {
  getReservedDatesByCabinId,
  isCabinReservedByUser,
} from "@/actions/reserve-action";
import PrimaryLinkButton from "../buttons/LinkButton";

type CabinReservationProps = {
  cabinId: string;
  maxCapacity: number;
  name: string;
  numRooms: number;
  discount: number | null;
  regularPrice: number;
  description: string;
  cabinType: CabinType[];
  features: CabinFeature[];
};

const CabinReservation = async ({
  cabinId,
  maxCapacity,
  regularPrice,
  name,
  numRooms,
  cabinType,
  discount,
  description,
  features,
}: CabinReservationProps) => {
  const session = await auth();
  const user = session?.user;
  const [isCabinReserved, reservedDates] = await Promise.all([
    isCabinReservedByUser(user?.userId, cabinId),
    getReservedDatesByCabinId(cabinId),
  ]);

  return (
    <div>
      <div className="mt-7 grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-x-10 gap-y-6 min-h-[430px]">
        <div className="space-y-4 row-start-2 lg:row-start-1">
          <h5 className="font-light text-primary">
            Please select your check in and check out dates
          </h5>
          <DateRangePicker reservedDates={reservedDates} />
        </div>
        <div className="w-full row-start-1 ">
          <CabinReservationDetails
            name={name}
            maxCapacity={maxCapacity}
            description={description}
            regularPrice={regularPrice}
            numRooms={numRooms}
            cabinType={cabinType}
            features={features}
          />
        </div>
      </div>
      <div className="flex flex-col sm:flex-row items-center gap-6 rounded-xl justify-between shadow-lg p-4 md:py-6 md:px-10 border border-stone-200 mt-6">
        {!isCabinReserved && (
          <ReservationSummary discount={discount} regularPrice={regularPrice} />
        )}
        <ReservationForm
          user={user}
          cabinId={cabinId}
          isCabinReserved={isCabinReserved}
          discount={discount}
          regularPrice={regularPrice}
        />
        {isCabinReserved && (
          <PrimaryLinkButton
            to="/account/reservations"
            text="Go to your Reservations"
            className="bg-green-600 hover:bg-green-700 "
          />
        )}
      </div>
    </div>
  );
};

export default CabinReservation;
