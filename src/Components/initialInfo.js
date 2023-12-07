import React from "react";
import "./initial.css"
import Logistic from "./Logistic/index.js"
import Party from "./Party/PartyB.js"
import Additional from "./AdditionalS/index.js"

const SupplyChainDiagram = () => {
  const [step, setStep] = React.useState(2);

  const handleStepChange = (newStep) => {
    setStep(newStep);
  };

  return (
    <div className="supply-chain-diagram">
      <div className="steps">
        <div className={`step1 ${step === 1 ? "active" : ""}`} >1</div>
        <div className={`line ${(step===1 || step===2)? "active" : ""}`}></div>
        <div className={`step1 ${step === 2 ? "active" : ""}`}>2</div>
        <div className={`line ${(step===3 || step===2)? "active" : ""}`}></div>
        <div className={`step1 ${step === 3 ? "active" : ""}`}>3</div>
        <div className={`line ${(step===3 || step===4)? "active" : ""}`}></div>
        <div className={`step1 ${step === 4 ? "active" : ""}`}>4</div>
      </div>
      <div className="stepsd">
        <div className={`step ${step === 1 ? "active" : ""}`}>Initial Information</div>
        <div className={`step ${step === 2 ? "active" : ""}`}>Party Information</div>
        <div className={`step ${step === 3 ? "active" : ""}`}>Logistics</div>
        <div className={`step ${step === 4 ? "active" : ""}`}>Additional Services</div>
      </div>
      <div className="pages">
            {(step===2)? <Party/>:""}
            {(step===3)? <Logistic/>:""}
            {(step===4)? <Additional/>:""}
      </div>
      <div className="buttons">
        <button className="btn" onClick={() => handleStepChange(step - 1)}>Back</button>
        <button className="btn"  onClick={() => handleStepChange(step + 1)}>Save</button>
      </div>
    </div>
  );
};

export default SupplyChainDiagram;
