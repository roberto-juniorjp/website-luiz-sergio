import React from "react";
import styles from "./QrCode.module.css";

const QrCode = () => {
  return (
    <div className={styles.qrCode}>
      <h2>Faça Sua Doação:</h2>
      <div className={styles.columns}>
        <div>
          <h3>QrCode</h3>
          <img src="" alt="QrCode Luiz Sérgio" />
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default QrCode;
