import React, { use, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import SignUp1 from "./step1";
import SignUp2 from "./step2";
import SignUp3 from "./step3";
import SignUp4 from "./step4";
import SignUp5 from "./step5";
import SignUp6 from "./step6";
import Footer from "../../../components/footer/footer";
import { NextSeo } from "next-seo";
import Image from "next/image";
import Cookie from "js-cookie";
import Loading from "../../../components/loading";
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
    //google auth calls
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
        return (
          <SignUp4
            setCurrentStep={setCurrentStep}
            email={email}
            setloading={setloading}
          />
        );
      case 5:
        return (
          <SignUp5
            setCurrentStep={setCurrentStep}
            email={email}
            setloading={setloading}
          />
        );
      case 6:
        return <SignUp6 />;
      default:
        return null;
    }
  };

  if (currentStep === null) {
    return null;
  }

  return (
    <>
      <NextSeo
        openGraph={{
          title: "Sign up for Partner",
          description: "Partner can sign up using this page.",
          images: [
            {
              url: "https://example.com/og-image.jpg", // Replace with your image URL
              width: 1200, // Replace with the image width
              height: 630, // Replace with the image height
              alt: "Open Graph Image Alt Text", // Replace with alt text
            },
          ],
          site_name: "LaunchMyStore", // Replace with your site name
          type: "website", // Replace with the appropriate type
        }}
        twitter={{
          handle: "@handle", // Twitter handle
          site: "@site", // Twitter site handle
          cardType: "summary_large_image", // Twitter card type
          title: "Twitter Card Title", // Twitter card title
          description: "Twitter Card Description", // Twitter card description
          image: "https://example.com/twitter-card-image.jpg", // Twitter card image URL
          creator: "@creator", // Twitter card creator
        }}
      />
      {renderStep()}
    </>
  );
};

export default SignupComponent;
