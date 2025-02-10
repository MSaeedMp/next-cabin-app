import EmptyList from "../Global/EmptyList";
import Grid2Cols from "../layout/Grid2Cols";
import ReviewCard from "./ReviewCard";
import { Review } from "@prisma/client";

const ReviewList = async ({ reviews }: { reviews: Review[] }) => {
  if (reviews.length === 0)
    return <EmptyList heading="There is still no review for this cabin." />;
  return (
    <Grid2Cols className="gap-4">
      {reviews.map((review) => {
        return <ReviewCard key={review.id} review={review} />;
      })}
    </Grid2Cols>
  );
};
export default ReviewList;
