import { MapContext } from "@/contexts/MapContext";
import { useContext } from "react";

export const useMapContext = () => {
  const context = useContext(MapContext);
  if (!context)
    throw new Error("MapContext must be used within a MapProvider.");

  return context;
};
