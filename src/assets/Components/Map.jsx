import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { MapContext } from "../store/context-map";

import { useContext } from "react";

export default function Map() {
  const { position, LocationMarker } = useContext(MapContext);
  return (
    <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <LocationMarker />
      {position.map((cord, i) => (
        <Marker key={i} position={cord.lating}>
          <Popup>{cord.popUp}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
