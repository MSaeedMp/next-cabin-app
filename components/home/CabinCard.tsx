import Link from "next/link";

import { Card, CardContent } from "../ui/card";
import CabinCardImage from "./CabinCardImage";
import { Cabin } from "@prisma/client";
import EmptyCard from "../Global/EmptyCard";
import FavoriteToggleButton from "../favorite/FavoriteToggleButton";
import CabinCardRating from "../cabins/CabinCardRating";
import CabinCardPrice from "../promotion/CabinCardPrice";
import CabinCardLocation from "./CabinCardLocation";
import CabinCardHeading from "./CabinCardHeading";

const CabinCard = ({
  includePrice = false,
  cabin,
}: {
  includePrice?: boolean;
  cabin?: Cabin;
}) => {
  if (!cabin) return <EmptyCard />;
  const {
    id: cabinId,
    image,
    name,
    city,
    country,
    latitude,
    longitude,
    regularPrice,
    discount,
  } = cabin;

  return (
    <article className="group relative ">
      <Link href={`/cabins/${cabinId}`}>
        <Card className="transform group-hover:shadow-xl transition-shadow duration-500 rounded-lg overflow-hidden p-0 border-none shadow-md">
          <CardContent className="p-0">
            <CabinCardImage image={image} alt={name} />
            <div className="p-2">
              <CabinCardHeading heading={name} />
              <CabinCardLocation
                center={[latitude, longitude]}
                country={country}
                city={city}
              />
              {includePrice && (
                <CabinCardPrice
                  regularPrice={regularPrice}
                  discount={discount ?? 0}
                />
              )}
              <CabinCardRating cabinId={cabinId} view="home" />
            </div>
          </CardContent>
        </Card>
      </Link>
      <div className="absolute top-3 right-3 z-5">
        <FavoriteToggleButton cabinId={cabinId} />
      </div>
    </article>
  );
};
export default CabinCard;
