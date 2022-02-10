import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navigation.module.css";
const Navigation = () => {
  const bransStyle = {
    color: "white",
    textDecoration: "none",
    fontWeight: "bold",
    fontSize: "20px",
    display: "flex",
    alignItem: "center",
  };

  const logoText = {
    marginLeft: "10px",
  };
  return (
    <nav className={`${styles.navbar} container`}>
      <Link style={bransStyle} to="/">
        <img src="/images/logo.png" alt="logo" />
        <span style={logoText}>CodersHouse</span>
      </Link>
    </nav>
  );
};

export default Navigation;
