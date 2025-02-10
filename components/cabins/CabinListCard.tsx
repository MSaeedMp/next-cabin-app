import Image from "next/image";
import PrimaryLinkButton from "../buttons/LinkButton";
import FavoriteToggleButton from "../favorite/FavoriteToggleButton";
import { Cabin } from "@prisma/client";
import { Card, CardContent } from "../ui/card";
import CabinCardRating from "./CabinCardRating";
import CabinCardFeatures from "./CabinCardFeatures";
import CabinCardDetails from "./CabinCardDetails";
import CabinCardLinkHeading from "./CabinCardLinkHeading";
import CabinCardLocation from "../home/CabinCardLocation";

const CabinListCard = ({ cabin }: { cabin: Cabin }) => {
  const {
    id: cabinId,
    maxCapacity,
    regularPrice,
    discount,
    name,
    features,
    country,
    city,
    image,
    numRooms,
    longitude,
    latitude,
  } = cabin;
  const price = Number(regularPrice) - (Number(discount) ?? 0);

  return (
    <Card className="p-4 shadow-none">
      <CardContent className="grid xl:grid-cols-[1.3fr_3fr] grid-cols-1 p-0">
        <div className="relative w-full h-64 rounde-md mb-4 xl:mb-0">
          <Image
            src={image}
            alt={name}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            fill
            priority
            className="object-cover rounded-md"
          />
          <div className="absolute top-3 left-3 z-5">
            <FavoriteToggleButton cabinId={cabinId} />
          </div>
        </div>
        <div className="flex flex-col xl:pl-4 pl-0 h-full">
          <div className="flex flex-col">
            <div className="flex justify-between gap-4">
              <CabinCardLinkHeading
                href={`/cabins/${cabinId}`}
                view="list"
                heading={name}
              />
              <CabinCardRating cabinId={cabinId} />
            </div>
            <CabinCardLocation
              country={country}
              city={city}
              center={[latitude.toNumber(), longitude.toNumber()]}
            />
          </div>
          <div className="flex justify-between gap-4 mt-10">
            <CabinCardFeatures features={features} />
            <CabinCardDetails
              view="list"
              numRooms={numRooms}
              capacity={maxCapacity}
              price={price}
            />
          </div>
          <div className="flex justify-end mt-auto">
            <PrimaryLinkButton to={`cabins/${cabinId}`} text="Go to cabin" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
export default CabinListCard;
