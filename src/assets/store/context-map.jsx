import { createContext, useState } from "react";
import { useMapEvents } from "react-leaflet";

// eslint-disable-next-line react-refresh/only-export-components
export const MapContext = createContext({
  updatedData: {},
  LocationMarker: () => {},
  handleInput: () => {},
});

let updateData = {};

export default function MapContextProvider({ children }) {
  const [position, setPosition] = useState([]);
  const [mapData, setMapData] = useState([]);

  function LocationMarker() {
    const map = useMapEvents({
      click(e) {
        map.locate();
        setPosition((prev) => {
          updateData = {
            lating: e.latlng,
            isClicked: true,
            id: e.latlng.lat,
          };

          return [...prev, updateData];
        });
      },
    });
  }

  function handleInput(distancia, elevacao, ritmo, ganhos) {
    if (distancia === "" || elevacao === "" || ritmo === "" || ganhos === "") {
      console.log("digite um número válido");
      return;
    }

    setMapData((prev) => {
      const id = updateData.id;
      return [...prev, { id, distancia, elevacao, ritmo, ganhos }];
    });
  }
  console.log(position);

  const ctxValue = {
    position: position,
    LocationMarker: LocationMarker,
    updatedData: updateData,
    handleInput,
    mapData: mapData,
  };
  return <MapContext value={ctxValue}>{children}</MapContext>;
}
