import React from "react";
import styles from "./Activities.module.css";

const Activities = () => {
  return (
    <div className={styles.activities}>
      <h2>Atividades Presenciais</h2>
      <ul>
        <li>
          <h3>Palestras Públicas</h3>
          <p>
            Sábados às <span>15:30</span>
          </p>
        </li>
        <li>
          <h3>Tratamento de Desobsessão</h3>
          <p>
            Segundas às <span>20:30</span>
          </p>
        </li>
      </ul>
      <div className={styles.buttonContainer}>
        <a
          href="https://www.instagram.com/direct/t/112485426807143"
          target="_blank"
        >
          <button className={styles.instagram}>
            <span>Saiba Mais </span>
            <div className={styles.iContainer}>
              <i class="bi-instagram"></i>
            </div>
          </button>
        </a>
      </div>
    </div>
  );
};

export default Activities;
