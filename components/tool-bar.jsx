import React, { useState, useEffect, useRef } from "react";

export default function ToolBar({setShowAddNewProduct}) {
  const [sortDropdownOpen, setSortDropdownOpen] = useState(false);
  const [productDropdownOpen, setProductDropdownOpen] = useState(false);
  const [filterDropdownOpen, setFilterDropdownOpen] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const ref = useRef(null);

  useEffect(() => {
    function handleOutsideClick(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setSortDropdownOpen(false);
        setProductDropdownOpen(false);
        setFilterDropdownOpen(false);
      }
    }

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const radioOptions = [
    { id: "bordered-radio-1", label: "Created (Newest Date)" },
    { id: "bordered-radio-2", label: "Created (Oldest Date)" },
    { id: "bordered-radio-3", label: "Updated (Newest Date)" },
    { id: "bordered-radio-4", label: "Updated (Oldest Date)" },
    { id: "bordered-radio-5", label: "Product Name (A-Z)" },
    { id: "bordered-radio-6", label: "Product Name (Z-A)" },
    { id: "bordered-radio-7", label: "Inventory (High to Low)" },
    { id: "bordered-radio-8", label: "Inventory (Low to High)" },
    { id: "bordered-radio-9", label: "Price (High to Low)" },
    { id: "bordered-radio-10", label: "Price (Low to High)" },
  ];

  return (
    <div className="flex flex-col md:flex-row md:justify-between items-center mt-4 w-[97%]">
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
          placeholder="Search Products"
          className="w-full pl-9 pr-32 py-2.5 md:w-[92%] focus:outline-none focus:border-blue-500"
        />
      </div>

      {/* Buttons and Dropdowns - Placed to the right */}
      <div className="flex flex-row mt-4 md:mt-0 space-x-2 md:space-y-0 md:space-x-4">
        {/* Sort Dropdown */}
        <div className="relative">
          <button
            onClick={() => setSortDropdownOpen(!sortDropdownOpen)}
            style={{
              borderRadius: "6px",
              border: "1px solid #D0D5DD",
              fontSize: "14px",
              color: "#8E8E8E",
              backgroundColor: "#fff",
            }}
            className="flex items-center px-3 py-2 hover:bg-gray-300"
          >
            Sort
            <img
              src={"/arrow.png"}
              alt="Dropdown Icon"
              className="ml-2 w-4 h-4"
            />
          </button>

          {sortDropdownOpen && (
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
                width: "200px", // Adjusted width
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
            onClick={() => setFilterDropdownOpen(!filterDropdownOpen)}
            style={{
              borderRadius: "6px",
              border: "1px solid #D0D5DD",
              fontSize: "14px",
              color: "#8E8E8E",
              backgroundColor: "#fff",
            }}
            className="flex items-center px-3 py-2 hover:bg-gray-300"
          >
            Filters
            <img src={"/filter.png"} className="ml-2 w-4 h-4" />
          </button>

          {/* New Dropdown */}
          {filterDropdownOpen && (
            <div
              ref={ref}
              className="mt-2 px-5 py-4 w-64 bg-white rounded-md shadow-lg overflow-hidden z-50 "
              style={{
                position: "absolute",
                top: 32,
                right: -1,
                border: "1px solid #EDEDED",
                boxShadow: "-1px 4px 4px 0px rgba(28, 28, 75, 0.08)",
                borderRadius: "12px",
                width: "280px",
                backgroundColor: "#fff",
                height: "auto",
              }}
            >
              {/* Heading */}
              <span
                style={{ fontSize: "16px", fontWeight: 600, color: "#4B4B4B" }}
              >
                Status
              </span>

              <div className="flex items-center mt-4">
                {" "}
                <div className="flex items-center mr-20">
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
                      fontStyle: 500,
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
                    In Stock{" "}
                  </label>
                </div>
                <div className="flex items-center">
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
                      fontStyle: 500,
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
                    Out of Stock{" "}
                  </label>
                </div>
              </div>

              <div className="flex items-center mt-5">
                <div className="flex items-center mr-20">
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
                      fontStyle: 500,
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
                    Inactive{" "}
                  </label>
                </div>{" "}
                <div className="flex items-center ml-1">
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
                      fontStyle: 500,
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
                    Low Stock{" "}
                  </label>
                </div>
              </div>

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
                    marginRight: "16px",
                    color: "#4162FF",
                    fontSize: "16px",
                  }}
                >
                  Reset{" "}
                </span>
                <button className="bg-blue-500 text-white px-6 py-2 rounded">
                  Apply{" "}
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Add New Product Dropdown */}
        <div className="relative">
          <button
            onClick={() => setShowAddNewProduct(true)}
            style={{
              borderRadius: "6px",
              border: "1px solid #D0D5DD",
              fontSize: "14px",
              color: "#ffffff",
              backgroundColor: "#4162ff",
            }}
            className="flex cursor-pointer items-center px-1.5 md:px-3 py-2 hover:bg-gray-300"
          >
            Add New Product
            <img src={"/chevron-down.png"} className=" ml-1 md:ml-2 w-4 h-4" />
          </button>

          {/* New Dropdown */}
          {/* {productDropdownOpen && (
            <div
              ref={ref}
              className="mt-2 px-3 py-1 w-64 bg-white rounded-md shadow-lg overflow-hidden z-50 flex flex-col items-start justify-center"
              style={{
                position: "absolute",
                top: 32,
                right: -1,
                border: "1px solid #EDEDED",
                boxShadow: "-1px 4px 4px 0px rgba(28, 28, 75, 0.08)",
                borderRadius: "12px",
                width: "180px",
                backgroundColor: "#fff",
                height: "auto",
              }}
            >
              <div className="flex flex-col">
                <span
                  className="font-lato"
                  style={{
                    color: "#4B4B4B",
                    fontWeight: 500,
                    fontSize: "14px",
                    textAlign: "center",
                    padding: "10px 8px",
                  }}
                >
                  Bulk Upload Products
                </span>
                <span
                  className="font-lato"
                  style={{
                    color: "#4B4B4B",
                    fontWeight: 500,
                    fontSize: "14px",
                    textAlign: "center",
                    padding: "10px 8px",
                  }}
                >
                  Bulk Update Products
                </span>
              </div>
            </div>
          )} */}
        </div>
      </div>
    </div>
  );
}
