import React from 'react'
import { useRouter } from "next/router";

export default function item() {
    const router = useRouter();
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
            className=" py-5 ml-1 mr-11"
          >
            <>
              <div className="mt-[-25px]">
                <div className="flex ml-5"><svg className="cursor-pointer" onClick={() => router.back()} width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.77217 5.93555L3.20801 11.4997L8.77217 17.0639" stroke="#374151" stroke-width="1.3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M18.7918 11.5H3.36426" stroke="#374151" stroke-width="1.375" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                  <p className="text-[20px] font-freesans ml-3 mt-[-1px] content-center">
                    Overview
                  </p>
                </div>
                <div className="flex-col shadow font-freesans bg-white border-b mx-5 border-slate-200 rounded-lg h-full w-full">
                  <div className=" flex items-center py-5 pl-6"><svg className="pr-2" width="42" height="43" viewBox="0 0 42 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect y="0.5" width="42" height="42" rx="12" fill="#E9F2FF" />
                    <path d="M19.4299 11.92C20.3999 11.36 21.5999 11.36 22.5799 11.92L28.5199 15.35C29.4899 15.91 30.0899 16.95 30.0899 18.08V24.92C30.0899 26.04 29.4899 27.08 28.5199 27.65L22.5799 31.08C21.6099 31.64 20.4099 31.64 19.4299 31.08L13.4899 27.65C12.5199 27.09 11.9199 26.05 11.9199 24.92V18.08C11.9199 16.96 12.5199 15.92 13.4899 15.35L15.3899 14.25" stroke="#4162FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M20.9999 20.4998C22.2867 20.4998 23.3299 19.4566 23.3299 18.1698C23.3299 16.883 22.2867 15.8398 20.9999 15.8398C19.7131 15.8398 18.6699 16.883 18.6699 18.1698C18.6699 19.4566 19.7131 20.4998 20.9999 20.4998Z" stroke="#4162FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M25 26.1594C25 24.3594 23.21 22.8994 21 22.8994C18.79 22.8994 17 24.3594 17 26.1594" stroke="#4162FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                    <p className="text-[16px] font-freesans font-[500]">
                      Customer Details
                    </p>
                  </div>
                  <div className="mx-[25px] border-t-[1px] border-solid border-slate-200"></div>
                  <div className="py-[24px] flex">
                    <div className="items-center justify-between h-[94px] flex ml-[24px] w-[344px] shadow bg-[#f7f9ff] border-solid border-l-4 rounded-[16px] mb-2 border-[#6983ff]">
                      <p className="ml-4 text-[14px]">Earning From This Refferal</p>
                      <div className="flex mr-4 items-center justify-center bg-[#e9f2ff] text-[#6983ff] h-[67px] w-[102px] rounded-[12px]">
                        <p className="text-[24px] font-[600] font-sans">$1.05</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between pb-5">
                    <div className="ml-10">
                      <p className="text-[#6B7280] text-[14px]">Referral ID</p>
                      <p className="text-[16px] font-[600]">1001</p>
                    </div>
                    <div className="flex ml-16">
                      <div className="border-l-[1px] border-solid pl-20 h-[48px] border-slate-200">
                        <p className="text-[#6B7280] mt-[-1px] text-[14px]">Referral Name</p>
                        <p className="text-[16px] font-[600]">Francisco Klein</p>

                      </div>
                    </div>
                    <div className="flex ml-16">
                      <div className="border-l-[1px] border-solid pl-20 h-[48px] border-slate-200">
                        <p className="text-[#6B7280] mt-[-1px] text-[14px]">Referral Email</p>
                        <p className="text-[16px] font-[600]">Stephan.Raynor@gmail.com</p>
                      </div>
                    </div>
                    <div className="flex mr-48 ml-16">
                      <div className="border-l-[1px] border-solid pl-20 h-[48px] border-slate-200">
                        <p className="text-[#6B7280] mt-[-1px] text-[14px]">Status</p>
                        <div
                          className="flex ml-[-4px] items-center justify-center py-1.5 px-2.5 mx-5"
                          style={{
                            borderRadius: "16px",
                            background: getStatusBackgroundColor("Subscribed"),
                          }}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="8"
                            height="8"
                            viewBox="0 0 8 8"
                            fill="none"
                            style={{ flexShrink: 0 }}
                          >
                            <circle
                              cx="4"
                              cy="4"
                              r="3"
                              fill={getStatusColor("Subscribed")}
                            />
                          </svg>

                          <span
                            style={{
                              marginLeft: "5px",
                              color: getStatusTextColor("Subscribed"),
                              fontSize: "13px",
                            }}
                          >
                            Subscribed
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          </div>

        </main>
      </div>
    </div>
    )
}
