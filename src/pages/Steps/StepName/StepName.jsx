import React from "react";

const StepName = ({onClick}) => {
  return (
    <>
      <div>Name</div>
      <button onClick={onClick}>next</button>
    </>
  );
};

export default StepName;
