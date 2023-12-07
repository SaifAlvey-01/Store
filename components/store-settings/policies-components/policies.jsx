import React from "react";
import { useState } from "react";
import { CustomEditor } from "../../../components/TinyMCE";


export default function Policies() {
  const [activeTab, setActiveTab] = useState(0);
  const [showDropdown, setShowDropdown] = useState(false);

  const images = [
    "/text-bold.png",
    "/text-italic.png",
    "/text-underline.png",
    "/gallery-tick.png",
    "/attach.png",
    "/quotes.png",
    "/align-text-left.png",
    "/align-text-center.png",
    "/align-text-right.png",
    "/quill_list.png",
    "/number-list-line.png",
    "/outline-code.png",
  ];

  return (
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
          Policies
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
          padding: "14px",
        }}
        className="mt-6"
      >
        {" "}
        <div className="w-[70%]">
          <div className="flex justify-between w-[100%] border-b border-gray-200">
            <button
              onClick={() => setActiveTab(0)}
              className={`flex-grow text-center py-2 px-2 text-[14px] bg-white cursor-pointer ${
                activeTab === 0
                  ? "border-b-2 border-primary-300-main text-primary-300-main font-bold"
                  : "text-neutral-500 hover:bg-gray-100"
              }`}
            >
              Privacy Policy{" "}
            </button>
            <button
              onClick={() => setActiveTab(1)}
              className={`flex-grow text-center py-2 px-2 text-[14px] bg-white cursor-pointer ${
                activeTab === 1
                  ? "border-b-2 border-primary-300-main text-primary-300-main font-bold"
                  : "text-neutral-500 hover:bg-gray-100"
              }`}
            >
              Refund Policy{" "}
            </button>
            <button
              onClick={() => setActiveTab(2)}
              className={`flex-grow text-center py-2 px-2 text-[14px] bg-white cursor-pointer ${
                activeTab === 2
                  ? "border-b-2 border-primary-300-main text-primary-300-main font-bold"
                  : "text-neutral-500 hover:bg-gray-100"
              }`}
            >
              Terms & Conditions{" "}
            </button>
          </div>
          <div
            style={{ borderTop: "2px solid #E5E7EB" }}
            className="tab-content text-neutral-500 text-[14px] pt-8 mb-0 flex items-center justify-center "
          ></div>
        </div>
        <span
          className="font-freesans"
          style={{
            color: "#4B4B4B",
            fontWeight: 500,
            fontSize: "14px",
          }}
        >
          {activeTab === 0 && "Privacy Policy"}
          {activeTab === 1 && "Refund Policy"}
          {activeTab === 2 && "Terms & Conditions"}
        </span>
        <div
          style={{
            border: "1px solid #E5E7EB",
            padding: "16px 14px",
            borderRadius: "8px",
          }}
          className="mt-2"
        >
         <CustomEditor />
        </div>
        <div className="flex justify-end w-full mt-4 mb-4">
          <button
            className="cursor-pointer"
            style={{
              backgroundColor: "#4162FF",
              color: "#ffffff",
              padding: "10px 20px",
              borderRadius: "4px",
            }}
          >
            Add As Store Page{" "}
          </button>
        </div>
      </div>
    </div>
  );
}
