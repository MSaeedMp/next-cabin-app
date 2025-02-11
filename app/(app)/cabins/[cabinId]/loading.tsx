import Container from "@/components/layout/Container";
import { Skeleton } from "@/components/ui/skeleton";

const Loading = () => {
  return (
    <Container>
      <div className="pt-10">
        <div className="flex justify-between items-center">
          <div className="w-full">
            <Skeleton className="w-56 h-4 mt-4"></Skeleton>
            <Skeleton className="w-1/4 h-8 md:h-12 mt-4 rounded-xl"></Skeleton>
            <Skeleton className="w-32 h-4 mt-4"></Skeleton>
          </div>
          <div className="flex gap-4">
            <Skeleton className="w-8 h-8 rounded-full"></Skeleton>
            <Skeleton className="w-8 h-8 rounded-full"></Skeleton>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[3fr_1fr] gap-4 mt-4">
          <Skeleton className="h-[500px] w-full rounded-xl"></Skeleton>
          <Skeleton className="h-[500px] w-full rounded-xl"></Skeleton>
        </div>
        <div className="flex items-center gap-x-6 gap-y-4 mt-6 flex-wrap">
          {Array.from({ length: 7 }, (_, i) => (
            <Skeleton key={i} className="h-12 w-36 rounded-full"></Skeleton>
          ))}
        </div>
        <div className="mt-6">
          <Skeleton className="w-3/4 h-6 rounded-xl mb-4"></Skeleton>
          {Array.from({ length: 4 }, (_, i) => (
            <Skeleton key={i} className="w-full h-4 mt-3"></Skeleton>
          ))}
          <Skeleton className="w-1/4 h-4 mt-4"></Skeleton>
        </div>
      </div>
    </Container>
  );
};
export default Loading;
