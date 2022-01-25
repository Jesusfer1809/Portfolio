import React, { useState } from "react";
import styles from "../styles/hamburguer.module.css";

function HamburguerButton() {
  const [change, setChange] = useState(false);
  const toggle = () => {
    setChange(!change);
  };
  return (
    <div
      className={`${styles.wrapper} ${change ? styles.change : ""}`}
      onClick={toggle}
    >
      <div className={styles.bar1}></div>
      <div className={styles.bar2}></div>
      <div className={styles.bar3}></div>
    </div>
  );
}

export default HamburguerButton;
