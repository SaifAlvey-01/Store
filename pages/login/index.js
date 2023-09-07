import React, { useState } from "react";
import Login1 from "./Login1";
import Login2 from "./Login2";
import Footer from "../../components/footer/footer";
import { NextSeo } from 'next-seo'

const LoginComponent = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [inputData, setInputData] = useState("");

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <Login1 setCurrentStep={setCurrentStep} setInputData={setInputData} />
        );
      case 2:
        return <Login2 setCurrentStep={setCurrentStep} inputData={inputData} />;

      default:
        return null;
    }
  };

  return (
    <>
     <div>
        <NextSeo
          openGraph={{
            title: 'The title used by twitter',
            description: 'The description used by twitter',
          }}
          twitter={{
            handle: '@handle',
            site: '@site',
            cardType: 'summary_large_image',
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
      <div className="flex flex-col md:flex-row items-center w-auto justify-center font-freesans min-h-[calc(98vh-180px)] sm:min-h-[calc(100% - 72px)] ">
        {renderStep()}
      </div>
      <Footer />
    </div>
    </>
  );
};

export default LoginComponent;
