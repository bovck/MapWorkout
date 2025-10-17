import { useRef } from "react";
import styles from "../styles/Aside.module.css";
export default function Inputs({ handleInput, handleCancel }) {
  const distancia = useRef();
  const ritmo = useRef();
  const elevacao = useRef();
  const tempo = useRef();

  function handleClick() {
    handleInput(
      distancia.current.value,
      elevacao.current.value,
      ritmo.current.value,
      tempo.current.value
    );

    distancia.current.value = "";
    elevacao.current.value = "";
    ritmo.current.value = "";
    tempo.current.value = "";
  }

  return (
    <>
      <div className={styles.divonica}>
        <p className={styles.start}>
          <label htmlFor="distancia">Distância</label>
          <input ref={distancia} type="number" id="distancia" />
          <label htmlFor="ritmo">Ritmo</label>
          <input ref={ritmo} type="number" id="ritmo" />
        </p>
        <p className={styles.end}>
          <label htmlFor="elevacao">Elevação</label>
          <input ref={elevacao} type="number" id="elevacao" />
          <label htmlFor="tempo">Tempo</label>
          <input ref={tempo} type="number" id="tempo" />
        </p>
      </div>
      <div className={styles.containerBtn}>
        <button onClick={handleCancel} id={styles.btnCancel}>
          Cancelar
        </button>
        <button onClick={handleClick}>Enviar</button>
      </div>
    </>
  );
}
