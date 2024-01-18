import React, { useState } from "react";

export default function KYCVerification({ setIsKYCVerified, setShowSidebar }) {
  const handleVerifyClick = () => {
    setIsKYCVerified(true);
    setShowSidebar(false);
  };

  return (
    <div className="flex flex-col h-screen">
      {" "}
      <div className="flex justify-between items-center">
        <div className="flex flex-col items-start mt-4">
          <h3
            className="m-0"
            style={{ fontSize: "17px", fontWeight: "normal" }}
          >
            KYC Verification{" "}
          </h3>
          <span
            className="mt-1"
            style={{
              fontSize: "13px",
              fontWeight: "normal",
              color: "#8E8E8E",
              width: "100%",
              maxWidth: "260px",
            }}
          >
            To increase your transaction limit, please verify your aadhar
            number.
          </span>
        </div>
      </div>
      <div
        className="flex-1 overflow-y-auto pb-[80px]"
        style={{ overflowY: "scroll" }}
      >
        <div className="mt-7">
          <span
            className="font-freesans"
            style={{
              color: "#4B4B4B",
              fontWeight: 500,
              fontSize: "13px",
            }}
          >
            Aadhar Number{" "}
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
            className="bg-[#FFF] text-gray-900 text-sm rounded-[10px] block w-full px-3 py-2.5 mt-1 placeholder-gray-300  focus:outline-none"
            style={{
              border: "1.5px solid #E5E7EB",
              boxSizing: "border-box",
            }}
            onFocus={(e) => (e.target.style.borderColor = "#bdbfc0")}
            onBlur={(e) => (e.target.style.borderColor = "#E5E7EB")}
            placeholder="Enter Aadhar Number"
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
          onClick={handleVerifyClick}
          className="bg-blue-600 text-white px-8 py-2.5 rounded cursor-pointer"
        >
          Verify{" "}
        </button>
      </div>
    </div>
  );
}
