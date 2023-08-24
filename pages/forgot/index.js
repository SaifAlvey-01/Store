import React, { useState } from "react";
import Forgot1 from "./forgot1";
import Forgot2 from "./forgot2";
import Forgot3 from "./forgot3";
import Loading from "../../components/loading";
// import Forgot4 from './forgot4';

const ForgotComponent = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [inputValue, setInputValue] = useState("");

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <Forgot1
            inputValue={inputValue}
            setInputValue={setInputValue}
            setCurrentStep={setCurrentStep}
          />
        );
      case 2:
        return (
          <Forgot2 inputValue={inputValue} setCurrentStep={setCurrentStep} />
        );
      case 3:
        return <Forgot3 setCurrentStep={setCurrentStep} />;
      case 4:
        return <Loading url="/login" />;

      default:
        return null;
    }
  };

  return (
    <div className="bg-[url('/BackgroundMobile.png')] md:bg-[url('/Background.png')] bg-cover bg-no-repeat bg-center h-screen">
      <div className="container w-full mx-auto py-4 md:px-3 md:text-left text-center">
        <img
          className="w-[167px] h-[35px] object-cover"
          alt=""
          src="/logo-1@2x.png"
        />
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center font-freesans min-h-[calc(100vh-72px)] sm:min-h-[calc(100% - 72px)]">
        {renderStep()}
      </div>
    </div>
  );
};

export default ForgotComponent;
