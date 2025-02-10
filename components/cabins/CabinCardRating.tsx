import { fetchOveralRating } from "@/actions/review-action";

const CabinCardRating = async ({
  cabinId,
  view = "list",
}: {
  cabinId: string;
  view?: "list" | "grid" | "home";
}) => {
  const overalRating = await fetchOveralRating(cabinId);
  const { count, rating } = overalRating;
  const ratingNum = Number(rating);
  let ratingTitle = "Good";
  if (ratingNum >= 4.5) {
    ratingTitle = "Great";
  } else if (ratingNum < 4.5 && ratingNum >= 3.5) {
    ratingTitle = "Very good";
  }

  if (view === "list")
    return (
      <div className="flex gap-2 items-center self-start whitespace-nowrap">
        <div>
          <p className="text-lg md:text-xl font-semibold text-primary font-archivo-narrow">
            {ratingTitle}
          </p>
          {count !== 0 && (
            <p className="text-muted-foreground text-xs">{count} reviews</p>
          )}
        </div>
        <div>
          {count !== 0 && (
            <p className=" text-white text-sm md:text-base font-bold p-2 rounded-t-lg rounded-br-lg bg-primary">
              {rating}
            </p>
          )}
        </div>
      </div>
    );

  if (view === "grid")
    return (
      <p className=" self-start text-white text-sm font-bold p-2 rounded-t-lg rounded-br-lg bg-primary">
        {rating || 4.6}
      </p>
    );

  if (view === "home")
    return (
      <div className="flex items-center justify-between mt-2">
        {count !== 0 ? (
          <p className="text-sm text-muted-foreground">{count} reviews</p>
        ) : <p></p>}
        <p className=" self-end justify-end text-white text-sm font-bold p-1.5 rounded-t-lg rounded-br-lg bg-primary">
          {rating || 4.6}
        </p>
      </div>
    );
};
export default CabinCardRating;
