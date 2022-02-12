import React, { useState } from "react";
import StepName from "../Steps/StepName/StepName";
import StepAvatar from "../Steps/StepAvatar/StepAvatar";

const steps = {
  1: StepName,
  2: StepAvatar,
};

const Activate = () => {
  const [step, setStep] = useState(1);

  const Step = steps[step];

  const onNext = () => {
    if (step < 2) {
      setStep(step + 1);
    }
    step(step);
  };
  return (
    <div className="cardWrapper">
      <Step onNext={onNext}></Step>
    </div>
  );
};

export default Activate;
