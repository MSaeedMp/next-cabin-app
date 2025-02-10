import {
  fetchCabinReviews,
  fetchOveralRating,
  fetchStarRating,
} from "@/actions/review-action";
import { Separator } from "../ui/separator";
import ReviewForm from "./ReviewForm";
import ReviewList from "./ReviewList";
import ReviewSummary from "./ReviewSummary";
import { auth } from "@/lib/auth";

const CabinReviews = async ({ cabinId }: { cabinId: string }) => {
  const [session, starRating, overalRating, reviews] = await Promise.all([
    auth(),
    fetchStarRating(cabinId),
    fetchOveralRating(cabinId),
    fetchCabinReviews(cabinId),
  ]);
  const user = session?.user;

  return (
    <div>
      <ReviewSummary overalRating={overalRating} starRating={starRating} />
      <ReviewList reviews={reviews} />
      <Separator className="my-6 " />
      <ReviewForm cabinId={cabinId} user={user} />
    </div>
  );
};
export default CabinReviews;
