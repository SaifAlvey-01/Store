import React, { useState } from "react";
import CustomDrawer from "../../drawer-contents/custom-drawer";

export default function CouponsListing() {
  const [activeTab, setActiveTab] = useState(0);
  const [showSidebar, setShowSidebar] = useState(false);
  const [contentType, setContentType] = useState("");

  const tabs = [
    "All",
    "Percent Discount",
    "Flat Discount",
    "Buy X Get Y",
    "Free Shipping",
    "Freebie",
  ];

  const percentDiscount = [{}, {}, {}, {}, {}, {}];
  const flatDiscount = [{}, {}, {}, {}, {}, {}];
  const buy1Get1Discount = [{}, {}, {}, {}, {}, {}];
  const freeShipping = [{}, {}, {}, {}, {}, {}];
  const freebie = [{}, {}, {}, {}, {}, {}];

  return (
    <>
      <div
        className="min-h-[calc(108vh-180px)] sm:min-h-[calc(100% - 100px)] p-6 overflow-y-auto flex flex-col"
        style={{
          backgroundColor: "var(--white-color, #FFF)",
          borderRadius: "10px",
          boxShadow: `#00000011 0px 2px 4px 2px`,
        }}
      >
        {" "}
        <div className="flex flex-col md:flex-row md:justify-between items-center pb-6 w-full">
          {/* Search Bar - Placed to the left */}
          <div className="relative text-gray-600 md:self-stretch md:flex md:flex-row md:items-start md:justify-start">
            <img
              style={{ position: "absolute", top: 9, left: 0 }}
              src={"/search.png"}
              className="w-4 h-4 flex items-center pl-3 "
            />
            <input
              style={{
                borderRadius: "6px",
                border: "1px solid #D0D5DD",
                fontSize: "13px",
              }}
              type="search"
              name="search"
              placeholder="Search"
              className="w-full pl-9 pr-32 py-2.5 md:w-[96%] focus:outline-none focus:border-blue-500"
            />
          </div>

          <button
            onClick={() => {
              setShowSidebar(true);
              setContentType("select-coupon-type");
            }}
            style={{
              borderRadius: "6px",
              border: "1px solid #D0D5DD",
              fontSize: "14px",
              color: "#ffffff",
              backgroundColor: "#4162ff",
            }}
            className="flex cursor-pointer items-center px-1.5 md:px-6 py-2.5 hover:bg-gray-300"
          >
            Create a Coupon{" "}
          </button>
        </div>
        <div className="flex flex-row items-center justify-between py-6 w-full box-border">
          <div
            style={{ borderBottom: "2px solid #E5E7EB" }}
            className="flex justify-between items-center w-full box-border border-gray-200"
          >
            {/* Tabs Section */}
            <div className="flex-grow">
              {tabs.map((tabName, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setActiveTab(index);
                  }}
                  className={`text-center py-2 px-4 lg:px-6 text-[14px] bg-white cursor-pointer ${
                    activeTab === index
                      ? "border-b-2 border-primary-300-main text-primary-300-main font-bold"
                      : "text-neutral-500 hover:bg-gray-100"
                  }`}
                >
                  {tabName}
                </button>
              ))}
            </div>
          </div>
        </div>
        {(activeTab === 0 || activeTab === 1) && (
          <div
            className="mt-4 w-full"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
              gap: "20px",
              maxWidth: "2000px",
            }}
          >
            {percentDiscount.map((item, index) => (
              <div
                key={index}
                className="px-4 py-4 relative "
                style={{
                  border: "1px solid #e3e3e3",
                  backgroundColor: "var(--white-color, #FFF)",
                  borderRadius: "10px",
                  width: "100%",
                  boxSizing: "border-box",
                }}
              >
                <div className="flex justify-between">
                  <div className="flex items-center">
                    {" "}
                    <div className="rounded-[50px] bg-[#ECEFFF] mr-2 w-12 h-10 flex justify-center items-center">
                      <div className="flex flex-row justify-center items-center p-2">
                        <img
                          src={"/percentage.png"}
                          className="max-w-full max-h-full object-contain"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col w-full">
                      {" "}
                      <span
                        className="mb-1"
                        style={{ color: "#4B4B4B", fontSize: "13px" }}
                      >
                        Test 01{" "}
                      </span>
                      <p
                        style={{ color: "#8E8E8E", fontSize: "11px" }}
                        className="m-0 w-full"
                      >
                        15% off (up to ₹100) on orders above ₹50{" "}
                      </p>
                    </div>
                  </div>

                  <div className="mb-2">
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        value=""
                        className="sr-only peer"
                      />
                      <div className="w-9 h-5 bg-gray-200 focus:ring-0 peer-focus:outline-none dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-300 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                    </label>
                  </div>
                </div>

                <div className="flex flex-row items-center mt-8">
                  <div className="flex flex-col justify-between mr-6">
                    <span style={{ color: "#4B4B4B", fontSize: "13px" }}>
                      Times Used{" "}
                    </span>{" "}
                    <span
                      className="px-6 py-2 mt-3 font-roboto "
                      style={{
                        color: "#8E8E8E",
                        backgroundColor: "#F5F5F5",
                        fontSize: "16px",
                        fontWeight: 500,
                        borderRadius: "6px",
                        textAlign: "center",
                        width: "fit-content",
                      }}
                    >
                      00{" "}
                    </span>
                  </div>

                  <div className="flex flex-col justify-between">
                    <span style={{ color: "#4B4B4B", fontSize: "13px" }}>
                      Total Sales Generated{" "}
                    </span>{" "}
                    <span
                      className="px-6 py-2 mt-3 font-roboto "
                      style={{
                        color: "#8E8E8E",
                        backgroundColor: "#F5F5F5",
                        fontSize: "16px",
                        fontWeight: 500,
                        borderRadius: "6px",
                        textAlign: "center",
                        width: "fit-content",
                      }}
                    >
                      00{" "}
                    </span>
                  </div>
                </div>

                <div className="mt-10 mb-6">
                  <div
                    style={{
                      width: "100%",
                      borderBottom: "2px dashed #66666640",
                    }}
                  ></div>
                </div>

                <div className="flex flex-row items-center justify-center my-2">
                  {" "}
                  <div className="rounded-[50px] bg-[#ECEFFF] mr-2 w-8 h-8 flex justify-center items-center">
                    <div className="flex flex-row justify-center items-center p-1.5">
                      <img
                        src={"/share.png"}
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
                  </div>{" "}
                  <span style={{ color: "#4B4B4B", fontSize: "13px" }}>
                    Share Coupon{" "}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
        {(activeTab === 0 || activeTab === 2) && (
          <div
            className="mt-4 w-full"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
              gap: "20px",
              maxWidth: "2000px",
            }}
          >
            {flatDiscount.map((item, index) => (
              <div
                key={index}
                className="px-4 py-4 relative "
                style={{
                  border: "1px solid #e3e3e3",
                  backgroundColor: "var(--white-color, #FFF)",
                  borderRadius: "10px",
                  width: "100%",
                  boxSizing: "border-box",
                }}
              >
                <div className="flex justify-between">
                  <div className="flex items-center">
                    {" "}
                    <div className="rounded-[50px] bg-[#EDFFF5] mr-2 w-12 h-10 flex justify-center items-center">
                      <div className="flex flex-row justify-center items-center p-2">
                        <img
                          src={"/flat.png"}
                          className="max-w-full max-h-full object-contain"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col w-full">
                      {" "}
                      <span
                        className="mb-1"
                        style={{ color: "#4B4B4B", fontSize: "13px" }}
                      >
                        Test 01{" "}
                      </span>
                      <p
                        style={{ color: "#8E8E8E", fontSize: "11px" }}
                        className="m-0 w-full"
                      >
                        ₹234 off on orders above ₹23,423{" "}
                      </p>
                    </div>
                  </div>

                  <div className="mb-2">
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        value=""
                        className="sr-only peer"
                      />
                      <div className="w-9 h-5 bg-gray-200 focus:ring-0 peer-focus:outline-none dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-300 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                    </label>
                  </div>
                </div>

                <div className="flex flex-row items-center mt-8">
                  <div className="flex flex-col justify-between mr-6">
                    <span style={{ color: "#4B4B4B", fontSize: "13px" }}>
                      Times Used{" "}
                    </span>{" "}
                    <span
                      className="px-6 py-2 mt-3 font-roboto "
                      style={{
                        color: "#8E8E8E",
                        backgroundColor: "#F5F5F5",
                        fontSize: "16px",
                        fontWeight: 500,
                        borderRadius: "6px",
                        textAlign: "center",
                        width: "fit-content",
                      }}
                    >
                      00{" "}
                    </span>
                  </div>

                  <div className="flex flex-col justify-between">
                    <span style={{ color: "#4B4B4B", fontSize: "13px" }}>
                      Total Sales Generated{" "}
                    </span>{" "}
                    <span
                      className="px-6 py-2 mt-3 font-roboto "
                      style={{
                        color: "#8E8E8E",
                        backgroundColor: "#F5F5F5",
                        fontSize: "16px",
                        fontWeight: 500,
                        borderRadius: "6px",
                        textAlign: "center",
                        width: "fit-content",
                      }}
                    >
                      00{" "}
                    </span>
                  </div>
                </div>

                <div className="mt-10 mb-6">
                  <div
                    style={{
                      width: "100%",
                      borderBottom: "2px dashed #66666640",
                    }}
                  ></div>
                </div>

                <div className="flex flex-row items-center justify-center my-2">
                  {" "}
                  <div className="rounded-[50px] bg-[#ECEFFF] mr-2 w-8 h-8 flex justify-center items-center">
                    <div className="flex flex-row justify-center items-center p-1.5">
                      <img
                        src={"/share.png"}
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
                  </div>{" "}
                  <span style={{ color: "#4B4B4B", fontSize: "13px" }}>
                    Share Coupon{" "}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
        {(activeTab === 0 || activeTab === 3) && (
          <div
            className="mt-4 w-full"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
              gap: "20px",
              maxWidth: "2000px",
            }}
          >
            {buy1Get1Discount.map((item, index) => (
              <div
                key={index}
                className="px-4 py-4 relative "
                style={{
                  border: "1px solid #e3e3e3",
                  backgroundColor: "var(--white-color, #FFF)",
                  borderRadius: "10px",
                  width: "100%",
                  boxSizing: "border-box",
                }}
              >
                <div className="flex justify-between">
                  <div className="flex items-center">
                    {" "}
                    <div className="rounded-[50px] bg-[#FFEEFE] mr-2 w-12 h-10 flex justify-center items-center">
                      <div className="flex flex-row justify-center items-center p-2">
                        <img
                          src={"/buy-cart.png"}
                          className="max-w-full max-h-full object-contain"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col w-full">
                      {" "}
                      <span
                        className="mb-1"
                        style={{ color: "#4B4B4B", fontSize: "13px" }}
                      >
                        Test 01{" "}
                      </span>
                      <p
                        style={{ color: "#8E8E8E", fontSize: "11px" }}
                        className="m-0 w-full"
                      >
                        ₹234 off on orders above ₹23,423{" "}
                      </p>
                    </div>
                  </div>

                  <div className="mb-2">
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        value=""
                        className="sr-only peer"
                      />
                      <div className="w-9 h-5 bg-gray-200 focus:ring-0 peer-focus:outline-none dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-300 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                    </label>
                  </div>
                </div>

                <div className="flex flex-row items-center mt-8">
                  <div className="flex flex-col justify-between mr-6">
                    <span style={{ color: "#4B4B4B", fontSize: "13px" }}>
                      Times Used{" "}
                    </span>{" "}
                    <span
                      className="px-6 py-2 mt-3 font-roboto "
                      style={{
                        color: "#8E8E8E",
                        backgroundColor: "#F5F5F5",
                        fontSize: "16px",
                        fontWeight: 500,
                        borderRadius: "6px",
                        textAlign: "center",
                        width: "fit-content",
                      }}
                    >
                      00{" "}
                    </span>
                  </div>

                  <div className="flex flex-col justify-between">
                    <span style={{ color: "#4B4B4B", fontSize: "13px" }}>
                      Total Sales Generated{" "}
                    </span>{" "}
                    <span
                      className="px-6 py-2 mt-3 font-roboto "
                      style={{
                        color: "#8E8E8E",
                        backgroundColor: "#F5F5F5",
                        fontSize: "16px",
                        fontWeight: 500,
                        borderRadius: "6px",
                        textAlign: "center",
                        width: "fit-content",
                      }}
                    >
                      00{" "}
                    </span>
                  </div>
                </div>

                <div className="mt-10 mb-6">
                  <div
                    style={{
                      width: "100%",
                      borderBottom: "2px dashed #66666640",
                    }}
                  ></div>
                </div>

                <div className="flex flex-row items-center justify-center my-2">
                  {" "}
                  <div className="rounded-[50px] bg-[#ECEFFF] mr-2 w-8 h-8 flex justify-center items-center">
                    <div className="flex flex-row justify-center items-center p-1.5">
                      <img
                        src={"/share.png"}
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
                  </div>{" "}
                  <span style={{ color: "#4B4B4B", fontSize: "13px" }}>
                    Share Coupon{" "}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
        {(activeTab === 0 || activeTab === 4) && (
          <div
            className="mt-4 w-full"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
              gap: "20px",
              maxWidth: "2000px",
            }}
          >
            {freeShipping.map((item, index) => (
              <div
                key={index}
                className="px-4 py-4 relative "
                style={{
                  border: "1px solid #e3e3e3",
                  backgroundColor: "var(--white-color, #FFF)",
                  borderRadius: "10px",
                  width: "100%",
                  boxSizing: "border-box",
                }}
              >
                <div className="flex justify-between">
                  <div className="flex items-center">
                    {" "}
                    <div className="rounded-[50px] bg-[#FEF9EC] mr-2 w-12 h-10 flex justify-center items-center">
                      <div className="flex flex-row justify-center items-center p-2">
                        <img
                          src={"/shipping.png"}
                          className="max-w-full max-h-full object-contain"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col w-full">
                      {" "}
                      <span
                        className="mb-1"
                        style={{ color: "#4B4B4B", fontSize: "13px" }}
                      >
                        Test 01{" "}
                      </span>
                      <p
                        style={{ color: "#8E8E8E", fontSize: "11px" }}
                        className="m-0 w-full"
                      >
                        ₹234 off on orders above ₹23,423{" "}
                      </p>
                    </div>
                  </div>

                  <div className="mb-2">
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        value=""
                        className="sr-only peer"
                      />
                      <div className="w-9 h-5 bg-gray-200 focus:ring-0 peer-focus:outline-none dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-300 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                    </label>
                  </div>
                </div>

                <div className="flex flex-row items-center mt-8">
                  <div className="flex flex-col justify-between mr-6">
                    <span style={{ color: "#4B4B4B", fontSize: "13px" }}>
                      Times Used{" "}
                    </span>{" "}
                    <span
                      className="px-6 py-2 mt-3 font-roboto "
                      style={{
                        color: "#8E8E8E",
                        backgroundColor: "#F5F5F5",
                        fontSize: "16px",
                        fontWeight: 500,
                        borderRadius: "6px",
                        textAlign: "center",
                        width: "fit-content",
                      }}
                    >
                      00{" "}
                    </span>
                  </div>

                  <div className="flex flex-col justify-between">
                    <span style={{ color: "#4B4B4B", fontSize: "13px" }}>
                      Total Sales Generated{" "}
                    </span>{" "}
                    <span
                      className="px-6 py-2 mt-3 font-roboto "
                      style={{
                        color: "#8E8E8E",
                        backgroundColor: "#F5F5F5",
                        fontSize: "16px",
                        fontWeight: 500,
                        borderRadius: "6px",
                        textAlign: "center",
                        width: "fit-content",
                      }}
                    >
                      00{" "}
                    </span>
                  </div>
                </div>

                <div className="mt-10 mb-6">
                  <div
                    style={{
                      width: "100%",
                      borderBottom: "2px dashed #66666640",
                    }}
                  ></div>
                </div>

                <div className="flex flex-row items-center justify-center my-2">
                  {" "}
                  <div className="rounded-[50px] bg-[#ECEFFF] mr-2 w-8 h-8 flex justify-center items-center">
                    <div className="flex flex-row justify-center items-center p-1.5">
                      <img
                        src={"/share.png"}
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
                  </div>{" "}
                  <span style={{ color: "#4B4B4B", fontSize: "13px" }}>
                    Share Coupon{" "}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
        {(activeTab === 0 || activeTab === 5) && (
          <div
            className="mt-4 w-full"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
              gap: "20px",
              maxWidth: "2000px",
            }}
          >
            {freebie.map((item, index) => (
              <div
                key={index}
                className="px-4 py-4 relative "
                style={{
                  border: "1px solid #e3e3e3",
                  backgroundColor: "var(--white-color, #FFF)",
                  borderRadius: "10px",
                  width: "100%",
                  boxSizing: "border-box",
                }}
              >
                <div className="flex justify-between">
                  <div className="flex items-center">
                    {" "}
                    <div className="rounded-[50px] bg-[#EBF8F5] mr-2 w-12 h-10 flex justify-center items-center">
                      <div className="flex flex-row justify-center items-center p-2">
                        <img
                          src={"/freebie.png"}
                          className="max-w-full max-h-full object-contain"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col w-full">
                      {" "}
                      <span
                        className="mb-1"
                        style={{ color: "#4B4B4B", fontSize: "13px" }}
                      >
                        Test 01{" "}
                      </span>
                      <p
                        style={{ color: "#8E8E8E", fontSize: "11px" }}
                        className="m-0 w-full"
                      >
                        ₹234 off on orders above ₹23,423{" "}
                      </p>
                    </div>
                  </div>

                  <div className="mb-2">
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        value=""
                        className="sr-only peer"
                      />
                      <div className="w-9 h-5 bg-gray-200 focus:ring-0 peer-focus:outline-none dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-300 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                    </label>
                  </div>
                </div>

                <div className="flex flex-row items-center mt-8">
                  <div className="flex flex-col justify-between mr-6">
                    <span style={{ color: "#4B4B4B", fontSize: "13px" }}>
                      Times Used{" "}
                    </span>{" "}
                    <span
                      className="px-6 py-2 mt-3 font-roboto "
                      style={{
                        color: "#8E8E8E",
                        backgroundColor: "#F5F5F5",
                        fontSize: "16px",
                        fontWeight: 500,
                        borderRadius: "6px",
                        textAlign: "center",
                        width: "fit-content",
                      }}
                    >
                      00{" "}
                    </span>
                  </div>

                  <div className="flex flex-col justify-between">
                    <span style={{ color: "#4B4B4B", fontSize: "13px" }}>
                      Total Sales Generated{" "}
                    </span>{" "}
                    <span
                      className="px-6 py-2 mt-3 font-roboto "
                      style={{
                        color: "#8E8E8E",
                        backgroundColor: "#F5F5F5",
                        fontSize: "16px",
                        fontWeight: 500,
                        borderRadius: "6px",
                        textAlign: "center",
                        width: "fit-content",
                      }}
                    >
                      00{" "}
                    </span>
                  </div>
                </div>

                <div className="mt-10 mb-6">
                  <div
                    style={{
                      width: "100%",
                      borderBottom: "2px dashed #66666640",
                    }}
                  ></div>
                </div>

                <div className="flex flex-row items-center justify-center my-2">
                  {" "}
                  <div className="rounded-[50px] bg-[#ECEFFF] mr-2 w-8 h-8 flex justify-center items-center">
                    <div className="flex flex-row justify-center items-center p-1.5">
                      <img
                        src={"/share.png"}
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
                  </div>{" "}
                  <span style={{ color: "#4B4B4B", fontSize: "13px" }}>
                    Share Coupon{" "}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
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
