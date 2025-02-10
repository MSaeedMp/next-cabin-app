import { Card, CardContent } from "../ui/card";
import { Skeleton } from "../ui/skeleton";

const LoadingCard = () => {
  return (
    <Card className="rounded-lg overflow-hidden p-0 border-none shadow-md">
      <CardContent className="p-0">
        <Skeleton className="h-48 sm:h-64 w-full" />
        <div className="p-2">
          <Skeleton className="h-4 w-1/2 mt-2" />
          <Skeleton className="h-4 w-1/5 mt-3" />
          <Skeleton className="h-4 w-1/4 mt-3" />
        </div>
      </CardContent>
    </Card>
  );
};
export default LoadingCard;
