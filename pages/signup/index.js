import React, { useState } from 'react';
import SignUp1 from '../../components/step1';
import SignUp2 from '../../components/step2';
import SignUp3 from '../../components/step3';
import SignUp5 from '../../components/step5';


const SignupComponent = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <SignUp1  setCurrentStep={setCurrentStep}/>;
      case 2:
        return <SignUp2  setCurrentStep={setCurrentStep}/>;
      case 3:
        return <SignUp3 setCurrentStep={setCurrentStep}/>;
      case 4:
        return <SignUp5 setCurrentStep={setCurrentStep}/>;
      default:
        return null;
    }
  };

  return (
    <div>
        {renderStep()}
    </div>
  );
};

export default SignupComponent;
