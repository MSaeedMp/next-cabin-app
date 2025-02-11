import { enumFormatter, formatCurrency } from "@/utils/helper";
import { MdCabin } from "react-icons/md";
import { IoBed } from "react-icons/io5";
import { MdPeople } from "react-icons/md";
import { MdOutlineEuroSymbol } from "react-icons/md";
import { CabinFeature, CabinType } from "@prisma/client";
import {
  cabinFacilities,
  getFeatureNamesAndIconsByKeys,
} from "@/utils/feature-mapping";

type CabinReservationDetailsProps = {
  name: string;
  maxCapacity: number;
  regularPrice: number;
  numRooms: number;
  description: string;
  cabinType: CabinType[];
  features: CabinFeature[];
};

const CabinReservationDetails = ({
  name,
  regularPrice,
  description,
  cabinType,
  maxCapacity,
  numRooms,
  features,
}: CabinReservationDetailsProps) => {
  const featureNameAndIcon = getFeatureNamesAndIconsByKeys(
    cabinFacilities,
    features
  );
  return (
    <div className="w-full rounded-xl flex flex-col gap-7">
      <div className="space-y-4">
        <h4 className="text-2xl lg:text-3xl font-bold text-primary font-archivo-narrow">
          {name}
        </h4>
        <h6 className="font-light">{description}</h6>
      </div>
      <div className="flex items-center gap-2">
        <MdOutlineEuroSymbol className="w-6 h-6 text-primary" />
        <span className="text-primary">Price: </span>
        {formatCurrency(regularPrice)}/ night
      </div>
      <div className="flex items-center gap-2">
        <MdCabin className="w-6 h-6 text-primary" />
        <span className="text-primary">Cabin type:</span>{" "}
        {cabinType.map((type) => enumFormatter(type))}
      </div>
      <div className="flex items-center gap-2">
        <MdPeople className="!w-6 !h-6 text-primary" />
        <span className="text-primary">Capacity:</span>
        {maxCapacity} {maxCapacity === 1 ? "person" : "people"}
      </div>
      <div className="flex items-center gap-2">
        <IoBed className="!w-6 !h-6 text-primary" />
        <span className="text-primary">Number of rooms:</span> {numRooms}{" "}
      </div>
      <ul className="flex flex-wrap items-center gap-x-7 md:gap-x-10 gap-y-5">
        {featureNameAndIcon.map(({ name, icon: Icon }, index) => (
          <li
            className="flex items-center gap-x-2 rounded-xl text-primary font-medium "
            key={index}
          >
            {Icon && <Icon className="w-4 h-4" />}
            {name}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default CabinReservationDetails;
