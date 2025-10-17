import Inputs from "./Inputs";
import DescriptionWorkouts from "./DescriptionWorkouts";
import { MapContext } from "../store/context-map";
import { useContext } from "react";
export default function Aside() {
  const { updatedData, handleInput, handleCancel, mapData } =
    useContext(MapContext);
  // console.log(updatedData);
  return (
    <aside>
      <h2>Exercices</h2>
      {updatedData.isClicked && (
        <Inputs handleInput={handleInput} handleCancel={handleCancel} />
      )}
      {mapData.map((itemMap) => (
        <DescriptionWorkouts itemMap={itemMap} />
      ))}
    </aside>
  );
}
