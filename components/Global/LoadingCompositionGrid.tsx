import { Skeleton } from "../ui/skeleton";

const LoadingCompositionGrid = () => {
  return (
    <div className="shadow-lg rounded-md">
      <Skeleton className="w-1/4 h-4 ml-4 mt-5 mb-2"></Skeleton>
      <div className="grid grid-cols-2 grid-rows-2 lg:gap-4 gap-2 gap-y-4 bg-white lg:p-4 p-2">
        {Array.from({ length: 4 }, (_, i) => {
          return (
            <div key={i}>
              <Skeleton className="w-full h-48 flex items-center justify-center "></Skeleton>
              <Skeleton className="w-1/2 h-4 mt-3"></Skeleton>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default LoadingCompositionGrid;
