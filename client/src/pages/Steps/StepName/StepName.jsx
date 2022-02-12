import React, { useState } from "react";
import styles from "./StepName.module.css";
import Card from "../../../components/common/card/Card";
import Button from "../../../components/common/Button/Button";
import Textinput from "../../../components/common/Textinput/Textinput";
import { useDispatch,useSelector } from "react-redux";
import { setName } from "../../../store/activateSlice";
const StepName = ({ onNext }) => {
  const dispatch = useDispatch();
 const {name}=useSelector((state)=>state.activate)
  const [fullname, setfullName] = useState(name);

  const nextStep = () => {
    if(!fullname){
      return;
    }
    dispatch(setName(fullname));
    onNext();
  }
  return (
    <>
      <div className={styles.cardWrapper}>
        <Card title="what's your full name?" logo="goggle-emoji">
          <Textinput
            value={fullname}
            onChange={(e) => setfullName(e.target.value)}
          />

          <div>
            <p className={styles.paragraph}>
              By entering your Name.you're agreeing to out Terms & Privacy
              Policy.Thanks!
            </p>

            <div className={styles.activeButtonWrapper}>
              <Button text="Next" icon="arrow-forward" onClick={nextStep} />
            </div>
          </div>
        </Card>
      </div>
    </>
  );
};

export default StepName;
