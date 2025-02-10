import { Suspense } from "react";
import { cn } from "@/lib/utils";
import CabinCompositionGrid from "./CabinCompositionGrid";
import LoadingCompositionGrid from "../Global/LoadingCompositionGrid";

type ProductCompositionProps = {
  className?: string;
};

const CabinCompositionRow = ({ className }: ProductCompositionProps) => {
  const grids = [
    <CabinCompositionGrid key="grid-1" />,
    <CabinCompositionGrid key="grid-2" className="hidden md:grid" />,
    <CabinCompositionGrid key="grid-3" className="hidden lg:grid" />,
  ];
  return (
    <section
      className={cn(
        "grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 lg:gap-x-4 gap-x-2 -mx-2 relative z-30",
        className
      )}
    >
      {grids.map((grid) => (
        <Suspense fallback={<LoadingCompositionGrid />} key={grid.key}>
          {grid}
        </Suspense>
      ))}
    </section>
  );
};
export default CabinCompositionRow;
