import React, { useState } from "react";
import Forgot1 from "./forgot1";
import Forgot2 from "./forgot2";
import Forgot3 from "./forgot3";
import Forgot4 from "./forgot4";
import Loading from "../../../components/loading";
import Footer from "../../../components/footer/footer";
import { NextSeo } from 'next-seo'
// import Forgot4 from './forgot4';

const ForgotComponent = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [inputValue, setInputValue] = useState("");
  const [OTP, setOTP] = useState("");

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
          <Forgot2 inputValue={inputValue}
           setCurrentStep={setCurrentStep} 
           setOTP={setOTP}
           OTP={OTP}
           />
        );
      case 3:
        return <Forgot3 
        setCurrentStep={setCurrentStep} 
        inputValue= {inputValue}
        OTP={OTP}
        />;
      case 4:
        return <Forgot4 />;

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
            images: [
              {
                url: 'https://example.com/og-image.jpg', // Replace with your image URL
                width: 1200, // Replace with the image width
                height: 630, // Replace with the image height
                alt: 'Open Graph Image Alt Text', // Replace with alt text
              },
            ],
            site_name: 'Your Site Name', // Replace with your site name
            type: 'website', // Replace with the appropriate type
          }}
          twitter={{
            handle: '@handle',
            site: '@site',
            cardType: 'summary_large_image',
            title: 'Twitter Card Title', // Replace with Twitter card title
            description: 'Twitter Card Description', // Replace with Twitter card description
            image: 'https://example.com/twitter-card-image.jpg', // Replace with Twitter card image URL
            creator: '@creator', // Replace with Twitter card creator
          }}
        />
    </div>
        {renderStep()}
    </>
  );
};

export default ForgotComponent;
