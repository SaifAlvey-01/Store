import React, { useState, useRef } from "react";
import Pagination from "../../../pagination";

export default function InventoryListing() {
  const headers = [
    { title: "Product" },
    { title: "Variants" },
    { title: "Inventory" },
    { title: "Price" },
    { title: "Discounted Price" },
  ];

  const data = [
    {
      productImage: "/product-img.png",
      productName: "Product 001",
      productDescription: "Men Shoes",
      variants: [
        {
          name: "Black",
          inventory: "720",
          price: "₹5,333",
          discountedPrice: "₹4,999",
        },
        {
          name: "Brown",
          inventory: "680",
          price: "₹5,533",
          discountedPrice: "₹5,099",
        },
      ],
    },
    {
      productImage: "/product-img.png",
      productName: "Product 001",
      productDescription: "Men Shoes",
      variants: [
        {
          name: "Grey",
          inventory: "720",
          price: "₹5,333",
          discountedPrice: "₹4,999",
        },
      ],
    },
    {
      productImage: "/product-img.png",
      productName: "Product 001",
      productDescription: "Men Shoes",
      variants: [
        {
          name: "Black",
          inventory: "720",
          price: "₹5,333",
          discountedPrice: "₹4,999",
        },
      ],
    },
    {
      productImage: "/product-img.png",
      productName: "Product 001",
      productDescription: "Men Shoes",
      variants: [
        {
          name: "01 Piece",
          inventory: "720",
          price: "₹5,333",
          discountedPrice: "₹4,999",
        },
      ],
    },
    {
      productImage: "/product-img.png",
      productName: "Product 001",
      productDescription: "Men Shoes",
      variants: [
        {
          name: "01 Piece",
          inventory: "720",
          price: "₹5,333",
          discountedPrice: "₹4,999",
        },
      ],
    },
  ];

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
            <tr key={index} style={{ height: "36px !important" }}>
              <td
                style={{
                  borderBottom: "1px solid #EAECF0",
                  width: "300px",
                  height: row.variants.length > 1 ? "auto" : "36px",
                }}
                className="flex items-center px-3 py-10 "
              >
                <img
                  className="h-11 w-11"
                  src={row.productImage}
                  alt={row.productName}
                />
                <div className="ml-2 flex flex-col justify-center w-full">
                  <span
                    className="font-freesans mb-2"
                    style={{ color: "4B4B4B", fontSize: "12px" }}
                  >
                    {row.productName}
                  </span>
                  <span
                    className="font-freesans"
                    style={{ color: "#8E8E8E", fontSize: "10px" }}
                  >
                    {row.productDescription}
                  </span>
                </div>
              </td>
              <td
                style={{ borderBottom: "1px solid #EAECF0" }}
                className="px-6 py-3 w-40 "
              >
                {row.variants.map((variant, vIndex) => (
                  <div
                    style={{ color: "#8E8E8E", fontSize: "12px" }}
                    key={vIndex}
                    className="mb-6 mt-5 w-full"
                  >
                    {variant.name}
                  </div>
                ))}
              </td>
              <td
                style={{ borderBottom: "1px solid #EAECF0" }}
                className="p-3 w-60 "
              >
                {row.variants.map((variant, vIndex) => (
                  <input
                    style={{
                      fontSize: "12px",
                      color: "#8E8E8E",
                      borderRadius: "6px",
                      border: "1px solid #D0D5DD",
                      background: "#FFF",
                      boxShadow: "0px 1px 2px 0px rgba(16, 24, 40, 0.05)",
                    }}
                    key={vIndex}
                    className="border mb-2 py-1.5 px-4 w-[50%]"
                    defaultValue={variant.inventory}
                    type="text"
                  />
                ))}
              </td>
              <td
                style={{ borderBottom: "1px solid #EAECF0" }}
                className="p-3 w-60 "
              >
                {row.variants.map((variant, vIndex) => (
                  <input
                    style={{
                      fontSize: "12px",
                      color: "#8E8E8E",
                      borderRadius: "6px",
                      border: "1px solid var(--gray-300, #D0D5DD)",
                      background: "#FFF",
                      boxShadow: "0px 1px 2px 0px rgba(16, 24, 40, 0.05)",
                    }}
                    key={vIndex}
                    className="border mb-2 py-1.5 px-4 w-[50%]"
                    defaultValue={variant.price}
                    type="text"
                  />
                ))}
              </td>
              <td
                style={{ borderBottom: "1px solid #EAECF0" }}
                className="p-3 w-60 "
              >
                {row.variants.map((variant, vIndex) => (
                  <input
                    style={{
                      fontSize: "12px",
                      color: "#8E8E8E",
                      borderRadius: "6px",
                      border: "1px solid var(--gray-300, #D0D5DD)",
                      background: "#FFF",
                      boxShadow: "0px 1px 2px 0px rgba(16, 24, 40, 0.05)",
                    }}
                    key={vIndex}
                    className="border mb-2 py-1.5 px-4 w-[50%]"
                    defaultValue={variant.discountedPrice}
                    type="text"
                  />
                ))}
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
