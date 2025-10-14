import styles from "../styles/Aside.module.css";
export default function Aside() {
  return (
    <aside>
      <h2>Exercices</h2>
      <div className={styles.divonica}>
        <p>
          <label htmlFor="teste1">distância</label>
          <input type="text" id="teste1" />
        </p>
        <p>
          <label htmlFor="teste2">Ritmo</label>
          <input type="text" id="teste2" />
        </p>
      </div>
      <div className={styles.divonica}>
        <p>
          <label htmlFor="teste1">Elevação</label>
          <input type="text" id="teste1" />
        </p>
        <p>
          <label htmlFor="teste2">Ganhos</label>
          <input type="text" id="teste2" />
        </p>
      </div>
    </aside>
  );
}
