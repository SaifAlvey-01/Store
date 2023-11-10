import React from "react";
import { useState } from "react";

export default function PickupTimeAndPartner() {
  const [isChecked, setIsChecked] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

  const SurfaceHeaders = [
    { title: "Shipping partner" },
    { title: "Delivery by (est.)" },
    { title: "Shipping charge (per 500g)" },
  ];

  const ExpressHeaders = [
    { title: "Shipping partner" },
    { title: "Delivery by (est.)" },
    { title: "Shipping charge (per 500g)" },
  ];

  const HeavyHeaders = [
    { title: "Shipping partner" },
    { title: "Delivery by (est.)" },
    { title: "Shipping charge (per 25KG)" },
  ];

  const SurfaceData = [
    {
      name: "Xpress Bees",
      type: "Surface",
      date: "Jul 31",
      charges: "From ₹25",
    },
    {
      name: "Delhivery",
      type: "Surface",
      date: "Jul 31",
      charges: "From ₹25",
    },
    {
      name: "Blue Dart",
      type: "Surface",
      date: "Jul 31",
      charges: "From ₹25",
    },
    {
      name: "DotZot",
      type: "Surface",
      date: "Jul 31",
      charges: "From ₹25",
    },
    {
      name: "Shaqowfax",
      type: "Surface",
      date: "Jul 31",
      charges: "From ₹25",
    },
    {
      name: "Aramex",
      type: "Surface",
      date: "Jul 31",
      charges: "From ₹25",
    },
    {
      name: "DHL",
      type: "Surface",
      date: "Jul 31",
      charges: "From ₹25",
    },
  ];

  const ExpressData = [
    {
      name: "Xpress Bees",
      type: "Express",
      date: "Jul 31",
      charges: "From ₹45",
    },
    {
      name: "Delhivery",
      type: "Express",
      date: "Jul 31",
      charges: "From ₹45",
    },
    {
      name: "Blue Dart",
      type: "Express",
      date: "Jul 31",
      charges: "From ₹45",
    },
    {
      name: "DotZot",
      type: "Express",
      date: "Jul 31",
      charges: "From ₹45",
    },
    {
      name: "Shaqowfax",
      type: "Express",
      date: "Jul 31",
      charges: "From ₹45",
    },
    {
      name: "Aramex",
      type: "Express",
      date: "Jul 31",
      charges: "From ₹45",
    },
    {
      name: "DHL",
      type: "Express",
      date: "Jul 31",
      charges: "From ₹45",
    },
  ];

  const HeavyData = [
    {
      name: "Xpress Bees",
      type: "Heavy 25KG",
      date: "Jul 31",
      charges: "From ₹450",
    },
    {
      name: "Delhivery",
      type: "Heavy 25KG",
      date: "Jul 31",
      charges: "From ₹450",
    },
    {
      name: "Blue Dart",
      type: "Heavy 25KG",
      date: "Jul 31",
      charges: "From ₹450",
    },
    {
      name: "DotZot",
      type: "Heavy 25KG",
      date: "Jul 31",
      charges: "From ₹450",
    },
    {
      name: "Shaqowfax",
      type: "Heavy 25KG",
      date: "Jul 31",
      charges: "From ₹450",
    },
    {
      name: "Aramex",
      type: "Heavy 25KG",
      date: "Jul 31",
      charges: "From ₹450",
    },
    {
      name: "DHL",
      type: "Heavy 25KG",
      date: "Jul 31",
      charges: "From ₹450",
    },
  ];
  return (
    <div>
      {" "}
      <div className="h-[820px]">
        <div className="flex justify-between items-center">
          <h3 style={{ fontSize: "18px", fontWeight: "normal" }}>
            Pickup time & Partner{" "}
          </h3>
        </div>
        <div className="w-full">
          <div className="flex justify-between w-[80%] border-b border-gray-200">
            <button
              className={`flex-grow text-center py-2 px-2 text-[14px] bg-white cursor-pointer ${
                activeTab === 0
                  ? "border-b-2 border-primary-300-main text-primary-300-main font-bold"
                  : "text-neutral-500 hover:bg-gray-100"
              }`}
              onClick={() => setActiveTab(0)}
            >
              Surface{" "}
            </button>
            <button
              className={`flex-grow text-center py-2 px-2 text-[14px] bg-white cursor-pointer ${
                activeTab === 1
                  ? "border-b-2 border-primary-300-main text-primary-300-main font-bold"
                  : "text-neutral-500 hover:bg-gray-100"
              }`}
              onClick={() => setActiveTab(1)}
            >
              Express{" "}
            </button>
            <button
              className={`flex-grow text-center py-2 px-2 text-[14px] bg-white cursor-pointer ${
                activeTab === 2
                  ? "border-b-2 border-primary-300-main text-primary-300-main font-bold"
                  : "text-neutral-500 hover:bg-gray-100"
              }`}
              onClick={() => setActiveTab(2)}
            >
              Heavy Shipment{" "}
            </button>
          </div>
          <div
            style={{ borderTop: "2px solid #E5E7EB" }}
            className="tab-content text-neutral-500 text-[14px] pt-6 mb-10"
          >
            <div className="flex flex-col">
              <div className="mt-2">
                <span
                  className="font-freesans"
                  style={{
                    color: "#4B5563",
                    fontWeight: 500,
                    fontSize: "14px",
                  }}
                >
                  Pickup by{" "}
                </span>
                <input
                  className="bg-[#FFF] text-gray-900 text-sm rounded-[10px] block w-full px-4 py-2.5 mt-1.5 placeholder-gray-300  focus:outline-none"
                  style={{
                    border: "1.5px solid #E5E7EB",
                    boxSizing: "border-box",
                  }}
                  onFocus={(e) => (e.target.style.borderColor = "#bdbfc0")}
                  onBlur={(e) => (e.target.style.borderColor = "#E5E7EB")}
                  placeholder="Tomorrow, Jul 27"
                  required
                />
              </div>

              <p
                className="font-freesans my-5"
                style={{
                  color: "#4B5563",
                  fontWeight: 500,
                  fontSize: "14px",
                }}
              >
                Select shipping partner{" "}
              </p>
            </div>
            {activeTab === 0 && (
              <div className="flex justify-between items-center">
                <table
                  className="w-full font-freesans"
                  style={{
                    borderRadius: "8px",
                    borderCollapse: "separate",
                  }}
                >
                  <thead>
                    <tr>
                      {SurfaceHeaders.map((header, idx) => (
                        <th
                          key={idx}
                          className="py-3 px-2 bg-f9fafb text-start font-freesans "
                          style={{
                            borderBottom: "1px solid #EAECF0",
                            backgroundColor: "#F9FAFB",
                            color: "#1D2939",
                            fontSize: "12px",
                          }}
                        >
                          <div className="flex flex-row items-center">
                            {header.title}
                          </div>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="bg-white">
                    {SurfaceData.map((shipping, index) => (
                      <tr key={index}>
                        <td
                          style={{ borderBottom: "1px solid #EAECF0" }}
                          className="items-center p-2 w-[42%]"
                        >
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
                              name="selected-shipping"
                              className="w-4 h-4 cursor-pointer m-0 text-blue-600 bg-gray-100 border-none focus:ring-none dark:focus:ring-none focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                              style={{
                                boxShadow: "none",
                              }}
                            />
                            <span className="flex flex-col ml-2 font-lato ">
                              <span
                                style={{ fontSize: "13px", color: "#4B4B4B" }}
                              >
                                {shipping.name}
                              </span>{" "}
                              <span
                                className="mt-1.5"
                                style={{ fontSize: "12px", color: "#8E8E8E" }}
                              >
                                {shipping.type}
                              </span>
                            </span>
                          </label>
                        </td>
                        <td
                          className="p-2 w-[30%]"
                          style={{
                            borderBottom: "1px solid #EAECF0",
                          }}
                        >
                          <span
                            className="font-freesans"
                            style={{
                              color: "#8E8E8E",
                              fontSize: "12px",
                              fontWeight: 400,
                            }}
                          >
                            {shipping.date}
                          </span>
                        </td>
                        <td
                          className="p-2 w-[30%]"
                          style={{
                            borderBottom: "1px solid #EAECF0",
                          }}
                        >
                          <span
                            className="font-freesans"
                            style={{
                              color: "#8E8E8E",
                              fontSize: "12px",
                              fontWeight: 400,
                            }}
                          >
                            {shipping.charges}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
            {activeTab === 1 && (
              <div className="flex justify-between items-center">
                <table
                  className="w-full font-freesans"
                  style={{
                    borderRadius: "8px",
                    borderCollapse: "separate",
                  }}
                >
                  <thead>
                    <tr>
                      {ExpressHeaders.map((header, idx) => (
                        <th
                          key={idx}
                          className="py-3 px-2 bg-f9fafb text-start font-freesans "
                          style={{
                            borderBottom: "1px solid #EAECF0",
                            backgroundColor: "#F9FAFB",
                            color: "#1D2939",
                            fontSize: "12px",
                          }}
                        >
                          <div className="flex flex-row items-center">
                            {header.title}
                          </div>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="bg-white">
                    {ExpressData.map((shipping, index) => (
                      <tr key={index}>
                        <td
                          style={{ borderBottom: "1px solid #EAECF0" }}
                          className="items-center p-2 w-[42%]"
                        >
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
                              name="selected-shipping"
                              className="w-4 h-4 cursor-pointer m-0 text-blue-600 bg-gray-100 border-none focus:ring-none dark:focus:ring-none focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                              style={{
                                boxShadow: "none",
                              }}
                            />
                            <span className="flex flex-col ml-2 font-lato ">
                              <span
                                style={{ fontSize: "13px", color: "#4B4B4B" }}
                              >
                                {shipping.name}
                              </span>{" "}
                              <span
                                className="mt-1.5"
                                style={{ fontSize: "12px", color: "#8E8E8E" }}
                              >
                                {shipping.type}
                              </span>
                            </span>
                          </label>
                        </td>
                        <td
                          className="p-2 w-[30%]"
                          style={{
                            borderBottom: "1px solid #EAECF0",
                          }}
                        >
                          <span
                            className="font-freesans"
                            style={{
                              color: "#8E8E8E",
                              fontSize: "12px",
                              fontWeight: 400,
                            }}
                          >
                            {shipping.date}
                          </span>
                        </td>
                        <td
                          className="p-2 w-[30%]"
                          style={{
                            borderBottom: "1px solid #EAECF0",
                          }}
                        >
                          <span
                            className="font-freesans"
                            style={{
                              color: "#8E8E8E",
                              fontSize: "12px",
                              fontWeight: 400,
                            }}
                          >
                            {shipping.charges}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
            {activeTab === 2 && (
              <div className="flex justify-between items-center">
                <table
                  className="w-full font-freesans"
                  style={{
                    borderRadius: "8px",
                    borderCollapse: "separate",
                  }}
                >
                  <thead>
                    <tr>
                      {HeavyHeaders.map((header, idx) => (
                        <th
                          key={idx}
                          className="py-3 px-2 bg-f9fafb text-start font-freesans "
                          style={{
                            borderBottom: "1px solid #EAECF0",
                            backgroundColor: "#F9FAFB",
                            color: "#1D2939",
                            fontSize: "12px",
                          }}
                        >
                          <div className="flex flex-row items-center">
                            {header.title}
                          </div>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="bg-white">
                    {HeavyData.map((shipping, index) => (
                      <tr key={index}>
                        <td
                          style={{ borderBottom: "1px solid #EAECF0" }}
                          className="items-center p-2 w-[42%]"
                        >
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
                              name="selected-shipping"
                              className="w-4 h-4 cursor-pointer m-0 text-blue-600 bg-gray-100 border-none focus:ring-none dark:focus:ring-none focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                              style={{
                                boxShadow: "none",
                              }}
                            />
                            <span className="flex flex-col ml-2 font-lato ">
                              <span
                                style={{ fontSize: "13px", color: "#4B4B4B" }}
                              >
                                {shipping.name}
                              </span>{" "}
                              <span
                                className="mt-1.5"
                                style={{ fontSize: "12px", color: "#8E8E8E" }}
                              >
                                {shipping.type}
                              </span>
                            </span>
                          </label>
                        </td>
                        <td
                          className="p-2 w-[30%]"
                          style={{
                            borderBottom: "1px solid #EAECF0",
                          }}
                        >
                          <span
                            className="font-freesans"
                            style={{
                              color: "#8E8E8E",
                              fontSize: "12px",
                              fontWeight: 400,
                            }}
                          >
                            {shipping.date}
                          </span>
                        </td>
                        <td
                          className="p-2 w-[30%]"
                          style={{
                            borderBottom: "1px solid #EAECF0",
                          }}
                        >
                          <span
                            className="font-freesans"
                            style={{
                              color: "#8E8E8E",
                              fontSize: "12px",
                              fontWeight: 400,
                            }}
                          >
                            {shipping.charges}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
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
        <button className="bg-blue-600 text-white px-7 py-2.5 rounded cursor-pointer">
          Continue{" "}
        </button>
      </div>
    </div>
  );
}
