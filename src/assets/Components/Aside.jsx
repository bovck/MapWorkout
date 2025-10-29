import Inputs from "./Inputs";
import DescriptionWorkouts from "./DescriptionWorkouts";
import Button from "./Button";
import { MapContext } from "../store/context-map";
import { useContext, useState } from "react";

export default function Aside() {
  const [btnState, setBtnState] = useState({ valorInicial: 0, valorFinal: 5 });
  const { updatedData, handleInput, handleCancel, mapData } =
    useContext(MapContext);
  console.log(btnState);
  function btnNext() {
    setBtnState({
      valorInicial: (btnState.valorInicial += 5),
      valorFinal: (btnState.valorFinal += 5),
    });
  }

  function btnPrevious() {
    setBtnState({
      valorInicial: (btnState.valorInicial -= 5),
      valorFinal: (btnState.valorFinal -= btnState.valorInicial),
    });
  }

  return (
    <aside>
      <h2>Exercices</h2>
      {updatedData.isClicked && (
        <Inputs handleInput={handleInput} handleCancel={handleCancel} />
      )}
      {updatedData.isClicked
        ? mapData
            .slice(0, 3)
            .map((itemMap) => <DescriptionWorkouts itemMap={itemMap} />)
        : mapData
            .slice(btnState.valorInicial, btnState.valorFinal)
            .map((itemMap) => <DescriptionWorkouts itemMap={itemMap} />)}
      {!updatedData.isClicked && mapData.length > 5 && (
        <Button
          arr={mapData.length}
          btnNext={btnNext}
          btnPrevious={btnPrevious}
        ></Button>
      )}
    </aside>
  );
}
