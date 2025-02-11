import {
  cabinFacilities,
  getFeatureNamesAndIconsByKeys,
} from "@/utils/feature-mapping";
import { CabinFeature } from "@prisma/client";

const SingleCabinFeatures = ({ features }: { features: CabinFeature[] }) => {
  const featureNameAndIcon = getFeatureNamesAndIconsByKeys(
    cabinFacilities,
    features
  );
  return (
    <ul className="flex items-center gap-2 md:gap-4 flex-wrap">
      {featureNameAndIcon.map(({ name, icon: Icon }, index) => (
        <li
          className="flex items-center gap-4 border border-stone-200 md:py-4 py-3 px-5 md:px-6 rounded-full text-primary font-medium "
          key={index}
        >
          {Icon && <Icon className="w-5 h-5 md:w-6 md:h-6" />}
          {name}
        </li>
      ))}
    </ul>
  );
};
export default SingleCabinFeatures;
