import React from "react";
import { useState } from "react";
import CustomDrawer from "../../drawer-contents/custom-drawer";

export default function Checkout() {
  const [showAsterisk, setShowAsterisk] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  const [contentType, setContentType] = useState("");

  const radioOptions = [
    { id: "enabled-radio-1", label: "Enabled" },
    { id: "disabled-radio-2", label: "Disabled" },
  ];

  return (
    <>
      <div
        className="ml-3 w-[65%] h-auto text-blue-600 p-4"
        style={{
          borderRadius: "10px",
          backgroundColor: "var(--white-color, #FFF)",
          border: "1px solid #e3e3e3",
        }}
      >
        <div className="flex flex-row items-center">
          <h3
            className="m-0 mr-4"
            style={{
              color: "#4B4B4B",
              fontWeight: 600,
              fontSize: "16px",
            }}
          >
            Checkout
          </h3>

          <div className="flex flex-row items-center">
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

        <div
          style={{
            border: "1px solid #EAECF0",
            padding: "14px",
            borderRadius: "8px",
          }}
          className="mt-6"
        >
          {" "}
          <div className="font-freesans flex flex-col items-start justify-start">
            <span
              className="font-freesans mb-2"
              style={{
                color: "#4B4B4B",
                fontWeight: 500,
                fontSize: "14px",
              }}
            >
              Guest Checkout{" "}
            </span>
            <span
              className="m-0 font-freesans"
              style={{
                color: "#8E8E8E",
                fontWeight: 400,
                fontSize: "12px",
              }}
            >
              Customers will be able to check out as guests without verifying
              their mobile number.{" "}
            </span>
          </div>
          <div className="flex flex-row items-center mt-2">
            {radioOptions.map((option) => (
              <div
                key={option.id}
                className="flex items-center pr-6 border border-gray-200 rounded dark:border-gray-700 mr-12"
              >
                <input
                  id={option.id}
                  type="radio"
                  value=""
                  name="bordered-radio"
                  className="w-6 h-6 cursor-pointer m-0 text-blue-600 bg-gray-100 border-none focus:ring-none dark:focus:ring-none focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  style={{
                    boxShadow: "none",
                  }}
                />
                <label
                  htmlFor={option.id}
                  className="w-full py-3 ml-2 text-sm font-medium font-lato flex items-center"
                  style={{
                    color: "var(--Neutral-600, #4B4B4B)",
                    fontSize: "14px",
                    fontStyle: "normal",
                    fontWeight: "500",
                    lineHeight: "normal",
                    letterSpacing: "0.14px",
                  }}
                >
                  {option.label}
                </label>
              </div>
            ))}
          </div>
        </div>

        <div
          style={{
            border: "1px solid #EAECF0",
            padding: "14px",
            borderRadius: "8px",
          }}
          className="mt-6"
        >
          <span
            className="font-freesans mb-2"
            style={{
              color: "#4B4B4B",
              fontWeight: 500,
              fontSize: "14px",
            }}
          >
            Checkout From{" "}
          </span>
          <div className="grid gap-6 mb-4 md:grid-cols-2 mt-4">
            <div className="inputWithAsterisk">
              <input
                type="text"
                className="bg-gray-50 font-freesans p-3 focus:border-red-500"
                style={{
                  borderRadius: "8px",
                  border: "none",
                  flex: 1,
                  background: "transparent",
                }}
                placeholder={`Name`}
                required
              />
              {showAsterisk && <span className="redAsteriskSpan">*</span>}
            </div>

            <div className="inputWithAsterisk">
              <input
                type="text"
                className="bg-gray-50 font-freesans p-3 focus:border-red-500"
                style={{
                  borderRadius: "8px",
                  border: "none",
                  flex: 1,
                  background: "transparent",
                }}
                placeholder={`Mobile Number`}
                required
              />
              {showAsterisk && <span className="redAsteriskSpan">*</span>}
            </div>

            <div className="inputWithAsterisk">
              <input
                type="text"
                className="bg-gray-50 font-freesans p-3 focus:border-red-500"
                style={{
                  borderRadius: "8px",
                  border: "none",
                  flex: 1,
                  background: "transparent",
                }}
                placeholder={`Email Address (Optional)`}
                required
              />
              {showAsterisk && <span className="redAsteriskSpan">*</span>}
            </div>
            <div className="inputWithAsterisk">
              <input
                type="text"
                className="bg-gray-50 font-freesans p-3 focus:border-red-500"
                style={{
                  borderRadius: "8px",
                  border: "none",
                  flex: 1,
                  background: "transparent",
                }}
                placeholder={`Country`}
                required
              />
              {showAsterisk && <span className="redAsteriskSpan">*</span>}
            </div>
            <div className="inputWithAsterisk">
              <input
                type="text"
                className="bg-gray-50 font-freesans p-3 focus:border-red-500"
                style={{
                  borderRadius: "8px",
                  border: "none",
                  flex: 1,
                  background: "transparent",
                }}
                placeholder={`Address`}
                required
              />
              {showAsterisk && <span className="redAsteriskSpan">*</span>}
            </div>
            <div className="inputWithAsterisk">
              <input
                type="text"
                className="bg-gray-50 font-freesans p-3 focus:border-red-500"
                style={{
                  borderRadius: "8px",
                  border: "none",
                  flex: 1,
                  background: "transparent",
                }}
                placeholder={`Pin Code`}
                required
              />
              {showAsterisk && <span className="redAsteriskSpan">*</span>}
            </div>
            <div className="inputWithAsterisk">
              <input
                type="text"
                className="bg-gray-50 font-freesans p-3 focus:border-red-500"
                style={{
                  borderRadius: "8px",
                  border: "none",
                  flex: 1,
                  background: "transparent",
                }}
                placeholder={`City`}
                required
              />
              {showAsterisk && <span className="redAsteriskSpan">*</span>}
            </div>
            <div className="inputWithAsterisk">
              <input
                type="text"
                className="bg-gray-50 font-freesans p-3 focus:border-red-500"
                style={{
                  borderRadius: "8px",
                  border: "none",
                  flex: 1,
                  background: "transparent",
                }}
                placeholder={`State`}
                required
              />
              {showAsterisk && <span className="redAsteriskSpan">*</span>}
            </div>
            <div className="inputWithAsterisk">
              <input
                type="text"
                className="bg-gray-50 font-freesans p-3 focus:border-red-500"
                style={{
                  borderRadius: "8px",
                  border: "none",
                  flex: 1,
                  background: "transparent",
                }}
                placeholder={`Locality / Area`}
                required
              />
              {showAsterisk && <span className="redAsteriskSpan">*</span>}
            </div>
            <div className="inputWithAsterisk">
              <input
                type="text"
                className="bg-gray-50 font-freesans p-3 focus:border-red-500"
                style={{
                  borderRadius: "8px",
                  border: "none",
                  flex: 1,
                  background: "transparent",
                }}
                placeholder={`Landmark`}
                required
              />
              {showAsterisk && <span className="redAsteriskSpan">*</span>}
            </div>
          </div>

          <div className="flex flex-col">
            <div className="flex items-center">
              <input
                style={{
                  appearance: "none",
                  display: "none",
                }}
                checked={isChecked}
                onChange={() => {
                  setIsChecked(!isChecked);
                  setShowAsterisk(!showAsterisk);
                }}
                id="checked-checkbox"
                type="checkbox"
                value=""
              />
              <label
                style={{
                  color: "#4B5563",
                  fontSize: "14px",
                  fontStyle: 500,
                  display: "inline-flex",
                  alignItems: "center",
                  position: "relative",
                }}
                htmlFor="checked-checkbox"
                className="ml-1.5 text-sm font-medium cursor-pointer"
              >
                <span
                  style={{
                    width: "16px",
                    height: "16px",
                    borderRadius: "4px",
                    border: isChecked
                      ? "2px solid #3B82F6"
                      : "2px solid #D1D5DB",
                    backgroundColor: isChecked ? "white" : "transparent",
                    marginRight: "8px",
                    display: "inline-block",
                  }}
                ></span>
                {isChecked && (
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="absolute text-blue-600 w-4 h-4"
                    style={{
                      left: "2px",
                      top: "50%",
                      transform: "translateY(-50%)",
                    }}
                  >
                    <path
                      d="M20 6L9 17L4 12"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
                Required Field{" "}
              </label>
            </div>
          </div>
        </div>

        <div
          style={{
            border: "1px solid #EAECF0",
            padding: "14px",
            borderRadius: "8px",
          }}
          className="mt-6"
        >
          {" "}
          <div className="font-freesans flex flex-col items-start justify-start">
            <span
              className="font-freesans mb-2"
              style={{
                color: "#4B4B4B",
                fontWeight: 500,
                fontSize: "14px",
              }}
            >
              Additional information{" "}
            </span>
            <span
              className="m-0 font-freesans"
              style={{
                color: "#8E8E8E",
                fontWeight: 400,
                fontSize: "12px",
              }}
            >
              Create additional fields to collect extra information from your
              customers.
            </span>
          </div>
          <div className="flex flex-row items-center justify-center mt-6">
            {" "}
            <button
              onClick={() => {
                setShowSidebar(true);
                setContentType("add-checkout-fields");
              }}
              className=" cursor-pointer ml-4"
              style={{
                backgroundColor: "#ffffff",
                color: "#4B4B4B",
                padding: "8px 16px",
                borderRadius: "4px",
                border: "1px dashed #8E8E8E",
              }}
            >
              Add Fields{" "}
            </button>
          </div>
        </div>

        <div className="flex justify-end mt-4">
          {" "}
          <button
            className="cursor-pointer ml-4"
            style={{
              backgroundColor: "#4162FF",
              color: "#ffffff",
              padding: "10px 22px",
              borderRadius: "4px",
            }}
          >
            Save{" "}
          </button>
        </div>
      </div>

      <CustomDrawer
        key={contentType}
        showSidebar={showSidebar}
        setShowSidebar={setShowSidebar}
        contentType={contentType}
        setContentType={setContentType}
      />
    </>
  );
}
