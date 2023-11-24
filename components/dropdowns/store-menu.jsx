import React, { forwardRef } from "react";
import Image from "next/image";

const StoreMenuDropdown = forwardRef(({ notifications = [] }, ref) => {
  return (
    <div
      ref={ref}
      x-show="dropdownOpen"
      className="mt-2 px-3 py-4 w-64 bg-white rounded-md shadow-lg overflow-hidden z-50 flex flex-col items-start"
      style={{
        position: "absolute",
        top: 45,
        right: 30,
        border: "1px solid #DADADA",
        boxShadow: "0px 2px 16px 0px rgba(0, 0, 0, 0.10)",
        borderRadius: "8px",
        width: "250px",
        height: "auto",
      }}
    >
      <div
        style={{ borderBottom: "1px solid #E5E7EB" }}
        className="flex flex-row items-center justify-between w-[90%] mb-2 px-3 py-3"
      >
        <span
          className="flex-shrink-0 font-roboto"
          style={{ color: "#8E8E8E", fontSize: "14px", fontWeight: "normal" }}
        >
          Store Status
        </span>
        <label className="relative inline-flex items-center cursor-pointer flex-shrink-0">
          {" "}
          <input type="checkbox" value="" className="sr-only peer" />
          <div className="w-9 h-5 bg-gray-200 focus:ring-0 peer-focus:outline-none dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-300 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
        </label>
      </div>

      <div
        className="pb-3 w-full"
        style={{ borderBottom: "1px solid #E5E7EB" }}
      >
        <div className="flex items-center px-2 py-3.5 w-full">
          <div
            style={{ backgroundColor: "#ECEFFF" }}
            className="rounded-[50px] mr-4 w-8 h-8 flex justify-center items-center"
          >
            <div className="flex justify-center items-center p-1.5">
              <img
                src={"/profile.png"}
                className="max-w-full max-h-full object-contain"
              />
            </div>
          </div>
          <span
            className="font-roboto"
            style={{ color: "#8E8E8E", fontSize: "14px" }}
          >
            My Account{" "}
          </span>
        </div>
        <div className="flex items-center px-2 py-3.5 w-full">
          <div
            style={{ backgroundColor: "#ECEFFF" }}
            className="rounded-[50px] mr-4 w-8 h-8 flex justify-center items-center"
          >
            <div className="flex justify-center items-center p-1.5">
              <img
                src={"/messages.png"}
                className="max-w-full max-h-full object-contain"
              />
            </div>
          </div>
          <span
            className="font-roboto"
            style={{ color: "#8E8E8E", fontSize: "14px" }}
          >
            Send Feedback{" "}
          </span>
        </div>
      </div>

      <div
        className="py-3 w-full mb-2"
        style={{ borderBottom: "1px solid #E5E7EB" }}
      >
        <div
          style={{ backgroundColor: "#F9F9F9", borderRadius: "6px" }}
          className="flex items-center px-2 py-3"
        >
          <div
            style={{ backgroundColor: "#ECEFFF" }}
            className="rounded-[50px] mr-2 w-8 h-8 flex justify-center items-center"
          >
            <div className="flex justify-center items-center p-1.5">
              <img
                src={"/wallet.png"}
                className="max-w-full max-h-full object-contain"
              />
            </div>
          </div>
          <div
            style={{ width: "100%", maxWidth: "180px" }}
            className="flex flex-row justify-between items-center"
          >
            <span
              className="font-roboto"
              style={{ color: "#8E8E8E", fontSize: "14px" }}
            >
              Available Credits:{" "}
            </span>
            <span
              className="font-roboto"
              style={{ color: "#4B4B4B", fontSize: "14px", fontWeight: "bold" }}
            >
              00{" "}
            </span>
          </div>
        </div>
      </div>

      <div className="flex flex-row justify-between items-center px-0 py-3 w-full">
        <span
          className="font-roboto"
          style={{ color: "#8E8E8E", fontSize: "12px" }}
        >
          Powered By{" "}
        </span>

        <img src={"/Logo1.png"} className="w-32 h-6.5" />
      </div>
    </div>
  );
});

export default StoreMenuDropdown;
