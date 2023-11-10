import React from "react";
import { useState } from "react";

const products = [
  { id: 1, img: "/product-img.png", name: "Shoes 001", price: 5 },
  { id: 2, img: "/product-img.png", name: "Shoes 002", price: 10 },
  { id: 2, img: "/product-img.png", name: "Shoes 002", price: 10 },
  { id: 2, img: "/product-img.png", name: "Shoes 002", price: 10 },
  { id: 2, img: "/product-img.png", name: "Shoes 002", price: 10 },
  { id: 2, img: "/product-img.png", name: "Shoes 002", price: 10 },
  { id: 2, img: "/product-img.png", name: "Shoes 002", price: 10 },
  { id: 2, img: "/product-img.png", name: "Shoes 002", price: 10 },
  { id: 2, img: "/product-img.png", name: "Shoes 002", price: 10 },
];

export default function AddProduct() {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div>
      {" "}
      <div className="h-[820px]">
        <div className="flex justify-between items-center">
          <h3 style={{ fontSize: "18px", fontWeight: "normal" }}>
            Select Products{" "}
          </h3>
        </div>

        <div className="relative text-gray-600 mt-2">
          <img
            style={{ position: "absolute", top: 10, left: 0 }}
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
            placeholder="Search Products...."
            className="w-full pl-9 pr-32 py-2.5 focus:outline-none focus:border-blue-500"
          />
        </div>

        <div className="mt-6">
          {products.map((product) => (
            <div
              key={product.id}
              style={{ borderBottom: "1px solid #EAECF0" }}
              className="flex flex-row items-center justify-between p-3 mx-2"
            >
              <div className="flex items-center">
                <img className="h-11 w-11" src={product.img} alt="product" />
                <div className="ml-2 flex flex-col w-full ">
                  <span
                    className="font-freesans mb-2"
                    style={{ color: "4B4B4B", fontSize: "12px" }}
                  >
                    {product.name}
                  </span>
                  <span
                    className="font-freesans"
                    style={{ color: "#8E8E8E", fontSize: "10px" }}
                  >
                    ₹{product.price}
                  </span>
                </div>
              </div>

              <div className="flex items-center flex-row">
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
                </label>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div
        style={{
          borderTop: "1px solid #E5E7EB",
          padding: "16px",
          position: "sticky",
          bottom: 16,
          background: "white",
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
        }}
      >
        <button className="bg-blue-600 text-white px-7 py-2.5 rounded cursor-pointer">
          Add Products{" "}
        </button>
      </div>
    </div>
  );
}
