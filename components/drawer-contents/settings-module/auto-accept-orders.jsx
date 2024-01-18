import React from "react";

const radioOptions = [
  { id: "radio-1", label: "COD Orders Only" },
  { id: "radio-2", label: "Prepaid Orders Only" },
  { id: "radio-3", label: "All (COD + Prepaid)" },
  { id: "radio-4", label: "Never" },
];

export default function AutoAcceptOrders({ setShowSidebar }) {
  return (
    <div className="flex flex-col h-screen">
      {" "}
      <div className="flex justify-between items-center">
        <div className="flex flex-rowitems-start mt-4">
          <h3
            className="m-0"
            style={{ fontSize: "17px", fontWeight: "normal" }}
          >
            Auto-accept Orders{" "}
          </h3>
          <div className="flex flex-row items-center ml-3">
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
      </div>
      <div
        className="flex-1 overflow-y-auto pb-[80px]"
        style={{ overflowY: "scroll" }}
      >
        <div className="mt-8">
          <div className="flex flex-col w-full">
            {radioOptions.map((option) => (
              <label
                key={option.id}
                className="flex flex-row items-center py-2 px-3 w-full border border-gray-200 rounded dark:border-gray-700 mb-4"
                style={{
                  color: "var(--Neutral-600, #4B4B4B)",
                  fontSize: "14px",
                  fontStyle: "normal",
                  fontWeight: "500",
                  lineHeight: "normal",
                  letterSpacing: "0.14px",
                }}
              >
                <input
                  id={option.id}
                  type="radio"
                  value=""
                  name="bordered-radio"
                  className="w-5 h-5 cursor-pointer m-0 text-blue-600 bg-gray-100 border-none focus:ring-none dark:focus:ring-none focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  style={{
                    boxShadow: "none",
                  }}
                />
                <span
                  style={{
                    color: "#4B4B4B",
                    fontWeight: 500,
                    fontSize: "14px",
                  }}
                  className="ml-2 font-lato"
                >
                  {option.label}
                </span>
              </label>
            ))}
          </div>
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
          Save{" "}
        </button>
      </div>
    </div>
  );
}
