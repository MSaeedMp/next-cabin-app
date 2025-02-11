"use server";

import { Cabin } from "@prisma/client";
import db from "@/utils/db";
import {
  cabinFacilities,
  cabinTypes,
  getFeatureKeysById,
} from "@/utils/feature-mapping";
import { Location } from "@/utils/types";
export const fetchCabins = async ({
  cabinFacilityIds,
  cabinTypeIds,
  maxPrice,
  minPrice,
  search = "",
  sortBy,
  order,
  people,
  rooms,
  limit,
  offset = 0,
}: {
  cabinFacilityIds?: number[];
  cabinTypeIds?: number[];
  maxPrice?: string;
  minPrice?: string;
  search?: string;
  sortBy?: string;
  order?: string;
  people?: string;
  rooms?: string;
  limit?: number;
  offset?: number;
}): Promise<Cabin[]> => {
  const whereClause: any = {};
  const orderByClause: any = {};

  if (cabinFacilityIds && cabinFacilityIds.length > 0) {
    whereClause.features = {
      hasEvery: getFeatureKeysById(cabinFacilities, cabinFacilityIds),
    };
  }

  if (cabinTypeIds && cabinTypeIds.length > 0) {
    whereClause.cabinType = {
      hasSome: getFeatureKeysById(cabinTypes, cabinTypeIds),
    };
  }

  const minPriceVal = Number(minPrice);
  const maxPriceVal = Number(maxPrice);

  if (maxPriceVal && minPriceVal) {
    whereClause.regularPrice = { lt: maxPriceVal, gt: minPriceVal };
  } else if (maxPriceVal) {
    whereClause.regularPrice = { lt: maxPriceVal };
  } else if (minPriceVal) {
    whereClause.regularPrice = { gt: minPriceVal };
  }

  if (people) {
    whereClause.maxCapacity = { gte: Number(people) };
    if (!sortBy) {
      sortBy = "maxCapacity";
      order = "asc";
      orderByClause[sortBy] = order;
    }
  }
  if (rooms) {
    whereClause.numRooms = { gte: Number(rooms) };
    if (!sortBy) {
      sortBy = "numRooms";
      order = "desc";
      orderByClause[sortBy] = order;
    }
  }

  whereClause.OR = [
    { name: { contains: search, mode: "insensitive" } },
    { country: { contains: search, mode: "insensitive" } },
    { city: { contains: search, mode: "insensitive" } },
  ];

  if (sortBy === "price") {
    orderByClause["regularPrice"] = order;
  }
  if (sortBy === "capacity") {
    orderByClause["maxCapacity"] = order;
  }

  return await db.cabin.findMany({
    where: whereClause,
    orderBy: orderByClause,
    take: limit ?? undefined,
    skip: offset,
  });
};

type CabinType =
  | "CITY"
  | "BEACH"
  | "SKI"
  | "OUTDOOR"
  | "RELAXATION"
  | "ROMANCE"
  | "EAT";

export const fetchCabinByType = async (
  type: CabinType,
  limit: number = 8
): Promise<Cabin[]> => {
  let cabins: Cabin[] = [];

  cabins = await db.cabin.findMany({
    where: {
      cabinType: { hasEvery: [type] },
    },
    take: limit ?? undefined,
  });

  return cabins;
};

const fetchDistinctCountries = async (): Promise<string[]> => {
  const countries = await db.cabin.findMany({
    distinct: ["country"],
    select: {
      country: true,
    },
  });
  return countries.map((cabin) => cabin.country);
};

export const selectRandomCountry = async (): Promise<string> => {
  const countries = await fetchDistinctCountries();
  return countries[Math.floor(Math.random() * countries.length)];
};

export const fetchCabinsByCountry = async ({
  country,
  limit,
}: {
  country: string;
  limit?: number;
}): Promise<Cabin[]> => {
  const cabins = await db.cabin.findMany({
    where: {
      country,
    },
    take: limit ?? undefined,
  });

  return cabins;
};

export const fetchCabinById = async (
  cabinId: string
): Promise<Cabin | null> => {
  const cabin = await db.cabin.findFirst({
    where: {
      id: cabinId,
    },
  });
  return cabin;
};

export const fetchPromotedCabins = async (): Promise<Cabin[]> => {
  const cabins = await db.cabin.findMany({
    where: {
      featured: true,
    },
  });
  return cabins || [];
};

export const fetchCabinLocaitons = async (): Promise<Location[]> => {
  const cabins = await db.cabin.findMany({
    select: {
      id: true,
      name: true,
      latitude: true,
      longitude: true,
      city: true,
      country: true,
    },
  });

  return cabins;
};
