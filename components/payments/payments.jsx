import React, { useState } from "react";
import FreeTrialFooter from "../free-trial-footer";

export default function Payments() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div
      className="h-auto overflow-y-auto flex flex-col items-center justify-between "
      style={{
        backgroundColor: "var(--white-color, #FFF)",
        borderRadius: "10px",
        boxShadow: `#00000011 0px 2px 4px 2px`,
        marginBottom: "10px",
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
            className="px-1.5 py-1 flex flex-col items-center cursor-pointer"
          >
            <img
              src={"document-download.png"}
              alt="Dropdown Icon"
              className="w-4 h-4"
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
            className="tab-content text-neutral-500 text-[14px] pt-12 mb-10 flex items-center justify-center "
          >
            {activeTab === 0 && <div>Not enough data to show.</div>}
            {activeTab === 1 && <div>Not enough data to show.</div>}
            {activeTab === 2 && <div>Not enough data to show.</div>}
          </div>
        </div>
      </div>

      <div className="w-[90%] mx-4 mb-8 mt-4 flex flex-col items-center justify-between">
        <FreeTrialFooter />
      </div>
    </div>
  );
}
