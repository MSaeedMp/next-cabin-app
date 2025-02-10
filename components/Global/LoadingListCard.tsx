import { Card, CardContent } from "../ui/card";
import { Skeleton } from "../ui/skeleton";

const ListCardSkeleton = () => {
  return (
    <Card className="rounded-xl">
      <CardContent className="p-4 grid xl:grid-cols-[1.3fr_3fr] grid-cols-1 gap-x-10">
        <div>
          <Skeleton className="h-64 w-full" />
        </div>
        <div>
          <Skeleton className="h-4 w-1/2 mt-4" />
          <Skeleton className="h-4 w-1/5 mt-4" />
          <Skeleton className="h-4 w-1/4 mt-16" />
          <Skeleton className="h-4 w-1/3 mt-4" />
          <Skeleton className="h-4 w-1/4 mt-4" />
          <Skeleton className="h-4 w-1/5 mt-4" />
        </div>
      </CardContent>
    </Card>
  );
};

const LoadingListCard = () => {
  return (
    <div className="space-y-4">
      {Array.from({ length: 3 }, (_, i) => (
        <ListCardSkeleton key={i} />
      ))}
    </div>
  );
};

export default LoadingListCard;
