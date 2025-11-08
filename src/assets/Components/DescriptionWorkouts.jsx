import { MapContext } from "../store/context-map";

export default function DescriptionWorkouts({ itemMap }) {
  // const { mapData } = useContext(MapContext);
  // console.log(mapData);
  return (
    <section className="descriptionContainer">
      <p className="descriptionWorkout">
        Você correu {itemMap.distancia}km em {itemMap.tempo} min seu ritmo é de{" "}
        {itemMap.ritmo} min/km
      </p>
    </section>
  );
}
