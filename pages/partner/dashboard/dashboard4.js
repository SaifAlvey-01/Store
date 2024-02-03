import React, { useEffect, useMemo, useState } from "react";
import Sidebar from "./Sidebar";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import Cookie from "js-cookie";
import pageload from "/public/logoutLoader.json";
import Lottie from "lottie-react";
import Accordian from "./accordian";

const dashboard4 = ({ setCurrentStep, currentStep }) => {
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { status, data: session } = useSession();
  const token = Cookie.get("token");
  const [headerValue, setHeaderValue] = useState(
    router.pathname === "/partner/dashboard" ? "Dashboard" : ""
  );
  const [note, setNote] = useState(0);
  const [data, setData] = useState(" ");
  const getCode = () => {
    navigator.clipboard.writeText(code);
    setNote(1);
    if (note == 1) {
      setData("Code copied successfully.");
    }
    if (note == 2) {
      setData("Thank You mail sent successfully.");
    }
    if (note == 0) {
      setData(" ");
    }
    setTimeout(() => {
      setNote(0);
    }, 4000);
  };

  const sendMail = () => {
    setNote(2);
    if (note == 1) {
      setData("Code copied successfully.");
    }
    if (note == 2) {
      setData("Thank You mail sent successfully.");
    }
    if (note == 0) {
      setData(" ");
    }
    setTimeout(() => {
      setNote(0);
    }, 4000);
  };

  useEffect(() => {
    if (!token) {
      router.push("/partner");
    }
  }, []);

  if (!token) {
    return (
      <div
        style={{ backgroundColor: "#F7F9FB" }}
        className="bg-[url('/partner_assets/bg-gradient.svg')] flex h-screen overflow-hidden"
      >
        <div className=" overflow-y-auto flex flex-col items-center justify-center w-full">
          <div className="h-1/2 w-96 mx-auto my-auto">
            <Lottie animationData={pageload} loop={true} autoplay={true} />;
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      style={{ backgroundColor: "#F7F9FB" }}
      className="flex h-screen overflow-hidden "
    >
      <Sidebar setCurrentStep={setCurrentStep} currentStep={currentStep} />
      <div className="relative flex flex-col flex-1 overflow-x-hidden h-full">
        <>
          <header className="sticky m-6 items-center rounded-lg top-0 shadow flex bg-white border-b border-slate-200 h-[52px]">
            <div>
              <p className="text-[20px] font-freesans font-semibold ml-5 content-center">
                FAQs
              </p>
            </div>
            <div className="absolute flex justify-center items-center right-0">
              {note > 0 && (
                <div
                  className={`${
                    data == " " ? "hidden" : "visible"
                  } h-[40px] px-[10px] text-[14px] flex justify-center items-center rounded-md font-[400] font-freesans bg-[#e5f5ec]`}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.9993 2.6665C6.85668 2.6665 2.66602 6.85717 2.66602 11.9998C2.66602 17.1425 6.85668 21.3332 11.9993 21.3332C17.142 21.3332 21.3327 17.1425 21.3327 11.9998C21.3327 6.85717 17.142 2.6665 11.9993 2.6665ZM16.4607 9.85317L11.1687 15.1452C11.038 15.2758 10.8607 15.3505 10.674 15.3505C10.4873 15.3505 10.31 15.2758 10.1793 15.1452L7.53802 12.5038C7.26735 12.2332 7.26735 11.7852 7.53802 11.5145C7.80868 11.2438 8.25668 11.2438 8.52735 11.5145L10.674 13.6612L15.4713 8.86384C15.742 8.59317 16.19 8.59317 16.4607 8.86384C16.7313 9.1345 16.7313 9.57317 16.4607 9.85317Z"
                      fill="#0C9D61"
                    />
                  </svg>
                  <p className="m-1">{data}</p>
                </div>
              )}
              <img
                className="w-[28px] h-[28px] mx-5"
                src="/partner_assets/profile.svg"
              />
            </div>
          </header>
        </>
        <main className="flex-grow ">
          <div style={{ backgroundColor: "#F7F9FB" }} className="p-6">
            <>
              <div className="shadow font-freesans flex-col pb-5 bg-white border-b border-slate-200 rounded-lg mt-[-40px] h-full">
                <p className="text-[18px] font-semibold mx-5 mb-7 pt-7 content-center">
                  Got confused here are all basic questions!
                  <div className="my-7 mr-244 border-t-[1px] border-solid  border-slate-200"></div>
                </p>
                <Accordian
                  className="cursor-pointer"
                  ques="What type of businesses can use LaunchMyStore?"
                  ans="LaunchMyStore is ideal for entrepreneurs primarily engaged in online business operations. Moreover, for businesses dependent on regular repeat purchases, Dukaan's supplementary features facilitate seamless and prompt transactions, enhancing customer loyalty and minimizing abandoned carts."
                />
                <Accordian
                  className="cursor-pointer"
                  ques="What payment providers are available?"
                  ans="You have the option to receive payments from your customers through either LaunchMyStore Pay or by integrating with Razorpay for online transactions. Through LaunchMyStore Pay, we provide your customers with various payment methods, including UPI, Credit/Debit cards, and PayPal or Stripe for users located outside India."
                />
                <Accordian
                  className="cursor-pointer"
                  ques="Do I need to enter payment details to sign up?"
                  ans="Signing up for LaunchMyStore is absolutely free, and we don't require any upfront payment or payment information. Enjoy a complimentary 7-day trial period to explore LaunchMyStore. After the trial, you'll need to choose and purchase a plan to continue using LaunchMyStore."
                />
                <Accordian
                  className="cursor-pointer"
                  ques="What delivery partner integrations do you offer?"
                  ans="Experience top-tier shipping rates through LaunchMyStore's exclusive delivery service – LaunchMyStore Delivery. We've collaborated with premier courier companies, securing optimal rates to provide you with cost-effective shipping solutions. Say goodbye to the complexities of managing multiple providers, manual payment reconciliation, and error-prone order information entry into different interfaces. Learn more about the benefits of LaunchMyStore Delivery here."
                />
                <Accordian
                  className="cursor-pointer"
                  ques="What is LaunchMyStore plugin market place?"
                  ans="Explore the LaunchMyStore plugin marketplace to enhance your existing store with additional functionality. Choose from a variety of plugins designed for marketing, customer support, analytics, delivery, SEO, and other optimizations to elevate your online business. Discover more about LaunchMyStore plugins here."
                />
                <Accordian
                  className="cursor-pointer"
                  ques="What is LaunchMyStore Marketing?"
                  ans="Utilize LaunchMyStore Marketing to seamlessly execute marketing campaigns through SMS, WhatsApp, or Facebook and Instagram ads directly from your LaunchMyStore account, reaching your customers effectively. Explore further details about LaunchMyStore Marketing by clicking here."
                />
                <Accordian
                  className="cursor-pointer"
                  ques="Can I use custom domain name for my site?"
                  ans="Opting for a new personalized domain name through LaunchMyStore is available for an extra fee. This exclusive domain will seamlessly connect to your LaunchMyStore platform with HTTPS functionality, ensuring global accessibility within just 10 minutes."
                />
                <Accordian
                  className="cursor-pointer"
                  ques="Can I Link my existing domain for my site?"
                  ans="Feel free to connect your existing domain to your LaunchMyStore store at no cost. For additional information on how to link an existing domain, please click here."
                />
                <Accordian
                  className="cursor-pointer"
                  ques="Can I customize the design of my eCommerce store?"
                  ans="Explore LaunchMyStore's themes marketplace, featuring a variety of themes tailored to suit your business needs. Customize fonts, colors, and different sections of the theme to create a unique look for your store. For more information on LaunchMyStore Themes, click here."
                />
                <Accordian
                  className="cursor-pointer"
                  ques="What are LaunchMyStore credits?"
                  ans="Introducing LaunchMyStore Credits – a wallet-centric solution enabling effortless management of marketing campaigns, seamless utilization of Dukaan Delivery and RTO Optimizer, along with automated order updates sent directly from your Whatsapp Business account. Each Dukaan Credit is equivalent to Rs. 1."
                />
                <Accordian
                  className="cursor-pointer"
                  ques="Do you provide a Whatsapp Business Solution?"
                  ans="Certainly, you have the option to acquire a WhatsApp Business Solution through our plugin. This enables you to dispatch order updates to your customers directly from your WhatsApp business account."
                />
                <Accordian
                  className="cursor-pointer"
                  ques="Can I give access to my staff on LaunchMyStore?"
                  ans="Feel free to grant access to your team by utilizing staff accounts on LaunchMyStore. Learn how to create a staff account by checking out the steps here."
                />
                <Accordian
                  className="cursor-pointer"
                  ques="What is multi-warehouse support?"
                  ans="Having multiple warehouses enables you to select from more than one pickup location for product delivery. For additional information on multi-warehouse support, please click here."
                />
                <Accordian
                  className="cursor-pointer"
                  ques="Can I upgrade my plan later on?"
                  ans="Certainly! To enhance your LaunchMyStore plan, simply navigate to the Account details section on LaunchMyStore. Upgrade your current plan to either the Gold or Platinum tier for your preferred duration. If you require assistance, feel free to contact us at support@nftwatcher.net. We're here to help!"
                />
                <Accordian
                  className="cursor-pointer"
                  ques="Will there be an auto-debit after the subscription ends?"
                  ans="No, the subscription fees will not be automatically deducted upon the conclusion of the subscription."
                />
              </div>
            </>
          </div>
        </main>
      </div>
    </div>
  );
};

export default dashboard4;
