import React, { useState } from "react";

const categories = [
  {
    id: 1,
    name: "Category 1",
    img: "/product-img.png",
    price: 100,
    subcategories: [
      {
        id: 101,
        name: "Subcategory 1.1",
        img: "/product-img.png",
        price: 50,
      },
      {
        id: 102,
        name: "Subcategory 1.2",
        img: "/product-img.png",
        price: 60,
      },
    ],
  },
  {
    id: 2,
    name: "Category 2",
    img: "/product-img.png",
    price: 120,
    subcategories: [
      {
        id: 201,
        name: "Subcategory 2.1",
        img: "/product-img.png",
        price: 70,
      },
      {
        id: 202,
        name: "Subcategory 2.2",
        img: "/product-img.png",
        price: 80,
      },
    ],
  },

  {
    id: 3,
    name: "Category 3",
    img: "/product-img.png",
    price: 120,
    subcategories: [
      {
        id: 301,
        name: "Subcategory 2.1",
        img: "/product-img.png",
        price: 70,
      },
      {
        id: 302,
        name: "Subcategory 2.2",
        img: "/product-img.png",
        price: 80,
      },
      {
        id: 303,
        name: "Subcategory 2.2",
        img: "/product-img.png",
        price: 80,
      },
    ],
  },
];

export default function AddProductCategoryModal({ isOpen, onClose }) {
  const [categoryChecked, setCategoryChecked] = useState(false);
  const [subcategoryChecked, setSubcategoryChecked] = useState(false);
  const handleModalClick = (e) => {
    if (e.target.classList.contains("bg-black")) {
      onClose();
    }
  };

  return (
    <div
      className={`z-40 fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 ${
        isOpen ? "" : "hidden"
      }`}
      onClick={handleModalClick}
    >
      <div className="relative p-4 w-full max-w-lg max-h-full">
        <div
          style={{
            borderRadius: "12px",
            border: "1px solid #EDEDED",
            background: "#FFF",
            boxShadow: "-1px 4px 4px 0px rgba(28, 28, 75, 0.08)",
          }}
          className="relative p-4"
        >
          <div className="flex flex-row items-center justify-between">
            <h3 className="text-[16px] my-0 font-semibold font-lato">
              Select Category
            </h3>
            <button
              type="button"
              className="text-gray-400 bg-transparent rounded-lg ms-auto inline-flex justify-center items-center cursor-pointer p-0"
              data-modal-hide="default-modal"
              onClick={onClose}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M17.9998 5.99982C17.8123 5.81235 17.558 5.70703 17.2928 5.70703C17.0277 5.70703 16.7733 5.81235 16.5858 5.99982L11.9998 10.5858L7.41382 5.99982C7.22629 5.81235 6.97198 5.70703 6.70682 5.70703C6.44165 5.70703 6.18735 5.81235 5.99982 5.99982C5.81235 6.18735 5.70703 6.44165 5.70703 6.70682C5.70703 6.97198 5.81235 7.22629 5.99982 7.41382L10.5858 11.9998L5.99982 16.5858C5.81235 16.7733 5.70703 17.0277 5.70703 17.2928C5.70703 17.558 5.81235 17.8123 5.99982 17.9998C6.18735 18.1873 6.44165 18.2926 6.70682 18.2926C6.97198 18.2926 7.22629 18.1873 7.41382 17.9998L11.9998 13.4138L16.5858 17.9998C16.7733 18.1873 17.0277 18.2926 17.2928 18.2926C17.558 18.2926 17.8123 18.1873 17.9998 17.9998C18.1873 17.8123 18.2926 17.558 18.2926 17.2928C18.2926 17.0277 18.1873 16.7733 17.9998 16.5858L13.4138 11.9998L17.9998 7.41382C18.1873 7.22629 18.2926 6.97198 18.2926 6.70682C18.2926 6.44165 18.1873 6.18735 17.9998 5.99982Z"
                  fill="#374957"
                />
              </svg>
            </button>
          </div>
          <div className="relative text-gray-600 mt-3">
            <img
              style={{ position: "absolute", top: 10, left: 0 }}
              src={"/search.png"}
              className="w-4 h-4 flex items-center pl-3 "
            />
            <input
              style={{
                borderRadius: "8px",
                border: "1px solid #D0D5DD",
                fontSize: "13px",
              }}
              type="search"
              name="search"
              placeholder="Search Categories or Sub-Categories"
              className="w-full pl-9 pr-32 py-2.5 focus:outline-none focus:border-blue-500"
            />
          </div>

          <div
            className="mt-6 max-h-60 overflow-y-auto"
            style={{ overflowX: "hidden" }}
          >
            {categories.map((category) => (
              <div
                className="pb-3"
                style={{ borderBottom: "1px solid #EAECF0" }}
                key={category.id}
              >
                {/* Category with checkbox */}
                <div className="flex flex-row items-center justify-between px-1 py-3 mx-2">
                  <div className="flex items-center">
                    <img
                      className="h-11 w-11"
                      src={category.img}
                      alt={category.name}
                    />
                    <div className="ml-2 flex flex-col w-full">
                      <span
                        className="font-freesans mb-2"
                        style={{ color: "#4B4B4B", fontSize: "12px" }}
                      >
                        {category.name}
                      </span>
                      <span
                        className="font-freesans"
                        style={{ color: "#8E8E8E", fontSize: "10px" }}
                      >
                        ₹{category.price}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center flex-row">
                    <input
                      style={{
                        appearance: "none",
                        display: "none",
                      }}
                      checked={categoryChecked}
                      onChange={() => setCategoryChecked(!categoryChecked)}
                      id={`category-checkbox-${category.id}`}
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
                      htmlFor={`category-checkbox-${category.id}`}
                      className="ml-1.5 text-sm font-medium cursor-pointer"
                    >
                      <span
                        style={{
                          width: "14px",
                          height: "14px",
                          borderRadius: "4px",
                          border: categoryChecked
                            ? "2px solid #3B82F6"
                            : "2px solid #D1D5DB",
                          backgroundColor: categoryChecked
                            ? "white"
                            : "transparent",
                          marginRight: "8px",
                          display: "inline-block",
                        }}
                      ></span>
                      {categoryChecked && (
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

                {category.subcategories.map((subcategory) => (
                  <div
                    key={subcategory.id}
                    className="flex flex-row items-center justify-between py-1.5 px-1 mr-2 ml-6"
                  >
                    <div className="flex items-center">
                      <img
                        className="h-11 w-11"
                        src={subcategory.img}
                        alt={subcategory.name}
                      />
                      <div className="ml-2 flex flex-col w-full">
                        <span
                          className="font-freesans mb-2"
                          style={{ color: "#4B4B4B", fontSize: "12px" }}
                        >
                          {subcategory.name}
                        </span>
                        <span
                          className="font-freesans"
                          style={{ color: "#8E8E8E", fontSize: "10px" }}
                        >
                          ₹{subcategory.price}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center flex-row">
                      <input
                        style={{
                          appearance: "none",
                          display: "none",
                        }}
                        checked={subcategoryChecked}
                        onChange={() =>
                          setSubcategoryChecked(!subcategoryChecked)
                        }
                        id={`subcategory-checkbox-${subcategory.id}`}
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
                        htmlFor={`subcategory-checkbox-${subcategory.id}`}
                        className="ml-1.5 text-sm font-medium cursor-pointer"
                      >
                        <span
                          style={{
                            width: "14px",
                            height: "14px",
                            borderRadius: "4px",
                            border: subcategoryChecked
                              ? "2px solid #3B82F6"
                              : "2px solid #D1D5DB",
                            backgroundColor: subcategoryChecked
                              ? "white"
                              : "transparent",
                            marginRight: "8px",
                            display: "inline-block",
                          }}
                        ></span>
                        {subcategoryChecked && (
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
            ))}
          </div>

          <div
            style={{
              padding: "16px 16px 0px 16px",
              position: "sticky",
              bottom: 0,
              background: "white",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <button
              className="cursor-pointer w-[65%] mb-3"
              style={{
                backgroundColor: "#ffffff",
                color: "#4162FF",
                border: "1px solid #4162FF ",
                padding: "9px 12px",
                borderRadius: "4px",
                fontSize: "12px",
              }}
            >
              Add New Category or Subcategory{" "}
            </button>

            <button
              className="cursor-pointer"
              style={{
                backgroundColor: "#4162FF",
                color: "#ffffff",
                padding: "8px 26px",
                borderRadius: "4px",
                fontSize: "12px",
              }}
            >
              Select{" "}
            </button>
          </div>
        </div>

        <style>
          {`
            /* Hide scrollbar for Chrome, Safari, and Edge */
            .max-h-60::-webkit-scrollbar {
              display: none;
            }
          `}
        </style>
      </div>
    </div>
  );
}
