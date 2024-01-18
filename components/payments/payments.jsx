import React, { useState } from "react";
import FreeTrialFooter from "../free-trial-footer";

const onHoldData = [
  {
    image: "solar.png",
    orderNumber: "Order #99441033",
    description: "On Hold Untill: Jul 27, Fri",
    status: "On Hold",
    amount: "₹552",
  },
  {
    image: "solar.png",
    orderNumber: "Order #99441033",
    description: "On Hold Untill: Jul 27, Fri",
    status: "On Hold",
    amount: "₹552",
  },
];

const payoutsData = [
  {
    image: "solar.png",
    orderNumber: "Order #99441033",
    description: "On Hold Untill: Jul 27, Fri",
    status: "Payout",
    amount: "₹552",
  },
  {
    image: "solar.png",
    orderNumber: "Order #99441033",
    description: "On Hold Untill: Jul 27, Fri",
    status: "Payout",
    amount: "₹552",
  },
];

const refundsData = [
  {
    image: "solar.png",
    orderNumber: "Order #99441033",
    description: "On Hold Untill: Jul 27, Fri",
    status: "Payout",
    amount: "₹552",
  },
  {
    image: "solar.png",
    orderNumber: "Order #99441033",
    description: "On Hold Untill: Jul 27, Fri",
    status: "Payout",
    amount: "₹552",
  },
];

