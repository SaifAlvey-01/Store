import React, { useState } from "react";
import FieldTypeSelect from "../../dropdown-selects/field-type-select";

export default function AddCheckoutFields({ setShowSidebar }) {
  const handleFieldTypeChange = (selectedOption) => {
    console.log(`Selected: ${selectedOption.value}`);
  };

  return (
    <div className="flex flex-col h-screen">
      <div className="flex justify-between items-center">
        <div className="flex flex-rowitems-start mt-4">
          <h3
            className="m-0"
            style={{ fontSize: "17px", fontWeight: "normal" }}
          >
            Add New Field{" "}
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
          <span
            className="font-freesans"
            style={{
              color: "#4B4B4B",
              fontWeight: 500,
              fontSize: "13px",
            }}
          >
            Field Name{" "}
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
            placeholder="Enter Field Name"
            required
          />
        </div>

        <div className="mt-6">
          {" "}
          <FieldTypeSelect onChange={handleFieldTypeChange} />
        </div>

        <div className="flex justify-between items-center mt-6">
          <div className="flex flex-col items-start">
            <span
              className="font-freesans"
              style={{
                color: "#4B4B4B",
                fontWeight: 400,
                fontSize: "14px",
              }}
            >
              Required?{" "}
            </span>
            <span
              className="font-freesans mt-2"
              style={{
                color: "#8E8E8E",
                fontWeight: 400,
                fontSize: "12px",
                maxWidth: "250px",
              }}
            >
              It will make this field as a mandatory field and customer won’t be
              able to skip it.{" "}
            </span>
          </div>

          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" value="" className="sr-only peer" />
            <div className="w-11 h-6 bg-gray-200 focus:ring-0 peer-focus:outline-none dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-300 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          </label>
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
        <button className="bg-blue-600 text-white px-7 py-2.5 rounded cursor-pointer">
          Add Field{" "}
        </button>
      </div>
    </div>
  );
}
