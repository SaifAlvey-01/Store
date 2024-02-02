import React, { use, useEffect, useState } from "react";
import Login1 from "../components/login/Login1";
import Login2 from "../components/login/Login2";
import { useRouter } from "next/navigation";
import Footer from "../components/footer/footer";
import { NextSeo } from "next-seo";
import { useSession } from "next-auth/react";
import Cookie from "js-cookie";

const LoginComponent = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [inputData, setInputData] = useState("");
  const { status, data: session } = useSession();
  const token = Cookie.get("token");
  const router = useRouter();

  useEffect(() => {
    if (session?.accessToken || token) {
      router.push("/dashboard");
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

      default:
        return null;
    }
  };

  return (
    <>
      <div>
        <NextSeo
          openGraph={{
            title: "The title used by twitter",
            description: "The description used by twitter",
            images: [
              {
                url: "https://example.com/og-image.jpg", // Replace with your image URL
                width: 1200, // Replace with the image width
                height: 630, // Replace with the image height
                alt: "Open Graph Image Alt Text", // Replace with alt text
              },
            ],
            site_name: "Your Site Name", // Replace with your site name
            type: "website", // Replace with the appropriate type
          }}
          twitter={{
            handle: "@handle",
            site: "@site",
            cardType: "summary_large_image",
            title: "Twitter Card Title", // Replace with Twitter card title
            description: "Twitter Card Description", // Replace with Twitter card description
            image: "https://example.com/twitter-card-image.jpg", // Replace with Twitter card image URL
            creator: "@creator", // Replace with Twitter card creator
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