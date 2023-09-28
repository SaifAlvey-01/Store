import React, { use, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import SignUp1 from "./step1";
import SignUp2 from "./step2";
import SignUp3 from "./step3";
import SignUp4 from "./step4";
import Footer from "../../components/footer/footer";
import { NextSeo } from "next-seo";
import Image from "next/image";
import Cookie from "js-cookie";
import Loading from "../../components/loading";
//seo

const SignupComponent = () => {
  const [currentStep, setCurrentStep] = useState(null);
  const [email, setEmail] = useState("");
  const [formData, setFormData] = useState({});
  const [loading, setloading] = useState(false);
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

  // const handleStepSubmit = () => {
  //   setCurrentStep(currentStep + 1);
  // };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <SignUp1
            setCurrentStep={setCurrentStep}
            setEmail={setEmail}
            setFormData={setFormData}
            email={email}
          />
        );
      case 2:
        return (
          <SignUp2
            setCurrentStep={setCurrentStep}
            setFormData={setFormData}
            email={email}
          />
        );
      case 3:
        return <SignUp3 setCurrentStep={setCurrentStep} email={email} />;
      case 4:
        return <SignUp4 setCurrentStep={setCurrentStep} email={email} setloading={setloading}/>;
        case 5:
        return (
          <Loading
            url="/dashboard"
            message="Creating Store..."
            duration="3000"
          />)
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
            handle: '@handle', // Twitter handle
            site: '@site', // Twitter site handle
            cardType: 'summary_large_image', // Twitter card type
            title: 'Twitter Card Title', // Twitter card title
            description: 'Twitter Card Description', // Twitter card description
            image: 'https://example.com/twitter-card-image.jpg', // Twitter card image URL
            creator: '@creator', // Twitter card creator
          }}
        />
    </div>

      <div className="bg-[url('/BackgroundMob ile.png')] md:bg-[url('/Background.png')] bg-cover bg-no-repeat bg-center h-screen">
        <div className="container w-full mx-auto py-4 md:px-3 md:text-left text-center">
          <img
            className="w-[167px] h-[35px] object-cover"
            alt=""
            src="/logo-1@2x.png"
          />
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center font-freesans min-h-[calc(98vh-180px)] sm:min-h-[calc(100% - 100px)]">
         {!loading && <div className="hidden md:w-1/2 md:flex md:flex-col md:items-center h-[551px] ">
            <div className="relative h-[551px] w-[705.473px]">
              <Image
                src="/signupImg.png"
                alt="Signup"
                layout="fill"
                objectFit="contain"
              />
            </div>
          </div>}

          {renderStep()}
        </div>
        <Footer />
      </div>
    </>
  );
};

export default SignupComponent;
