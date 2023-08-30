import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { postUser } from "../../redux/slices/userSlice";
import SignUp1 from "./step1";
import SignUp2 from "./step2";
import SignUp3 from "./step3";
import SignUp5 from "./step4";

const SignupComponent = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [email, setEmail] = useState("");
  const [formData, setFormData] = useState({});
  const dispatch = useDispatch();
  const handleStepSubmit = () => {
    setCurrentStep(currentStep + 1);
  };

  console.log(formData);

  if (formData.email && formData.password) {
    dispatch(postUser(formData));
  }

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <SignUp1
            setCurrentStep={handleStepSubmit}
            setEmail={setEmail}
            setFormData={setFormData}
          />
        );
      case 2:
        return (
          <SignUp2
            setCurrentStep={handleStepSubmit}
            setFormData={setFormData}
          />
        );
      case 3:
        return <SignUp3 setCurrentStep={setCurrentStep} email={email} />;
      case 4:
        return <SignUp5 setCurrentStep={setCurrentStep} />;
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
      <div className="flex flex-col md:flex-row justify-center items-center font-freesans min-h-[calc(100vh-160px)] sm:min-h-[calc(100% - 100px)]">
        <div className="hidden md:w-1/2 md:flex md:flex-col md:items-center h-[551px] ">
          <img src="/signupImg.png" alt="Signup" className="h-[551px]" />
        </div>

        {renderStep()}
      </div>
    </div>
  );
};

export default SignupComponent;
