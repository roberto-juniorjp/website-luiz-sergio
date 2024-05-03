import React from "react";
import styles from "./Map.module.css";

const Map = () => {
  return (
    <div className={styles.map}>
      <h2>Localização:</h2>
      <div className={styles.mapEmbed}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15834.218717416239!2d-34.8442929!3d-7.1773619!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7acc348307b3d1d%3A0xc3effc98e6e018ee!2zTsO6Y2xlbyBFc3DDrXJpdGEgTHVpeiBTw6lyZ2lv!5e0!3m2!1spt-BR!2sbr!4v1714771473324!5m2!1spt-BR!2sbr"
          width="600"
          height="450"
          frameborder="0"
          style={{ border: 0 }}
          allowfullscreen=""
          aria-hidden="false"
          tabindex="0"
        ></iframe>
      </div>
      <div className={styles.button}>
        <a href="https://maps.app.goo.gl/dYYtKCgECmBbypgy6" target="_blank">
          <button className={styles.mapPin}>
            <span>GOOGLE MAPS</span>
            <div className={styles.iContainer}>
              <i class="bi-geo-alt-fill"></i>
            </div>
          </button>
        </a>
      </div>
    </div>
  );
};

export default Map;
