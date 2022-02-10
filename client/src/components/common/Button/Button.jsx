import React from "react";
import styles from "./Button.module.css";

const Button = ({ text, icon ,onClick}) => {
  return (
    <button className={styles.Button} onClick={onClick}>
      <span>{text}</span>
      <img  className={styles.arrow} src={`/images/${icon}.png`} atl={icon} />
    </button>
  );
};

export default Button;
