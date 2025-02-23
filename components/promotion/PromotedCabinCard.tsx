import Link from "next/link";

import { Card, CardContent } from "../ui/card";
import CabinCardImage from "../home/CabinCardImage";
import CabinCardMainHeadnig from "../home/CabinCardHeading";
import { Cabin } from "@prisma/client";
import EmptyCard from "../Global/EmptyCard";
import CabinCardRating from "../cabins/CabinCardRating";
import FavoriteToggleButton from "../favorite/FavoriteToggleButton";
import CabinCardPrice from "./CabinCardPrice";
import DiscountTag from "./DiscountTag";
import CabinCardLocation from "../home/CabinCardLocation";

const PromotedCabinCard = ({ cabin }: { cabin?: Cabin }) => {
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

  const discountPercentage = (((discount || 0) / regularPrice) * 100).toFixed(
    0
  );

  return (
    <article className="group relative ">
      <Link href={`/cabins/${cabinId}`}>
        <Card className="transform group-hover:shadow-xl transition-shadow duration-500 rounded-lg overflow-hidden p-0 border-none shadow-md">
          <CardContent className="p-0">
            <CabinCardImage image={image} alt={name} />
            <div className="p-2">
              <CabinCardMainHeadnig heading={name} />
              <CabinCardLocation
                center={[latitude, longitude]}
                country={country}
                city={city}
              />
              <CabinCardPrice
                regularPrice={regularPrice}
                discount={discount ?? 0}
              />
              <CabinCardRating cabinId={cabinId} view="home" />
            </div>
          </CardContent>
        </Card>
      </Link>
      <div className="absolute top-3 right-3 z-5">
        <FavoriteToggleButton cabinId={cabinId} />
      </div>
      <div className=" absolute top-3 left-0">
        <DiscountTag discountPercentage={discountPercentage} />
      </div>
    </article>
  );
};
export default PromotedCabinCard;
