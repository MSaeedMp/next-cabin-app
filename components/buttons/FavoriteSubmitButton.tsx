import { FaHeart, FaRegHeart } from "react-icons/fa";
import { Button } from "../ui/button";

export const FavoriteSubmitButton = ({
  isFavorite,
  onClick,
}: {
  isFavorite: boolean;
  onClick?: () => void;
}) => {
  return (
    <Button
      type="submit"
      size="icon"
      variant="ghost"
      className="rounded-full cursor-pointer p-2 hover:bg-stone-900 bg-stone-600 bg-opacity-80 transition-color duration-500 text-white hover:text-white"
      onClick={onClick}
    >
      {isFavorite ? <FaHeart /> : <FaRegHeart />}
    </Button>
  );
};
