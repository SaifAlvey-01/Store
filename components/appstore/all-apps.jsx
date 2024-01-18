import React, { useState } from "react";
import FreeTrialFooter from "../free-trial-footer";

export default function AllApps() {
  const [selectedRadio, setSelectedRadio] = useState(1);

  const labels = [
    "All (83)",
    "Shipping (06)",
    "Marketing (32)",
    "Customer Support (15)",
    "Analytics (06)",
    "Store Management (19)",
    "Utilities (03)",
  ];

  return (
    <div
      className="min-h-[calc(100vh-180px)] sm:min-h-[calc(100% - 100px)] overflow-y-auto flex flex-col items-center justify-between "
      style={{
        backgroundColor: "var(--white-color, #FFF)",
        borderRadius: "10px",
        boxShadow: `#00000011 0px 2px 4px 2px`,
        padding: "30px ",
      }}
    >
      <div className="flex flex-row w-[100%] items-stretch">
        <div
          className="mr-3 w-[25%] h-[30%] text-white p-4"
          style={{
            borderRadius: "10px",
            backgroundColor: "var(--white-color, #FFF)",
            border: "1px solid #e3e3e3",
          }}
        >
          <div>
            {labels.map((label, idx) => (
              <div key={idx} className="flex items-center mb-5">
                <input
                  id={`radio-${idx + 1}`}
                  type="radio"
                  value=""
                  name="radio-group"
                  checked={selectedRadio === idx + 1}
                  onChange={() => setSelectedRadio(idx + 1)}
                  className="w-4 h-4 m-0 cursor-pointer text-blue-600 bg-gray-100 border-gray-300 dark:ring-offset-gray-800  dark:bg-gray-700 dark:border-gray-600 outline-none"
                />
                <label
                  htmlFor={`radio-${idx + 1}`}
                  className={`ml-2.5 mt-0.5  ${
                    selectedRadio === idx + 1
                      ? "text-neutral-600 font-semibold"
                      : "text-neutral-500 font-medium"
                  }`}
                  style={{ fontSize: "15px" }}
                >
                  {label}
                </label>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col justify-between w-[75%]">
          <div className="flex justify-between">
            <div
              className="w-1/2 p-4 mx-3 mb-10 flex justify-between items-start"
              style={{
                border: "1px solid #e3e3e3",
                backgroundColor: "var(--white-color, #FFF)",
                borderRadius: "10px",
                boxSizing: "border-box",
              }}
            >
              <div className="flex-grow flex flex-col items-start justify-start">
                <img
                  src={"/dashboard_images/shippo.png"}
                  className="w-100 h-100"
                />
                <h4
                  style={{
                    color: "#4B4B4B",
                    fontWeight: 500,
                    fontSize: "16px",
                  }}
                  className="font-roboto my-3"
                >
                  Shippo
                </h4>
                <p
                  style={{
                    color: "#8E8E8E",
                    fontSize: "14px",
                    fontWeight: 500,
                  }}
                  className="font-freesans mt-0 mb-1"
                >
                  Ship products at the best rates and grow your business with
                  Shippo.
                </p>
              </div>

              <button
                className="cursor-pointer"
                style={{
                  backgroundColor: "#ffffff",
                  color: "#4162FF",
                  padding: "6px 22px",
                  borderRadius: "4px",
                  border: "1px solid #4162FF",
                }}
              >
                Install
              </button>
            </div>

            <div
              className="w-1/2 p-4 mx-3 mb-10 flex justify-between items-start"
              style={{
                border: "1px solid #e3e3e3",
                backgroundColor: "var(--white-color, #FFF)",
                borderRadius: "10px",
                boxSizing: "border-box",
              }}
            >
              <div className="flex-grow flex flex-col items-start justify-start">
                <img
                  src={"/dashboard_images/privy.png"}
                  className="w-100 h-100"
                />
                <h4
                  style={{
                    color: "#4B4B4B",
                    fontWeight: 500,
                    fontSize: "16px",
                  }}
                  className="font-roboto my-3"
                >
                  Privy Ecommerce Marketing{" "}
                </h4>
                <p
                  style={{
                    color: "#8E8E8E",
                    fontSize: "14px",
                    fontWeight: 500,
                  }}
                  className="font-freesans mt-0 mb-1"
                >
                  Email marketing, Pop-ups, On-Site Displays, Abandoned Cart &
                  Texts.
                </p>
              </div>

              <button
                className="cursor-pointer"
                style={{
                  backgroundColor: "#ffffff",
                  color: "#4162FF",
                  padding: "6px 22px",
                  borderRadius: "4px",
                  border: "1px solid #4162FF",
                }}
              >
                Install
              </button>
            </div>
          </div>
          <div className="flex justify-between ">
            <div
              className="w-1/2 p-4 mx-3 mb-10 flex justify-between items-start"
              style={{
                border: "1px solid #e3e3e3",
                backgroundColor: "var(--white-color, #FFF)",
                borderRadius: "10px",
                boxSizing: "border-box",
              }}
            >
              <div className="flex-grow flex flex-col items-start justify-start">
                <img
                  src={"/dashboard_images/intercom.png"}
                  className="w-100 h-100"
                />
                <h4
                  style={{
                    color: "#4B4B4B",
                    fontWeight: 500,
                    fontSize: "16px",
                  }}
                  className="font-roboto my-3"
                >
                  Intercom Live Chat{" "}
                </h4>
                <p
                  style={{
                    color: "#8E8E8E",
                    fontSize: "14px",
                    fontWeight: 500,
                  }}
                  className="font-freesans mt-0 mb-1"
                >
                  Add the Intercom Messenger to your website in just a few
                  clicks.
                </p>
              </div>

              <button
                className="cursor-pointer"
                style={{
                  backgroundColor: "#ffffff",
                  color: "#4162FF",
                  padding: "6px 22px",
                  borderRadius: "4px",
                  border: "1px solid #4162FF",
                }}
              >
                Install
              </button>
            </div>

            <div
              className="w-1/2 p-4 mx-3 mb-10 flex justify-between items-start"
              style={{
                border: "1px solid #e3e3e3",
                backgroundColor: "var(--white-color, #FFF)",
                borderRadius: "10px",
                boxSizing: "border-box",
              }}
            >
              <div className="flex-grow flex flex-col items-start justify-start">
                <img
                  src={"/dashboard_images/drift.png"}
                  className="w-100 h-100"
                />
                <h4
                  style={{
                    color: "#4B4B4B",
                    fontWeight: 500,
                    fontSize: "16px",
                  }}
                  className="font-roboto my-3"
                >
                  Drift Live Chat
                </h4>
                <p
                  style={{
                    color: "#8E8E8E",
                    fontSize: "14px",
                    fontWeight: 500,
                  }}
                  className="font-freesans mt-0 mb-1"
                >
                  Live chat & in-app messaging to boost sales for your website.
                </p>
              </div>

              <button
                className="cursor-pointer"
                style={{
                  backgroundColor: "#ffffff",
                  color: "#4162FF",
                  padding: "6px 22px",
                  borderRadius: "4px",
                  border: "1px solid #4162FF",
                }}
              >
                Install
              </button>
            </div>
          </div>

          <div className="flex justify-between">
            <div
              className="w-1/2 p-4 mx-3 mb-10 flex justify-between items-start"
              style={{
                border: "1px solid #e3e3e3",
                backgroundColor: "var(--white-color, #FFF)",
                borderRadius: "10px",
                boxSizing: "border-box",
              }}
            >
              <div className="flex-grow flex flex-col items-start justify-start">
                <img
                  src={"/dashboard_images/G-analytics.png"}
                  className="w-100 h-100"
                />
                <h4
                  style={{
                    color: "#4B4B4B",
                    fontWeight: 500,
                    fontSize: "16px",
                  }}
                  className="font-roboto my-3"
                >
                  Google analytics
                </h4>
                <p
                  style={{
                    color: "#8E8E8E",
                    fontSize: "14px",
                    fontWeight: 500,
                  }}
                  className="font-freesans mt-0 mb-1"
                >
                  Measure your advertising ROI in real time.
                </p>
              </div>

              <button
                className="cursor-pointer"
                style={{
                  backgroundColor: "#ffffff",
                  color: "#4162FF",
                  padding: "6px 22px",
                  borderRadius: "4px",
                  border: "1px solid #4162FF",
                }}
              >
                Install
              </button>
            </div>

            <div
              className="w-1/2 p-4 mx-3 mb-10 flex justify-between items-start"
              style={{
                border: "1px solid #e3e3e3",
                backgroundColor: "var(--white-color, #FFF)",
                borderRadius: "10px",
                boxSizing: "border-box",
              }}
            >
              <div className="flex-grow flex flex-col items-start justify-start">
                <img
                  src={"/dashboard_images/G-ads.png"}
                  className="w-100 h-100"
                />
                <h4
                  style={{
                    color: "#4B4B4B",
                    fontWeight: 500,
                    fontSize: "16px",
                  }}
                  className="font-roboto my-3"
                >
                  Adwords Conversion Tracking
                </h4>
                <p
                  style={{
                    color: "#8E8E8E",
                    fontSize: "14px",
                    fontWeight: 500,
                  }}
                  className="font-freesans mt-0 mb-1"
                >
                  Measure your advertising ROI in real time.
                </p>
              </div>

              <button
                className="cursor-pointer"
                style={{
                  backgroundColor: "#ffffff",
                  color: "#4162FF",
                  padding: "6px 22px",
                  borderRadius: "4px",
                  border: "1px solid #4162FF",
                }}
              >
                Install
              </button>
            </div>
          </div>
          <div className="flex justify-between">
            <div
              className="w-1/2 p-4 mx-3 mb-10 flex justify-between items-start"
              style={{
                border: "1px solid #e3e3e3",
                backgroundColor: "var(--white-color, #FFF)",
                borderRadius: "10px",
                boxSizing: "border-box",
              }}
            >
              <div className="flex-grow flex flex-col items-start justify-start">
                <img
                  src={"/dashboard_images/intercom.png"}
                  className="w-100 h-100"
                />
                <h4
                  style={{
                    color: "#4B4B4B",
                    fontWeight: 500,
                    fontSize: "16px",
                  }}
                  className="font-roboto my-3"
                >
                  Intercom Live Chat
                </h4>
                <p
                  style={{
                    color: "#8E8E8E",
                    fontSize: "14px",
                    fontWeight: 500,
                  }}
                  className="font-freesans mt-0 mb-1"
                >
                  Add the Intercom Messenger to your website in just a few
                  clicks.
                </p>
              </div>

              <button
                className="cursor-pointer"
                style={{
                  backgroundColor: "#ffffff",
                  color: "#4162FF",
                  padding: "6px 22px",
                  borderRadius: "4px",
                  border: "1px solid #4162FF",
                }}
              >
                Install
              </button>
            </div>

            <div
              className="w-1/2 p-4 mx-3 mb-10 flex justify-between items-start"
              style={{
                border: "1px solid #e3e3e3",
                backgroundColor: "var(--white-color, #FFF)",
                borderRadius: "10px",
                boxSizing: "border-box",
              }}
            >
              <div className="flex-grow flex flex-col items-start justify-start">
                <img
                  src={"/dashboard_images/drift.png"}
                  className="w-100 h-100"
                />
                <h4
                  style={{
                    color: "#4B4B4B",
                    fontWeight: 500,
                    fontSize: "16px",
                  }}
                  className="font-roboto my-3"
                >
                  Drift Live Chat
                </h4>
                <p
                  style={{
                    color: "#8E8E8E",
                    fontSize: "14px",
                    fontWeight: 500,
                  }}
                  className="font-freesans mt-0 mb-1"
                >
                  Live chat & in-app messaging to boost sales for your website.
                </p>
              </div>

              <button
                className="cursor-pointer"
                style={{
                  backgroundColor: "#ffffff",
                  color: "#4162FF",
                  padding: "6px 22px",
                  borderRadius: "4px",
                  border: "1px solid #4162FF",
                }}
              >
                Install
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[90%] mx-4 mb-8 mt-4   flex flex-col items-center justify-between">
        <FreeTrialFooter />
      </div>
    </div>
  );
}
