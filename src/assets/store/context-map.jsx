import { createContext, useState } from "react";
import { useMapEvents } from "react-leaflet";

// eslint-disable-next-line react-refresh/only-export-components
export const MapContext = createContext({
  position: [],
  updatedData: {},
  LocationMarker: () => {},
  handleInput: () => {},
  handleCancel: () => {},
  mapData: [],
});

let updateData = {};

export default function MapContextProvider({ children }) {
  const [position, setPosition] = useState([]);
  const [mapData, setMapData] = useState([]);

  function LocationMarker() {
    if (!updateData.isClicked) {
      // eslint-disable-next-line react-hooks/rules-of-hooks
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
  }

  function handleCancel() {
    const newArr = { ...updateData };

    updateData = {
      ...newArr,
      isClicked: false,
    };

    setPosition((prev) => {
      const teste = prev.filter((item) => item.id !== newArr.id);
      return [...teste];
    });
  }

  console.log(position);
  function handleInput(distancia, elevacao, ritmo, tempo) {
    if (distancia === "" || elevacao === "" || ritmo === "" || tempo === "") {
      console.log("digite um número válido");
      return;
    }

    setMapData((prev) => {
      const id = updateData.id;
      return [...prev, { id, distancia, elevacao, ritmo, tempo }];
    });

    const newArr = { ...updateData };

    updateData = {
      ...newArr,
      isClicked: false,
    };
  }
  console.log(mapData);

  const ctxValue = {
    position: position,
    LocationMarker: LocationMarker,
    updatedData: updateData,
    handleInput,
    mapData: mapData,
    handleCancel,
  };
  return <MapContext value={ctxValue}>{children}</MapContext>;
}
