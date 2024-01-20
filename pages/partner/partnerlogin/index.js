import React, { useEffect, useState } from "react";
import Login1 from "./step1";
import Login2 from "./step2";
import Login3 from "./step3";
import { useRouter } from "next/navigation";
import { NextSeo } from "next-seo";
import { useSession } from "next-auth/react";
import Cookie from "js-cookie";
import { useSelector, useDispatch } from "react-redux";
import Footer from "../../../components/footer/footer";
import Image from "next/image";
import Loading from "../../../components/loading";

const LoginComponent = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [inputData, setInputData] = useState("");
  const { status, data: session } = useSession();
  const token = Cookie.get("token");
  const router = useRouter();

  useEffect(() => {
    if (session?.accessToken || token) {
      router.push("/partner/partnerdashboard");
    }
  }, []);

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <Login1 setCurrentStep={setCurrentStep} setInputData={setInputData} />
        );
      case 2:
        return <Login2 setCurrentStep={setCurrentStep} inputData={inputData} />;
      case 3:
        return <Login3 />;
      default:
        return null;
    }
  };

  return (
    <>
      <div>
        <NextSeo
          openGraph={{
            title: "Forgot Password for Partner",
            description: "Partner can change password using this page.",
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

export default LoginComponent;
