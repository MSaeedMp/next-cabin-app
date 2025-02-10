"use client";

import dynamic from "next/dynamic";

type DynamicMapProps = {
  center?: [number, number];
  zoom?: number;
  preview?: boolean;
};

const Map = dynamic(() => import("./Map"), { ssr: false });
const DynamicMap = ({
  center = [48.11, 9.46],
  zoom = 16,
  preview = false,
}: DynamicMapProps) => {
  if (preview)
    return (
      <Map
        center={center}
        zoom={zoom}
        zoomControl={false}
        dragging={false}
        scrollWheelZoom={false}
        doubleClickZoom={false}
        touchZoom={false}
        keyboard={false}
      />
    );

  return (
    <Map
      center={center}
      zoom={zoom}
      zoomControl={true}
      dragging={true}
      scrollWheelZoom={true}
      doubleClickZoom={true}
      touchZoom={true}
      keyboard={true}
    />
  );
};

export default DynamicMap;
