import { MapContext } from "../store/context-map";
import { useContext } from "react";
export default function DescriptionWorkouts({ itemMap }) {
  const { mapData } = useContext(MapContext);
  console.log(mapData);
  return (
    <section className="descriptionContainer">
      <p>{itemMap.distancia}</p>
    </section>
  );
}
