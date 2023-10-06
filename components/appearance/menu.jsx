import React, { useState } from "react";
import FreeTrialFooter from "../free-trial-footer";

export default function Menu() {
  const [activeTab, setActiveTab] = useState(0);

  const lists = [
    { name: "Pages", details: "Details for Pages" },
    { name: "Custom Links", details: "Details for List Custom Links" },
    { name: "Products", details: "Details for List Products" },
    { name: "Categories", details: "Details for List Categories" },
  ];

  return (
    <div
      className=" min-h-[calc(108vh-180px)] sm:min-h-[calc(100% - 100px)] p-6"
      style={{
        backgroundColor: "var(--white-color, #FFF)",
        borderRadius: "10px",
        boxShadow: `#00000011 0px 2px 4px 2px`,
      }}
    >
      <div className="w-full h-[60vh]">
        <div className="w-full">
          <div className="flex justify-between w-[20%] border-b border-gray-200">
            <button
              className={`flex-grow text-center py-2 px-1 text-[14px] bg-white cursor-pointer ${
                activeTab === 0
                  ? "border-b-2 border-primary-300-main text-primary-300-main font-bold"
                  : "text-neutral-500 hover:bg-gray-100"
              }`}
            >
              Header{" "}
            </button>
            <button
              className={`flex-grow text-center py-2 px-1 text-[14px] bg-white cursor-pointer ${
                activeTab === 1
                  ? "border-b-2 border-primary-300-main text-primary-300-main font-bold"
                  : "text-neutral-500 hover:bg-gray-100"
              }`}
            >
              Footer{" "}
            </button>
          </div>
          <div
            style={{ borderTop: "2px solid #E5E7EB" }}
            className="tab-content text-neutral-500 text-[14px] pt-8 mb-0 flex items-center justify-center "
          ></div>
        </div>

        <div className="flex justify-between w-[100%]">
          <div
            className="w-[40%] p-4 mr-3 "
            style={{
              border: "1px solid #e3e3e3",
              backgroundColor: "var(--white-color, #FFF)",
              borderRadius: "10px",
              boxSizing: "border-box",
            }}
          >
            <p
              style={{ color: "#4B4B4B", fontSize: "14px", fontWeight: 500 }}
              className="mb-3 mt-0"
            >
              Header Items
            </p>
            {lists.map((list, index) => (
              <details key={index} className="mb-2 mx-3">
                <summary
                  style={{
                    borderBottom: "1px solid #e7e5e5",
                    padding: "8px 0px",
                  }}
                  className="flex justify-between items-center cursor-pointer"
                >
                  <span style={{ color: "#4B4B4B", fontSize: "13px" }}>
                    {list.name}
                  </span>
                  <img
                    src={"/arrow-down.png"}
                    alt="Arrow Icon"
                    className="h-4 w-4"
                  />
                </summary>
                <div className="pl-4">
                  <p style={{ color: "#4B4B4B", fontSize: "13px" }}>
                    {list.details}
                  </p>
                </div>
              </details>
            ))}{" "}
          </div>

          <div
            className="w-[60%] p-4 ml-3"
            style={{
              border: "1px solid #e3e3e3",
              backgroundColor: "var(--white-color, #FFF)",
              borderRadius: "10px",
              boxSizing: "border-box",
            }}
          >
            <h4
              style={{
                color: "#4B4B4B",
                fontWeight: "normal",
                fontSize: "16px",
                margin: 0,
              }}
            >
              Header Structure{" "}
            </h4>

            <div className="flex justify-center items-center h-full font-freesans">
              <p
                className="ml-8 mt-2"
                style={{
                  color: "#8E8E8E",
                  padding: "10px 30px",
                  fontSize: "14px",
                }}
              >
                Start adding menu elements from header items{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-end w-full mt-4 mb-4">
          <button
            className="cursor-pointer"
            style={{
              backgroundColor: "#4162FF",
              color: "#ffffff",
              padding: "8px 20px",
              borderRadius: "4px",
            }}
          >
            Save Menu
          </button>
        </div>
      </div>
      <div className=" w-[96%] mx-4 mb-8 mt-4   flex flex-col items-center justify-between">
        <FreeTrialFooter />
      </div>
    </div>
  );
}
