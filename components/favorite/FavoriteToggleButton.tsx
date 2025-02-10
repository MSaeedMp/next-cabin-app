import { auth } from "@/lib/auth";
import FavoriteToggleForm from "./FavoriteToggleForm";
import { isCabinFavoritedByUser } from "@/actions/favorite-action";
import { FavoriteSignInButton } from "../buttons/FavoriteSignInButton";

const FavoriteToggleButton = async ({ cabinId }: { cabinId: string }) => {
  const session = await auth();
  const userId = session?.user.userId;
  if (!userId) return <FavoriteSignInButton />;
  const isFavorite = await isCabinFavoritedByUser(cabinId, userId);
  return (
    <FavoriteToggleForm
      isFavorite={isFavorite}
      cabinId={cabinId}
      userId={userId}
    />
  );
};
export default FavoriteToggleButton;
