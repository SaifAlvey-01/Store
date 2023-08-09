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
    <div className="bg-[url('/BackgroundMobile.png')] md:bg-[url('/Background.png')] bg-cover bg-no-repeat bg-center h-screen">
      <div className='container w-full mx-auto py-4 px-3 md:text-left text-center'>
       <img
        className="w-[167px] h-[35px] object-cover"
        alt=""
        src="/logo-1@2x.png"
      />

      </div>
       <div className="flex flex-col md:flex-row justify-center items-center font-freesans" style={{minHeight: "calc(100% - 72px)"}}>
      <div className="hidden md:w-1/2 md:flex md:flex-col md:items-center h-[551px] " >
            <img
              src="/signupImg.png" 
              alt="Signup"
              className="h-[551px]"
            />
          </div>     
         
         {renderStep()}
        
       </div>
        
    </div>
  );
};

export default SignupComponent;
