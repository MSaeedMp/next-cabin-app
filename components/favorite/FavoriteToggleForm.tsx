"use client";
import { usePathname } from "next/navigation";
import { startTransition, useOptimistic } from "react";
import FormContainer from "../form/FormContainer";
import { toggleFavoriteAction } from "@/actions/favorite-action";
import { FavoriteSubmitButton } from "../buttons/FavoriteSubmitButton";

const FavoriteToggleForm = ({
  isFavorite,
  cabinId,
  userId,
}: {
  isFavorite: boolean;
  cabinId: string;
  userId: string;
}) => {
  const pathname = usePathname();

  const [optimisticIsFavorite, setOptimisticIsFavorite] = useOptimistic<
    boolean,
    boolean
  >(isFavorite, (state) => !state);

  const toggleAction = async () => {
    startTransition(() => {
      setOptimisticIsFavorite(isFavorite);
    });
    return await toggleFavoriteAction({ cabinId, userId, pathname });
  };

  return (
    <FormContainer action={toggleAction}>
      <FavoriteSubmitButton isFavorite={optimisticIsFavorite} />
    </FormContainer>
  );
};

export default FavoriteToggleForm;
