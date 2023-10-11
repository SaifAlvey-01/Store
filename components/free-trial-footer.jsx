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
        background: "var(--Neutral-50, #FAFAFA)",
        boxShadow: `0px 0px 4px #00000020`,
      }}
      className="w-full md:px-6 px-2 py-3"
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
