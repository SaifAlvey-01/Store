import React from "react";
import { useState } from "react";

const radioOptions = [
  { id: "radio-1", label: "no-reply@mylaunchstore.io" },
  { id: "radio-2", label: "Custom (SMTP)" },
  { id: "radio-3", label: "None" },
];

export default function SenderEmail({ setShowSidebar }) {
  const [customSMTPSelected, setCustomSMTPSelected] = useState(false);

  const handleRadioChange = (event) => {
    setCustomSMTPSelected(event.target.id === "radio-2");
  };

  return (
    <div className="flex flex-col h-screen">
      {" "}
      <div className="flex justify-between items-center">
        <div className="flex flex-col items-start">
          <div className="flex flex-row items-start mt-4">
            <h3
              className="m-0"
              style={{ fontSize: "17px", fontWeight: "normal" }}
            >
              Sender Email{" "}
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
          <span
            className="font-freesans mt-1.5"
            style={{
              color: "#8E8E8E",
              fontWeight: 400,
              fontSize: "13px",
              maxWidth: "380px",
            }}
          >
            This email will be shown to customers while sending marketing and
            order-related emails.
          </span>
        </div>
      </div>
      <div
        className="flex-1 overflow-y-auto pb-[80px]"
        style={{ overflowY: "scroll" }}
      >
        <div className="mt-8">
          <div className="flex flex-col w-full">
            {radioOptions.map((option) => (
              <label
                key={option.id}
                className="flex flex-row items-center py-2 px-3 w-full border border-gray-200 rounded dark:border-gray-700 mb-4"
                style={{
                  color: "var(--Neutral-600, #4B4B4B)",
                  fontSize: "14px",
                  fontStyle: "normal",
                  fontWeight: "500",
                  lineHeight: "normal",
                  letterSpacing: "0.14px",
                }}
              >
                <input
                  id={option.id}
                  type="radio"
                  value=""
                  name="bordered-radio"
                  className="w-5 h-5 cursor-pointer m-0 text-blue-600 bg-gray-100 border-none focus:ring-none dark:focus:ring-none focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  style={{
                    boxShadow: "none",
                  }}
                  onChange={handleRadioChange}
                />
                <span
                  style={{
                    color: "#4B4B4B",
                    fontWeight: 500,
                    fontSize: "14px",
                  }}
                  className="ml-2 font-lato"
                >
                  {option.label}
                </span>
              </label>
            ))}
          </div>
        </div>

        {customSMTPSelected && (
          <div>
            <div className="mt-2">
              <span
                className="font-freesans"
                style={{
                  color: "#4B4B4B",
                  fontWeight: 500,
                  fontSize: "13px",
                }}
              >
                SMTP Email Host{" "}
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
                placeholder="Enter SMTP Host"
                required
              />
            </div>
            <div className="mt-4">
              <span
                className="font-freesans"
                style={{
                  color: "#4B4B4B",
                  fontWeight: 500,
                  fontSize: "13px",
                }}
              >
                SMTP Port (TLS){" "}
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
                placeholder="Enter SMTP Port (Usually 587)"
                required
              />
            </div>
            <div className="mt-4">
              <span
                className="font-freesans"
                style={{
                  color: "#4B4B4B",
                  fontWeight: 500,
                  fontSize: "13px",
                }}
              >
                SMTP Username{" "}
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
                placeholder="Enter SMTP Username"
                required
              />
            </div>
            <div className="mt-4">
              <span
                className="font-freesans"
                style={{
                  color: "#4B4B4B",
                  fontWeight: 500,
                  fontSize: "13px",
                }}
              >
                SMTP Password{" "}
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
                placeholder="Enter Password"
                required
              />
            </div>
            <div className="mt-4">
              <span
                className="font-freesans"
                style={{
                  color: "#4B4B4B",
                  fontWeight: 500,
                  fontSize: "13px",
                }}
              >
                Custom Email Address{" "}
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
                placeholder="Enter Email Address"
                required
              />
            </div>
          </div>
        )}
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
          onClick={() => setShowSidebar(false)}
          className="bg-blue-600 text-white px-7 py-2.5 rounded cursor-pointer"
        >
          Verify & Connect{" "}
        </button>
      </div>
    </div>
  );
}
