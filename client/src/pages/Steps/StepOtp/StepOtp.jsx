import React from "react";
import Card from "../../../components/common/card/Card";
import Button from "../../../components/common/Button/Button";
import Textinput from "../../../components/common/Textinput/Textinput";
import styles from "./StepOtp.module.css";
import { verifyOtp } from "../../../api/routes";
import { useSelector, useDispatch } from "react-redux";
import { setAuth } from "../../../store/authSlice";
const StepOtp = () => {
  const [otp, setOtp] = React.useState(null);
  const dispatch = useDispatch();
  const { phone, hash } = useSelector((state) => state.auth.otp);
  const submit = async () => {
    
    try {
      const { data } = await verifyOtp({ otp, phone, hash });
      console.log(data);
      dispatch(setAuth(data))
    } catch {}
  };
  return (
    <>
      <div className={styles.cardWrapper}>
        <Card title="Enter the code we just texted you" logo="lock-emoji">
          <Textinput
            value={otp}
            onChange={(e) => {
              setOtp(e.target.value);
            }}
          />

          <div>
            <div className={styles.activeButtonWrapper}>
              <Button text="Next" icon="arrow-forward" onClick={submit} />
            </div>

            <p className={styles.bottomParagraph}>
              By entering your email.you're agreeing to out Terms & Privacy
              Policy.Thanks!
            </p>
          </div>
        </Card>
      </div>
    </>
  );
};

export default StepOtp;
