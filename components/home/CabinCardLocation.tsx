"use client";

import { useMapContext } from "@/hooks/useMapContext";
import { Button } from "../ui/button";

const CabinCardLocation = ({
  center,
  country,
  city,
}: {
  center: [number, number];
  country: string;
  city: string;
}) => {
  const { setCenter, setShowMap } = useMapContext();

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    setCenter(center);
    setShowMap(true);
  };

  return (
    <Button variant="link" className="p-0 h-auto self-start" onClick={handleClick}>
      <h5 className="text-sm whitespace-normal text-primary">
        {country}, {city}
      </h5>
    </Button>
  );
};

export default CabinCardLocation;
