import { enumFormatter } from "@/utils/helper";
import { FaCheck } from "react-icons/fa";

const CabinCardFeatures = ({ features }: { features: string[] }) => {
  const displayedFeatures = features
    .map((feature) => enumFormatter(feature))
    .slice(0, 3);

  return (
    <div className="text-sm ">
      <h5 className="mb-2 font-semibold">Cabin facilities</h5>
      {displayedFeatures.map((feature, index) => (
        <div
          key={index}
          className="flex items-center gap-2 border-l-4 pl-3 text-muted-foreground"
        >
          <FaCheck className="text-primary" />
          <span>{feature}</span>
        </div>
      ))}
    </div>
  );
};
export default CabinCardFeatures;
