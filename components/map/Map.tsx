"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useMapContext } from "@/hooks/useMapContext";
import L from "leaflet";

const customIcon = new L.Icon({
  iconUrl: "/location.png",
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

export type MapProps = {
  center?: [number, number];
  zoom?: number;
  zoomControl?: boolean;
  dragging?: boolean;
  scrollWheelZoom?: boolean;
  doubleClickZoom?: boolean;
  touchZoom?: boolean;
  keyboard?: boolean;
};

const Map = ({
  center = [48.11, 9.46],
  zoom = 16,
  zoomControl = true,
  dragging = true,
  scrollWheelZoom = true,
  doubleClickZoom = true,
  touchZoom = true,
  keyboard = true,
}: MapProps) => {
  const { locations } = useMapContext();

  return (
    <MapContainer
      center={center}
      zoom={zoom}
      className="w-full h-full z-20"
      zoomControl={zoomControl}
      dragging={dragging}
      scrollWheelZoom={scrollWheelZoom}
      doubleClickZoom={doubleClickZoom}
      touchZoom={touchZoom}
      keyboard={keyboard}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
      />

      {locations.map((location) => (
        <Marker
          key={location.id}
          position={[location.latitude, location.longitude]}
          icon={customIcon}
        >
          <Popup>
            <div className="flex flex-col items-start gap-1">
              <span className="text-primary font-semibold">
                {location.name}
              </span>
              <span>
                {location.city}, {location.country}
              </span>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Map;
