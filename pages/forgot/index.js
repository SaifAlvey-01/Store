import React, { useState } from 'react';
import Forgot1 from '../../components/forgot1';
import Forgot2 from '../../components/forgot2';
import Forgot3 from '../../components/forgot3';
import Forgot4 from '../../components/forgot4';

const ForgotComponent = () => {
    const [currentStep, setCurrentStep] = useState(1);

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <Forgot1  setCurrentStep={setCurrentStep}/>;
      case 2:
        return <Forgot2  setCurrentStep={setCurrentStep}/>;
      case 3:
        return <Forgot4 setCurrentStep={setCurrentStep}/>;
      case 4:
        return <Forgot3 setCurrentStep={setCurrentStep}/>;
      default:
        return null;
    }
}

    return (

        <div className="bg-[url('/Background.png')] bg-cover bg-center w-[100%]">
            <div className='w-full flex justify-center items-center md:justify-start md:ml-32 h-20'>
                <img
                    className="w-[167px] h-[35px] object-cover"
                    alt=""
                    src="/logo-1@2x.png"
                />

            </div>
            <div className="flex flex-col md:flex-row h-screen justify-around  items-center bg-[url('/Background.png')]  font-freesans">
            {renderStep()}
            </div>

        </div>
    );
};

export default ForgotComponent;
