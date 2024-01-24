import React, { useState } from "react";
import Dashboard1 from "./dashboard1";
import Dashboard2 from "./dashboard2";
import Dashboard3 from "./dashboard3";
import Dashboard4 from "./dashboard4";
import Dashboard5 from "./dashboard5";
import Dashboard6 from "./dashboard6";
import { NextSeo } from "next-seo";

const index = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const renderStep = () => {
    switch (4) {
      case 1:
        return <Dashboard1 setCurrentStep={setCurrentStep} currentStep={currentStep} />;
      case 2:
        return <Dashboard2 setCurrentStep={setCurrentStep} currentStep={currentStep} />;
      case 3:
        return <Dashboard3 setCurrentStep={setCurrentStep} currentStep={currentStep} />;
      case 4:
        return <Dashboard4 setCurrentStep={setCurrentStep} currentStep={currentStep} />;
      case 5:
        return <Dashboard5 setCurrentStep={setCurrentStep} currentStep={currentStep} />;
      case 6:
        return <Dashboard6 setCurrentStep={setCurrentStep} currentStep={currentStep} />;
      default:
        return null;
    }
  };
  return (
    <>
      <div>
        <NextSeo
          openGraph={{
            title: "Dashboard for Partner",
            description: "Partner can view everything using this page.",
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
      </div>
      {renderStep()}
    </>
  );
};

export default index;
