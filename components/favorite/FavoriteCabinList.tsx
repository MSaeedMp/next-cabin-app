import { fetchFavoriteCabins } from "@/actions/favorite-action";
import { auth } from "@/lib/auth";
import SearchCabinGridCard from "../cabins/CabinGridCard";

const FavoriteCabinList = async () => {
  const session = await auth();
  const userId = session?.user.userId;
  if (!userId) throw new Error("You are not logged it");
  const cabins = await fetchFavoriteCabins(userId);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2  xl:grid-cols-3 gap-4">
      {cabins.map((cabin) => (
        <SearchCabinGridCard key={cabin.id} cabin={cabin} />
      ))}
    </div>
  );
};
export default FavoriteCabinList;
