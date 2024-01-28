import React, { useEffect, useMemo, useState } from "react";
import Sidebar from "./Sidebar";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import Cookie from "js-cookie";
import pageload from "/public/logoutLoader.json"
import Lottie from "lottie-react";

const dashboard5 = ({ setCurrentStep, currentStep }) => {
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { status, data: session } = useSession();
  const token = Cookie.get("token");
  const [headerValue, setHeaderValue] = useState(
    router.pathname === "/partner/dashboard" ? "Dashboard" : ""
  );
  const [opc, setOpc] = useState(0);

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
    const [note, setNote] = useState(0);
    const [data, setData] = useState(" ");
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
    return <div
      style={{ backgroundColor: "#F7F9FB" }}
      className="flex h-screen overflow-hidden"
    >
      <div className=" overflow-y-auto flex flex-col items-center justify-center w-full"
      >
        <div className="h-1/2 w-96 mx-auto my-auto">
          <Lottie
            animationData={pageload}
            loop={true}
            autoplay={true}
          />;
        </div>

      </div>
    </div>
  }



  return (
    <div
      style={{ backgroundColor: "#F7F9FB" }}
      className="flex h-screen overflow-hidden "
    >
      <Sidebar
        setCurrentStep={setCurrentStep}
        currentStep={currentStep}
      />
      <div className="relative flex flex-col flex-1 overflow-x-hidden h-full">
        <>
          <header className="sticky m-6 items-center rounded-lg top-0 shadow flex bg-white border-b border-slate-200 h-[52px]">
            <div>
              <p className="text-[20px] font-freesans font-semibold ml-5 content-center">
                Settings
              </p>
            </div>
            <div className="absolute flex justify-center items-center right-0">
              {note > 0 && (
                <div
                  className={`${data == " " ? "hidden" : "visible"
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
        <main className="flex-grow">
          <div
            style={{ backgroundColor: "#F7F9FB" }}
            className="py-5 ml-1 mr-11 flex justify-center items-center "
          >
            <>
              <div className={`w-[508px] h-[539px] visible rounded-[24px] bg-white`}>
                <div className="p-[24px]">
                  <div className="flex justify-between mx-2"><p className="text-[20px] font-semibold font-freesans mt-[-1px]">Withdraw Funds</p>
                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.9998 6.49982C17.8123 6.31235 17.558 6.20703 17.2928 6.20703C17.0277 6.20703 16.7733 6.31235 16.5858 6.49982L11.9998 11.0858L7.41382 6.49982C7.22629 6.31235 6.97198 6.20703 6.70682 6.20703C6.44165 6.20703 6.18735 6.31235 5.99982 6.49982C5.81235 6.68735 5.70703 6.94165 5.70703 7.20682C5.70703 7.47198 5.81235 7.72629 5.99982 7.91382L10.5858 12.4998L5.99982 17.0858C5.81235 17.2733 5.70703 17.5277 5.70703 17.7928C5.70703 18.058 5.81235 18.3123 5.99982 18.4998C6.18735 18.6873 6.44165 18.7926 6.70682 18.7926C6.97198 18.7926 7.22629 18.6873 7.41382 18.4998L11.9998 13.9138L16.5858 18.4998C16.7733 18.6873 17.0277 18.7926 17.2928 18.7926C17.558 18.7926 17.8123 18.6873 17.9998 18.4998C18.1873 18.3123 18.2926 18.058 18.2926 17.7928C18.2926 17.5277 18.1873 17.2733 17.9998 17.0858L13.4138 12.4998L17.9998 7.91382C18.1873 7.72629 18.2926 7.47198 18.2926 7.20682C18.2926 6.94165 18.1873 6.68735 17.9998 6.49982Z" fill="#374957" />
                    </svg>
                  </div>
                  <div className="mx-[5px] border-t-[1px] border-solid border-slate-200"></div>
                  <div className="items-center w-full h-[94px] flex mt-5 shadow bg-[#f7f9ff] border-solid border-l-4 rounded-[16px] border-[#9a6aff] justify-between ml-[-3px]">
                    <p className="ml-4 text-[14px]">Available Balance</p>
                    <div className="flex mr-4 items-center justify-center bg-[#e9f2ff] text-[#9a6aff] h-[67px] w-[102px] rounded-[12px]">
                      <p className="text-[24px] font-[600] font-sans">$724</p>
                    </div>
                  </div>
                </div>
              </div>
            </>
          </div>
        </main>
      </div>
    </div>
  );
};

export default dashboard5;
