"use client";
import { useAuthContext } from "@/hooks/useAuthContext";
import { Button } from "../ui/button";
import { FaRegHeart } from "react-icons/fa";

export const FavoriteSignInButton = () => {
  const { openAuth } = useAuthContext();

  return (
    <Button
      size={"icon"}
      variant={"ghost"}
      onClick={openAuth}
      className="rounded-full cursor-pointer p-2 hover:bg-stone-900 bg-stone-900 bg-opacity-70 transition-color duration-500 text-white hover:text-white"
    >
      <FaRegHeart />
    </Button>
  );
};