export default function Payments() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div
      className="min-h-[calc(100vh-180px)] sm:min-h-[calc(100% - 100px)] overflow-y-auto flex flex-col items-center justify-between "
      style={{
        backgroundColor: "var(--white-color, #FFF)",
        borderRadius: "10px",
        boxShadow: `#00000011 0px 2px 4px 2px`,
      }}
    >
      <div className="flex justify-between items-center mt-6 mb-6 w-[96%]">
        <div className="self-stretch font-freesans flex flex-row items-start justify-start">
          <h3 style={{ color: "var(--Neutral-600, #4B4B4B)", margin: 0 }}>
            Overview
          </h3>
        </div>

        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
          <div className="relative">
            <button
              style={{
                borderRadius: "6px",
                border: "1px solid #8E8E8E",
                fontSize: "14px",
                color: "#8E8E8E",
                backgroundColor: "#ffffff",
              }}
              className="flex items-center px-3 py-1.5 hover:bg-gray-300 cursor-pointer"
            >
              This Month{" "}
              <img
                style={{
                  color: "#8E8E8E",
                }}
                src={"/chevron-grey.png"}
                alt="Dropdown Icon"
                className="ml-2 w-4 h-4"
              />
            </button>
          </div>
        </div>
      </div>
      <div
        className="w-[92%] px-5 py-4 "
        style={{
          border: "1px solid #e3e3e3",
          backgroundColor: "var(--white-color, #FFF)",
          borderRadius: "10px",
        }}
      >
        <h4
          className="font-freesans my-0"
          style={{
            color: "var(--Neutral-500, #4B4B4B)",
            fontSize: "14px",
            fontWeight: 400,
          }}
        >
          Payout Limit
        </h4>
        <p
          className="font-freesans my-2"
          style={{
            color: "var(--Neutral-500, #8E8E8E)",
            fontSize: "12px",
            fontWeight: 500,
          }}
        >
          You can receive a total payout up to ₹20,000. Complete your KYC to get
          unlimited payouts.
        </p>

        <div className="font-freesans mt-8">
          <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-150">
            <div
              className="bg-gray-400 h-2 rounded-full"
              style={{ width: "45%" }}
            ></div>
          </div>

          <p
            className="font-freesans mt-3"
            style={{
              color: "var(--Neutral-500, #8E8E8E)",
              fontSize: "12px",
              fontWeight: 500,
            }}
          >
            ₹0 used out of ₹20,000
          </p>
        </div>

        <div className="flex mt-8 flex-row  ">
          <button
            className="mr-2 cursor-pointer"
            style={{
              backgroundColor: "#4162FF",
              color: "#ffffff",
              padding: "10px 36px",
              borderRadius: "4px",
            }}
          >
            Start KYC
          </button>
          <button
            className="ml-2 cursor-pointer"
            style={{
              backgroundColor: "#ffffff",
              color: "#4162FF",
              padding: "10px 30px",
              borderRadius: "4px",
              border: "1px solid #eeeeee",
            }}
          >
            Learn More
          </button>
        </div>
      </div>

      <div className="flex mt-8 mb-8 flex-row w-[93%] items-stretch">
        <div
          className="mr-3 w-[50%]  text-white px-5 py-2"
          style={{
            borderRadius: "10px",
            backgroundColor: "#FF2323",
          }}
        >
          <div className="flex justify-between items-center">
            <div className="font-freesans flex flex-row items-center justify-start">
              <h3
                style={{ color: "#ffffff", fontWeight: 500, fontSize: "16px" }}
              >
                Amount on Hold
              </h3>
              <img
                style={{
                  color: "#8E8E8E",
                }}
                src={"/info.png"}
                className="ml-1.5 w-4 h-4"
              />
            </div>

            <div className="flex flex-row">
              <button
                style={{
                  borderRadius: "6px",
                  border: "1px solid #8E8E8E",
                  fontSize: "18px",
                  color: "#4B4B4B",
                  backgroundColor: "#ffffff",
                  fontWeight: "bold",
                }}
                className="flex items-center px-6 py-1.5 "
              >
                ₹00
              </button>
            </div>
          </div>
        </div>
        <div
          className="ml-3 w-[50%] text-blue-600 px-5 py-2 "
          style={{
            borderRadius: "10px",
            backgroundColor: "#009821",
          }}
        >
          <div className="flex justify-between items-center">
            <div className="self-stretch font-freesans flex flex-row items-start justify-start">
              <h3
                style={{ color: "#ffffff", fontWeight: 500, fontSize: "16px" }}
              >
                Amount Received
              </h3>
            </div>

            <div className="flex flex-row">
              <button
                style={{
                  borderRadius: "6px",
                  border: "1px solid #8E8E8E",
                  fontSize: "18px",
                  color: "#4B4B4B",
                  backgroundColor: "#ffffff",
                  fontWeight: "bold",
                }}
                className="flex items-center px-6 py-1.5 "
              >
                ₹00
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        className="w-[92%] px-5 py-3 mb-10"
        style={{
          border: "1px solid #e3e3e3",
          backgroundColor: "var(--white-color, #FFF)",
          borderRadius: "10px",
        }}
      >
        <div className="flex justify-between items-center mt-1 mb-6 w-[100%] ">
          <h4
            className="font-freesans my-0"
            style={{
              color: "var(--Neutral-500, #4B4B4B)",
              fontSize: "14px",
              fontWeight: 400,
            }}
          >
            Transactions - This Month{" "}
          </h4>

          <div
            style={{ backgroundColor: "#4162FF", borderRadius: "4px" }}
            className="py-1.5 px-2 flex flex-col items-center cursor-pointer"
          >
            <img
              src={"document-download.png"}
              alt="Dropdown Icon"
              className="w-6 h-6"
            />
          </div>
        </div>

        <div className="w-full">
          <div className="flex justify-between w-[50%] border-b border-gray-200">
            <button
              className={`flex-grow text-center py-2 px-1 text-[14px] bg-white cursor-pointer ${
                activeTab === 0
                  ? "border-b-2 border-primary-300-main text-primary-300-main font-bold"
                  : "text-neutral-500 hover:bg-gray-100"
              }`}
              onClick={() => setActiveTab(0)}
            >
              On Hold (03){" "}
            </button>
            <button
              className={`flex-grow text-center py-2 px-1 text-[14px] bg-white cursor-pointer ${
                activeTab === 1
                  ? "border-b-2 border-primary-300-main text-primary-300-main font-bold"
                  : "text-neutral-500 hover:bg-gray-100"
              }`}
              onClick={() => setActiveTab(1)}
            >
              Payouts (02){" "}
            </button>
            <button
              className={`flex-grow text-center py-2 px-1 text-[14px] bg-white cursor-pointer ${
                activeTab === 2
                  ? "border-b-2 border-primary-300-main text-primary-300-main font-bold"
                  : "text-neutral-500 hover:bg-gray-100"
              }`}
              onClick={() => setActiveTab(2)}
            >
              Refunds (01){" "}
            </button>
          </div>
          <div
            style={{ borderTop: "2px solid #E5E7EB" }}
            className="tab-content text-neutral-500 text-[14px] pt-6 mb-10"
          >
            {activeTab === 0 && (
              <div className="flex flex-col">
                {onHoldData.map((item, index) => (
                  <div
                    style={{ borderBottom: "1px solid #EAECF0" }}
                    key={index}
                    className="flex justify-between items-center mb-4 py-3"
                  >
                    <div className="flex items-center">
                      <div
                        style={{ backgroundColor: "#F3F5FF" }}
                        className="rounded-[50px] mr-2 w-10 h-10 flex justify-center items-center"
                      >
                        <div className="flex justify-center items-center p-1.5">
                          <img
                            src={item.image}
                            alt={`Description for ${item.orderNumber}`}
                            className="max-w-full max-h-full object-contain"
                          />
                        </div>
                      </div>
                      <div className="flex flex-col">
                        <span
                          className="mb-1.5"
                          style={{ color: "#4B4B4B", fontSize: "14px" }}
                        >
                          {item.orderNumber}
                        </span>
                        <p
                          style={{ color: "#8E8E8E", fontSize: "12px" }}
                          className="m-0"
                        >
                          {item.description}
                        </p>
                      </div>
                    </div>

                    <div
                      style={{ width: "100%", maxWidth: "140px" }}
                      className="flex items-center"
                    >
                      <div
                        className="px-2 py-1 mr-1.5"
                        style={{
                          borderRadius: "16px",
                          background: "#ECFDF3",
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="8"
                          height="8"
                          viewBox="0 0 8 8"
                          fill="none"
                        >
                          <circle cx="4" cy="4" r="3" fill="#FF5353" />
                        </svg>

                        <span
                          className="font-freesans ml-1.5"
                          style={{
                            color: "#FF5353",
                            fontSize: "12px",
                          }}
                        >
                          {item.status}
                        </span>
                      </div>

                      <div
                        style={{ backgroundColor: "#F3F5FF" }}
                        className="rounded-[50px] w-6 h-6 flex items-center justify-center p-1.5"
                      >
                        <span
                          style={{
                            fontSize: "12px",
                            color: "#4162FF",
                            fontWeight: 500,
                          }}
                          className="font-roboto"
                        >
                          {item.amount}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
            {activeTab === 1 && (
              <div className="flex flex-col">
                {payoutsData.map((item, index) => (
                  <div
                    style={{ borderBottom: "1px solid #EAECF0" }}
                    key={index}
                    className="flex justify-between items-center mb-4 py-3"
                  >
                    <div className="flex items-center">
                      <div
                        style={{ backgroundColor: "#F3F5FF" }}
                        className="rounded-[50px] mr-2 w-10 h-10 flex justify-center items-center"
                      >
                        <div className="flex justify-center items-center p-1.5">
                          <img
                            src={item.image}
                            alt={`Description for ${item.orderNumber}`}
                            className="max-w-full max-h-full object-contain"
                          />
                        </div>
                      </div>
                      <div className="flex flex-col">
                        <span
                          className="mb-1.5"
                          style={{ color: "#4B4B4B", fontSize: "14px" }}
                        >
                          {item.orderNumber}
                        </span>
                        <p
                          style={{ color: "#8E8E8E", fontSize: "12px" }}
                          className="m-0"
                        >
                          {item.description}
                        </p>
                      </div>
                    </div>

                    <div
                      style={{ width: "100%", maxWidth: "140px" }}
                      className="flex items-center"
                    >
                      <div
                        className="px-2 py-1 mr-1.5"
                        style={{
                          borderRadius: "16px",
                          background: "#ECFDF3",
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="8"
                          height="8"
                          viewBox="0 0 8 8"
                          fill="none"
                        >
                          <circle cx="4" cy="4" r="3" fill="#029D11" />
                        </svg>

                        <span
                          className="font-freesans ml-1.5"
                          style={{
                            color: "#029D11",
                            fontSize: "12px",
                          }}
                        >
                          {item.status}
                        </span>
                      </div>

                      <div
                        style={{ backgroundColor: "#F3F5FF" }}
                        className="rounded-[50px] w-6 h-6 flex items-center justify-center p-1.5"
                      >
                        <span
                          style={{
                            fontSize: "12px",
                            color: "#4162FF",
                            fontWeight: 500,
                          }}
                          className="font-roboto"
                        >
                          {item.amount}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
            {activeTab === 2 && (
              <div className="flex flex-col">
                {refundsData.map((item, index) => (
                  <div
                    style={{ borderBottom: "1px solid #EAECF0" }}
                    key={index}
                    className="flex justify-between items-center mb-4 py-3"
                  >
                    <div className="flex items-center">
                      <div
                        style={{ backgroundColor: "#F3F5FF" }}
                        className="rounded-[50px] mr-2 w-10 h-10 flex justify-center items-center"
                      >
                        <div className="flex justify-center items-center p-1.5">
                          <img
                            src={item.image}
                            alt={`Description for ${item.orderNumber}`}
                            className="max-w-full max-h-full object-contain"
                          />
                        </div>
                      </div>
                      <div className="flex flex-col">
                        <span
                          className="mb-1.5"
                          style={{ color: "#4B4B4B", fontSize: "14px" }}
                        >
                          {item.orderNumber}
                        </span>
                        <p
                          style={{ color: "#8E8E8E", fontSize: "12px" }}
                          className="m-0"
                        >
                          {item.description}
                        </p>
                      </div>
                    </div>

                    <div
                      style={{ width: "100%", maxWidth: "140px" }}
                      className="flex items-center"
                    >
                      <div
                        className="px-2 py-1 mr-1.5"
                        style={{
                          borderRadius: "16px",
                          background: "#ECFDF3",
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="8"
                          height="8"
                          viewBox="0 0 8 8"
                          fill="none"
                        >
                          <circle cx="4" cy="4" r="3" fill="#88029D" />
                        </svg>

                        <span
                          className="font-freesans ml-1.5"
                          style={{
                            color: "#88029D",
                            fontSize: "12px",
                          }}
                        >
                          {item.status}
                        </span>
                      </div>

                      <div
                        style={{ backgroundColor: "#F3F5FF" }}
                        className="rounded-[50px] w-6 h-6 flex items-center justify-center p-1.5"
                      >
                        <span
                          style={{
                            fontSize: "12px",
                            color: "#4162FF",
                            fontWeight: 500,
                          }}
                          className="font-roboto"
                        >
                          {item.amount}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="w-[90%] mx-4 mb-8 mt-4 flex flex-col items-center justify-between">
        <FreeTrialFooter />
      </div>
    </div>
  );
}
