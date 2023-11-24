import React, { forwardRef } from "react";
import Image from "next/image";

const ReportsDropdown = forwardRef(({ notifications = [] }, ref) => {
  return (
    <div
      ref={ref}
      x-show="dropdownOpen"
      className="mt-2 px-3 py-4 w-64 bg-white rounded-md shadow-lg overflow-hidden z-50 flex flex-col items-start"
      style={{
        position: "absolute",
        top: 45,
        right: 108,
        border: "1px solid #DADADA",
        boxShadow: "0px 2px 16px 0px rgba(0, 0, 0, 0.10)",
        borderRadius: "8px",
        width: "250px",
        height: "auto",
      }}
    >
      <div className="flex flex-row items-center justify-between w-full mb-6 ">
        <span
          className="font-roboto"
          style={{ color: "#4B4B4B", fontSize: "14px", fontWeight: "bold" }}
        >
          Reports{" "}
        </span>
        <span
          className="font-roboto"
          style={{ color: "#7A91FF", fontSize: "12px" }}
        >
          View All Reports{" "}
        </span>
      </div>
      <span
        className="font-roboto"
        style={{ color: "#8E8E8E", fontSize: "12px" }}
      >
        Today{" "}
      </span>{" "}
      <div className="flex items-center px-2 py-3">
        <div
          style={{ backgroundColor: "#ECEFFF" }}
          className="rounded-[50px] mr-4 w-8 h-8 flex justify-center items-center"
        >
          <div className="flex justify-center items-center p-1.5">
            <img
              src={"/document-text.png"}
              className="max-w-full max-h-full object-contain"
            />
          </div>
        </div>
        <span
          className="font-roboto"
          style={{ color: "#8E8E8E", fontSize: "14px" }}
        >
          All Orders From Jul 01, 2023
        </span>
      </div>
      <span
        className="font-roboto"
        style={{ color: "#8E8E8E", fontSize: "12px" }}
      >
        Today{" "}
      </span>{" "}
      <div className="flex items-center px-2 py-3">
        <div
          style={{ backgroundColor: "#ECEFFF" }}
          className="rounded-[50px] mr-4 w-8 h-8 flex justify-center items-center"
        >
          <div className="flex justify-center items-center p-1.5">
            <img
              src={"/document-text.png"}
              className="max-w-full max-h-full object-contain"
            />
          </div>
        </div>
        <span
          className="font-roboto"
          style={{ color: "#8E8E8E", fontSize: "14px" }}
        >
          All Orders From Jul 01, 2023
        </span>
      </div>
      <div className="flex items-center px-2 py-3">
        <div
          style={{ backgroundColor: "#ECEFFF" }}
          className="rounded-[50px] mr-4 w-8 h-8 flex justify-center items-center"
        >
          <div className="flex justify-center items-center p-1.5">
            <img
              src={"/document-text.png"}
              className="max-w-full max-h-full object-contain"
            />
          </div>
        </div>
        <span
          className="font-roboto"
          style={{ color: "#8E8E8E", fontSize: "14px" }}
        >
          All Orders From Jul 01, 2023
        </span>
      </div>
      <div className="flex items-center px-2 py-3">
        <div
          style={{ backgroundColor: "#ECEFFF" }}
          className="rounded-[50px] mr-4 w-8 h-8 flex justify-center items-center"
        >
          <div className="flex justify-center items-center p-1.5">
            <img
              src={"/document-text.png"}
              className="max-w-full max-h-full object-contain"
            />
          </div>
        </div>
        <span
          className="font-roboto"
          style={{ color: "#8E8E8E", fontSize: "14px" }}
        >
          All Orders From Jul 01, 2023
        </span>
      </div>
    </div>
  );
});

export default ReportsDropdown;
