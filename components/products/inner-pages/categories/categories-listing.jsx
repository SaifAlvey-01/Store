import React, { useState, useRef, useEffect } from "react";
import Pagination from "../../../pagination";
import CategoriesEditDropdown from "../../../dropdowns/categories-edit-dropdown";

const headers = [
  { title: "Categories" },
  { title: "Products" },
  { title: "Status" },
  { title: "Actions" },
];

const data = [
  {
    categoryImage: "/product-img.png",
    categoryName: "Category 001",
    categoryDescription: "Men Shoes",
    products: "05",
  },
  {
    categoryImage: "/product-img.png",
    categoryName: "Category 002",
    categoryDescription: "Men Shoes",
    products: "05",
  },
  {
    categoryImage: "/product-img.png",
    categoryName: "Category 003",
    categoryDescription: "Men Shoes",
    products: "05",
  },
  {
    categoryImage: "/product-img.png",
    categoryName: "Category 003",
    categoryDescription: "Men Shoes",
    products: "05",
  },
  {
    categoryImage: "/product-img.png",
    categoryName: "Category 003",
    categoryDescription: "Men Shoes",
    products: "05",
  },
  {
    categoryImage: "/product-img.png",
    categoryName: "Category 003",
    categoryDescription: "Men Shoes",
    products: "05",
  },
  {
    categoryImage: "/product-img.png",
    categoryName: "Category 003",
    categoryDescription: "Men Shoes",
    products: "05",
  },
];

export default function CategoriesListing({ onEditClick }) {
  const [dropdownOpenIndex, setDropdownOpenIndex] = useState(null);
  const dropdownRef = useRef([]);

  useEffect(() => {
    function handleOutsideClick(event) {
      if (
        dropdownOpenIndex !== null &&
        dropdownRef.current[dropdownOpenIndex] &&
        !dropdownRef.current[dropdownOpenIndex].contains(event.target)
      ) {
        setDropdownOpenIndex(null);
      }
    }

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [dropdownOpenIndex]);

  return (
    <div className="flex justify-between items-center mt-6 px-5 h-full">
      <table
        className="w-full h-full font-freesans"
        style={{
          border: "1px solid #EAECF0",
          borderRadius: "8px",
          borderCollapse: "separate",
        }}
      >
        <thead>
          <tr>
            {headers.map((header, idx) => (
              <th
                key={idx}
                className="py-3 px-4 bg-f9fafb text-start font-freesans "
                style={{
                  borderBottom: "1px solid #EAECF0",
                  backgroundColor: "#F9FAFB",
                  color: "#1D2939",
                  fontSize: "12px",
                }}
              >
                <div className="flex flex-row items-center">
                  {" "}
                  {header.title}
                  <img className="ml-2" src={"/sort.png"} width="16" />
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white">
          {data.map((row, index) => (
            <tr key={index} className="h-auto">
              <td
                style={{ borderBottom: "1px solid #EAECF0" }}
                className="flex items-center px-5 py-3 w-full"
              >
                <img
                  className="h-11 w-11"
                  src={row.categoryImage}
                  alt={row.categoryName}
                />
                <div className="ml-2 flex flex-col ">
                  <span
                    className="font-freesans mb-2"
                    style={{ color: "4B4B4B", fontSize: "12px" }}
                  >
                    {row.categoryName}
                  </span>
                  <span
                    className="font-freesans"
                    style={{ color: "#8E8E8E", fontSize: "10px" }}
                  >
                    {" "}
                    {row.categoryDescription}
                  </span>
                </div>
              </td>
              <td
                className="px-6 py-3 w-60"
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
                  {row.products}
                </span>{" "}
              </td>
              <td
                className="p-3 w-60"
                style={{
                  borderBottom: "1px solid #EAECF0",
                }}
              >
                <div className="flex items-center">
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" value="" className="sr-only peer" />
                    <div className="w-9 h-5 bg-gray-200 focus:ring-0 peer-focus:outline-none dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-300 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                  </label>{" "}
                  <span
                    className="font-freesans ml-2.5 "
                    style={{
                      color: "#169C00",
                      fontSize: "11px",
                      fontWeight: 500,
                    }}
                  >
                    Active{" "}
                  </span>
                </div>
              </td>
              <td
                className="p-3 w-40"
                style={{
                  borderBottom: "1px solid #EAECF0",
                }}
              >
                <img
                  className="mr-2 h-7 w-7 cursor-pointer"
                  src="/eye.png"
                  alt="Action 1"
                />
                <img
                  className="mr-2 h-7 w-7 cursor-pointer"
                  src="/copy.png"
                  alt="Action 2"
                />
                <img
                  className="mr-2 h-7 w-7 cursor-pointer"
                  src="/send.png"
                  alt="Action 3"
                />
                <img
                  className="mr-2 h-7 w-7 cursor-pointer"
                  src="/dots.png"
                  alt="Action 4"
                  onClick={() =>
                    setDropdownOpenIndex(
                      dropdownOpenIndex !== index ? index : null
                    )
                  }
                />
                <div ref={(el) => (dropdownRef.current[index] = el)}>
                  <CategoriesEditDropdown
                    isOpen={dropdownOpenIndex === index}
                    onEditClick={onEditClick}
                  />
                </div>{" "}
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={headers.length}>
              <div className="flex justify-between items-center py-0 px-3">
                <div className="flex items-center">
                  <span
                    style={{ color: "#6B7280", fontWeight: 500 }}
                    className="font-plusJakartaSans mr-1"
                  >
                    Show
                  </span>
                  <div>
                    <button
                      style={{
                        borderRadius: "4px",
                        border: "1px solid #DCDCDC",
                        color: "#6B7280",
                      }}
                      id="dropdownDefaultButton"
                      data-dropdown-toggle="dropdown"
                      className="bg-white font-medium text-sm px-1.5 py-1 text-center inline-flex items-center"
                      type="button"
                    >
                      10
                      <img
                        className="w-5 h-5 ml-1.5"
                        src="/arrow-up.png"
                        alt=""
                      />
                    </button>
                  </div>
                  <span
                    style={{ color: "#6B7280", fontWeight: 500 }}
                    className="font-plusJakartaSans ml-1"
                  >
                    of 40 entries
                  </span>
                </div>

                {/* Pagination component */}
                <Pagination currentPage={3} totalPages={5} />
              </div>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}
