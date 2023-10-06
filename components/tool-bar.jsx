import React, { useEffect, useState } from "react";
import ChevronDownIcon from "@heroicons/react/solid/ChevronDownIcon";

export default function ToolBar() {
  return (
    <div className="flex flex-col md:flex-row md:justify-between  items-center mt-4 w-[97%]">
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
            style={{
              borderRadius: "6px",
              border: "1px solid #D0D5DD",
              fontSize: "14px",
              color: "#8E8E8E",
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
        </div>

        {/* Filter Dropdown */}
        <div className="relative">
          <button
            style={{
              borderRadius: "6px",
              border: "1px solid #D0D5DD",
              fontSize: "14px",
              color: "#8E8E8E",
            }}
            className="flex items-center px-3 py-2 hover:bg-gray-300"
          >
            Filters
            <img src={"/filter.png"} className="ml-2 w-4 h-4" />
          </button>
        </div>

        {/* Add New Product Dropdown */}
        <div className="relative">
          <button
            style={{
              borderRadius: "6px",
              border: "1px solid #D0D5DD",
              fontSize: "14px",
              color: "#ffffff",
              backgroundColor: "#4162ff",
            }}
            className="flex items-center px-3 py-2 hover:bg-gray-300"
          >
            Add New Product
            <img src={"/chevron-down.png"} className="ml-2 w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
