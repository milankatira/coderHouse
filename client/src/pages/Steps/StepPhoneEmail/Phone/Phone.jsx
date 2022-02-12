import React, { useState } from "react";
import Card from "../../../../components/common/card/Card";
import Button from "../../../../components/common/Button/Button";
import Textinput from "../../../../components/common/Textinput/Textinput";
import styles from "../StepPhoneEmail.module.css";
import { sendOtp } from "../../../../api/routes/index";
import { useDispatch } from "react-redux";
import { setOtp } from "../../../../store/authSlice";

const Phone = ({ onNext }) => {
  const [phoneNumber, setPhonenumber] = useState("");

  const dispatch = useDispatch();

  const submit = async () => {
    const { data } = await sendOtp({ phone: phoneNumber });

    dispatch(setOtp({ phone: data.phone, hash: data.hash }));
console.log(data)
    onNext()
  };
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
          <Button text="Next" icon="arrow-forward" onClick={submit} />
        </div>

        <p className={styles.bottomParagraph}>
          By entering your mobile number.you're agreeing to out Terms & Privacy
          Policy.Thanks!
        </p>
      </div>
    </Card>
  );
};

export default Phone;
