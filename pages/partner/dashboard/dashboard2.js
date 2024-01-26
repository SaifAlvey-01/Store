import React, { useEffect, useMemo } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import Cookie from "js-cookie";
import pageload from "/public/logoutLoader.json";
import Lottie from "lottie-react";
import { useState } from "react";
import OrderListing from "./refferal-listing";

const dashboard2 = ({ setCurrentStep, currentStep }) => {
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
        <>
          <header className="sticky m-6 items-center rounded-lg top-0 shadow flex bg-white border-b border-slate-200 h-[52px]">
            <div>
              <p className="text-[20px] font-freesans font-semibold ml-5 content-center">
                Dashboard
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
            className="py-5 ml-1 mr-11"
          >
            <>
              <div className="flex-col shadow font-freesans bg-white border-b mx-5 border-slate-200 rounded-lg mt-[-25px] h-full w-full">
                <div className="py-[24px] flex align-center justify-between">
                  <div>
                    <p className="text-[18px] font-[600] mt-[8px] ml-[25px]">
                      All of Recent Refferals
                    </p>
                  </div>
                  <div className="flex">
                    <div className="mx-4 cursor-pointer w-[134px] h-[36px] rounded-md flex items-center border-2 border-dashed text-[#4162ff] border-[#4162ff]">
                      <svg
                        width="18"
                        className="ml-3 mr-2"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M16.2227 11.0625C16.2227 11.73 16.0352 12.36 15.7052 12.9C15.0902 13.935 13.9577 14.625 12.6602 14.625C11.3627 14.625 10.2302 13.9275 9.61516 12.9C9.28516 12.3675 9.09766 11.73 9.09766 11.0625C9.09766 9.0975 10.6952 7.5 12.6602 7.5C14.6252 7.5 16.2227 9.0975 16.2227 11.0625Z"
                          stroke="#4162FF"
                          stroke-width="1.2"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M13.9945 11.0474H11.332"
                          stroke="#4162FF"
                          stroke-width="1.2"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M12.6592 9.75V12.4125"
                          stroke="#4162FF"
                          stroke-width="1.2"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M3.99742 1.5H14.0024C14.8349 1.5 15.5174 2.18251 15.5174 3.01501V4.67999C15.5174 5.28749 15.1349 6.04501 14.7599 6.42751L13.4399 7.59C13.1924 7.53 12.9299 7.5 12.6599 7.5C10.6949 7.5 9.09742 9.0975 9.09742 11.0625C9.09742 11.73 9.28492 12.36 9.61492 12.9C9.89242 13.365 10.2749 13.7625 10.7399 14.0475V14.3025C10.7399 14.76 10.4399 15.3675 10.0574 15.5925L8.99992 16.275C8.01742 16.8825 6.65242 16.2 6.65242 14.985V10.9725C6.65242 10.44 6.34492 9.75751 6.04492 9.38251L3.16492 6.35248C2.78992 5.96998 2.48242 5.28751 2.48242 4.83751"
                          stroke="#4162FF"
                          stroke-width="1.2"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                      <p className="text-[14px]">Last 14 Days</p>
                    </div>
                  </div>
                </div>
                <div className="mx-[25px] border-t-[1px] border-solid border-slate-200"></div>
                <div className="py-5">
                  <OrderListing
                  setSelectedOrder={setSelectedOrder}
                  className=""
                /></div>
              </div>
            </>
          </div>
        </main>
      </div>
    </div>
  );
};

export default dashboard2;
