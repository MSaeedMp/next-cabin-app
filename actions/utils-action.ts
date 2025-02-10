import { auth } from "@/lib/auth";
import {
  ActionResponseType,
  AuthUserType,
  CountryNameCodeType,
  CustomCountryNameCodeType,
} from "@/utils/types";
import { unstable_cache } from "next/cache";

export const getAuthUser = async (): Promise<AuthUserType | null> => {
  const session = await auth();
  if (!session?.user?.userId) return null;
  return session.user;
};

export const getAuthAdmin = async (): Promise<AuthUserType | null> => {
  const user = await getAuthUser();
  if (!user || user.role !== "admin") return null;
  return user;
};

export const sendSuccessToast = (message: string): ActionResponseType => {
  return { status: "success", message };
};

export const sendErrorToast = (error?: unknown): ActionResponseType => {
  const errorMessage =
    error instanceof Error ? error.message : "An unexpected error occurred";

  return { status: "error", message: errorMessage };
};

export const hashPassword = async (password: string) => {
  const encoder = new TextEncoder();
  const data = encoder.encode(password);
  const hashBuffer = await crypto.subtle.digest("SHA-256", data);

  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
};

export const comparePassword = async (
  inputPassword: string,
  storedPasswordHash: string
) => {
  const hashedInputPassword = await hashPassword(inputPassword);
  return hashedInputPassword === storedPasswordHash;
};

export const getCountriesNameCode = unstable_cache(
  async (): Promise<CustomCountryNameCodeType[]> => {
    try {
      const res = await fetch(
        "https://restcountries.com/v3.1/all?fields=name,idd"
      );
      const countries = await res.json();
      const mappedCountries = countries
        .map(
          (country: CountryNameCodeType): CustomCountryNameCodeType | null => {
            const root = country.idd?.root || "";
            const suffix =
              country.idd?.suffixes?.length === 1
                ? country.idd.suffixes[0]
                : "";
            const fullCode = `${root}${suffix}`.trim();

            if (!fullCode) return null; // Remove countries without a country code

            const name = country.name.common;
            const nativeName =
              country.name.nativeName &&
              Object.values(country.name.nativeName)[0]?.common;
            const fullName =
              name === nativeName ? name : `${name} (${nativeName})`;

            return {
              fullName,
              fullCode,
            };
          }
        )
        .filter(Boolean) as CustomCountryNameCodeType[]; // Filter out null values

      mappedCountries.sort(
        (a: CustomCountryNameCodeType, b: CustomCountryNameCodeType) =>
          a.fullName.toLowerCase().localeCompare(b.fullName.toLowerCase())
      );

      return mappedCountries;
    } catch (error) {
      console.error("Error fetching countries:", error);
      throw new Error("Failed to fetch countries.");
    }
  },
  ["countries"],
  { revalidate: 86400 }
);
