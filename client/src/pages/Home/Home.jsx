import React from "react";
import styles from "./Home.module.css";
import { Link, useHistory } from "react-router-dom";
import Card from "../../components/common/card/Card";
import Button from "../../components/common/Button/Button";
const Home = () => {
  const signIn_Style = {
    color: "#0077FF",
    fontWeight: "bold",
    textDecoration: "none",
    marginLeft: "10px",
  };

  const history = useHistory();
  const startRegister = () => {
    history.push("/auth");
  };
  
  return (
    <div className={styles.cardWrapper}>
      <Card title="Welcome to CodersHouse" logo="logo">
        <p className={styles.text}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat
          ratione odit facilis illo fuga vero ex corrupti nulla repellat nihil!
        </p>

        <Button
          text="Let`s Go"
          icon="arrow-forward"
          onClick={startRegister}
        />
        <div className={styles.signInWrapper}>
          <span className={styles.hasInvite}>Have an invite text?</span>
        </div>
      </Card>
    </div>
  );
};

export default Home;
