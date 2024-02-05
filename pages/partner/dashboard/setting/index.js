"use client";
import React, { useState } from "react";
import Dashboard1 from "././profile/index";
import Dashboard2 from "././payment/index";

const index = ({ setCurrentStep, currentStep }) => {
  const renderStep = () => {
    const [currStep, setCurrStep] = useState(1);
    switch (currStep) {
      case 1:
        return (
          <Dashboard1
            setCurrStep={setCurrStep}
            currStep={currStep}
            setCurrentStep={setCurrentStep}
            currentStep={currentStep}
          />
        );
      case 2:
        return (
          <Dashboard2
            setCurrStep={setCurrStep}
            currStep={currStep}
            setCurrentStep={setCurrentStep}
            currentStep={currentStep}
          />
        );
      default:
        return null;
    }
  };
  return <>{renderStep()}</>;
};

export default index;
