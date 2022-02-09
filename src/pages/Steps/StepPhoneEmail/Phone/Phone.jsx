import React, { useState } from "react";
import Card from "../../../../components/common/card/Card";
import Button from "../../../../components/common/Button/Button";
import Textinput from "../../../../components/common/Textinput/Textinput";
import styles from "../StepPhoneEmail.module.css";
const Phone = ({onNext}) => {
  const [phoneNumber, setPhonenumber] = useState("");
  return (
    <Card title="Enter Your Phone Number " logo="phone">
      <Textinput
        value={phoneNumber}
        onChange={(e) => {
          setPhonenumber(e.target.value);
        }}
      />
      <div>
        <div className={styles.activeButtonWrapper}>
          <Button text="Next" icon="arrow-forward"  onClick={onNext}/>
        </div>

        <p className={styles.bottomParagraph}>
          By entering your mobile number.you're agreeing to out Terms  & Privacy Policy.Thanks!
        </p>
      </div>
    </Card>
  );
};

export default Phone;
