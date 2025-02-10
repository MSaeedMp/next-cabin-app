import { FaLocationDot } from "react-icons/fa6";
import FavoriteToggleButton from "../favorite/FavoriteToggleButton";
import ShareButton from "./ShareButton";

type SingleCabinHeadingProps = {
  name: string;
  city: string;
  country: string;
  cabinId: string;
};

const SingleCabinHeading = ({
  name,
  city,
  country,
  cabinId,
}: SingleCabinHeadingProps) => {
  return (
    <div className="flex justify-between">
      <div className="space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold font-archivo-narrow">
          {name}
        </h1>
        <div className="flex items-center gap-4">
          <FaLocationDot className="text-primary" />
          <h3 className="text-base text-muted-foreground font-archivo-narrow">{`${city}, ${country}`}</h3>
        </div>
      </div>
      <div className="flex gap-4">
        <FavoriteToggleButton cabinId={cabinId} />
        <ShareButton cabinId={cabinId} name={name} />
      </div>
    </div>
  );
};
export default SingleCabinHeading;
