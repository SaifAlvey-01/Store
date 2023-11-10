import React from "react";
import UnitSelect from "../dropdown-selects/unit-select";
import StateSelect from "../dropdown-selects/state-select";
import { useState } from "react";

export default function ShipOrder({ setContentType }) {
  const [isChecked, setIsChecked] = useState(false);
  const [isAddTracking, setIsAddTracking] = useState(false);
  const [selectedOption, setSelectedOption] = useState("partnerDelivery");

  const handleProceed = () => {
    if (selectedOption === "partnerDelivery") {
      setContentType("pickup-time");
    } else if (selectedOption === "selfShip") {
      setContentType(isAddTracking ? "tracking-details" : "delivery-time");
    }
  };

  return (
    <div>
      {" "}
      <div className="h-[650px]">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <h3 style={{ fontSize: "18px", fontWeight: "normal" }}>
              Ship Order VIA{" "}
            </h3>
          </div>
        </div>

        <div
          style={{ borderBottom: "1px solid #EAECF0" }}
          className="mt-4 px-6 py-2 "
        >
          <div className="flex flex-row items-center justify-between mb-1.5">
            <div className="flex flex-col items-start justify-between">
              {" "}
              <p
                className="font-freesans mb-4"
                style={{
                  color: "#4B4B4B",
                  fontWeight: 500,
                  fontSize: "13px",
                }}
              >
                Partner Delivery{" "}
              </p>
              <img src={"/xpress.png"} />
            </div>
            <div className="flex flex-col items-start justify-between">
              {" "}
              <p
                className="font-freesans mb-4"
                style={{
                  color: "#4B4B4B",
                  fontWeight: 500,
                  fontSize: "13px",
                }}
              >
                Charges From{" "}
              </p>
              <span
                className="font-freesans"
                style={{
                  color: "#8E8E8E",
                  fontWeight: 500,
                  fontSize: "13px",
                }}
              >
                ₹10 (Per 5000 gram){" "}
              </span>{" "}
            </div>{" "}
            <input
              type="radio"
              id="partnerDelivery"
              name="partner-delivery"
              checked={selectedOption === "partnerDelivery"}
              onChange={() => {
                setSelectedOption("partnerDelivery");
                setIsAddTracking(false); // Add this line
              }}
              className="w-5 h-5 cursor-pointer m-0 text-blue-600 bg-gray-100 border-none focus:ring-none dark:focus:ring-none focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              style={{
                boxShadow: "none",
              }}
            />
          </div>
        </div>

        <div
          style={{ borderBottom: "1px solid #EAECF0" }}
          className="mt-4 px-6 py-2 "
        >
          <div className="flex flex-row items-center justify-between mb-1.5">
            <div className="flex flex-col items-start justify-between">
              {" "}
              <p
                className="font-freesans mb-4"
                style={{
                  color: "#4B4B4B",
                  fontWeight: 500,
                  fontSize: "13px",
                }}
              >
                Self Ship{" "}
              </p>
              <div className="flex flex-col">
                <div className="flex items-center">
                  <input
                    style={{
                      appearance: "none",
                      display: "none",
                    }}
                    checked={isChecked}
                    onChange={() => {
                      setIsAddTracking(!isAddTracking);
                    }}
                    id="checked-checkbox"
                    type="checkbox"
                    value=""
                  />
                  <label
                    style={{
                      color: "#8E8E8E",
                      fontSize: "14px",
                      fontStyle: 500,
                      display: "inline-flex",
                      alignItems: "center",
                      position: "relative",
                    }}
                    htmlFor="checked-checkbox"
                    className="text-sm font-medium cursor-pointer"
                  >
                    <span
                      style={{
                        width: "16px",
                        height: "16px",
                        borderRadius: "4px",
                        border: isAddTracking
                          ? "2px solid #3B82F6"
                          : "2px solid #D1D5DB",
                        backgroundColor: isAddTracking
                          ? "white"
                          : "transparent",
                        marginRight: "8px",
                        display: "inline-block",
                      }}
                    ></span>
                    {isAddTracking && (
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
                    Add tracking details in the next step{" "}
                  </label>
                </div>
              </div>{" "}
            </div>

            <input
              type="radio"
              id="selfShip"
              name="self-ship"
              checked={selectedOption === "selfShip"}
              onChange={() => setSelectedOption("selfShip")}
              className="w-5 h-5 cursor-pointer m-0 text-blue-600 bg-gray-100 border-none focus:ring-none dark:focus:ring-none focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              style={{
                boxShadow: "none",
              }}
            />
          </div>
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
        <button
          onClick={handleProceed}
          className="bg-blue-600 text-white px-7 py-2.5 rounded cursor-pointer"
        >
          Proceed{" "}
        </button>
      </div>
    </div>
  );
}
