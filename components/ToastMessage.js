import React, { useState, useEffect } from "react";
import "tailwindcss/tailwind.css";

const ToastMessage = ({ type, message, toast }) => {
  const [showToast, setShowToast] = useState(toast);

  useEffect(() => {
    if (toast == true) {
      setTimeout(() => {
        setShowToast(false);
      }, 3000);
    }
  }, []);

  return (
    <div>
      {showToast && (
        <div
          className={`fixed top-0 left-1/2 transform -translate-x-1/2 w-full max-w-lg p-4 rounded-md shadow-md ${getTypeStyles(
            type
          )}`}
          style={{ marginTop: "2rem" }}
        >
          <div className="flex items-center">
            <img
              src={getIconSrc(type)}
              alt={`${type} icon`}
              className="h-5 w-5 mr-2"
            />
            <p className="text-sm">{message}</p>
          </div>
        </div>
      )}
    </div>
  );
};

const getTypeStyles = (type) => {
  switch (type) {
    case "success":
      return "bg-green-100 text-green-800";
    case "error":
      return "bg-red-100 text-red-800";
    case "warning":
      return "bg-yellow-100 text-yellow-800";
    case "info":
      return "bg-blue-100 text-blue-800";
    default:
      return "";
  }
};

const getIconSrc = (type) => {
  switch (type) {
    case "success":
      return "tick-circle.png";
    case "error":
      return "close-circle.png";
    case "warning":
      return "Vector.png";
    case "info":
      return "message-question.png";
    default:
      return "";
  }
};

export default ToastMessage;
