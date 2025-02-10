"use server";
import db from "@/utils/db";
import { Prisma, Reserve } from "@prisma/client";
import { eachDayOfInterval } from "date-fns";
import { sendErrorToast, sendSuccessToast } from "./utils-action";
import { revalidatePath } from "next/cache";
import { ActionResponseType } from "@/utils/types";
import { auth } from "@/lib/auth";

export const getReservedDatesByCabinId = async (cabinId: string) => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const reservations = await db.reserve.findMany({
    where: {
      cabinId,
      startDate: { gte: today },
      status: { in: ["CONFIRMED", "UNCONFIRMED", "CHECKED_IN"] },
    },
    select: {
      startDate: true,
      endDate: true,
    },
  });

  const reservedDates = reservations
    .map((reservation) => {
      return eachDayOfInterval({
        start: new Date(reservation.startDate),
        end: new Date(reservation.endDate),
      });
    })
    .flat();

  return reservedDates;
};

export const createReservation = async (formData: Reserve) => {
  try {
    const reservation = await db.reserve.create({
      data: {
        ...formData,
        userId: formData["userId"],
        cabinId: formData["cabinId"],
      },
    });
    if (!reservation) throw new Error("Failed to reserve this cabin.");

    revalidatePath(`/prodcuts/${formData["cabinId"]}`);
    return sendSuccessToast("Cabin was reserved successfully.");
  } catch (error) {
    return sendErrorToast(error);
  }
};

export const isCabinReservedByUser = async (
  userId: string | undefined,
  cabinId: string
): Promise<boolean> => {
  if (!userId) return false;
  const reservation = await db.reserve.findFirst({
    where: {
      userId,
      cabinId,
    },
  });

  return !!reservation;
};

export const fetchAllReservationsByUser = async (
  userId: string
): Promise<Prisma.ReserveGetPayload<{ include: { cabin: true } }>[]> => {
  const reservations = await db.reserve.findMany({
    where: {
      userId,
    },
    include: {
      cabin: true,
    },
  });
  return reservations || [];
};

export const deleteReserveAction = async (prevState: {
  reservationId: string;
}): Promise<ActionResponseType> => {
  const { reservationId } = prevState;
  const session = await auth();
  const user = session?.user;
  try {
    if (!user) throw new Error("You are not logged in");

    await db.reserve.delete({
      where: {
        userId: user.userId,
        id: reservationId,
      },
    });

    revalidatePath("/account/reservations");
    return sendSuccessToast("Your reservation was cancelled successfully.");
  } catch (error) {
    return sendErrorToast(error);
  }
};
