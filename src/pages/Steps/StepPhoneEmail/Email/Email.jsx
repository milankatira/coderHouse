import React, { useState } from "react";
import Card from "../../../../components/common/card/Card";
import Button from "../../../../components/common/Button/Button";
import Textinput from "../../../../components/common/Textinput/Textinput";
import styles from "../StepPhoneEmail.module.css";

const Email = ({onNext}) => {
  const [email, setEmail] = useState("");

  return (
    <Card title="Enter Your Email id" logo="email-emoji">
      <Textinput
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />

      <div>
        <div className={styles.activeButtonWrapper}>
          <Button text="Next" icon="arrow-forward" onClick={onNext}/>
        </div>

        <p className={styles.bottomParagraph}>
          By entering your email.you're agreeing to out Terms & Privacy
          Policy.Thanks!
        </p>
      </div>
    </Card>
  );
};

export default Email;
