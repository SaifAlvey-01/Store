import React from "react";

const ProductsEditDropdown = ({ isOpen }) => {
  if (!isOpen) return null;

  return (
    <div
      style={{
        position: "absolute",
        right: 124,
        borderRadius: "12px",
        border: "1px solid #EDEDED",
        background: "#FFF",
        boxShadow: "-1px 4px 4px 0px rgba(28, 28, 75, 0.08)",
        width: "106px",
        height: "70px",
      }}
      className="mt-0 z-10 py-1.5"
    >
      <button
        style={{
          background: "#FFF",
          color: "#4B4B4B",
          fontSize: "14px",
          fontWeight: 600,
        }}
        className="block px-4 py-2.5 w-full text-left font-lato"
      >
        Edit{" "}
      </button>
      <button
        style={{
          background: "#FFF",
          color: "#FF4E4E",
          fontSize: "14px",
          fontWeight: 600,
        }}
        className="block px-4 py-2.5 w-full text-left font-lato"
      >
        Delete{" "}
      </button>
    </div>
  );
};

export default ProductsEditDropdown;
