import { createContext, useState } from "react";
import { useMapEvents } from "react-leaflet";

// eslint-disable-next-line react-refresh/only-export-components
export const MapContext = createContext({
  lating: {},
  popUp: "",
  LocationMarker: () => {},
});

export default function MapContextProvider({ children }) {
  const [position, setPosition] = useState([]);

  function LocationMarker() {
    const map = useMapEvents({
      click(e) {
        map.locate();
        setPosition((prev) => {
          return [
            ...prev,
            {
              lating: e.latlng,
              popUp: `Você está em lat: ${e.latlng.lat.toFixed(
                2
              )} e lng: ${e.latlng.lng.toFixed(2)}`,
            },
          ];
        });
      },
    });
  }

  const ctxValue = {
    position: position,
    LocationMarker: LocationMarker,
  };
  return <MapContext value={ctxValue}>{children}</MapContext>;
}
