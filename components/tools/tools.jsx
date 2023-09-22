import React, { useState } from "react";
import FreeTrialFooter from "../free-trial-footer";

export default function Tools() {
  const [activeDiv, setActiveDiv] = useState("qr");

  return (
    <div
      className="h-auto overflow-y-auto flex flex-col items-center justify-between "
      style={{
        backgroundColor: "var(--white-color, #FFF)",
        borderRadius: "10px",
        boxShadow: `#00000011 0px 2px 4px 2px`,
        padding: "30px ",
      }}
    >
      <div className="flex flex-row w-[100%] items-stretch">
        <div
          className="mr-3 w-[35%] h-[30%] text-white p-3"
          style={{
            borderRadius: "10px",
            backgroundColor: "var(--white-color, #FFF)",
            border: "1px solid #e3e3e3",
          }}
        >
          <ul className="m-0 px-0 font-medium list-none">
            <li
              style={{
                borderRadius: "10px",
                backgroundColor: activeDiv === "qr" ? "#F6F7FF" : "",
              }}
            >
              <a
                href="#"
                onClick={() => setActiveDiv("qr")}
                className="no-underline flex items-center p-3 mb-1 text-gray-900 hover:text-primary-300-main rounded-lg text-neutral-500 hover:bg-neutral-200 group"
              >
                <img src={"/shop.png"} className="w-600 h-600" />
                <span className="ml-3">QR Code</span>
              </a>
            </li>
            <li
              style={{
                borderRadius: "10px",
                backgroundColor: activeDiv === "affiliate" ? "#F6F7FF" : "",
              }}
            >
              <a
                href="#"
                onClick={() => setActiveDiv("affiliate")}
                className="no-underline flex items-center p-3 text-gray-900 hover:text-primary-300-main rounded-lg text-neutral-500 hover:bg-neutral-200 group"
              >
                <img
                  src={"/affiliate.png"}
                  className="w-600 h-600 text-primary-300-main"
                />
                <span className="flex-1 ml-3 whitespace-nowrap">
                  Affiliate Program
                </span>
              </a>
            </li>
          </ul>
        </div>

        {activeDiv === "qr" && (
          <div
            className="ml-3 w-[65%] text-blue-600 p-6 "
            style={{
              borderRadius: "10px",
              backgroundColor: "var(--white-color, #FFF)",
              border: "1px solid #e3e3e3",
            }}
          >
            <div className="flex flex-col items-center justify-between">
              <div
                style={{
                  backgroundColor: "#FAFBFF",
                  borderTopLeftRadius: "16px",
                  borderTopRightRadius: "16px",
                  borderBottom: "6px solid #4162FF",
                  backgroundImage: "url('/bg1.png')",
                  backgroundPosition: "center center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "auto 240px",
                  boxShadow: `#00000011 0px 2px 4px 2px`,
                }}
                className="flex flex-col items-center p-4 h-[500px] w-[300px]"
              >
                <span
                  className="font-freesans mb-2"
                  style={{ color: "#8E8E8E", fontSize: "14px" }}
                >
                  Powered By
                </span>

                <img src={"/Logo1.png"} alt="#" />

                <ul
                  style={{ backgroundColor: "#1F1D2B", borderRadius: "10px" }}
                  class="flex flex-wrap text-sm font-medium text-center list-none p-0"
                >
                  <li>
                    <a
                      href="#"
                      class="no-underline inline-flex items-center px-2 py-2 rounded-lg text-white"
                    >
                      <span class="mr-2">•</span>
                      Scan
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="no-underline inline-flex items-center px-2 py-2 rounded-lg text-white"
                    >
                      <span class="mr-2">•</span>
                      Order
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="no-underline inline-flex items-center px-2 py-2 rounded-lg text-white"
                    >
                      <span class="mr-2">•</span>
                      Pay
                    </a>
                  </li>
                </ul>

                <div
                  style={{
                    boxShadow: "0px 0px 32px 4px rgba(31, 29, 43, 0.25)",
                    borderRadius: "16px",
                  }}
                  className="flex items-center justify-center bg-white h-[172px] w-[172px] mt-10"
                >
                  <div className="relative flex items-center justify-center">
                    <img src={"/qr.png"} alt="" className="h-auto" />
                    <img
                      src={"/qr2.png"}
                      className="absolute h-[30px] w-auto"
                    />
                  </div>
                </div>

                <div className="flex flex-col items-center justify-center mt-14">
                  <span
                    className="font-freesans mb-2"
                    style={{
                      color: "#4B4B4B",
                      fontSize: "13px",
                      textAlign: "center",
                    }}
                  >
                    Ray Naz{" "}
                  </span>
                  <a
                    style={{
                      color: "#7A91FF",
                      fontSize: "12px",
                      textAlign: "center",
                    }}
                    href="#"
                  >
                    launchmystore.io/raynaz
                  </a>

                  <div className="flex justify-center space-x-4 mt-6">
                    <img
                      style={{
                        backgroundColor: "#ECEFFF",
                        borderRadius: "6px",
                      }}
                      src="/visa.png"
                      className="w-5 h-4 p-2"
                    />
                    <img
                      style={{
                        backgroundColor: "#ECEFFF",
                        borderRadius: "6px",
                      }}
                      src="/master.png"
                      className="w-5 h-4 p-2"
                    />
                    <img
                      style={{
                        backgroundColor: "#ECEFFF",
                        borderRadius: "6px",
                      }}
                      src="/american.png"
                      className="w-5 h-4 p-2"
                    />
                    <img
                      style={{
                        backgroundColor: "#ECEFFF",
                        borderRadius: "6px",
                      }}
                      src="/unified.png"
                      alt="Image 4"
                      className="w-5 h-4 p-2"
                    />
                  </div>
                </div>
              </div>

              <div className="mb-10 mt-4 ">
                <button
                  className="mt-2 cursor-pointer"
                  style={{
                    backgroundColor: "#FF5353",
                    color: "#ffffff",
                    padding: "10px 22px",
                    borderRadius: "4px",
                  }}
                >
                  Print PDF
                </button>
              </div>
            </div>
          </div>
        )}

        {activeDiv === "affiliate" && (
          <div
            className="ml-3 w-[65%] h-[600px] text-blue-600 p-4 "
            style={{
              borderRadius: "10px",
              backgroundColor: "var(--white-color, #FFF)",
              border: "1px solid #e3e3e3",
            }}
          >
            <div className="self-stretch font-roboto flex flex-col items-start justify-start">
              <h4
                style={{
                  color: "var(--Neutral-600, #4B4B4B)",
                  margin: 0,
                  fontWeight: 500,
                  fontSize: "16px",
                }}
              >
                Affiliate Program
              </h4>

              <div className="flex mt-6 mb-8 flex-row w-[100%] items-stretch">
                <div
                  className="w-[100%] text-blue-600 px-5 py-4 "
                  style={{
                    borderRadius: "10px",
                    backgroundColor: "#ffffff",
                    border: "1px solid #e3e3e3",
                  }}
                >
                  <div className="flex justify-between items-center">
                    <div className="self-stretch font-freesans flex flex-col items-start justify-start">
                      <span
                        style={{
                          color: "#4B4B4B",
                          fontSize: "15px",
                          marginBottom: 4,
                        }}
                      >
                        Invite user to our platform to get affiliate.{" "}
                      </span>
                      <span
                        style={{
                          fontSize: "14px",
                          color: "#8E8E8E",
                        }}
                      >
                        Share link now:{" "}
                      </span>
                    </div>

                    <div className="flex flex-row">
                      <button
                        style={{
                          borderRadius: "6px",
                          border: "1px solid #8E8E8E",
                          fontSize: "14px",
                          color: "#ffffff",
                          backgroundColor: "#4162FF",
                        }}
                        className="flex items-center px-5 py-2.5 "
                      >
                        Share
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="w-[90%] mx-4 mb-8 mt-4   flex flex-col items-center justify-between">
        <FreeTrialFooter />
      </div>
    </div>
  );
}
