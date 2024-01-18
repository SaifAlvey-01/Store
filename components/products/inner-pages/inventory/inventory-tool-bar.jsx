import React, { useState, useEffect, useRef } from "react";

export default function InventoryToolBar({ isEditing, setIsEditing }) {
  const [filterDropdownOpen, setFilterDropdownOpen] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const ref = useRef(null);

  useEffect(() => {
    function handleOutsideClick(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setFilterDropdownOpen(false);
      }
    }

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const handleUpdateButtonClick = () => {
    setIsEditing(!isEditing);
  };

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
          placeholder="Search Inventory"
          className="w-full pl-9 pr-32 py-2.5 md:w-[92%] focus:outline-none focus:border-blue-500"
        />
      </div>

      {/* Buttons and Dropdowns - Placed to the right */}
      <div className="flex flex-row items-center mt-4 md:mt-0 space-x-2 md:space-y-0 md:space-x-4">
        <div className="flex items-center flex-row mt-4 md:mt-0 space-x-2 md:space-y-0 md:space-x-4">
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
              color: "#8E8E8E",
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
                width: "14px",
                height: "14px",
                borderRadius: "4px",
                border: isChecked ? "2px solid #3B82F6" : "2px solid #D1D5DB",
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
                  left: "1px",
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
            Show low/out of stock products{" "}
          </label>
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
            All Categories{" "}
            <img src={"/arrow-down.png"} className="ml-2 w-4 h-4" />
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
            onClick={handleUpdateButtonClick}
            style={{
              borderRadius: "6px",
              border: "1px solid #D0D5DD",
              fontSize: "14px",
              color: "#ffffff",
              backgroundColor: "#4162ff",
            }}
            className="flex cursor-pointer items-center px-2 md:px-7 py-2 hover:bg-gray-300"
          >
            {isEditing ? "Update" : "Edit"}{" "}
          </button>
        </div>
      </div>
    </div>
  );
}
