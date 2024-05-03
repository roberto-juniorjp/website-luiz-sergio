import React from "react";
import styles from "./Menu.module.css";

const menu = () => {
  return (
    <nav className={styles.mainMenu}>
      <h2>Atividades Online</h2>
      <a href="">
        <button className={styles.youtube}>
          <span>Youtube</span>{" "}
          <div className={styles.iContainer}>
            <i class="bi-youtube"></i>
          </div>
        </button>
      </a>
      <a href="">
        <button className={styles.whatsapp}>
          <span>Estudo do Livro dos Espíritos</span>{" "}
          <div className={styles.iContainer}>
            <i class="bi-whatsapp"></i>
          </div>
        </button>
      </a>
      <a href="">
        <button className={styles.whatsapp}>
          <span>Estudo do Livro dos Médiuns</span>{" "}
          <div className={styles.iContainer}>
            <i class="bi-whatsapp"></i>
          </div>
        </button>
      </a>
    </nav>
  );
};

export default menu;
