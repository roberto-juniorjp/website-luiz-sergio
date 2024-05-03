import React from "react";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.mainHeader}>
      <div className={styles.logo}>
        <a href="/">
          <img
            src="./src/assets/img/logo-ls-white.webp"
            alt="Logo Núcleo Espírita Luiz Sérgio"
          />
        </a>
      </div>
      <div className={styles.mainTitle}>
        <h1>Núcleo Espírita Luiz Sérgio</h1>
      </div>
      <div className={styles.social}>
        <ul>
          <li>
            <a
              href="https://instagram.com/nucleoespiritaluizsergio"
              target="_blank"
            >
              <i class="bi bi-instagram"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/@CanalEspiritaLuizSergio"
              target="_blank"
            >
              <i class="bi bi-youtube"></i>
            </a>
          </li>
          <li>
            <a href="https://wa.me/556198611928" target="_blank">
              <i class="bi bi-whatsapp"></i>
            </a>
          </li>
        </ul>
      </div>
      <div className={styles.description}>
        <p>Confira todos os trabalhos da casa abaixo:</p>
      </div>
    </div>
  );
};

export default Header;
