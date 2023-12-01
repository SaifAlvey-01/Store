import React from "react";

const DeleteLanguageDropdown = ({ isOpen, onDeleteClick }) => {
  if (!isOpen) return null;

  return (
    <div
      style={{
        position: "absolute",
        right: 4,
        top: 24,
        borderRadius: "12px",
        border: "1px solid #EDEDED",
        background: "#FFF",
        boxShadow: "-1px 4px 4px 0px rgba(28, 28, 75, 0.08)",
        width: "160px",
        height: "auto",
      }}
      className="mt-0 z-10 py-1.5"
    >
      <button
        style={{
          background: "#FFF",
          color: "#4162FF",
          fontSize: "14px",
          fontWeight: 600,
        }}
        className="block px-4 py-2.5 w-full text-left font-lato cursor-pointer"
      >
        Preview{" "}
      </button>
      <button
        style={{
          background: "#FFF",
          color: "#4B4B4B",
          fontSize: "14px",
          fontWeight: 600,
        }}
        className="block px-4 py-2.5 w-full text-left font-lato cursor-pointer"
      >
        Make Primary{" "}
      </button>
      <button
        onClick={onDeleteClick}
        style={{
          background: "#FFF",
          color: "#FF4848",
          fontSize: "14px",
          fontWeight: 600,
        }}
        className="block px-4 py-2.5 w-full text-left font-lato cursor-pointer"
      >
        Delete{" "}
      </button>
    </div>
  );
};

export default DeleteLanguageDropdown;
