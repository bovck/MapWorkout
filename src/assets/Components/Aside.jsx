import Inputs from "./Inputs";
import DescriptionWorkouts from "./DescriptionWorkouts";
import Button from "./Button";
import { MapContext } from "../store/context-map";
import { useContext } from "react";

export default function Aside() {
  // const [btnState, setBtnState] = useState({ valorInicial: 0, valorFinal: 5 });
  const { updatedData, handleInput, handleCancel, mapData } =
    useContext(MapContext);

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
