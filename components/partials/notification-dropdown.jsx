import React, { forwardRef } from "react";
import Image from "next/image";

const NotificationDropdown = forwardRef(({ notifications = [] }, ref) => {
  return (
    <div
      ref={ref}
      x-show="dropdownOpen"
      className="mt-2 px-3 py-4 w-64 bg-white rounded-md shadow-lg overflow-hidden z-50 flex flex-col items-center justify-center pt-12" // Added padding-top (pt-8) here
      style={{
        position: "absolute",
        top: 32,
        right: -1,
        border: "1px solid #DADADA",
        boxShadow: "0px 2px 16px 0px rgba(0, 0, 0, 0.10)",
        borderRadius: "8px",
        width: "320px",
        height: notifications.length > 1 ? "auto" : "340px",
      }}
    >
      <span
        className="font-freesans absolute top-4 left-4 mb-4"
        style={{ color: "#4B4B4B", fontSize: "14px", fontWeight: "bold" }}
      >
        Notifications
      </span>

      {notifications.length > 1 ? (
        <>
          <div
            style={{ backgroundColor: "#F6F7FF", borderRadius: "10px" }}
            className="flex items-start w-full justify-start mx-4 mt-10 relative"
          >
            <div className="flex flex-col p-4 w-[70%]">
              <div className="flex flex-row mb-1">
                <span
                  style={{
                    fontSize: "14px",
                    color: "#4B4B4B",
                    fontWeight: 600,
                  }}
                  className="mr-1 font-freesans"
                >
                  Allen John
                </span>
                <span
                  style={{
                    fontSize: "10px",
                    color: "#8E8E8E",
                    fontWeight: 500,
                    lineHeight: "2",
                  }}
                  className="font-freesans"
                >
                  27 min ago
                </span>
              </div>
              <span
                style={{ fontSize: "14px", color: "#4B4B4B", fontWeight: 500 }}
                className="mb-5 mr-1 font-freesans"
              >
                You just got a new order.
              </span>
              <button
                style={{ borderRadius: "8px" }}
                className="bg-blue-500 text-white py-2 px-1 w-[33%]"
              >
                Preview
              </button>
            </div>
            <div className="absolute top-0 right-0 p-2">
              <Image
                src={"/cancel.png"}
                alt="Image Description"
                width={30}
                height={30}
              />
            </div>
          </div>
          <span
            style={{ backgroundColor: "#E6E6E6B2" }}
            className="h-0.5 w-full mt-1"
          ></span>
          <div
            style={{ backgroundColor: "#F6F7FF", borderRadius: "10px" }}
            className="flex items-start w-full justify-start mx-4 mt-10 relative"
          >
            <div className="flex flex-col p-4 w-[70%]">
              <div className="flex flex-row mb-1">
                <span
                  style={{
                    fontSize: "14px",
                    color: "#4B4B4B",
                    fontWeight: 600,
                  }}
                  className="mr-1 font-freesans"
                >
                  Allen John
                </span>
                <span
                  style={{
                    fontSize: "10px",
                    color: "#8E8E8E",
                    fontWeight: 500,
                    lineHeight: "2",
                  }}
                  className="font-freesans"
                >
                  27 min ago
                </span>
              </div>
              <span
                style={{ fontSize: "14px", color: "#4B4B4B", fontWeight: 500 }}
                className="mb-5 mr-1 font-freesans"
              >
                You just got a new order.
              </span>
              <button
                style={{ borderRadius: "8px" }}
                className="bg-blue-500 text-white py-2 px-1 w-[33%]"
              >
                Preview
              </button>
            </div>
            <div className="absolute top-0 right-0 p-2">
              <Image
                src={"/cancel.png"}
                alt="Image Description"
                width={30}
                height={30}
              />
            </div>
          </div>
          <span
            style={{ backgroundColor: "#E6E6E6B2" }}
            className="h-0.5 w-full mt-1"
          ></span>
        </>
      ) : (
        <div>
          <div
            className="mb-6 p-6"
            style={{ backgroundColor: "#FAFAFA", borderRadius: "100px" }}
          >
            <img
              src={"/bell.png"}
              alt="Description of Image"
              className="w-28 h-28 "
            />
          </div>
          <span
            className="font-freesans text-center"
            style={{ color: "#4B4B4B", fontSize: "12px" }}
          >
            There are no notifications here!
          </span>
        </div>
      )}
    </div>
  );
});

export default NotificationDropdown;
