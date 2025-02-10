"use server";
import db from "@/utils/db";
import { revalidatePath } from "next/cache";

export const isCabinFavoritedByUser = async (
  cabinId: string,
  userId: string
): Promise<boolean> => {
  const favorite = await db.favorite.findFirst({
    where: {
      cabinId,
      userId,
    },
    select: {
      id: true,
    },
  });

  return !!favorite?.id;
};

export const fetchFavoriteId = async (
  cabinId: string,
  userId: string
): Promise<string | null> => {
  const favorite = await db.favorite.findFirst({
    where: {
      cabinId,
      userId,
    },
    select: {
      id: true,
    },
  });
  return favorite?.id || null;
};

export const toggleFavoriteAction = async ({
  cabinId,
  userId,
  pathname,
}: {
  cabinId: string;
  userId: string;
  pathname: string;
}) => {
  const favoriteId = await fetchFavoriteId(cabinId, userId);

  const toggle = favoriteId
    ? db.favorite.delete({
        where: { id: favoriteId },
      })
    : db.favorite.create({
        data: { userId, cabinId },
      });

  await toggle;
  revalidatePath(pathname);
};

export const fetchFavoriteCabins = async (userId: string) => {
  const cabins = await db.favorite.findMany({
    where: {
      userId,
    },
    include: {
      cabin: true,
    },
  });
  return cabins.map((favorite) => favorite.cabin) || [];
};
