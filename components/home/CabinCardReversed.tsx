import Link from "next/link";
import CabinCardImage from "./CabinCardImage";
import EmptyCard from "../Global/EmptyCard";
import FavoriteToggleButton from "../favorite/FavoriteToggleButton";
import CabinCardRating from "../cabins/CabinCardRating";
import { Cabin } from "@prisma/client";
import { Card, CardContent } from "../ui/card";
import CabinCardHeading from "./CabinCardHeading";
import CabinCardLocation from "./CabinCardLocation";

const CabinCardReversed = ({ cabin }: { cabin?: Cabin }) => {
  if (!cabin) return <EmptyCard />;
  const {
    id: cabinId,
    image,
    name,
    city,
    country,
    latitude,
    longitude,
  } = cabin;

  return (
    <article className="group relative w-44 sm:w-64">
      <Link href={`/cabins/${cabinId}`}>
        <Card className="transform group-hover:shadow-xl transition-shadow duration-500 rounded-lg overflow-hidden p-0 border-none shadow-none">
          <CardContent className="p-0">
            <div className="p-2">
              <CabinCardHeading heading={name} />
              <CabinCardLocation
                center={[latitude, longitude]}
                country={country}
                city={city}
              />
              <CabinCardRating cabinId={cabinId} view="home" />
            </div>
            <CabinCardImage image={image} alt={name} reversed={true} />
          </CardContent>
        </Card>
      </Link>
      <div className="absolute bottom-3 right-3 z-5">
        <FavoriteToggleButton cabinId={cabinId} />
      </div>
    </article>
  );
};
export default CabinCardReversed;
