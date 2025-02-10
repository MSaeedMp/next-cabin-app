import { cn } from "@/lib/utils";
import CabinCardTiny from "./CabinCardTiny";
import EmptyCompositionGrid from "../Global/EmptyCompositionGrid";
import {
  fetchCabinsByCountry,
  selectRandomCountry,
} from "@/actions/cabin-action";
import { Cabin } from "@prisma/client";

const CabinCompositionGrid = async ({ className }: { className?: string }) => {
  let cabins: Cabin[] = [];
  let randomCountry = "";
  while (true) {
    randomCountry = await selectRandomCountry();
    cabins = await fetchCabinsByCountry({
      country: randomCountry,
      limit: 4,
    });
    if (cabins.length >= 4) break;
  }

  if (cabins.length === 0) return <EmptyCompositionGrid />;
  return (
    <div
      className={cn(
        "bg-white shadow-lg lg:p-4 p-2 rounded-md relative",
        className
      )}
    >
      <h4 className="py-4 font-archivo-narrow text-xl font-semibold text-primary">{randomCountry}</h4>
      <div className="grid grid-cols-2 grid-rows-2 lg:gap-4 gap-2 gap-y-4">
        {cabins.map((cabin) => {
          return <CabinCardTiny cabin={cabin} key={cabin.id} />;
        })}
      </div>
    </div>
  );
};
export default CabinCompositionGrid;
