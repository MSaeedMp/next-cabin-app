"use client";

import { useMapContext } from "@/hooks/useMapContext";
import DynamicMap from "./DynamicMap";
import CloseButton from "../buttons/CloseButton";

const MapModal = () => {
  const { closeMap, showMap, center } = useMapContext();

  if (!showMap) return null;

  return (
    <div
      className={
        "fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-[10000]"
      }
      onClick={closeMap}
    >
      <div
        className="bg-white rounded-lg w-[90vw] h-[90vh] p-3 sm:p-6 pt-12 sm:pt-14 shadow-2xl relative sm:w-[80vw] sm:h-[80vh] md:w-[70vw] md:h-[70vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <DynamicMap center={center} zoom={13} />
        <CloseButton onClick={closeMap} className="absolute top-2 right-2" />
      </div>
    </div>
  );
};

export default MapModal;
