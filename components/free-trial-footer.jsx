import React from "react";

export default function FreeTrialFooter() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        borderRadius: "6px",
        backgroundColor: "#FAFAFA",
        boxShadow: `#00000022 0px 2px 6px 2px`,
      }}
      className="w-full px-2 py-2"
    >
      <span
        style={{
          fontSize: "14px",
          color: "#4B4B4B",
          margin: "0px 2px",
        }}
      >
        You have 01 day left in your free trial.
      </span>
      <button
        style={{
          backgroundColor: "#FF5353",
          color: "#ffffff",
          padding: "10px 26px",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        Subscribe
      </button>
    </div>
  );
}
