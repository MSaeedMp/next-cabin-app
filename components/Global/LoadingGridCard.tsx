import { cn } from "@/lib/utils";
import { Card, CardContent } from "../ui/card";
import { Skeleton } from "../ui/skeleton";

const GridCardSkeleton = () => {
  return (
    <div>
      <Card className="transform group-hover:shadow-xl transition-shadow duration-500 rounded-lg p-0 shadow-md">
        <CardContent className="p-0">
          <Skeleton className="relative w-full h-64 rounde-t-lg mb-4 xl:mb-0"></Skeleton>
          <div className="p-2">
            <Skeleton className="w-1/2 h-4 mt-2"></Skeleton>
            <Skeleton className="w-1/4 h-4 mt-2"></Skeleton>
            <Skeleton className="w-1/5 h-4 mt-4"></Skeleton>
            <Skeleton className="w-1/5 h-4 mt-2"></Skeleton>
            <Skeleton className="w-1/5 h-4 mt-2"></Skeleton>
            <Skeleton className="w-1/2 h-4 mt-2 mb-2"></Skeleton>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

const LoadingGridCard = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4",
        className
      )}
    >
      {Array.from({ length: 6 }, (_, i) => (
        <GridCardSkeleton key={i} />
      ))}
    </div>
  );
};

export default LoadingGridCard;
