import { useEffect } from "react";
import { useRef } from "react";

const ManualPaymentEditDropdown = ({ isOpen, onClose }) => {
  const dropdownRef = useRef();

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef, onClose]);

  if (!isOpen) return null;

  return (
    <div
      ref={dropdownRef}
      style={{
        position: "absolute",
        right: 6,
        borderRadius: "12px",
        border: "1px solid #EDEDED",
        background: "#FFF",
        boxShadow: "-1px 4px 4px 0px rgba(28, 28, 75, 0.08)",
        width: "110px",
        height: "70px",
      }}
      className="mt-0 z-10 py-2"
    >
      <button
        style={{
          background: "#FFF",
          color: "#4B4B4B",
          fontSize: "14px",
          fontWeight: 600,
        }}
        className="block px-4 py-2.5 w-full text-left font-lato cursor-pointer"
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

export default ManualPaymentEditDropdown;
