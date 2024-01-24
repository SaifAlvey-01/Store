import React, { useEffect, useMemo, useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
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

  useEffect(() => {
    if (!token) {
      router.push("/partner");
    }
  }, []);

  if (!token) {
    return (
      <div
        style={{ backgroundColor: "#F7F9FB" }}
        className="flex h-screen overflow-hidden"
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
        <Header />
        <main className="flex-grow ">
          <div style={{ backgroundColor: "#F7F9FB" }} className="p-6">
            <>
              <div className="shadow font-freesans flex-col bg-white border-b border-slate-200 rounded-lg mt-[-40px] h-screen">
                <p className="text-[18px] font-semibold mx-5 mb-7 pt-7 content-center">
                  Got confused here are all basic questions!
                  <div className="my-7 mr-244 border-t-[1px] border-solid border-slate-200"></div>
                </p>
                <Accordian ques = "How much i earn from LMS referral program?" ans = "Lorem ipsum dolor sit amet consectetur. Volutpat urna molestie dis enim non. Sit a consequat mi lectus. In aliquet sed parturient quam nisl neque ac felis. Nulla fermentum duis viverra vitae in duis a tincidunt." />
                <Accordian ques = "How much i earn from LMS referral program?" ans = "Lorem ipsum dolor sit amet consectetur. Volutpat urna molestie dis enim non. Sit a consequat mi lectus. In aliquet sed parturient quam nisl neque ac felis. Nulla fermentum duis viverra vitae in duis a tincidunt." />
                <Accordian ques = "How much i earn from LMS referral program?" ans = "Lorem ipsum dolor sit amet consectetur. Volutpat urna molestie dis enim non. Sit a consequat mi lectus. In aliquet sed parturient quam nisl neque ac felis. Nulla fermentum duis viverra vitae in duis a tincidunt." />
                <Accordian ques = "How much i earn from LMS referral program?" ans = "Lorem ipsum dolor sit amet consectetur. Volutpat urna molestie dis enim non. Sit a consequat mi lectus. In aliquet sed parturient quam nisl neque ac felis. Nulla fermentum duis viverra vitae in duis a tincidunt." />
                <Accordian ques = "How much i earn from LMS referral program?" ans = "Lorem ipsum dolor sit amet consectetur. Volutpat urna molestie dis enim non. Sit a consequat mi lectus. In aliquet sed parturient quam nisl neque ac felis. Nulla fermentum duis viverra vitae in duis a tincidunt." />
                <Accordian ques = "How much i earn from LMS referral program?" ans = "Lorem ipsum dolor sit amet consectetur. Volutpat urna molestie dis enim non. Sit a consequat mi lectus. In aliquet sed parturient quam nisl neque ac felis. Nulla fermentum duis viverra vitae in duis a tincidunt." />
                <Accordian ques = "How much i earn from LMS referral program?" ans = "Lorem ipsum dolor sit amet consectetur. Volutpat urna molestie dis enim non. Sit a consequat mi lectus. In aliquet sed parturient quam nisl neque ac felis. Nulla fermentum duis viverra vitae in duis a tincidunt." />
                <Accordian ques = "How much i earn from LMS referral program?" ans = "Lorem ipsum dolor sit amet consectetur. Volutpat urna molestie dis enim non. Sit a consequat mi lectus. In aliquet sed parturient quam nisl neque ac felis. Nulla fermentum duis viverra vitae in duis a tincidunt." />
              </div>
            </>
          </div>
        </main>
      </div>
    </div>
  );
};

export default dashboard4;
