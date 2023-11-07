import React, { useState } from "react";
import Style from "./createSearchStyle.module.css";
import Link from "next/link";
import CustomDrawer from "../../drawer-contents/custom-drawer";

export default function OrderDetails() {
  const [selectedRadio, setSelectedRadio] = useState(1);
  const [showSidebar, setShowSidebar] = useState(false);
  const [contentType, setContentType] = useState("");

  const labels = ["Online Payment", "Cash on Delivery", "Prepaid"];

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
            <div className="flex justify-between items-center mx-3.5">
              <div className="self-stretch font-freesans flex flex-col items-start justify-start pt-2">
                <span
                  className="font-roboto mb-1"
                  style={{ color: "#4B4B4B", fontSize: "14px" }}
                >
                  Order ID #891273981
                </span>
                <span style={{ color: "#8E8E8E", fontSize: "12px" }}>
                  Today, 03:53 PM - Manual{" "}
                </span>
              </div>

              <div
                className="flex items-center justify-center py-1.5 px-2.5 "
                style={{
                  borderRadius: "16px",
                  background: "#ECEFFF",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="8"
                  height="8"
                  viewBox="0 0 8 8"
                  fill="none"
                  style={{ flexShrink: 0 }}
                >
                  <circle cx="4" cy="4" r="3" fill="#4162FF" />
                </svg>

                <span
                  style={{
                    marginLeft: "5px",
                    color: "#4162FF",
                    fontSize: "13px",
                  }}
                >
                  Pending{" "}
                </span>
              </div>
            </div>
            <hr
              style={{ backgroundColor: "#E5E7EB" }}
              className="my-3 h-0.5 border-t-0 opacity-80"
            />
            <div className="flex justify-between mt-5">
              <div
                className="w-[47%] flex flex-col justify-between p-4"
                style={{
                  border: "1px solid #EAECF0",
                  backgroundColor: "#F9FAFF",
                  borderRadius: "10px",
                  boxSizing: "border-box",
                }}
              >
                <div className="flex flex-row items-center justify-between">
                  <div className="flex items-center">
                    <img
                      className="h-11 w-11"
                      src={"/product-img.png"}
                      alt="product"
                    />
                    <div className="ml-2 flex flex-col w-full ">
                      <span
                        className="font-freesans mb-2"
                        style={{ color: "#4B4B4B", fontSize: "12px" }}
                      >
                        Shoes 003{" "}
                      </span>
                      <span
                        className="font-freesans"
                        style={{ color: "#8E8E8E", fontSize: "12px" }}
                      >
                        1 kg{" "}
                      </span>
                    </div>
                  </div>

                  <div
                    className="font-freesans"
                    style={{
                      color: "#4162FF",
                      fontSize: "15px",
                      fontWeight: 600,
                      backgroundColor: "#F3F5FF",
                      borderRadius: "50px",
                      height: "40px",
                      width: "40px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    ₹10
                  </div>
                </div>

                <div className="flex flex-row items-center mt-3">
                  <div
                    className="font-freesans cursor-pointer"
                    style={{
                      color: "#4162FF",
                      fontSize: "16px",
                      fontWeight: 600,
                      backgroundColor: "#F3F5FF",
                      borderRadius: "50px",
                      height: "26px",
                      width: "26px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <img src={"/sub.png"} alt="product" />
                  </div>
                  <span
                    className="mx-2"
                    style={{ color: "#8E8E8E", fontSize: "11px" }}
                  >
                    02{" "}
                  </span>
                  <div
                    className="font-freesans cursor-pointer"
                    style={{
                      color: "#4162FF",
                      fontSize: "16px",
                      fontWeight: 600,
                      backgroundColor: "#F3F5FF",
                      borderRadius: "50px",
                      height: "26px",
                      width: "26px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <img src={"/add.png"} alt="product" />
                  </div>

                  <span
                    className="mx-2"
                    style={{ color: "#8E8E8E", fontSize: "11px" }}
                  >
                    x ₹5{" "}
                  </span>
                </div>
              </div>

              <div
                className="w-[47%] flex flex-col justify-between p-4"
                style={{
                  border: "1px solid #EAECF0",
                  backgroundColor: "#F9FAFF",
                  borderRadius: "10px",
                  boxSizing: "border-box",
                }}
              >
                <div className="flex flex-row items-center justify-between">
                  <div className="flex items-center">
                    <img
                      className="h-11 w-11"
                      src={"/product-img.png"}
                      alt="product"
                    />
                    <div className="ml-2 flex flex-col w-full ">
                      <span
                        className="font-freesans mb-2"
                        style={{ color: "#4B4B4B", fontSize: "12px" }}
                      >
                        Shoes 003{" "}
                      </span>
                      <span
                        className="font-freesans"
                        style={{ color: "#8E8E8E", fontSize: "12px" }}
                      >
                        1 kg{" "}
                      </span>
                    </div>
                  </div>

                  <div
                    className="font-freesans"
                    style={{
                      color: "#4162FF",
                      fontSize: "15px",
                      fontWeight: 600,
                      backgroundColor: "#F3F5FF",
                      borderRadius: "50px",
                      height: "40px",
                      width: "40px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    ₹10
                  </div>
                </div>

                <div className="flex flex-row items-center mt-3">
                  <div
                    className="font-freesans cursor-pointer"
                    style={{
                      color: "#4162FF",
                      fontSize: "16px",
                      fontWeight: 600,
                      backgroundColor: "#F3F5FF",
                      borderRadius: "50px",
                      height: "26px",
                      width: "26px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <img src={"/sub.png"} alt="product" />
                  </div>
                  <span
                    className="mx-2"
                    style={{ color: "#8E8E8E", fontSize: "11px" }}
                  >
                    02{" "}
                  </span>
                  <div
                    className="font-freesans cursor-pointer"
                    style={{
                      color: "#4162FF",
                      fontSize: "16px",
                      fontWeight: 600,
                      backgroundColor: "#F3F5FF",
                      borderRadius: "50px",
                      height: "26px",
                      width: "26px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <img src={"/add.png"} alt="product" />
                  </div>

                  <span
                    className="mx-2"
                    style={{ color: "#8E8E8E", fontSize: "11px" }}
                  >
                    x ₹5{" "}
                  </span>
                </div>
              </div>
            </div>
            <div className="flex flex-row items-center justify-between m-3">
              {" "}
              <span
                className="font-freesans"
                style={{ color: "#8E8E8E", fontSize: "12px" }}
              >
                02 Item{" "}
              </span>
              <div className="flex flex-row items-center">
                <img src={"/reciept.png"} alt="product" />
                <span
                  className="font-freesans  ml-1"
                  style={{ color: "#7A91FF", fontSize: "12px" }}
                >
                  Receipt{" "}
                </span>
              </div>
            </div>{" "}
            <div className="self-stretch font-freesans flex flex-row items-start justify-start pt-4">
              <span
                className="font-roboto"
                style={{
                  color: "#4B4B4B",
                  marginRight: 2,
                  fontSize: "14px",
                  fontWeight: 500,
                }}
              >
                Payment Details{" "}
              </span>
            </div>
            <hr
              style={{ backgroundColor: "#E5E7EB" }}
              className="my-3 h-0.5 border-t-0 opacity-80"
            />
            <div className="flex justify-between my-5">
              <div
                className="w-[31%] h-[50px] flex flex-row items-center justify-between px-3 py-2"
                style={{
                  border: "1px solid #e3e3e3",
                  backgroundColor: "var(--white-color, #FFF)",
                  borderRadius: "10px",
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
                  className="font-freesans px-2.5 py-1.5"
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
                className="w-[31%] h-[50px] flex flex-row items-center justify-between px-3 py-2"
                style={{
                  border: "1px solid #e3e3e3",
                  backgroundColor: "var(--white-color, #FFF)",
                  borderRadius: "10px",
                  boxSizing: "border-box",
                }}
              >
                <span
                  className="font-freesans"
                  style={{ color: "#8E8E8E", fontSize: "14px" }}
                >
                  Discount{" "}
                </span>

                <div
                  className="font-freesans px-2.5 py-1.5"
                  style={{
                    color: "#009821",
                    fontSize: "13px",
                    fontWeight: 500,
                    backgroundColor: "#FAFAFA",
                    borderRadius: "4px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  -₹15{" "}
                </div>
              </div>

              <div
                className="w-[31%] h-[50px] flex flex-row items-center justify-between px-3 py-2"
                style={{
                  border: "1px solid #e3e3e3",
                  backgroundColor: "var(--white-color, #FFF)",
                  borderRadius: "10px",
                  boxSizing: "border-box",
                }}
              >
                <span
                  className="font-freesans"
                  style={{ color: "#8E8E8E", fontSize: "14px" }}
                >
                  Delivery{" "}
                </span>

                <div
                  className="font-freesans px-2.5 py-1.5"
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
            </div>
            <div
              className="w-[100%]  text-white px-5 py-2"
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
                    Grand Total{" "}
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
                    ₹95{" "}
                  </button>
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
                  setContentType("add-customer-details");
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
            <div className="flex flex-row justify-between items-center">
              <span
                className="font-roboto"
                style={{
                  color: "#4B4B4B",
                  marginRight: 2,
                  fontSize: "14px",
                  fontWeight: 500,
                }}
              >
                Notes{" "}
              </span>
              <span
                onClick={() => {
                  setShowSidebar(true);
                  setContentType("add-notes");
                }}
                className="font-freesans cursor-pointer"
                style={{ color: "#7A91FF", fontSize: "13px", fontWeight: 600 }}
              >
                Add{" "}
              </span>
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
              Add Order Notes Here{" "}
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
              Activity{" "}
            </span>
            <hr
              style={{ backgroundColor: "#E5E7EB" }}
              className="my-3 h-0.5 border-t-0 opacity-80"
            />
            <div
              className="w-[100%]  text-white px-3 py-2.5 flex flex-row justify-between items-center"
              style={{
                borderRadius: "6px",
                backgroundColor: "#F6F7FF",
                boxSizing: "border-box",
              }}
            >
              <div className="flex justify-between items-center">
                {" "}
                <label
                  className="flex flex-row items-center py-1.5 w-full border border-gray-200 rounded dark:border-gray-700"
                  style={{
                    color: "#4B4B4B",
                    fontSize: "14px",
                    fontWeight: "500",
                  }}
                >
                  <input
                    type="radio"
                    name="selected-customer"
                    className="w-5 h-5 cursor-pointer m-0 text-blue-600 bg-gray-100 border-none focus:ring-none dark:focus:ring-none focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    style={{
                      boxShadow: "none",
                    }}
                  />
                  <span className="flex flex-col ml-2 font-lato ">
                    <span style={{ fontSize: "14px", color: "#4B4B4B" }}>
                      Order Received{" "}
                    </span>{" "}
                    <span
                      className="mt-1.5"
                      style={{ fontSize: "12px", color: "#8E8E8E" }}
                    >
                      nftwatcher022@gmail.com{" "}
                    </span>
                  </span>
                </label>
              </div>

              <span
                className="font-freesans mt-4 mb-2"
                style={{ color: "#8E8E8E", fontSize: "13px", fontWeight: 500 }}
              >
                Today, 05:00PM{" "}
              </span>
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
            <div className="flex flex-row justify-between items-center">
              <span
                className="font-roboto"
                style={{
                  color: "#4B4B4B",
                  marginRight: 2,
                  fontSize: "14px",
                  fontWeight: 500,
                }}
              >
                Tags{" "}
              </span>
              <span
                className="font-freesans"
                style={{ color: "#7A91FF", fontSize: "13px", fontWeight: 600 }}
              >
                Manage{" "}
              </span>
            </div>
            <hr
              style={{ backgroundColor: "#E5E7EB" }}
              className="my-3 h-0.5 border-t-0 opacity-80"
            />
            <div className={Style.inputcontainer}>
              <input
                className=" w-[90%] h-[35px] rounded-lg border-[0.8px] border-solid border-gainsboro mt-2"
                placeholder="Search tags"
                type="text"
              />
            </div>
          </div>
        </div>
      </div>

      {/* <CustomDrawer
        key={contentType}
        showSidebar={showSidebar}
        setShowSidebar={setShowSidebar}
        contentType={contentType}
      /> */}
    </div>
  );
}
