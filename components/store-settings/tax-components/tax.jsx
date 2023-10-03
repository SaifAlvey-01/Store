import React from "react";

export default function Tax() {
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
          Tax
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
        <div className="flex justify-between items-center">
          <span
            className="font-freesans"
            style={{
              color: "#4B4B4B",
              fontWeight: 500,
              fontSize: "14px",
            }}
          >
            GST{" "}
          </span>

          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" value="" className="sr-only peer" />
            <div className="w-11 h-6 bg-gray-200 focus:ring-0 peer-focus:outline-none dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-300 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          </label>
        </div>
      </div>
    </div>
  );
}
