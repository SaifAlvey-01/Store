import React, { useState, useEffect, useRef } from "react";
import ConditionSelect from "../../../dropdown-selects/condition-select";

export default function OrdersToolBar({ setShowAddNewProduct }) {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isChecked, setIsChecked] = useState(false);

  const ref = useRef(null);

  useEffect(() => {
    function handleOutsideClick(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setOpenDropdown(null);
      }
    }

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const radioOptions = [
    { id: "radio-1", label: "Order (Created Date)" },
    { id: "radio-2", label: "Order (Modified Date)" },
    { id: "radio-3", label: "Date (Newest First)" },
    { id: "radio-4", label: "Date (Oldest First)" },
    { id: "radio-5", label: "Item (High to Low)" },
    { id: "radio-6", label: "Item (Low to High)" },
    { id: "radio-7", label: "Amount (High to Low)" },
    { id: "radio-8", label: "Amount (Low to High)" },
  ];

  const CheckboxOptions = [
    { id: "checkbox-1", label: "Date" },
    { id: "checkbox-2", label: "Customers" },
    { id: "checkbox-3", label: "Items" },
    { id: "checkbox-4", label: "Payments" },
    { id: "checkbox-5", label: "Status" },
    { id: "checkbox-6", label: "Amount" },
    { id: "checkbox-7", label: "Channel" },
    { id: "checkbox-8", label: "Source" },
    { id: "checkbox-9", label: "UTM Source" },
    { id: "checkbox-10", label: "UTM Medium" },
    { id: "checkbox-11", label: "UTM Campaign" },
  ];

  const MonthFilter = [
    "Lifetime",
    "Today",
    "Yesterday",
    "This Week",
    "Last 7 Days",
    "Last Week",
    "This Month",
    "Last Month",
    "Custom Range",
  ];

  const handleUnitChange = (selectedOption) => {
    console.log(`Selected: ${selectedOption.value}`);
  };

  return (
    <div className="flex flex-col md:flex-row md:justify-between items-center py-6 w-[97%]">
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
          className="w-full pl-9 pr-32 py-2.5 md:w-[92%] focus:outline-none focus:border-blue-500"
        />
      </div>

      {/* Buttons and Dropdowns - Placed to the right */}
      <div className="flex flex-row mt-4 md:mt-0 space-x-2 md:space-y-0 md:space-x-4">
        {/* Columns Sort Dropdown */}
        <div className="relative">
          <button
            onClick={() =>
              setOpenDropdown(
                openDropdown !== "column_sort" ? "column_sort" : null
              )
            }
            style={{
              borderRadius: "6px",
              border: "1px solid #D0D5DD",
              fontSize: "14px",
              color: "#8E8E8E",
              backgroundColor: "#fff",
            }}
            className="flex items-center px-3 py-2 hover:bg-gray-300
            cursor-pointer"
          >
            {" "}
            Columns
            <img
              src={"/data.png"}
              alt="Dropdown Icon"
              className="ml-2 w-4 h-4"
            />
          </button>

          {openDropdown === "column_sort" && (
            <div
              ref={ref}
              className="mt-2 px-3 py-4 w-64 bg-white rounded-md shadow-lg overflow-hidden z-50 flex flex-col items-start justify-center"
              style={{
                position: "absolute",
                top: 32,
                right: -1,
                border: "1px solid #EDEDED",
                boxShadow: "-1px 4px 4px 0px rgba(28, 28, 75, 0.08)",
                borderRadius: "8px",
                width: "160px",
                backgroundColor: "#fff",
                height: "auto",
              }}
            >
              <div className="flex flex-col w-full">
                {CheckboxOptions.map((option) => (
                  <div key={option.id} className="flex flex-col">
                    <div className="flex items-center py-2 w-full border border-gray-200 rounded dark:border-gray-700 mb-2">
                      <input
                        id={option.id}
                        style={{
                          appearance: "none",
                          display: "none",
                        }}
                        checked={isChecked}
                        onChange={() => {
                          setIsChecked(!isChecked);
                        }}
                        type="checkbox"
                        value=""
                      />
                      <label
                        htmlFor={option.id}
                        style={{
                          color: "#4B5563",
                          fontSize: "14px",
                          fontStyle: "normal",
                          fontWeight: "500",
                          lineHeight: "normal",
                          letterSpacing: "0.14px",
                        }}
                        className="ml-1.5 text-sm font-medium cursor-pointer flex items-center"
                      >
                        <div
                          className="relative inline-block"
                          style={{
                            width: "16px",
                            height: "16px",
                            borderRadius: "4px",
                            border: isChecked
                              ? "2px solid #3B82F6"
                              : "2px solid #D1D5DB",
                            backgroundColor: isChecked
                              ? "white"
                              : "transparent",
                            marginRight: "12px",
                          }}
                        >
                          {isChecked && (
                            <svg
                              viewBox="0 0 24 24"
                              fill="none"
                              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-blue-600 w-4 h-4"
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
                        </div>
                        {option.label}
                      </label>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Sort Dropdown */}
        <div className="relative">
          <button
            onClick={() =>
              setOpenDropdown(openDropdown !== "sort" ? "sort" : null)
            }
            style={{
              borderRadius: "6px",
              border: "1px solid #D0D5DD",
              fontSize: "14px",
              color: "#8E8E8E",
              backgroundColor: "#fff",
            }}
            className="flex items-center px-3 py-2 hover:bg-gray-300 cursor-pointer"
          >
            Sort
            <img
              src={"/arrow.png"}
              alt="Dropdown Icon"
              className="ml-2 w-4 h-4"
            />
          </button>

          {openDropdown === "sort" && (
            <div
              ref={ref}
              className="mt-2 px-3 py-4 w-64 bg-white rounded-md shadow-lg overflow-hidden z-50 flex flex-col items-start justify-center"
              style={{
                position: "absolute",
                top: 32,
                right: -1,
                border: "1px solid #EDEDED",
                boxShadow: "-1px 4px 4px 0px rgba(28, 28, 75, 0.08)",
                borderRadius: "8px",
                width: "200px",
                backgroundColor: "#fff",
                height: "auto",
              }}
            >
              <div className="flex flex-col w-full">
                {radioOptions.map((option) => (
                  <label
                    key={option.id}
                    className="flex flex-row items-center py-2 w-full border border-gray-200 rounded dark:border-gray-700 mb-2"
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
          )}
        </div>

        {/* Filter Dropdown */}
        <div className="relative">
          <button
            onClick={() =>
              setOpenDropdown(openDropdown !== "filter" ? "filter" : null)
            }
            style={{
              borderRadius: "6px",
              border: "1px solid #D0D5DD",
              fontSize: "14px",
              color: "#8E8E8E",
              backgroundColor: "#fff",
            }}
            className="flex items-center px-3 py-2 hover:bg-gray-300 cursor-pointer"
          >
            Filters
            <img src={"/filter.png"} className="ml-2 w-4 h-4" />
          </button>

          {/* New Dropdown */}
          {openDropdown === "filter" && (
            <div
              ref={ref}
              className="mt-2 px-5 py-5 w-64 bg-white rounded-md shadow-lg overflow-hidden z-50 "
              style={{
                position: "absolute",
                top: 32,
                right: -1,
                border: "1px solid #EDEDED",
                boxShadow: "-1px 4px 4px 0px rgba(28, 28, 75, 0.08)",
                borderRadius: "12px",
                width: "340px",
                backgroundColor: "#fff",
                height: "auto",
              }}
            >
              <div
                className="scroll-section"
                style={{
                  overflowY: "scroll",
                  maxHeight: "48vh",
                  msOverflowStyle: "none",
                  scrollbarWidth: "none",
                  textAlign: "left",
                }}
              >
                {" "}
                <span
                  style={{
                    fontSize: "16px",
                    fontWeight: 600,
                    color: "#4B4B4B",
                  }}
                >
                  Payments
                </span>
                <div className="flex items-center justify-between mt-4">
                  {" "}
                  <div className="flex items-center flex-1">
                    <input
                      style={{
                        appearance: "none",
                        display: "none",
                      }}
                      checked={isChecked}
                      onChange={() => setIsChecked(!isChecked)}
                      id="checked-checkbox"
                      type="checkbox"
                      value=""
                    />
                    <label
                      style={{
                        color: "#4B4B4B",
                        fontSize: "14px",
                        fontWeight: 500,
                        display: "inline-flex",
                        alignItems: "center",
                        position: "relative",
                      }}
                      htmlFor="checked-checkbox"
                      className=" text-sm font-lato cursor-pointer"
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
                      Paid Orders{" "}
                    </label>
                  </div>
                  <div className="flex items-center flex-1">
                    <input
                      style={{
                        appearance: "none",
                        display: "none",
                      }}
                      checked={isChecked}
                      onChange={() => setIsChecked(!isChecked)}
                      id="checked-checkbox"
                      type="checkbox"
                      value=""
                    />
                    <label
                      style={{
                        color: "#4B4B4B",
                        fontSize: "14px",
                        fontWeight: 500,
                        display: "inline-flex",
                        alignItems: "center",
                        position: "relative",
                      }}
                      htmlFor="checked-checkbox"
                      className="text-sm font-font-lato cursor-pointer"
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
                      COD Orders{" "}
                    </label>
                  </div>
                </div>
                <div className="flex items-center justify-between mt-5">
                  <div className="flex items-center flex-1">
                    <input
                      style={{
                        appearance: "none",
                        display: "none",
                      }}
                      checked={isChecked}
                      onChange={() => setIsChecked(!isChecked)}
                      id="checked-checkbox"
                      type="checkbox"
                      value=""
                    />
                    <label
                      style={{
                        color: "#4B4B4B",
                        fontSize: "14px",
                        fontWeight: 500,
                        display: "inline-flex",
                        alignItems: "center",
                        position: "relative",
                      }}
                      htmlFor="checked-checkbox"
                      className="text-sm font-font-lato cursor-pointer"
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
                      Unpaid Order{" "}
                    </label>
                  </div>{" "}
                  <div className="flex items-center flex-1">
                    <input
                      style={{
                        appearance: "none",
                        display: "none",
                      }}
                      checked={isChecked}
                      onChange={() => setIsChecked(!isChecked)}
                      id="checked-checkbox"
                      type="checkbox"
                      value=""
                    />
                    <label
                      style={{
                        color: "#4B4B4B",
                        fontSize: "14px",
                        fontWeight: 500,
                        display: "inline-flex",
                        alignItems: "center",
                        position: "relative",
                      }}
                      htmlFor="checked-checkbox"
                      className=" text-sm font-lato cursor-pointer"
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
                      Prepaid Order{" "}
                    </label>
                  </div>
                </div>
                <div className="flex flex-col mt-8">
                  {" "}
                  {/* Heading */}
                  <span
                    style={{
                      fontSize: "16px",
                      fontWeight: 600,
                      color: "#4B4B4B",
                    }}
                  >
                    Amount
                  </span>
                  <ConditionSelect onChange={handleUnitChange} />
                </div>
                <div className="flex flex-col mt-4">
                  {" "}
                  {/* Heading */}
                  <span
                    style={{
                      fontSize: "16px",
                      fontWeight: 600,
                      color: "#4B4B4B",
                    }}
                  >
                    Quality
                  </span>
                  <ConditionSelect onChange={handleUnitChange} />
                </div>
                <div className="flex flex-col mt-6">
                  {/* Heading */}
                  <span
                    style={{
                      fontSize: "16px",
                      fontWeight: 600,
                      color: "#4B4B4B",
                    }}
                  >
                    Channel
                  </span>{" "}
                  <div className="flex items-center justify-between mt-4">
                    {" "}
                    <div className="flex items-center flex-1">
                      <input
                        style={{
                          appearance: "none",
                          display: "none",
                        }}
                        checked={isChecked}
                        onChange={() => setIsChecked(!isChecked)}
                        id="checked-checkbox"
                        type="checkbox"
                        value=""
                      />
                      <label
                        style={{
                          color: "#4B4B4B",
                          fontSize: "14px",
                          fontWeight: 500,
                          display: "inline-flex",
                          alignItems: "center",
                          position: "relative",
                        }}
                        htmlFor="checked-checkbox"
                        className=" text-sm font-lato cursor-pointer"
                      >
                        <span
                          style={{
                            width: "16px",
                            height: "16px",
                            borderRadius: "4px",
                            border: isChecked
                              ? "2px solid #3B82F6"
                              : "2px solid #D1D5DB",
                            backgroundColor: isChecked
                              ? "white"
                              : "transparent",
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
                        Online Orders{" "}
                      </label>
                    </div>
                    <div className="flex items-center flex-1">
                      <input
                        style={{
                          appearance: "none",
                          display: "none",
                        }}
                        checked={isChecked}
                        onChange={() => setIsChecked(!isChecked)}
                        id="checked-checkbox"
                        type="checkbox"
                        value=""
                      />
                      <label
                        style={{
                          color: "#4B4B4B",
                          fontSize: "14px",
                          fontWeight: 500,
                          display: "inline-flex",
                          alignItems: "center",
                          position: "relative",
                        }}
                        htmlFor="checked-checkbox"
                        className="text-sm font-font-lato cursor-pointer"
                      >
                        <span
                          style={{
                            width: "16px",
                            height: "16px",
                            borderRadius: "4px",
                            border: isChecked
                              ? "2px solid #3B82F6"
                              : "2px solid #D1D5DB",
                            backgroundColor: isChecked
                              ? "white"
                              : "transparent",
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
                        Manual Orders{" "}
                      </label>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col mt-6">
                  {/* Heading */}
                  <span
                    style={{
                      fontSize: "16px",
                      fontWeight: 600,
                      color: "#4B4B4B",
                    }}
                  >
                    Others
                  </span>{" "}
                  <div className="flex items-center justify-between mt-4">
                    {" "}
                    <div className="flex items-center flex-1">
                      <input
                        style={{
                          appearance: "none",
                          display: "none",
                        }}
                        checked={isChecked}
                        onChange={() => setIsChecked(!isChecked)}
                        id="checked-checkbox"
                        type="checkbox"
                        value=""
                      />
                      <label
                        style={{
                          color: "#4B4B4B",
                          fontSize: "14px",
                          fontWeight: 400,
                          display: "inline-flex",
                          alignItems: "center",
                          position: "relative",
                        }}
                        htmlFor="checked-checkbox"
                        className=" text-sm font-lato cursor-pointer"
                      >
                        <span
                          style={{
                            width: "16px",
                            height: "16px",
                            borderRadius: "4px",
                            border: isChecked
                              ? "2px solid #3B82F6"
                              : "2px solid #D1D5DB",
                            backgroundColor: isChecked
                              ? "white"
                              : "transparent",
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
                        Self Shipped Orders{" "}
                      </label>
                    </div>
                    <div className="flex items-center flex-1">
                      <input
                        style={{
                          appearance: "none",
                          display: "none",
                        }}
                        checked={isChecked}
                        onChange={() => setIsChecked(!isChecked)}
                        id="checked-checkbox"
                        type="checkbox"
                        value=""
                      />
                      <label
                        style={{
                          color: "#4B4B4B",
                          fontSize: "14px",
                          fontWeight: 500,
                          display: "inline-flex",
                          alignItems: "center",
                          position: "relative",
                        }}
                        htmlFor="checked-checkbox"
                        className="text-sm font-font-lato cursor-pointer"
                      >
                        <span
                          style={{
                            width: "16px",
                            height: "16px",
                            borderRadius: "4px",
                            border: isChecked
                              ? "2px solid #3B82F6"
                              : "2px solid #D1D5DB",
                            backgroundColor: isChecked
                              ? "white"
                              : "transparent",
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
                        Returned Orders{" "}
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              {/* fixed part */}
              <div
                className="fixed-section flex flex-col justify-end"
                style={{ flexGrow: 1 }}
              >
                <div
                  style={{
                    borderTop: "1px solid #E5E7EB",
                    padding: "16px 0px 0px",
                  }}
                  className="flex justify-end items-center mt-6"
                >
                  <span
                    className="font-freesans"
                    style={{
                      marginRight: "24px",
                      color: "#4162FF",
                      fontSize: "16px",
                    }}
                  >
                    Reset{" "}
                  </span>
                  <button className="bg-blue-500 text-white px-7 py-2 rounded">
                    Apply{" "}
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Month Filter Dropdown */}
        <div className="relative">
          <button
            onClick={() =>
              setOpenDropdown(openDropdown !== "month" ? "month" : null)
            }
            style={{
              borderRadius: "6px",
              border: "1px solid #D0D5DD",
              fontSize: "14px",
              color: "#8E8E8E",
              backgroundColor: "#fff",
            }}
            className="flex items-center px-3 py-2 hover:bg-gray-300 cursor-pointer"
          >
            This Month
            <img src={"/arrow-down.png"} className="ml-2 w-4 h-4" />
          </button>

          {/* New Dropdown */}
          {openDropdown === "month" && (
            <div
              ref={ref}
              className="mt-2 w-64 p-3 bg-white rounded-md shadow-lg overflow-hidden z-50 "
              style={{
                position: "absolute",
                top: 32,
                right: -1,
                border: "1px solid #EDEDED",
                boxShadow: "-1px 4px 4px 0px rgba(28, 28, 75, 0.08)",
                borderRadius: "12px",
                width: "120px",
                backgroundColor: "#fff",
                height: "auto",
              }}
            >
              {/* Text items */}
              {MonthFilter.map((text, index) => (
                <div
                  style={{
                    color: "#4B4B4B",
                    fontSize: "14px",
                    fontWeight: 500,
                    textAlign: "left",
                  }}
                  key={index}
                  className="px-2 py-3 font-freesans"
                >
                  {text}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
