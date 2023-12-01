import React, { useState, useEffect, useRef } from "react";

export default function CategoriesToolBar({ setShowAddNewCategory }) {
  const [sortDropdownOpen, setSortDropdownOpen] = useState(false);

  const ref = useRef(null);

  useEffect(() => {
    function handleOutsideClick(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setSortDropdownOpen(false);
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
          placeholder="Search Categories"
          className="w-full pl-9 pr-32 py-2.5 md:w-[92%] focus:outline-none focus:border-blue-500"
        />
      </div>

      {/* Buttons and Dropdowns - Placed to the right */}
      <div className="flex flex-row mt-4 md:mt-0 space-x-2 md:space-y-0 md:space-x-4">
        {/* Reorder Category Dropdown */}
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
            className="flex items-center px-3 py-1.5 hover:bg-gray-300"
          >
            Reorder Category
            <img
              src={"/reorder.png"}
              alt="Dropdown Icon"
              className="ml-2 w-5 h-5"
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

        {/* Add New Category Dropdown */}
        <div className="relative">
          <button
            onClick={() => setShowAddNewCategory(true)}
            style={{
              borderRadius: "6px",
              border: "1px solid #D0D5DD",
              fontSize: "14px",
              color: "#ffffff",
              backgroundColor: "#4162ff",
            }}
            className="flex cursor-pointer items-center px-1.5 md:px-3 py-2 hover:bg-gray-300"
          >
            Add New Category
            <img
              src={"/chevron-down-fill.png"}
              className=" ml-1 md:ml-2 w-4 h-4"
            />
          </button>
        </div>
      </div>
    </div>
  );
}
