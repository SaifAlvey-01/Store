import React, { useEffect, useMemo, useState } from "react";
import Sidebar from "./Sidebar";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import Cookie from "js-cookie";
import pageload from "/public/logoutLoader.json";
import Lottie from "lottie-react";
import IncomeList from "./IncomeList";
import OrderListing from "./refferal-listing";

const dashboard3 = ({ setCurrentStep, currentStep }) => {
  const [opc, setOpc] = useState(0);
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
    <div className="flex justify-center  bg-black content-center align-center self-center items-center w-screen h-full">
      <div
        className={`w-full h-full grid place-items-center z-40  absolute ${
          opc == 1 ? "visible bg-black bg-opacity-60" : "hidden"
        }`}
      >
        <div
          className={`w-[508px] z-50 h-[545px] visible object-center rounded-[24px] shadow border-slate-200 bg-white`}
        >
          <div className="p-[24px]">
            <div className="flex justify-between mx-2">
              <p className="text-[20px] font-semibold font-freesans mt-[-1px]">
                Withdraw Funds
              </p>
              <svg
                className="cursor-pointer"
                onClick={() => setOpc(0)}
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.9998 6.49982C17.8123 6.31235 17.558 6.20703 17.2928 6.20703C17.0277 6.20703 16.7733 6.31235 16.5858 6.49982L11.9998 11.0858L7.41382 6.49982C7.22629 6.31235 6.97198 6.20703 6.70682 6.20703C6.44165 6.20703 6.18735 6.31235 5.99982 6.49982C5.81235 6.68735 5.70703 6.94165 5.70703 7.20682C5.70703 7.47198 5.81235 7.72629 5.99982 7.91382L10.5858 12.4998L5.99982 17.0858C5.81235 17.2733 5.70703 17.5277 5.70703 17.7928C5.70703 18.058 5.81235 18.3123 5.99982 18.4998C6.18735 18.6873 6.44165 18.7926 6.70682 18.7926C6.97198 18.7926 7.22629 18.6873 7.41382 18.4998L11.9998 13.9138L16.5858 18.4998C16.7733 18.6873 17.0277 18.7926 17.2928 18.7926C17.558 18.7926 17.8123 18.6873 17.9998 18.4998C18.1873 18.3123 18.2926 18.058 18.2926 17.7928C18.2926 17.5277 18.1873 17.2733 17.9998 17.0858L13.4138 12.4998L17.9998 7.91382C18.1873 7.72629 18.2926 7.47198 18.2926 7.20682C18.2926 6.94165 18.1873 6.68735 17.9998 6.49982Z"
                  fill="#374957"
                />
              </svg>
            </div>
            <div className="mx-[5px] border-t-[1px] border-solid border-slate-200"></div>
            <div className="items-center w-full h-[94px] flex mt-5 shadow bg-[#f7f9ff] border-solid border-l-4 rounded-[16px] border-[#9a6aff] justify-between ml-[-3px]">
              <p className="ml-4 text-[14px]">Available Balance</p>
              <div className="flex mr-4 items-center justify-center bg-[#e9f2ff] text-[#9a6aff] h-[67px] w-[102px] rounded-[12px]">
                <p className="text-[24px] font-[600] font-sans">$724</p>
              </div>
            </div>
            <p className="text-[12px] md:ml-[120px] w-full">
              You must need 100$ to withdraw amount
            </p>

            <div className="mt-5">
              <p className="text-[#374151] pt-3">Amount</p>
              <div className="relative mx-auto">
                <input
                  placeholder="Enter Amount Your Want to Withdraw"
                  className={`h-[14px] w-[420px] mt-[-8px] rounded-[8px] pl-5 ring-1 ring-inset ring-gray-300 focus:ring-[#4162FF] focus:border-[#b3c0ff] focus:outline-none focus:ring-1 border-slate-300  self-stretch bg-white flex flex-row  py-3.5 px-4 items-center justify-start text-[#4B4B4B] font-roboto border-[1.5px] border-solid md:border-gainsboro `}
                />
                <svg
                  className="absolute top-0 mt-[9px] mr-[12px] right-0"
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.66992 14.8298C8.66992 16.1198 9.65992 17.1598 10.8899 17.1598H13.3999C14.4699 17.1598 15.3399 16.2498 15.3399 15.1298C15.3399 13.9098 14.8099 13.4798 14.0199 13.1998L9.98992 11.7998C9.19992 11.5198 8.66992 11.0898 8.66992 9.86984C8.66992 8.74984 9.53992 7.83984 10.6099 7.83984H13.1199C14.3499 7.83984 15.3399 8.87984 15.3399 10.1698"
                    stroke="#767783"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M12 6.5V18.5"
                    stroke="#767783"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M2 9.5C2 4.5 4 2.5 9 2.5H15C20 2.5 22 4.5 22 9.5V15.5C22 20.5 20 22.5 15 22.5H9C4 22.5 2 20.5 2 15.5V13.53"
                    stroke="#767783"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </div>
            <div className="mt-5">
              <p className="text-[#374151] pt-3">Select Account</p>
              <div className="relative mx-auto">
                <input
                  placeholder="Enter Amount Your Want to Withdraw"
                  className={`h-[14px] w-[420px] mt-[-8px] rounded-[8px] pl-5 ring-1 ring-inset ring-gray-300 focus:ring-[#4162FF] focus:border-[#b3c0ff] focus:outline-none focus:ring-1 border-slate-300  self-stretch bg-white flex flex-row  py-3.5 px-4 items-center justify-start text-[#4B4B4B] font-roboto border-[1.5px] border-solid md:border-gainsboro `}
                />
                <svg
                  className="absolute top-0 mt-[12px] mr-[14px] right-0"
                  width="18"
                  height="19"
                  viewBox="0 0 18 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.9396 7.21289L10.0496 12.1029C9.47207 12.6804 8.52707 12.6804 7.94957 12.1029L3.05957 7.21289"
                    stroke="#767783"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <p className="text-[#3A70E2] text-[12px]">
                Add Another Bank Account
              </p>
            </div>
            <div className="mx-[5px] border-t-[1px] my-5 border-solid border-slate-200"></div>
            <div className="flex justify-end items-end">
              <div className="mx-2 justify-center cursor-pointer w-[132px] h-[36px] rounded-md flex items-center border-2 border-slate-200 border-solid text-white">
                <p onClick={() => setOpc(0)} className="text-[14px] text-black font-[400]">Cancel</p>
              </div>
              <div className="mx-2 justify-center cursor-pointer w-[132px] h-[36px] rounded-md flex items-center border-2 bg-[#4162ff] border-[#4162ff] border-solid text-white">
                <p className="text-[14px] font-[400]">Withdraw</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        style={{ backgroundColor: "#F7F9FB" }}
        className={`flex h-screen overflow-hidden ${
          opc == 1 ? "bg-black " : "bg-black"
        }`}
      >
        <Sidebar setCurrentStep={setCurrentStep} currentStep={currentStep} />
        <div
          className={`relative flex flex-col flex-1 overflow-x-hidden h-full`}
        >
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
            <div
              style={{ backgroundColor: "#F7F9FB" }}
              className=" py-5 ml-1 mr-11"
            >
              <>
                <div>
                  <div className="flex-col shadow font-freesans bg-white border-b mx-5 border-slate-200 rounded-lg mt-[-25px] h-[600px] w-full">
                    <div className="py-[24px] flex">
                      <div className="items-center justify-between h-[94px] flex ml-[24px] w-[344px] shadow bg-[#f7f9ff] border-solid border-l-4 rounded-[16px] border-[#6983ff]">
                        <p className="ml-4 text-[14px]">Total Revenue</p>
                        <div className="flex mr-4 items-center justify-center bg-[#e9f2ff] text-[#6983ff] h-[67px] w-[102px] rounded-[12px]">
                          <p className="text-[24px] font-[600] font-sans">
                            $1.05
                          </p>
                        </div>
                      </div>
                      <div
                        onClick={() => setOpc(1)}
                        className="items-center h-[94px] flex ml-[24px] w-[344px] shadow bg-[#f7f9ff] border-solid border-l-4 rounded-[16px] border-[#9a6aff] justify-between"
                      >
                        <p className="ml-4 text-[14px]">Withdraw Balance</p>
                        <div className="flex mr-4 items-center justify-center bg-[#e9f2ff] text-[#9a6aff] h-[67px] w-[102px] rounded-[12px]">
                          <p className="text-[24px] font-[600] font-sans">
                            $724
                          </p>
                        </div>
                      </div>
                      <div className="items-center h-[94px] flex ml-[24px] mr-[24px] w-[344px] shadow bg-[#fff8f9] border-solid border-l-4 rounded-[16px] border-[#ff4162] justify-between">
                        <p className="ml-4 text-[14px]">Pending</p>
                        <div className="flex mr-4 items-center justify-center bg-[#ffecef] text-[#ff4162] h-[67px] w-[102px] rounded-[12px]">
                          <p className="text-[24px] font-[600] font-sans">
                            $438
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="mx-[25px] border-t-[1px] border-solid border-slate-200"></div>
                    <div className="h-[278px] my-10 flex justify-center align-center mx-10">
                      <IncomeList />
                    </div>
                    <div className="mx-[25px] border-t-[1px] border-solid border-slate-200"></div>
                    <div className="flex absolute mr-[55px] right-0 pt-7">
                      <div
                        onClick={() => setCurrentStep(5)}
                        className="mx-4 cursor-pointer w-[134px] h-[36px] rounded-md flex items-center justify-center border-2 border-dashed text-[#4162ff] border-[#4162ff]"
                      >
                        <p className="text-[14px]">Settings</p>
                      </div>
                      <div
                        onClick={() => setOpc(1)}
                        className="mx-2 justify-center cursor-pointer w-[162px] h-[36px] rounded-md flex items-center border-2 bg-[#4162ff] border-[#4162ff] border-solid text-white"
                      >
                        <p className="text-[14px] font-[400]">
                          Withdraw Balance
                        </p>
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
                      <div
                        onClick={() => setCurrentStep(2)}
                        className="mx-2 justify-center cursor-pointer w-[93px] h-[36px] rounded-md flex items-center border-2 bg-[#4162ff] border-[#4162ff] border-solid text-white"
                      >
                        <p className="text-[14px] font-[400]">View List</p>
                      </div>
                    </div>
                    <div className="mx-[25px] border-t-[1px] border-solid border-slate-200"></div>
                    <div className="py-5 flex-grow justify-center items-center">
                      <OrderListing
                        setCurrentStep={setCurrentStep}
                        currentStep={currentStep}
                        setSelectedOrder={setSelectedOrder}
                        className=""
                      />
                    </div>
                  </div>
                </div>
              </>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default dashboard3;
