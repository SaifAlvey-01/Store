import React, { useState } from "react";
import FieldTypeSelect from "../../dropdown-selects/field-type-select";
import { useDispatch } from "react-redux";
import { setShowConnectExistingDomain } from "../../../redux/slices/storeSettingsSlices/connectExistingDomain";

export default function ConnectDomain({ setShowSidebar }) {
  const dispatch = useDispatch();

  const handleVerifyDomain = () => {
    setShowSidebar(false);
    dispatch(setShowConnectExistingDomain(true));
  };

  return (
    <div className="flex flex-col h-screen">
      <div className="flex justify-between items-center">
        <div className="flex flex-rowitems-start mt-4">
          <h3
            className="m-0"
            style={{ fontSize: "17px", fontWeight: "normal" }}
          >
            Connect Existing Domain{" "}
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
            Enter the domain you want to connect{" "}
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
            placeholder="e.g. example.com"
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
          onClick={handleVerifyDomain}
          className="bg-blue-600 text-white px-7 py-2.5 rounded cursor-pointer"
        >
          Verify{" "}
        </button>
      </div>
    </div>
  );
}
