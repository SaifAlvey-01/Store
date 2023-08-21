import React, { useState } from 'react';
import Login1 from './Login1';
import Login2 from './Login2';

const SignupComponent = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <Login1  setCurrentStep={setCurrentStep}/>;
      case 2:
        return <Login2    setCurrentStep={setCurrentStep}/>;  
   
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
    
         
         {renderStep()}
        
       </div>
        
    </div>
  );
};

export default SignupComponent;
