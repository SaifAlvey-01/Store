import React from "react";
import CustomDrawer from "../../../drawer-contents/custom-drawer";
import { useState } from "react";

export default function Preferences() {
  const [showSidebar, setShowSidebar] = useState(false);
  const [contentType, setContentType] = useState("");

  return (
    <>
      <div
        className="ml-3 w-[65%] h-auto text-blue-600 p-4"
        style={{
          borderRadius: "10px",
          backgroundColor: "var(--white-color, #FFF)",
          border: "1px solid #e3e3e3",
        }}
      >
        <div className="flex flex-row items-center">
          <h3
            className="m-0 mr-4"
            style={{
              color: "#4B4B4B",
              fontWeight: 600,
              fontSize: "16px",
            }}
          >
            Preferences
          </h3>

          <div className="flex flex-row items-center">
            {" "}
            <img
              style={{
                color: "#8E8E8E",
              }}
              src={"/question-circle.png"}
              className="mr-1 w-4 h-4"
            />
            <span
              style={{
                color: "#8E8E8E",
                fontSize: "12px",
              }}
            >
              {" "}
              How it works{" "}
            </span>
          </div>
        </div>

        <div
          style={{
            border: "1px solid #EAECF0",
            padding: "14px",
            borderRadius: "8px",
          }}
          className="mt-6"
        >
          <div>
            <div className="font-freesans flex flex-col items-start justify-start">
              <span
                className="font-freesans"
                style={{
                  color: "#4B4B4B",
                  fontWeight: 500,
                  fontSize: "14px",
                }}
              >
                Orders{" "}
              </span>
            </div>
          </div>

          <div
            onClick={() => {
              setShowSidebar(true);
              setContentType("auto-accept-orders");
            }}
            className="flex justify-between items-center mt-6 cursor-pointer"
          >
            <div className="flex flex-row items-center">
              {" "}
              <span
                className="mr-2 font-roboto"
                style={{
                  color: "#8E8E8E",
                  fontWeight: 400,
                  fontSize: "14px",
                }}
              >
                Auto-accept Orders{" "}
              </span>
              <img
                style={{
                  color: "#8E8E8E",
                }}
                src={"/info-circle.png"}
                className=" w-4 h-4"
              />
            </div>

            <div className="flex flex-row items-center">
              <span
                className=" mr-1 font-roboto"
                style={{
                  color: "#8E8E8E",
                  fontWeight: 400,
                  fontSize: "14px",
                }}
              >
                Never{" "}
              </span>
              <img
                style={{
                  color: "#8E8E8E",
                }}
                src={"/arrow-left.png"}
                className=" w-5 h-5"
              />
            </div>
          </div>
          <div className="flex justify-between items-center mt-4">
            <div className="flex flex-row items-center">
              <span
                className="mr-2 font-roboto"
                style={{
                  color: "#8E8E8E",
                  fontWeight: 400,
                  fontSize: "14px",
                }}
              >
                Show Notes & Activities
              </span>
              <img
                style={{
                  color: "#8E8E8E",
                }}
                src={"/info-circle.png"}
                className=" w-4 h-4"
              />
            </div>

            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" value="" className="sr-only peer" />
              <div className="w-11 h-6 bg-gray-200 focus:ring-0 peer-focus:outline-none dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-300 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            </label>
          </div>

          <div className="flex justify-between items-center mt-4">
            <div className="flex flex-row items-center">
              <span
                className="mr-2 font-roboto"
                style={{
                  color: "#8E8E8E",
                  fontWeight: 400,
                  fontSize: "14px",
                }}
              >
                Announce New Orders{" "}
              </span>
              <img
                style={{
                  color: "#8E8E8E",
                }}
                src={"/info-circle.png"}
                className=" w-4 h-4"
              />
            </div>

            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" value="" className="sr-only peer" />
              <div className="w-11 h-6 bg-gray-200 focus:ring-0 peer-focus:outline-none dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-300 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            </label>
          </div>
        </div>

        <div
          style={{
            border: "1px solid #EAECF0",
            padding: "14px",
            borderRadius: "8px",
          }}
          className="mt-6"
        >
          <div>
            <div className="font-freesans flex flex-col items-start justify-start">
              <span
                className="font-freesans mb-2"
                style={{
                  color: "#4B4B4B",
                  fontWeight: 500,
                  fontSize: "14px",
                }}
              >
                Notifications{" "}
              </span>
              <span
                className="m-0 font-freesans"
                style={{
                  color: "#8E8E8E",
                  fontWeight: 400,
                  fontSize: "12px",
                }}
              >
                Send order notifications to the customers automatically.{" "}
              </span>
            </div>
          </div>

          <div className="flex justify-between items-center mt-6">
            <div className="flex flex-row items-center">
              {" "}
              <span
                className="mr-2 font-roboto"
                style={{
                  color: "#8E8E8E",
                  fontWeight: 400,
                  fontSize: "14px",
                }}
              >
                Sender Email (SMTP){" "}
              </span>
              <img
                style={{
                  color: "#8E8E8E",
                }}
                src={"/info-circle.png"}
                className=" w-4 h-4"
              />
            </div>

            <div className="flex flex-row items-center">
              <span
                className=" mr-1 font-roboto"
                style={{
                  color: "#8E8E8E",
                  fontWeight: 400,
                  fontSize: "14px",
                }}
              >
                no-reply@mylaunchstrore.io{" "}
              </span>
              <img
                style={{
                  color: "#8E8E8E",
                }}
                src={"/arrow-left.png"}
                className=" w-5 h-5"
              />
            </div>
          </div>
          <div className="flex justify-between items-center mt-4">
            <div className="flex flex-row items-center">
              {" "}
              <span
                className="mr-2 font-roboto"
                style={{
                  color: "#8E8E8E",
                  fontWeight: 400,
                  fontSize: "14px",
                }}
              >
                WhatsApp Notifications{" "}
              </span>
              <img
                style={{
                  color: "#8E8E8E",
                }}
                src={"/info-circle.png"}
                className=" w-4 h-4"
              />
            </div>

            <div className="flex flex-row items-center">
              <span
                className=" mr-1 font-roboto"
                style={{
                  color: "#8E8E8E",
                  fontWeight: 400,
                  fontSize: "14px",
                }}
              >
                None{" "}
              </span>
              <img
                style={{
                  color: "#8E8E8E",
                }}
                src={"/arrow-left.png"}
                className=" w-5 h-5"
              />
            </div>
          </div>
        </div>
      </div>

      <CustomDrawer
        key={contentType}
        showSidebar={showSidebar}
        setShowSidebar={setShowSidebar}
        contentType={contentType}
        setContentType={setContentType}
      />
    </>
  );
}
