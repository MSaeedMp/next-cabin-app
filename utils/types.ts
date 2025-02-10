import { Cabin } from "@prisma/client";

export type ActionResponseType = {
  status: "success" | "error";
  message: string;
};

export type AuthUserType = {
  userId?: string;
  name?: string | null;
  email?: string | null;
  role?: string;
  image?: string | null;
  phoneNumber?: string | null;
  displayName?: string | null;
  nationality?: string | null;
  nationalId?: string | null;
  address?: string | null;
  createdAt?: Date;
  updatedAt?: Date;
};

export type CabinSearchParamsType = {
  nflt?: string;
  minPrice?: string;
  maxPrice?: string;
  search?: string;
  sortBy?: string;
  order?: string;
  view?: "list" | "grid";
  checkin?: string;
  checkout?: string;
  rooms: string;
  people: string;
};

export type SearchCabinCardProps = {
  cabin: Cabin;
  view?: "list" | "grid";
};

export type CountryNameCodeType = {
  name: {
    common: string;
    official: string;
    nativeName?: Record<string, { official: string; common: string }>;
  };
  idd: {
    root: string;
    suffixes: string[];
  };
};

export type CustomCountryNameCodeType = { fullName: string; fullCode: string };

export type Location = {
  id: string;
  name: string;
  latitude: number;
  longitude: number;
  city: string;
  country: string;
};

