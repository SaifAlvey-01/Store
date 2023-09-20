import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import SignUp1 from "./step1";
import SignUp2 from "./step2";
import SignUp3 from "./step3";
import SignUp4 from "./step4";
import Footer from "../../components/footer/footer";
import { NextSeo } from "next-seo";
import Image from "next/image";

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

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <SignUp1
            setCurrentStep={handleStepSubmit}
            setEmail={setEmail}
            setFormData={setFormData}
            email={email}
          />
        );
      case 2:
        return (
          <SignUp2
            setCurrentStep={handleStepSubmit}
            setFormData={setFormData}
            email={email}
          />
        );
      case 3:
        return <SignUp3 setCurrentStep={setCurrentStep} email={email} />;
      case 4:
        return <SignUp4 setCurrentStep={setCurrentStep} email={email} />;
      default:
        return null;
    }
  };

  if (currentStep === null) {
    return null;
  }

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
            <div className="relative h-[551px] w-[705.473px]">
              <Image
                src="/signupImg.png"
                alt="Signup"
                layout="fill"
                objectFit="contain"
              />
            </div>
          </div>

          {renderStep()}
        </div>
        <Footer />
      </div>
    </>
  );
};

export default SignupComponent;
