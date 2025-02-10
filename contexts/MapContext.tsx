import { createContext, useState, ReactNode, useEffect } from "react";
import { Location } from "@/utils/types";
import { fetchCabinLocaitons } from "@/actions/cabin-action";

interface MapContextType {
  showMap: boolean;
  setShowMap: React.Dispatch<React.SetStateAction<boolean>>;
  closeMap: () => void;
  openMap: () => void;
  locations: Location[];
  center: [number, number];
  setCenter: React.Dispatch<React.SetStateAction<[number, number]>>;
}

export const MapContext = createContext<MapContextType | null>(null);

interface MapProviderProps {
  children: ReactNode;
}

export const MapProvider = ({ children }: MapProviderProps) => {
  const [showMap, setShowMap] = useState<boolean>(false);
  const [locations, setLocations] = useState<Location[]>([]);
  const [center, setCenter] = useState<[number, number]>([0, 0]);

  const closeMap = () => setShowMap(false);
  const openMap = () => setShowMap(true);

  useEffect(() => {
    const fetchFcn = async () => {
      try {
        const res = await fetchCabinLocaitons();
        setLocations(res);
      } catch (error) {
        console.error(error);
      }
    };

    fetchFcn();
  }, []);

  const value: MapContextType = {
    showMap,
    setShowMap,
    closeMap,
    openMap,
    locations,
    center,
    setCenter,
  };

  return <MapContext.Provider value={value}>{children}</MapContext.Provider>;
};
