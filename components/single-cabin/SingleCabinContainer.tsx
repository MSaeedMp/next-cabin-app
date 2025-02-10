"use client";

import Image from "next/image";
import PrimaryButton from "../buttons/PrimaryButton";
import { useMapContext } from "@/hooks/useMapContext";
import DynamicMap from "../map/DynamicMap";

const SingleCabinContainer = ({
  image,
  name,
  center,
}: {
  image: string;
  name: string;
  center: [number, number];
}) => {
  const { setCenter, openMap } = useMapContext();
  const handleOpenMap = () => {
    setCenter(center);
    openMap();
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-[3fr_19rem] gap-4">
      <div className="relative w-full h-[500px]">
        <Image
          src={image}
          alt={name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority
          unoptimized
          className="object-cover rounded-xl"
        />
      </div>
      <div className="rounded-xl overflow-hidden relative min-h-[300px]">
        <DynamicMap preview={true} center={center} />
        <PrimaryButton
          className="z-30 absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-4"
          onClick={handleOpenMap}
          text="Show on map"
        />
        <div className="absolute inset-0 bg-primary/50 opacity-20 z-20 rounded-xl"></div>
      </div>
    </div>
  );
};
export default SingleCabinContainer;
