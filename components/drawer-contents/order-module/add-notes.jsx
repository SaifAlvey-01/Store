import React from "react";

export default function AddNotes({ setShowSidebar }) {
  return (
    <div className="flex flex-col h-screen">
      {" "}
      <div className="flex justify-between items-center">
        <div className="flex flex-col items-start mt-4">
          <h3
            className="m-0"
            style={{ fontSize: "17px", fontWeight: "normal" }}
          >
            Add Notes{" "}
          </h3>
        </div>
      </div>
      <div
        className="flex-1 overflow-y-auto pb-[80px]"
        style={{ overflowY: "scroll" }}
      >
        <div className="mt-6">
          <span
            className="font-freesans"
            style={{
              color: "#4B4B4B",
              fontWeight: 500,
              fontSize: "13px",
            }}
          >
            Notes{" "}
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
            placeholder="Enter your notes"
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
        <button className="bg-blue-600 text-white px-7 py-2.5 rounded cursor-pointer">
          Save{" "}
        </button>
      </div>
    </div>
  );
}
