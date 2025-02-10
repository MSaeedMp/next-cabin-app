import EmptyList from "../Global/EmptyList";
import CabinListCard from "./CabinListCard";
import CabinGridCard from "./CabinGridCard";
import { fetchCabins } from "@/actions/cabin-action";
import { CabinSearchParamsType } from "@/utils/types";
import { featureDescriptor } from "@/utils/feature-mapping";

const CabinsBox = async ({
  queryObject,
}: {
  queryObject: CabinSearchParamsType;
}) => {
  const {
    nflt,
    minPrice,
    maxPrice,
    search,
    sortBy,
    order,
    view,
    people,
    rooms,
  } = queryObject;

  const cabinFacilityIds = featureDescriptor(nflt, "cabinfeature");
  const cabinTypeIds = featureDescriptor(nflt, "cabintype");

  const cabins = await fetchCabins({
    cabinFacilityIds,
    cabinTypeIds,
    minPrice,
    maxPrice,
    search,
    sortBy,
    order,
    people,
    rooms,
  });

  if (cabins.length === 0)
    return (
      <EmptyList
        className="mt-10 font-semibold text-primary"
        heading="Sorry, we could find no cabin with these features. Please change filters and try again."
      />
    );

  return view === "list" || !view ? (
    <div className="flex flex-col gap-4">
      {cabins.map((cabin) => (
        <CabinListCard key={cabin.id} cabin={cabin} />
      ))}
    </div>
  ) : (
    <div className="grid grid-cols-1 lg:grid-cols-2  xl:grid-cols-3 gap-4">
      {cabins.map((cabin) => (
        <CabinGridCard key={cabin.id} cabin={cabin} />
      ))}
    </div>
  );
};
export default CabinsBox;
