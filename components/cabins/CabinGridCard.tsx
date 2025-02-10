import PrimaryLinkButton from "../buttons/LinkButton";
import Image from "next/image";
import FavoriteToggleButton from "../favorite/FavoriteToggleButton";
import CabinCardHeading from "./CabinCardLinkHeading";
import CabinCardRating from "./CabinCardRating";
import CabinCardFeatures from "./CabinCardFeatures";
import CabinCardDetails from "./CabinCardDetails";
import { Card, CardContent } from "../ui/card";
import { Cabin } from "@prisma/client";
import CabinCardLocation from "../home/CabinCardLocation";

const CabinGridCard = ({ cabin }: { cabin: Cabin }) => {
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
    <Card className="transform group-hover:shadow-xl transition-shadow duration-500 rounded-lg p-0 shadow-md">
      <CardContent className="p-0">
        <div className="relative w-full h-64 rounde-t-lg mb-4 xl:mb-0">
          <Image
            src={image}
            alt={name}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            fill
            priority
            className="object-cover rounded-t-lg"
          />
          <div className="absolute top-3 right-3 z-5">
            <FavoriteToggleButton cabinId={cabinId} />
          </div>
        </div>
        <div className="p-2">
          <div className="flex justify-between">
            <div>
              <CabinCardHeading
                href={`/cabins/${cabinId}`}
                view="grid"
                heading={name}
              />
              <CabinCardLocation
                country={country}
                city={city}
                center={[latitude.toNumber(), longitude.toNumber()]}
              />
            </div>
            <CabinCardRating view="grid" cabinId={cabinId} />
          </div>
          <div className="mt-4 flex flex-col gap-4">
            <CabinCardFeatures features={features} />
            <CabinCardDetails
              view="grid"
              numRooms={numRooms}
              capacity={maxCapacity}
              price={price}
            />
            <div className="flex justify-end py-1">
              <PrimaryLinkButton to={`/cabins/${cabinId}`} text="Go to cabin" />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
export default CabinGridCard;
