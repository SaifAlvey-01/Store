import React from "react";

export default function EditVariants() {
  return (
    <div>
      {" "}
      <div className="h-[650px]">
        <div className="flex justify-between items-center">
          <div className="flex flex-col items-start mt-4">
            <h3
              className="m-0"
              style={{ fontSize: "17px", fontWeight: "normal" }}
            >
              Search Engine Listing
            </h3>
            <span
              className="mt-1"
              style={{
                fontSize: "13px",
                fontWeight: "normal",
                color: "#8E8E8E",
                maxWidth: "400px",
              }}
            >
              Add title & description to see how product might appear in search
              engine listing
            </span>
          </div>
        </div>
        <div className="mt-6">
          <span
            className="font-freesans"
            style={{
              color: "#4B4B4B",
              fontWeight: 500,
              fontSize: "13px",
            }}
          >
            Page Title{" "}
          </span>
          <input
            className="bg-[#FFF] text-gray-900 text-sm rounded-[10px] block w-full px-4 py-2.5 mt-1 placeholder-gray-300  focus:outline-none"
            style={{
              border: "1.5px solid #E5E7EB",
              boxSizing: "border-box",
            }}
            onFocus={(e) => (e.target.style.borderColor = "#bdbfc0")}
            onBlur={(e) => (e.target.style.borderColor = "#E5E7EB")}
            placeholder="0 - 70 characters used"
            required
          />
        </div>

        <div className="mt-6">
          <span
            className="font-freesans"
            style={{
              color: "#4B4B4B",
              fontWeight: 500,
              fontSize: "13px",
            }}
          >
            Meta Description{" "}
          </span>
          <textarea
            rows="14"
            className="bg-[#FFF] text-gray-900 text-sm rounded-[10px] block w-full px-4 py-2.5 mt-1 placeholder-gray-300 focus:outline-none"
            style={{
              border: "1.5px solid #E5E7EB",
              boxSizing: "border-box",
              resize: "vertical",
            }}
            onFocus={(e) => (e.target.style.borderColor = "#bdbfc0")}
            onBlur={(e) => (e.target.style.borderColor = "#E5E7EB")}
            placeholder="0 - 320 characters used"
            required
          ></textarea>
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
        <button className="bg-blue-600 text-white px-5 py-2.5 rounded cursor-pointer">
          Save{" "}
        </button>
      </div>
    </div>
  );
}
