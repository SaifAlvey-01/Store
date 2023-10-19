import React, { useState } from "react";
import Style from "./createSearchStyle.module.css";
import AddNewProduct from "../../products/inner-pages/products/add-new-product";
import Link from "next/link";

export default function CreateOrder() {
  const [selectedRadio, setSelectedRadio] = useState(1);

  const labels = ["Online Payment", "Cash on Delivery", "Prepaid"];

  return (
    <div
      className="min-h-[calc(100vh-180px)] sm:min-h-[calc(100% - 100px)] overflow-y-auto flex flex-col items-center justify-between px-4 py-6 "
      style={{
        backgroundColor: "var(--white-color, #FFF)",
        borderRadius: "10px",
        boxShadow: `#00000011 0px 2px 4px 2px`,
      }}
    >
      {" "}
      <div className="flex justify-between w-full mb-6">
        <div
          className="w-[60%] px-4 py-5 mx-3"
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
                Products
              </span>
              <span style={{ color: "#FF3A3A", margin: 0, fontSize: "20px" }}>
                *
              </span>
            </div>

            <Link className="no-underline" href="/products/all-products">
              <button
                // onClick={() => setShowAddNewProduct(true)} // Add onClick handler here
                style={{
                  borderRadius: "6px",
                  border: "1px dashed #7A91FF",
                  fontSize: "14px",
                  color: "#7A91FF",
                  backgroundColor: "#ffffff",
                }}
                className="flex items-center px-6 py-1.5 hover:bg-gray-300 cursor-pointer"
              >
                Add Product{" "}
              </button>
            </Link>
          </div>
          <hr
            style={{ backgroundColor: "#E5E7EB" }}
            className="my-6 h-0.5 border-t-0 opacity-80"
          />
          <div className="flex items-center justify-center mt-10  h-[calc(100% - currentHeight)]">
            <img
              src={"/product.png"}
              alt="Your Image Description"
              className="object-contain"
            />
          </div>
        </div>

        <div
          className="w-[40%] px-4 py-5 mx-3"
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
            Payment Details
          </span>
          <hr
            style={{ backgroundColor: "#E5E7EB" }}
            className="my-3 h-0.5 border-t-0 opacity-80"
          />
          <div className="flex justify-between my-5">
            <div
              className="w-[30%] flex flex-col justify-between px-3 py-2"
              style={{
                border: "1px solid #e3e3e3",
                backgroundColor: "var(--white-color, #FFF)",
                borderRadius: "10px",
                boxSizing: "border-box",
              }}
            >
              <div className="flex flex-col justify-between">
                <span style={{ color: "#8E8E8E", fontSize: "14px" }}>
                  Item Total
                </span>{" "}
                <span
                  className="px-0 py-3 mt-2 font-roboto w-[70%]"
                  style={{
                    color: "#8E8E8E",
                    backgroundColor: "#f1f1f1",
                    fontSize: "14px",
                    fontWeight: 500,
                    borderRadius: "10px",
                    textAlign: "center",
                  }}
                >
                  --{" "}
                </span>
              </div>
            </div>

            <div
              className="w-[30%] flex flex-col justify-between px-3 py-2"
              style={{
                border: "1px solid #e3e3e3",
                backgroundColor: "var(--white-color, #FFF)",
                borderRadius: "10px",
                boxSizing: "border-box",
              }}
            >
              {" "}
              <div className="flex flex-col justify-between">
                <span style={{ color: "#8E8E8E", fontSize: "14px" }}>
                  Discount{" "}
                </span>{" "}
                <span
                  className="px-0 py-3 mt-2 font-roboto w-[70%]"
                  style={{
                    color: "#8E8E8E",
                    backgroundColor: "#f1f1f1",
                    fontSize: "14px",
                    fontWeight: 500,
                    borderRadius: "10px",
                    textAlign: "center",
                  }}
                >
                  --{" "}
                </span>
              </div>
            </div>

            <div
              className="w-[30%] flex flex-col justify-between px-3 py-2"
              style={{
                border: "1px solid #e3e3e3",
                backgroundColor: "var(--white-color, #FFF)",
                borderRadius: "10px",
                boxSizing: "border-box",
              }}
            >
              {" "}
              <div className="flex flex-col justify-between">
                <span style={{ color: "#8E8E8E", fontSize: "14px" }}>
                  Delivery{" "}
                </span>{" "}
                <span
                  className="px-0 py-3 mt-2 font-roboto w-[70%]"
                  style={{
                    color: "#8E8E8E",
                    backgroundColor: "#f1f1f1",
                    fontSize: "14px",
                    fontWeight: 500,
                    borderRadius: "10px",
                    textAlign: "center",
                  }}
                >
                  --{" "}
                </span>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundColor: "#F6F7FF", borderRadius: "10px" }}
            className="flex justify-between items-center px-3 py-2"
          >
            <span
              className="font-roboto"
              style={{ color: "#8E8E8E", marginRight: 2, fontSize: "14px" }}
            >
              Grand Total{" "}
            </span>

            <button
              style={{
                borderRadius: "6px",
                fontSize: "14px",
                color: "#7A91FF",
                backgroundColor: "#4162FF",
                fontWeight: "bold",
              }}
              className="flex items-center px-3 py-2.5 hover:bg-gray-300 cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="17"
                viewBox="0 0 16 17"
                fill="none"
              >
                <path
                  d="M2 8.45703C2 8.25812 2.07902 8.06735 2.21967 7.9267C2.36032 7.78605 2.55109 7.70703 2.75 7.70703H12.75C12.9489 7.70703 13.1397 7.78605 13.2803 7.9267C13.421 8.06735 13.5 8.25812 13.5 8.45703C13.5 8.65594 13.421 8.84671 13.2803 8.98736C13.1397 9.12801 12.9489 9.20703 12.75 9.20703H2.75C2.55109 9.20703 2.36032 9.12801 2.21967 8.98736C2.07902 8.84671 2 8.65594 2 8.45703Z"
                  fill="white"
                />
              </svg>{" "}
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-between w-full">
        <div
          className="w-[60%] px-4 py-5 mx-3"
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
              style={{
                borderRadius: "6px",
                border: "1px dashed #7A91FF",
                fontSize: "14px",
                color: "#7A91FF",
                backgroundColor: "#ffffff",
              }}
              className="flex items-center px-3 py-1.5 hover:bg-gray-300 cursor-pointer"
            >
              Add Customer Details{" "}
            </button>
          </div>
          <hr
            style={{ backgroundColor: "#E5E7EB" }}
            className="my-6 h-0.5 border-t-0 opacity-80"
          />
          <div className="flex items-center justify-center mt-10  h-[calc(100% - currentHeight)]">
            <img
              src={"/people.png"}
              alt="Your Image Description"
              className="object-contain"
            />
          </div>
        </div>

        <div
          className="w-[40%] px-4 py-5 mx-3"
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
            Payment Methods{" "}
          </span>
          <hr
            style={{ backgroundColor: "#E5E7EB" }}
            className="my-3 h-0.5 border-t-0 opacity-80"
          />
          <div>
            {labels.map((label, idx) => (
              <div
                style={{ backgroundColor: "#F6F7FF", borderRadius: "6px" }}
                key={idx}
                className="p-4 flex items-center mb-4"
              >
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
                  className={`ml-2.5 mt-0.5 font-freesans  ${
                    selectedRadio === idx + 1
                      ? "text-neutral-500 font-semibold"
                      : "text-neutral-400 font-medium"
                  }`}
                  style={{ fontSize: "14px", color: "#4B4B4B" }}
                >
                  {label}
                </label>
              </div>
            ))}
          </div>
          <div
            style={{
              backgroundColor: "#F5F5F5",
              color: "#4B4B4B",
              borderRadius: "10px",
              fontSize: "14px",
              textAlign: "center",
            }}
            className="p-4 font-freesans mt-8"
          >
            We will send a confirmation message to your customer.
          </div>
        </div>
      </div>
      <div className="ml-12 mt-5">
        <button
          style={{
            borderRadius: "6px",
            fontSize: "14px",
            color: "#FFF",
            backgroundColor: "#B3C0FF",
            padding: "10px 30px",
          }}
          className="hover:bg-gray-300 cursor-pointer"
        >
          Create Order{" "}
        </button>
      </div>
      <div
        className="w-[39%] px-4 py-5 mx-3 ml-auto"
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
          Source{" "}
        </span>
        <hr
          style={{ backgroundColor: "#E5E7EB" }}
          className="my-3 h-0.5 border-t-0 opacity-80"
        />
        <div className={Style.inputcontainer}>
          <input
            className=" w-[90%] h-[35px] rounded-lg border-[0.8px] border-solid border-gainsboro mt-2"
            placeholder="Search or create source"
            type="text"
          />
        </div>
      </div>
    </div>
  );
}
