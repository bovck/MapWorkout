import { useRef } from "react";
import styles from "../styles/Aside.module.css";
export default function Inputs({ handleInput }) {
  const distancia = useRef();
  const ritmo = useRef();
  const elevacao = useRef();
  const ganhos = useRef();

  function handleClick() {
    handleInput(
      distancia.current.value,
      elevacao.current.value,
      ritmo.current.value,
      ganhos.current.value
    );

    distancia.current.value = "";
    elevacao.current.value = "";
    ritmo.current.value = "";
    ganhos.current.value = "";
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
          <label htmlFor="ganhos">Ganhos</label>
          <input ref={ganhos} type="number" id="ganhos" />
        </p>
      </div>
      <button onClick={handleClick}>enviar</button>
    </>
  );
}
