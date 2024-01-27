import React, { useEffect, useMemo, useState } from "react";
import Sidebar from "./Sidebar";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import Cookie from "js-cookie";
import pageload from "/public/logoutLoader.json"
import Lottie from "lottie-react";
import IncomeList from "./IncomeList";
import OrderListing from "./refferal-listing";

const dashboard3 = ({ setCurrentStep, currentStep }) => {
  const[opc, setOpc] = useState(0);
  const [selectedOrder, setSelectedOrder] = useState(null);
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
      className={`flex h-screen overflow-hidden ${opc == 1? "opacity-20": ""}`} 
    >
      <Sidebar
        setCurrentStep={setCurrentStep}
        currentStep={currentStep}
      />
      <div className={`relative flex flex-col flex-1 overflow-x-hidden h-full ${opc == 1? "opacity-20": ""}`} >
        <>
          <header className="sticky m-6 items-center rounded-lg top-0 shadow flex bg-white border-b border-slate-200 h-[52px]">
            <div>
              <p className="text-[20px] font-freesans font-semibold ml-5 content-center">
                Income
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
        <main className="flex-grow ">
          <div
            style={{ backgroundColor: "#F7F9FB" }}
            className=" py-5 ml-1 mr-11"
          >
            <>

              <div>
                <div className="flex-col shadow font-freesans bg-white border-b mx-5 border-slate-200 rounded-lg mt-[-25px] h-[630px] w-full">
                  <div className="py-[24px] flex">
                    <div className="items-center justify-between h-[94px] mt-5 flex ml-[24px] w-[344px] shadow bg-[#f7f9ff] border-solid border-l-4 rounded-[16px] border-[#6983ff]">
                      <p className="ml-4 text-[14px]">Total Revenue</p>
                      <div className="flex mr-4 items-center justify-center bg-[#e9f2ff] text-[#6983ff] h-[67px] w-[102px] rounded-[12px]">
                        <p className="text-[24px] font-[600] font-sans">$1.05</p>
                      </div>
                    </div>
                    <div onClick={() => setOpc(1)} className="items-center h-[94px] flex ml-[24px] mt-5 w-[344px] shadow bg-[#f7f9ff] border-solid border-l-4 rounded-[16px] border-[#9a6aff] justify-between">
                      <p className="ml-4 text-[14px]">Withdraw Balance</p>
                      <div className="flex mr-4 items-center justify-center bg-[#e9f2ff] text-[#9a6aff] h-[67px] w-[102px] rounded-[12px]">
                        <p className="text-[24px] font-[600] font-sans">$724</p>
                      </div>
                    </div>
                    <div className="items-center h-[94px] flex ml-[24px] mt-5  mr-[24px] w-[344px] shadow bg-[#fff8f9] border-solid border-l-4 rounded-[16px] border-[#ff4162] justify-between">
                      <p className="ml-4 text-[14px]">Pending</p>
                      <div className="flex mr-4 items-center justify-center bg-[#ffecef] text-[#ff4162] h-[67px] w-[102px] rounded-[12px]">
                        <p className="text-[24px] font-[600] font-sans">$438</p>
                      </div>
                    </div>
                  </div>
                  <div className="mx-[25px] border-t-[1px] border-solid border-slate-200"></div>
                  <div className="h-[278px] my-10 flex justify-center align-center mx-10">
                    <IncomeList />
                  </div>
                  <div className="mx-[25px] border-t-[1px] border-solid border-slate-200"></div>
                  <div className="flex absolute mr-[55px] right-0 pt-7">
                    <div onClick={() => setCurrentStep(5)} className="mx-4 cursor-pointer w-[134px] h-[36px] rounded-md flex items-center justify-center border-2 border-dashed text-[#4162ff] border-[#4162ff]">
                      <p className="text-[14px]">Settings</p>
                    </div>
                    <div className="mx-2 justify-center cursor-pointer w-[162px] h-[36px] rounded-md flex items-center border-2 bg-[#4162ff] border-[#4162ff] border-solid text-white">
                      <p className="text-[14px] font-[400]">Withdraw Balance</p>
                    </div>
                  </div>
                </div>
                <div className="flex-col shadow font-freesans bg-white border-b mx-5 border-slate-200 rounded-lg mt-[20px] w-full">
                  <div className="flex p-[30px] align-center justify-between">
                    <div>
                      <p className="text-[18px] font-[600] mt-[8px]">
                        Recent referrals Earnings
                      </p>
                    </div>
                    <div onClick={() => setCurrentStep(2)} className="mx-2 justify-center cursor-pointer w-[93px] h-[36px] rounded-md flex items-center border-2 bg-[#4162ff] border-[#4162ff] border-solid text-white">
                      <p className="text-[14px] font-[400]">View List</p>
                    </div>
                  </div>
                  <div className="mx-[25px] border-t-[1px] border-solid border-slate-200"></div>
                  <div className="py-5 flex-grow justify-center items-center">
                    <OrderListing
                      setSelectedOrder={setSelectedOrder}
                      className=""
                    /></div>
                </div>
              </div>
            </>
          </div>
        </main>
      </div>
    </div>
  );
};

export default dashboard3;
