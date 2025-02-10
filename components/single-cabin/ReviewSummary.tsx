import { Progress } from "../ui/progress";
import { FaStar } from "react-icons/fa";

type OveralRatingType = {
  rating: number | string;
  count: number;
};

type StarRatingType = {
  star: number;
  count: number;
  percentage: string;
};

const ReviewSummary = async ({
  overalRating,
  starRating,
}: {
  overalRating: OveralRatingType;
  starRating: StarRatingType[];
}) => {
  return (
    <div className="p-5 border rounded-xl mb-6">
      <div className="flex items-center gap-3 mb-5">
        <FaStar className="w-5 h-5 text-yellow-400" />
        <span className="text-base font-semibold">
          {overalRating.rating} out of 5
        </span>
        <span className="text-muted-foreground text-sm">
          ({overalRating.count} global ratings)
        </span>
      </div>

      <div className="flex gap-x-7 gap-y-3 flex-wrap ">
        {starRating.map((rating) => {
          const { star, percentage } = rating;
          return (
            <ReviewRow
              key={star}
              text={`${star} Star`}
              percentage={Number(percentage)}
            />
          );
        })}
      </div>
    </div>
  );
};
export default ReviewSummary;

function ReviewRow({ text, percentage }: { text: string; percentage: number }) {
  return (
    <div className="flex items-center gap-2 text-sm w-full lg:max-w-[360px]">
      <span className="capitalize whitespace-nowrap font inline-block w-14">
        {text}
      </span>
      <Progress
        className="h-4 rounded-lg bg-white border border-stone-300"
        value={percentage}
      />
      <span className="capitalize whitespace-nowrap inline-block w-14">
        {percentage}%
      </span>
    </div>
  );
}
