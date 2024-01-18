import React, { useState } from "react";

import CustomDrawer from "../../../drawer-contents/custom-drawer";

export default function ConfirmDelivery() {
  const [showSidebar, setShowSidebar] = useState(false);
  const [contentType, setContentType] = useState("");

  return (
    <div
      className="min-h-[calc(100vh-180px)] sm:min-h-[calc(100% - 100px)] overflow-y-auto flex flex-col items-center justify-between p-3"
      style={{
        backgroundColor: "var(--white-color, #FFF)",
        borderRadius: "10px",
      }}
    >
      <div className="flex flex-col md:flex-row w-full items-stretch justify-between">
        <div
          className="w-full md:w-[60%] h-auto  p-1 md:p-3 mr-0 md:mr-2 mb-4 md:mb-0"
          style={{
            borderRadius: "10px",
            backgroundColor: "var(--white-color, #FFF)",
            boxSizing: "border-box",
          }}
        >
          <div
            className="px-4 py-6 mb-6"
            style={{
              border: "1px solid #EEE",
              backgroundColor: "var(--white-color, #FFF)",
              borderRadius: "16px",
              boxSizing: "border-box",
            }}
          >
            {" "}
            <div className="self-stretch font-freesans flex flex-col items-start justify-start pt-2 px-4">
              <span
                className="font-roboto mb-1"
                style={{ color: "#4B4B4B", fontSize: "14px" }}
              >
                Shipping VIA{" "}
              </span>
              <img src={"/xpress.png"} />
            </div>
            <hr
              style={{ backgroundColor: "#E5E7EB" }}
              className="my-3 h-0.5 border-t-0 opacity-80"
            />
            <div className="flex justify-between mt-6">
              <div
                className="w-[31%] h-[50px] flex flex-col items-start justify-start px-6 py-2"
                style={{
                  backgroundColor: "var(--white-color, #FFF)",
                  borderRadius: "10px",
                  boxSizing: "border-box",
                }}
              >
                <span
                  className="font-freesans mb-2"
                  style={{ color: "#4B4B4B", fontSize: "12px" }}
                >
                  Pickup by{" "}
                </span>

                <span
                  className="font-freesans"
                  style={{ color: "#8E8E8E", fontSize: "12px" }}
                >
                  Jul 27, 2023 - Thu{" "}
                </span>
              </div>

              <div
                className="w-[31%] h-[50px] flex flex-col items-start justify-start px-6 py-2"
                style={{
                  backgroundColor: "var(--white-color, #FFF)",
                  borderRadius: "10px",
                  boxSizing: "border-box",
                }}
              >
                <span
                  className="font-freesans mb-2"
                  style={{ color: "#4B4B4B", fontSize: "12px" }}
                >
                  Delivered by{" "}
                </span>

                <span
                  className="font-freesans"
                  style={{ color: "#8E8E8E", fontSize: "12px" }}
                >
                  Jul 31, 2023 - Mon{" "}
                </span>
              </div>

              <div
                className="w-[31%] h-[50px] flex flex-col items-start justify-start px-6 py-2"
                style={{
                  backgroundColor: "var(--white-color, #FFF)",
                  borderRadius: "10px",
                  boxSizing: "border-box",
                }}
              >
                <span
                  className="font-freesans mb-2"
                  style={{ color: "#4B4B4B", fontSize: "12px" }}
                >
                  Warehouse{" "}
                </span>

                <span
                  className="font-freesans"
                  style={{ color: "#8E8E8E", fontSize: "12px" }}
                >
                  Jain House{" "}
                </span>
              </div>
            </div>
          </div>

          <div
            className="p-4"
            style={{
              border: "1px solid #EEE",
              backgroundColor: "var(--white-color, #FFF)",
              borderRadius: "16px",
              boxSizing: "border-box",
            }}
          >
            {" "}
            <div className="flex justify-between items-center mx-6">
              <div className="self-stretch font-freesans flex flex-row items-start justify-start pt-2">
                <span
                  className="font-roboto"
                  style={{ color: "#4B4B4B", marginRight: 2, fontSize: "14px" }}
                >
                  Customer Details
                </span>
                <span style={{ color: "#FF3A3A", margin: 0, fontSize: "20px" }}>
                  *
                </span>
              </div>

              <button
                onClick={() => {
                  setShowSidebar(true);
                  setContentType("add-new-customer");
                }}
                style={{
                  borderRadius: "6px",
                  border: "1px dashed #7A91FF",
                  fontSize: "14px",
                  color: "#7A91FF",
                  backgroundColor: "#ffffff",
                }}
                className="flex items-center px-5 py-1.5 hover:bg-gray-300 cursor-pointer"
              >
                Edit{" "}
              </button>
            </div>
            <hr
              style={{ backgroundColor: "#E5E7EB" }}
              className="my-3 h-0.5 border-t-0 opacity-80"
            />
            <div className="flex justify-between my-6">
              <div
                className="w-[31%] h-[50px] flex flex-col items-start justify-start px-6 py-2"
                style={{
                  backgroundColor: "var(--white-color, #FFF)",
                  borderRadius: "10px",
                  boxSizing: "border-box",
                }}
              >
                <span
                  className="font-freesans mb-2"
                  style={{ color: "#4B4B4B", fontSize: "12px" }}
                >
                  Name{" "}
                </span>

                <span
                  className="font-freesans"
                  style={{ color: "#8E8E8E", fontSize: "12px" }}
                >
                  Hayden Par{" "}
                </span>
              </div>

              <div
                className="w-[31%] h-[50px] flex flex-col items-start justify-start px-6 py-2"
                style={{
                  backgroundColor: "var(--white-color, #FFF)",
                  borderRadius: "10px",
                  boxSizing: "border-box",
                }}
              >
                <span
                  className="font-freesans mb-2"
                  style={{ color: "#4B4B4B", fontSize: "12px" }}
                >
                  Email{" "}
                </span>

                <span
                  className="font-freesans"
                  style={{ color: "#8E8E8E", fontSize: "12px" }}
                >
                  hayden@gmail.com{" "}
                </span>
              </div>

              <div
                className="w-[31%] h-[50px] flex flex-col items-start justify-start px-6 py-2"
                style={{
                  backgroundColor: "var(--white-color, #FFF)",
                  borderRadius: "10px",
                  boxSizing: "border-box",
                }}
              >
                <span
                  className="font-freesans mb-2"
                  style={{ color: "#4B4B4B", fontSize: "12px" }}
                >
                  Number{" "}
                </span>

                <span
                  className="font-freesans"
                  style={{ color: "#8E8E8E", fontSize: "12px" }}
                >
                  +91-3242413213332{" "}
                </span>
              </div>
            </div>
            <div className="flex justify-between my-6">
              <div
                className="w-[31%] h-[50px] flex flex-col items-start justify-start px-6 py-2"
                style={{
                  backgroundColor: "var(--white-color, #FFF)",
                  borderRadius: "10px",
                  boxSizing: "border-box",
                }}
              >
                <span
                  className="font-freesans mb-2"
                  style={{ color: "#4B4B4B", fontSize: "12px" }}
                >
                  Address{" "}
                </span>

                <span
                  className="font-freesans"
                  style={{ color: "#8E8E8E", fontSize: "12px" }}
                >
                  ABC 32 Street House 06{" "}
                </span>
              </div>

              <div
                className="w-[31%] h-[50px] flex flex-col items-start justify-start px-6 py-2"
                style={{
                  backgroundColor: "var(--white-color, #FFF)",
                  borderRadius: "10px",
                  boxSizing: "border-box",
                }}
              >
                <span
                  className="font-freesans mb-2"
                  style={{ color: "#4B4B4B", fontSize: "12px" }}
                >
                  Location/Area{" "}
                </span>

                <span
                  className="font-freesans"
                  style={{ color: "#8E8E8E", fontSize: "12px" }}
                >
                  Saddar{" "}
                </span>
              </div>

              <div
                className="w-[31%] h-[50px] flex flex-col items-start justify-start px-6 py-2"
                style={{
                  backgroundColor: "var(--white-color, #FFF)",
                  borderRadius: "10px",
                  boxSizing: "border-box",
                }}
              >
                <span
                  className="font-freesans mb-2"
                  style={{ color: "#4B4B4B", fontSize: "12px" }}
                >
                  Landmark{" "}
                </span>

                <span
                  className="font-freesans"
                  style={{ color: "#8E8E8E", fontSize: "12px" }}
                >
                  AB Chowk{" "}
                </span>
              </div>
            </div>
            <div className="flex justify-between my-6">
              <div
                className="w-[31%] h-[50px] flex flex-col items-start justify-start px-6 py-2"
                style={{
                  backgroundColor: "var(--white-color, #FFF)",
                  borderRadius: "10px",
                  boxSizing: "border-box",
                }}
              >
                <span
                  className="font-freesans mb-2"
                  style={{ color: "#4B4B4B", fontSize: "12px" }}
                >
                  City{" "}
                </span>

                <span
                  className="font-freesans"
                  style={{ color: "#8E8E8E", fontSize: "12px" }}
                >
                  Dehli{" "}
                </span>
              </div>

              <div
                className="w-[31%] h-[50px] flex flex-col items-start justify-start px-6 py-2"
                style={{
                  backgroundColor: "var(--white-color, #FFF)",
                  borderRadius: "10px",
                  boxSizing: "border-box",
                }}
              >
                <span
                  className="font-freesans mb-2"
                  style={{ color: "#4B4B4B", fontSize: "12px" }}
                >
                  Pin Code{" "}
                </span>

                <span
                  className="font-freesans"
                  style={{ color: "#8E8E8E", fontSize: "12px" }}
                >
                  324242{" "}
                </span>
              </div>

              <div
                className="w-[31%] h-[50px] flex flex-col items-start justify-start px-6 py-2"
                style={{
                  backgroundColor: "var(--white-color, #FFF)",
                  borderRadius: "10px",
                  boxSizing: "border-box",
                }}
              >
                <span
                  className="font-freesans mb-2"
                  style={{ color: "#4B4B4B", fontSize: "12px" }}
                >
                  State{" "}
                </span>

                <span
                  className="font-freesans"
                  style={{ color: "#8E8E8E", fontSize: "12px" }}
                >
                  Bihar{" "}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div
          className="w-full md:w-[40%] h-auto text-white p-1 md:p-3"
          style={{
            borderRadius: "10px",
            backgroundColor: "var(--white-color, #FFF)",
          }}
        >
          <div
            className="p-4 mb-6"
            style={{
              border: "1px solid #EEE",
              backgroundColor: "var(--white-color, #FFF)",
              borderRadius: "16px",
              boxSizing: "border-box",
            }}
          >
            <div className="flex flex-row items-center justify-between">
              {" "}
              <span
                className="font-roboto"
                style={{
                  color: "#4B4B4B",
                  marginRight: 2,
                  fontSize: "14px",
                  fontWeight: 500,
                }}
              >
                Payment Method{" "}
              </span>
              <div
                className="flex items-center justify-center py-1.5 px-3 "
                style={{
                  borderRadius: "16px",
                  background: "#FFF6DD",
                }}
              >
                <span
                  style={{
                    marginLeft: "5px",
                    color: "#F2B500",
                    fontSize: "12px",
                  }}
                >
                  COD{" "}
                </span>
              </div>
            </div>
            <hr
              style={{ backgroundColor: "#E5E7EB" }}
              className="my-3 h-0.5 border-t-0 opacity-80"
            />
            <div
              className="font-freesans mt-4 mb-2"
              style={{ color: "#8E8E8E", fontSize: "13px", fontWeight: 500 }}
            >
              {" "}
              Cash on Delivery{" "}
            </div>{" "}
          </div>

          <div
            className="p-4 mb-6"
            style={{
              border: "1px solid #EEE",
              backgroundColor: "var(--white-color, #FFF)",
              borderRadius: "16px",
              boxSizing: "border-box",
            }}
          >
            <div className="flex flex-row items-center justify-between">
              {" "}
              <span
                className="font-roboto"
                style={{
                  color: "#4B4B4B",
                  marginRight: 2,
                  fontSize: "14px",
                  fontWeight: 500,
                }}
              >
                Tracking Number{" "}
              </span>
            </div>
            <hr
              style={{ backgroundColor: "#E5E7EB" }}
              className="my-3 h-0.5 border-t-0 opacity-80"
            />
            <div className="flex flex-row items-center justify-between">
              <span
                className="font-freesans mt-4 mb-2"
                style={{ color: "#8E8E8E", fontSize: "13px", fontWeight: 500 }}
              >
                463452434645756785{" "}
              </span>
              <img src={"/copied.png"} alt="product" />
            </div>
          </div>
          <div
            className="p-4 mb-6"
            style={{
              border: "1px solid #EEE",
              backgroundColor: "var(--white-color, #FFF)",
              borderRadius: "16px",
              boxSizing: "border-box",
            }}
          >
            {" "}
            <span
              className="font-roboto"
              style={{
                color: "#4B4B4B",
                marginRight: 2,
                fontSize: "14px",
                fontWeight: 500,
              }}
            >
              Order Amount{" "}
            </span>
            <hr
              style={{ backgroundColor: "#E5E7EB" }}
              className="my-3 h-0.5 border-t-0 opacity-80"
            />
            <div className="flex justify-between my-5">
              <div
                className="w-[49%]  flex flex-col items-start p-3"
                style={{
                  border: "1px solid #EEE",
                  backgroundColor: "var(--white-color, #FFF)",
                  borderRadius: "6px",
                  boxSizing: "border-box",
                }}
              >
                <span
                  className="font-freesans"
                  style={{ color: "#8E8E8E", fontSize: "14px" }}
                >
                  Item Total{" "}
                </span>

                <div
                  className="font-freesans p-2 mt-2"
                  style={{
                    color: "#4B4B4B",
                    fontSize: "13px",
                    fontWeight: 500,
                    backgroundColor: "#FAFAFA",
                    borderRadius: "4px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  ₹100{" "}
                </div>
              </div>

              <div
                className="w-[49%]  flex flex-col items-start p-3"
                style={{
                  border: "1px solid #EEE",
                  backgroundColor: "var(--white-color, #FFF)",
                  borderRadius: "6px",
                  boxSizing: "border-box",
                }}
              >
                <span
                  className="font-freesans"
                  style={{ color: "#8E8E8E", fontSize: "14px" }}
                >
                  Shipping Weight{" "}
                </span>

                <div
                  className="font-freesans p-2 mt-2"
                  style={{
                    color: "#4B4B4B",
                    fontSize: "13px",
                    fontWeight: 500,
                    backgroundColor: "#FAFAFA",
                    borderRadius: "4px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  1.25KG{" "}
                </div>
              </div>
            </div>
          </div>

          <div
            className="p-4"
            style={{
              border: "1px solid #EEE",
              backgroundColor: "var(--white-color, #FFF)",
              borderRadius: "16px",
              boxSizing: "border-box",
            }}
          >
            {" "}
            <div className="flex justify-between">
              <div
                className="w-[49%]  flex flex-col items-start p-3"
                style={{
                  border: "1px solid #EEE",
                  backgroundColor: "var(--white-color, #FFF)",
                  borderRadius: "6px",
                  boxSizing: "border-box",
                }}
              >
                <span
                  className="font-freesans"
                  style={{ color: "#8E8E8E", fontSize: "14px" }}
                >
                  Shipping Charges{" "}
                </span>

                <div
                  className="font-freesans p-2 mt-2"
                  style={{
                    color: "#4B4B4B",
                    fontSize: "13px",
                    fontWeight: 500,
                    backgroundColor: "#FAFAFA",
                    borderRadius: "4px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  ₹52{" "}
                </div>
              </div>

              <div
                className="w-[49%]  flex flex-col items-start p-3"
                style={{
                  border: "1px solid #EEE",
                  backgroundColor: "var(--white-color, #FFF)",
                  borderRadius: "6px",
                  boxSizing: "border-box",
                }}
              >
                <span
                  className="font-freesans"
                  style={{ color: "#8E8E8E", fontSize: "14px" }}
                >
                  Cash Collection Charge{" "}
                </span>

                <div
                  className="font-freesans p-2 mt-2"
                  style={{
                    color: "#4B4B4B",
                    fontSize: "13px",
                    fontWeight: 500,
                    backgroundColor: "#FAFAFA",
                    borderRadius: "4px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  ₹40{" "}
                </div>
              </div>
            </div>
            <div className="flex justify-between mt-4">
              <div
                className="w-[49%]  flex flex-col items-start p-3"
                style={{
                  border: "1px solid #EEE",
                  backgroundColor: "var(--white-color, #FFF)",
                  borderRadius: "6px",
                  boxSizing: "border-box",
                }}
              >
                <span
                  className="font-freesans"
                  style={{ color: "#8E8E8E", fontSize: "14px" }}
                >
                  GST (18%){" "}
                </span>

                <div
                  className="font-freesans p-2 mt-2"
                  style={{
                    color: "#4B4B4B",
                    fontSize: "13px",
                    fontWeight: 500,
                    backgroundColor: "#FAFAFA",
                    borderRadius: "4px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  ₹16.60{" "}
                </div>
              </div>

              <div
                className="w-[49%]  flex flex-col items-start p-3"
                style={{
                  border: "1px solid #EEE",
                  backgroundColor: "var(--white-color, #FFF)",
                  borderRadius: "6px",
                  boxSizing: "border-box",
                }}
              >
                <span
                  className="font-freesans"
                  style={{ color: "#8E8E8E", fontSize: "14px" }}
                >
                  Total Delivery Charge{" "}
                </span>

                <div
                  className="font-freesans p-2 mt-2"
                  style={{
                    color: "#4B4B4B",
                    fontSize: "13px",
                    fontWeight: 500,
                    backgroundColor: "#FAFAFA",
                    borderRadius: "4px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  ₹108{" "}
                </div>
              </div>
            </div>
            <div
              className="w-[100%]  text-white px-5 py-2 mt-4"
              style={{
                borderRadius: "6px",
                backgroundColor: "#F6F7FF",
                boxSizing: "border-box",
              }}
            >
              <div className="flex justify-between items-center">
                <div className="font-freesans flex flex-row items-center justify-start">
                  <span
                    style={{
                      color: "#4B4B4B",
                      fontWeight: 500,
                      fontSize: "14px",
                    }}
                  >
                    Amount to pay{" "}
                  </span>
                </div>

                <div className="flex flex-row">
                  <button
                    style={{
                      borderRadius: "6px",
                      fontSize: "14px",
                      color: "#FFF",
                      backgroundColor: "#4162FF",
                      fontWeight: 400,
                    }}
                    className="flex items-center py-2.5 px-4 font-freesans "
                  >
                    ₹108{" "}
                  </button>
                </div>
              </div>
            </div>
            <button
              onClick={() => {
                setShowSidebar(true);
                setContentType("my-credit");
              }}
              style={{
                borderRadius: "4px",
                fontSize: "14px",
                color: "#FFF",
                backgroundColor: "#4162FF",
                padding: "10px 30px",
                width: "100%",
              }}
              className="hover:bg-gray-300 cursor-pointer mt-8 mb-2"
            >
              Pay & Request Delivery{" "}
            </button>
          </div>
        </div>
      </div>

      <CustomDrawer
        key={contentType}
        showSidebar={showSidebar}
        setShowSidebar={setShowSidebar}
        contentType={contentType}
        setContentType={setContentType}
      />
    </div>
  );
}
