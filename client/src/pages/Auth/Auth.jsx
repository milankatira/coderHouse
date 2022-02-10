import React from "react";
import StepPhoneEmail from "../Steps/StepPhoneEmail/StepPhoneEmail";
import StepOtp from "../Steps/StepOtp/StepOtp";
const Auth = () => {

  
  const [step, setStep] = React.useState(1);

  const steps = {
    1: StepPhoneEmail,
    2: StepOtp,
  };
  const onNext = () => {
    if (step === 3) {
      setStep(1);
    } else {
      setStep(step + 1);
    }
  };
  const Step = steps[step];

  return (
    <div>
      <Step onNext={()=>onNext()} />
    </div>
  );
};

export default Auth;
