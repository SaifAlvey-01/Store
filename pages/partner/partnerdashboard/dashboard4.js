import React, { useEffect, useMemo, useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import Cookie from "js-cookie";
import pageload from "/public/logoutLoader.json";
import Lottie from "lottie-react";

const dashboard4 = ({ setCurrentStep, currentStep }) => {
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { status, data: session } = useSession();
  const token = Cookie.get("token");
  const [headerValue, setHeaderValue] = useState(
    router.pathname === "/partner/partnerdashboard" ? "Dashboard" : ""
  );

  useEffect(() => {
    if (!token) {
      router.push("/partner/partnerlogin");
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
              <div className="lg:shadow font-freesans flex bg-white border-b border-slate-200 rounded-lg mt-[-15px] h-screen">
                <p className="text-[18px] font-semibold mx-5 my-7 content-center">
                  Got confused here are all basic questions!
                </p>
                <hr />
              </div>
            </>
          </div>
        </main>
      </div>
    </div>
  );
};

export default dashboard4;
