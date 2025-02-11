import { CabinFeature } from "@prisma/client";

import {
  FaSmokingBan,
  FaWheelchair,
  FaWifi,
  FaParking,
  FaConciergeBell,
  FaSun,
  FaGlassMartiniAlt,
  FaBed,
  FaCoffee,
  FaRegCheckSquare,
} from "react-icons/fa";

export const cabinFacilities = [
  { id: 2, name: "Non smoking", key: "NON_SMOKING", icon: FaSmokingBan },
  {
    id: 4,
    name: "Disabled access",
    key: "DISABLED_ACCESS",
    icon: FaWheelchair,
  },
  { id: 8, name: "Wifi", key: "WIFI", icon: FaWifi },
  { id: 16, name: "Parking", key: "PARKING", icon: FaParking },
  {
    id: 32,
    name: "24-hr reception",
    key: "RECEPTION_24H",
    icon: FaConciergeBell,
  },
  { id: 64, name: "Terrace", key: "TERRACE", icon: FaSun },
  { id: 128, name: "Elevator", key: "ELEVATOR", icon: FaRegCheckSquare },
  { id: 256, name: "Bar", key: "BAR", icon: FaGlassMartiniAlt },
  { id: 512, name: "Heating", key: "HEATING", icon: FaBed },
  {
    id: 1024,
    name: "Breakfast included",
    key: "BREAKFAST_INCLUDED",
    icon: FaCoffee,
  },
];
export const cabinTypes = [
  { id: 1, name: "City", key: "CITY" },
  { id: 2, name: "Beach", key: "BEACH" },
  { id: 4, name: "Ski", key: "SKI" },
  { id: 8, name: "Outdoor", key: "OUTDOOR" },
  { id: 16, name: "Relaxation", key: "RELAXATION" },
  { id: 32, name: "Romance", key: "ROMANCE" },
  { id: 64, name: "Eat", key: "EAT" },
];

type featureListType = {
  id: number;
  name: string;
  key: string;
  icon: React.ComponentType<{ className?: string }>;
};

export const getFeatureNamesById = (
  featureList: featureListType[],
  ids: number[]
): string[] => {
  return featureList
    .filter((feature) => ids.includes(feature.id))
    .map((feature) => feature.name);
};

export const getFeatureNamesAndIconsByKeys = (
  featureList: featureListType[],
  keys: CabinFeature[]
) => {
  return featureList
    .filter((feature) => keys.includes(feature.key as CabinFeature))
    .map(({ icon, name }) => ({ icon, name }));
};

export const getFeatureIconsByKeys = (
  featureList: featureListType[],
  keys: CabinFeature[]
) => {
  return featureList
    .filter((feature) => keys.includes(feature.key as CabinFeature))
    .map((feature) => feature.icon);
};

export const getFeatureNamesByKeys = (
  featureList: featureListType[],
  keys: CabinFeature[]
): string[] => {
  return featureList
    .filter((feature) => keys.includes(feature.key as CabinFeature))
    .map((feature) => feature.name);
};

export const getFeatureKeysById = (
  featureList: featureListType[],
  ids: number[]
): CabinFeature[] => {
  return featureList
    .filter((feature) => ids.includes(feature.id))
    .map((feature) => feature.key as CabinFeature);
};

export const getFeatureIds = (
  featureList: featureListType[],
  names: string[]
): number[] => {
  return featureList
    .filter((feature) => names.includes(feature.name))
    .map((feature) => feature.id);
};

export const featureDescriptor = (
  nflt: string | undefined,
  featureName: string
): number[] | undefined => {
  return nflt
    ? nflt
        .split(";")
        .filter((item) => item.startsWith(`${featureName}=`))
        .map((item) => item.replace(`${featureName}=`, ""))
        .map(Number)
        .filter((num) => !isNaN(num))
    : undefined;
};
