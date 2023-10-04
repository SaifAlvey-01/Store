import React, { useState } from "react";
import FreeTrialFooter from "../free-trial-footer";
import GrowthChart from "../bar-charts/growth";

export default function Tools() {
  const [activeDiv, setActiveDiv] = useState("qr");

  return (
    <div
      className="min-h-[calc(100vh-180px)] sm:min-h-[calc(100% - 100px)] overflow-y-auto flex flex-col items-center justify-between "
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
              <div
                onClick={() => setActiveDiv("qr")}
                className="no-underline cursor-pointer flex items-center p-3 mb-1 text-gray-900 hover:text-primary-300-main rounded-lg text-neutral-500 hover:bg-neutral-200 group"
              >
                <img src={"/shop.png"} className="w-600 h-600" />
                <span className="ml-3">QR Code</span>
              </div>
            </li>
            <li
              style={{
                borderRadius: "10px",
                backgroundColor: activeDiv === "affiliate" ? "#F6F7FF" : "",
              }}
            >
              <div
                onClick={() => setActiveDiv("affiliate")}
                className="no-underline flex cursor-pointer items-center p-3 text-gray-900 hover:text-primary-300-main rounded-lg text-neutral-500 hover:bg-neutral-200 group"
              >
                <img
                  src={"/affiliate.png"}
                  className="w-600 h-600 text-primary-300-main"
                />
                <span className="flex-1 ml-3 whitespace-nowrap">
                  Affiliate Program
                </span>
              </div>
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
            className="ml-3 w-[65%] h-auto text-blue-600 p-4 "
            style={{
              borderRadius: "10px",
              backgroundColor: "var(--white-color, #FFF)",
              border: "1px solid #e3e3e3",
            }}
          >
            {" "}
            <div className="flex justify-between items-center">
              <div className="font-Roboto flex flex-row items-center justify-start">
                <h3
                  style={{
                    color: "#4B4B4B",
                    fontWeight: 600,
                    fontSize: "16px",
                  }}
                >
                  Affiliate Program{" "}
                </h3>
                <img
                  style={{
                    color: "#8E8E8E",
                  }}
                  src={"/info-dark.png"}
                  className="ml-1.5 w-4 h-4"
                />
              </div>

              <div className="flex flex-row">
                <button
                  style={{
                    borderRadius: "6px",
                    fontSize: "14px",
                    color: "#FFF",
                    backgroundColor: "#4162FF",
                    padding: "10px 20px",
                  }}
                  className="flex items-center px-6 py-1.5 "
                >
                  Request Withdrawal
                </button>
              </div>
            </div>
            <div
              style={{
                border: "1px solid #EAECF0",
                padding: "14px 18px",
                borderRadius: "8px",
              }}
              className="flex justify-between items-center mt-4"
            >
              <div className="font-freesans flex flex-col items-start justify-start">
                <span
                  className="font-freesans mb-2"
                  style={{
                    color: "#4B4B4B",
                    fontWeight: 500,
                    fontSize: "13px",
                  }}
                >
                  Invite Users To Our Platform To Earn Extra Income{" "}
                </span>
                <span
                  className="m-0 font-freesans"
                  style={{
                    color: "#8E8E8E",
                    fontWeight: 400,
                    fontSize: "12px",
                  }}
                >
                  Share referral code now:{" "}
                </span>
              </div>
              <div
                style={{
                  border: "1px dashed #4162ff",
                  borderRadius: "4px",
                  padding: "4px 12px",
                }}
                className="flex flex-row items-center"
              >
                <img
                  style={{
                    color: "#8E8E8E",
                  }}
                  src={"/copied.png"}
                  className="mr-2 w-4 h-4"
                />
                <span
                  className="font-freesans mb-1"
                  style={{
                    color: "#4162FF",
                    fontWeight: 500,
                    fontSize: "14px",
                  }}
                >
                  0050391{" "}
                </span>
              </div>{" "}
            </div>
            <div
              style={{
                border: "1px solid #EAECF0",
                padding: "14px 18px",
                borderRadius: "8px",
              }}
              className="flex justify-between items-center mt-5"
            >
              <div className="font-freesans flex flex-col items-start justify-start">
                <span
                  className="font-freesans mb-2"
                  style={{
                    color: "#4B4B4B",
                    fontWeight: 500,
                    fontSize: "13px",
                  }}
                >
                  Earning Total{" "}
                </span>
                <span
                  className="m-0 font-freesans"
                  style={{
                    color: "#8E8E8E",
                    fontWeight: 400,
                    fontSize: "12px",
                  }}
                >
                  Last 30 Days{" "}
                </span>
              </div>
              <div
                style={{
                  borderRadius: "4px",
                  padding: "6px 14px",
                  backgroundColor: "#f1f1f1",
                }}
                className="flex flex-row items-center"
              >
                <span
                  className="font-roboto mb-1"
                  style={{
                    color: "#8E8E8E",
                    fontWeight: 500,
                    fontSize: "16px",
                  }}
                >
                  ₹6,302{" "}
                </span>
              </div>{" "}
            </div>
            <div className="mt-6">
              <div className="flex flex-col items-start justify-start mb-4 ml-2">
                <span
                  style={{
                    color: "#2B2B2B",
                    fontWeight: 500,
                    fontSize: "13px",
                    marginBottom: 8,
                  }}
                >
                  Growth
                </span>
                <span
                  style={{
                    color: "#2B2B2B",
                    fontWeight: 600,
                    fontSize: "13px",
                    backgroundColor: "#f1f1f1",
                    borderRadius: "4px",
                    padding: "6px 10px",
                  }}
                >
                  +5.65%
                </span>
              </div>
              <GrowthChart />
            </div>
            <div className="mt-4">
              <div className="p-2 bg-white">
                <div className="flex justify-between mb-2">
                  <span
                    className="font-freesans"
                    style={{
                      color: "#8E8E8E",
                      fontWeight: 400,
                      fontSize: "14px",
                    }}
                  >
                    Withdrawals{" "}
                  </span>
                  <span
                    className="font-freesans"
                    style={{
                      color: "#4B4B4B",
                      fontWeight: 600,
                      fontSize: "14px",
                    }}
                  >
                    ₹5,302{" "}
                  </span>
                </div>

                <div className="relative h-2 rounded-full overflow-hidden bg-gray-300">
                  {/* Progress Bar */}
                  <div
                    className="absolute top-0 left-0 h-full bg-green-500"
                    style={{ width: "70%" }}
                  ></div>
                </div>
              </div>
              <div className="p-2 bg-white mt-2">
                <div className="flex justify-between mb-2">
                  <span
                    className="font-freesans"
                    style={{
                      color: "#8E8E8E",
                      fontWeight: 400,
                      fontSize: "14px",
                    }}
                  >
                    Pending Amount{" "}
                  </span>
                  <span
                    className="font-freesans"
                    style={{
                      color: "#4B4B4B",
                      fontWeight: 600,
                      fontSize: "14px",
                    }}
                  >
                    ₹1,002{" "}
                  </span>
                </div>

                <div className="relative h-2 rounded-full overflow-hidden bg-gray-300">
                  {/* Progress Bar */}
                  <div
                    className="absolute top-0 left-0 h-full bg-red-500"
                    style={{ width: "40%" }}
                  ></div>
                </div>
              </div>

              <div
                style={{
                  backgroundColor: "#F9FAFB",
                  boxShadow: "-2px 0px 4px 4px rgba(55, 58, 60, 0.04)",
                  border: "1px solid #EAECF0",
                  padding: "10px 14px",
                  margin: "14px 6px",
                }}
                className="flex"
              >
                <div className="w-3/5 flex items-center">
                  <span
                    style={{
                      color: "#1D2939",
                      fontWeight: 400,
                      fontSize: "12px",
                    }}
                    className="mr-1"
                  >
                    User
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                  >
                    <path
                      d="M3.93738 7.31252H14.0624C14.1736 7.3125 14.2823 7.27949 14.3748 7.21768C14.4673 7.15587 14.5394 7.06803 14.5819 6.96526C14.6245 6.86249 14.6357 6.74941 14.614 6.64032C14.5923 6.53122 14.5387 6.431 14.4601 6.35233L9.39757 1.28983C9.34536 1.23758 9.28337 1.19612 9.21513 1.16784C9.14689 1.13956 9.07375 1.125 8.99988 1.125C8.92601 1.125 8.85287 1.13956 8.78463 1.16784C8.7164 1.19612 8.6544 1.23758 8.60219 1.28983L3.53969 6.35233C3.46105 6.431 3.4075 6.53122 3.3858 6.64032C3.36411 6.74941 3.37525 6.86249 3.41781 6.96526C3.46038 7.06803 3.53245 7.15587 3.62493 7.21768C3.71742 7.27949 3.82615 7.3125 3.93738 7.31252Z"
                      fill="#D0D5DD"
                    />
                    <path
                      d="M14.0624 10.6875H3.93738C3.82615 10.6875 3.71742 10.7205 3.62493 10.7823C3.53245 10.8441 3.46038 10.932 3.41781 11.0348C3.37525 11.1375 3.36411 11.2506 3.3858 11.3597C3.4075 11.4688 3.46105 11.569 3.53969 11.6477L8.60219 16.7102C8.65441 16.7624 8.7164 16.8039 8.78464 16.8322C8.85288 16.8604 8.92602 16.875 8.99988 16.875C9.07375 16.875 9.14689 16.8604 9.21512 16.8322C9.28336 16.8039 9.34536 16.7624 9.39757 16.7102L14.4601 11.6477C14.5387 11.569 14.5923 11.4688 14.614 11.3597C14.6357 11.2506 14.6245 11.1375 14.5819 11.0348C14.5394 10.932 14.4673 10.8441 14.3748 10.7823C14.2823 10.7205 14.1736 10.6875 14.0624 10.6875Z"
                      fill="#D0D5DD"
                    />
                  </svg>
                </div>

                <div className="w-2/5 flex items-center">
                  <span
                    style={{
                      color: "#1D2939",
                      fontWeight: 400,
                      fontSize: "12px",
                    }}
                    className="mr-1"
                  >
                    Earnings
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                  >
                    <path
                      d="M3.93738 7.31252H14.0624C14.1736 7.3125 14.2823 7.27949 14.3748 7.21768C14.4673 7.15587 14.5394 7.06803 14.5819 6.96526C14.6245 6.86249 14.6357 6.74941 14.614 6.64032C14.5923 6.53122 14.5387 6.431 14.4601 6.35233L9.39757 1.28983C9.34536 1.23758 9.28337 1.19612 9.21513 1.16784C9.14689 1.13956 9.07375 1.125 8.99988 1.125C8.92601 1.125 8.85287 1.13956 8.78463 1.16784C8.7164 1.19612 8.6544 1.23758 8.60219 1.28983L3.53969 6.35233C3.46105 6.431 3.4075 6.53122 3.3858 6.64032C3.36411 6.74941 3.37525 6.86249 3.41781 6.96526C3.46038 7.06803 3.53245 7.15587 3.62493 7.21768C3.71742 7.27949 3.82615 7.3125 3.93738 7.31252Z"
                      fill="#D0D5DD"
                    />
                    <path
                      d="M14.0624 10.6875H3.93738C3.82615 10.6875 3.71742 10.7205 3.62493 10.7823C3.53245 10.8441 3.46038 10.932 3.41781 11.0348C3.37525 11.1375 3.36411 11.2506 3.3858 11.3597C3.4075 11.4688 3.46105 11.569 3.53969 11.6477L8.60219 16.7102C8.65441 16.7624 8.7164 16.8039 8.78464 16.8322C8.85288 16.8604 8.92602 16.875 8.99988 16.875C9.07375 16.875 9.14689 16.8604 9.21512 16.8322C9.28336 16.8039 9.34536 16.7624 9.39757 16.7102L14.4601 11.6477C14.5387 11.569 14.5923 11.4688 14.614 11.3597C14.6357 11.2506 14.6245 11.1375 14.5819 11.0348C14.5394 10.932 14.4673 10.8441 14.3748 10.7823C14.2823 10.7205 14.1736 10.6875 14.0624 10.6875Z"
                      fill="#D0D5DD"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="w-[90%] mx-4 mb-4 mt-8 flex flex-col items-center justify-between">
        <FreeTrialFooter />
      </div>
    </div>
  );
}
