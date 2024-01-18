import React from "react";
import { useState } from "react";

const radioOptions = [
  { id: "radio-1", label: "LaunchMyStore" },
  { id: "radio-2", label: "None" },
];

export default function SetupStripe({ setShowSidebar }) {
  return (
    <div className="flex flex-col h-screen">
      {" "}
      <div className="flex justify-between items-center">
        <div className="flex flex-col items-start mt-4">
          <h3
            className="m-0"
            style={{ fontSize: "17px", fontWeight: "normal" }}
          >
            Set up Stripe{" "}
          </h3>

          <div className="flex flex-col">
            {" "}
            <span
              className="font-freesans mt-2"
              style={{
                color: "#8E8E8E",
                fontWeight: 400,
                fontSize: "13px",
                maxWidth: "380px",
              }}
            >
              Please enter your Stripe API keys. You can find your API keys on{" "}
            </span>
            <span
              className="font-freesans mt-1.5"
              style={{
                color: "#7A91FF",
                fontWeight: 400,
                fontSize: "13px",
                maxWidth: "380px",
              }}
            >
              Stripe API Key Dashboard{" "}
            </span>
          </div>
        </div>
      </div>
      <div
        className="flex-1 overflow-y-auto pb-[80px]"
        style={{ overflowY: "scroll" }}
      >
        <div className="mt-8">
          <span
            className="font-freesans"
            style={{
              color: "#4B4B4B",
              fontWeight: 500,
              fontSize: "13px",
            }}
          >
            Publishable Key{" "}
            <span
              style={{
                color: "#FF3A3A",
                fontSize: "14px",
                fontWeight: "bold",
              }}
            >
              *
            </span>
          </span>
          <input
            className="bg-[#FFF] text-gray-900 text-sm rounded-[10px] block w-full px-4 py-2.5 mt-1 placeholder-gray-300  focus:outline-none"
            style={{
              border: "1.5px solid #E5E7EB",
              boxSizing: "border-box",
            }}
            onFocus={(e) => (e.target.style.borderColor = "#bdbfc0")}
            onBlur={(e) => (e.target.style.borderColor = "#E5E7EB")}
            placeholder="Enter Publishable Key"
            required
          />
        </div>
        <div className="mt-4">
          <span
            className="font-freesans"
            style={{
              color: "#4B4B4B",
              fontWeight: 500,
              fontSize: "13px",
            }}
          >
            Secret Key{" "}
            <span
              style={{
                color: "#FF3A3A",
                fontSize: "14px",
                fontWeight: "bold",
              }}
            >
              *
            </span>
          </span>
          <input
            className="bg-[#FFF] text-gray-900 text-sm rounded-[10px] block w-full px-4 py-2.5 mt-1 placeholder-gray-300  focus:outline-none"
            style={{
              border: "1.5px solid #E5E7EB",
              boxSizing: "border-box",
            }}
            onFocus={(e) => (e.target.style.borderColor = "#bdbfc0")}
            onBlur={(e) => (e.target.style.borderColor = "#E5E7EB")}
            placeholder="Enter Secret Key"
            required
          />
        </div>
      </div>
      <div
        style={{
          borderTop: "1px solid #E5E7EB",
          padding: "16px 0",
          position: "sticky",
          bottom: 16,
          background: "white",
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
        }}
      >
        <button
          onClick={() => setShowSidebar(false)}
          className="bg-blue-600 text-white px-7 py-2.5 rounded cursor-pointer"
        >
          Continue{" "}
        </button>
      </div>
    </div>
  );
}
