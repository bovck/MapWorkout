import Inputs from "./Inputs";
import { MapContext } from "../store/context-map";
import { useContext } from "react";
export default function Aside() {
  const { updatedData, handleInput } = useContext(MapContext);
  return (
    <aside>
      <h2>Exercices</h2>
      {updatedData.isClicked && <Inputs handleInput={handleInput} />}
    </aside>
  );
}
