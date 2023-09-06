import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { postUser } from "../../redux/slices/userSlice";
import SignUp1 from "./step1";
import SignUp2 from "./step2";
import SignUp3 from "./step3";
import SignUp5 from "./step4";
import Footer from "../../components/footer/footer";
import { NextSeo } from 'next-seo'
//seo

const SignupComponent = () => {
  const [currentStep, setCurrentStep] = useState(null);
  const [email, setEmail] = useState("");
  const [formData, setFormData] = useState({});
  const dispatch = useDispatch();

  useEffect(() => {
    const savedStep = Number(localStorage.getItem("signupCurrentStep")) || 1;
    setCurrentStep(savedStep);
  }, []);

  useEffect(() => {
    if (currentStep !== null) {
      localStorage.setItem("signupCurrentStep", currentStep.toString());
    }
  }, [currentStep]);

  const handleStepSubmit = () => {
    setCurrentStep(currentStep + 1);
  };

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

  if (currentStep === null) {
    return null; // or <LoadingSpinner />
  }

  return (
    <>
    <div>
        <NextSeo
            title="Page Title"
            description="The description"
            openGraph={{
                type: "website"
            }}
        />
    </div>
    
    <div className="bg-[url('/BackgroundMobile.png')] md:bg-[url('/Background.png')] bg-cover bg-no-repeat bg-center h-screen">
      <div className="container w-full mx-auto py-4 md:px-3 md:text-left text-center">
        <img
          className="w-[167px] h-[35px] object-cover"
          alt=""
          src="/logo-1@2x.png"
        />
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center font-freesans min-h-[calc(98vh-180px)] sm:min-h-[calc(100% - 100px)]">
        <div className="hidden md:w-1/2 md:flex md:flex-col md:items-center h-[551px] ">
          <img src="/signupImg.png" alt="Signup" className="h-[551px] w-[705.473px] " />
        </div>

        {renderStep()}
      </div>
      <Footer />
    </div>
    </>
  );
};

export default SignupComponent;
