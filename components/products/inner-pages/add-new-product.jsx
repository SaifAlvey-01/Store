import React, { useState } from "react";

export default function AddNewProduct() {
  return (
    <div
      className="min-h-[calc(100vh-180px)] sm:min-h-[calc(100% - 100px)] overflow-y-auto flex flex-col items-center justify-between p-3"
      style={{
        backgroundColor: "var(--white-color, #FFF)",
        borderRadius: "10px",
        boxShadow: `#00000011 0px 2px 4px 2px`,
      }}
    >
      <div className="flex flex-col md:flex-row w-full items-stretch justify-between">
        <div
          className="w-full md:w-[60%] h-auto text-white p-1 md:p-3 mr-0 md:mr-2 mb-4 md:mb-0"
          style={{
            borderRadius: "10px",
            backgroundColor: "var(--white-color, #FFF)",
            boxSizing: "border-box",
          }}
        >
          {" "}
          <div
            className="p-4"
            style={{
              borderRadius: "10px",
              backgroundColor: "var(--white-color, #FFF)",
              border: "1px solid #e3e3e3",
            }}
          >
            {" "}
            <h3
              className="m-0 font-freesans"
              style={{
                color: "#4B4B4B",
                fontWeight: 500,
                fontSize: "14px",
              }}
            >
              Product Media{" "}
            </h3>
            <div className="flex items-center mt-6">
              {" "}
              <div className="bg-[#E1E1E1] rounded-[8px] mr-4 w-14 h-14 flex items-center justify-center p-2.5">
                <img
                  src={"/gallery.png"}
                  // alt={`Description for ${item.title}`}
                  className="w-7 h-7 object-contain"
                />
              </div>
              <div className="flex flex-col">
                {" "}
                <button
                  className="cursor-pointer"
                  style={{
                    backgroundColor: "#4162FF",
                    color: "#ffffff",
                    padding: "6px 12px",
                    borderRadius: "4px",
                    width: "70%",
                    fontSize: "12px",
                  }}
                >
                  Add Image or Video{" "}
                </button>
                <p
                  style={{ color: "#8E8E8E", fontSize: "12px" }}
                  className="m-0 mt-2"
                >
                  Recommended size (1000 * 1248 px){" "}
                </p>
              </div>
            </div>
          </div>
          <div
            className="p-4 mt-6"
            style={{
              borderRadius: "10px",
              backgroundColor: "var(--white-color, #FFF)",
              border: "1px solid #e3e3e3",
            }}
          >
            <div
              className="pb-2"
              style={{
                borderBottom: "1px solid #E5E7EB",
              }}
            >
              <span
                className="font-roboto"
                style={{
                  color: "#4B4B4B",
                  fontWeight: 400,
                  fontSize: "12px",
                }}
              >
                Product Information
              </span>
            </div>
            <div className="mt-6">
              <span
                className="font-freesans"
                style={{
                  color: "#4B4B4B",
                  fontWeight: 500,
                  fontSize: "13px",
                }}
              >
                Product Name{" "}
                <span
                  style={{
                    color: "#FF3A3A",
                    fontSize: "14px",
                    fontWeight: "bold",
                  }}
                >
                  *
                </span>
              </span>
              <input
                className="bg-[#FFF] text-gray-900 text-sm rounded-[10px] block w-full px-4 py-2.5 mt-1 placeholder-gray-300  focus:outline-none"
                style={{
                  border: "1.5px solid #E5E7EB",
                  boxSizing: "border-box",
                }}
                onFocus={(e) => (e.target.style.borderColor = "#bdbfc0")}
                onBlur={(e) => (e.target.style.borderColor = "#E5E7EB")}
                placeholder="Enter Product Name"
                required
              />
            </div>
            <div className="mt-4">
              <span
                className="font-freesans"
                style={{
                  color: "#4B4B4B",
                  fontWeight: 500,
                  fontSize: "13px",
                }}
              >
                Product Category{" "}
                <span
                  style={{
                    color: "#FF3A3A",
                    fontSize: "14px",
                    fontWeight: "bold",
                  }}
                >
                  *
                </span>
              </span>
              <input
                className="bg-[#FFF] text-gray-900 text-sm rounded-[10px] block w-full px-4 py-2.5 mt-1 placeholder-gray-300  focus:outline-none"
                style={{
                  border: "1.5px solid #E5E7EB",
                  boxSizing: "border-box",
                }}
                onFocus={(e) => (e.target.style.borderColor = "#bdbfc0")}
                onBlur={(e) => (e.target.style.borderColor = "#E5E7EB")}
                placeholder="Enter Category"
                required
              />
            </div>

            <div className="flex space-x-4 mt-4">
              <div className="w-1/2">
                <span
                  className="font-freesans"
                  style={{
                    color: "#4B4B4B",
                    fontWeight: 500,
                    fontSize: "13px",
                  }}
                >
                  Price{" "}
                  <span
                    style={{
                      color: "#FF3A3A",
                      fontSize: "14px",
                      fontWeight: "bold",
                    }}
                  >
                    *
                  </span>
                </span>
                <input
                  className="bg-[#FFF] text-gray-900 text-sm rounded-[10px] block w-full px-4 py-2.5 mt-1 placeholder-gray-300 focus:outline-none"
                  style={{
                    border: "1.5px solid #E5E7EB",
                    boxSizing: "border-box",
                  }}
                  onFocus={(e) => (e.target.style.borderColor = "#bdbfc0")}
                  onBlur={(e) => (e.target.style.borderColor = "#E5E7EB")}
                  placeholder="Enter Price"
                  required
                />
              </div>

              <div className="w-1/2">
                <span
                  className="font-freesans"
                  style={{
                    color: "#4B4B4B",
                    fontWeight: 500,
                    fontSize: "13px",
                  }}
                >
                  Discounted Price{" "}
                </span>
                <input
                  className="bg-[#FFF] text-gray-900 text-sm rounded-[10px] block w-full px-4 py-2.5 mt-1 placeholder-gray-300 focus:outline-none"
                  style={{
                    border: "1.5px solid #E5E7EB",
                    boxSizing: "border-box",
                  }}
                  onFocus={(e) => (e.target.style.borderColor = "#bdbfc0")}
                  onBlur={(e) => (e.target.style.borderColor = "#E5E7EB")}
                  placeholder="Enter Discounted Price"
                  required
                />
              </div>
            </div>

            <div className="w-[60%] mt-4">
              <span
                className="font-freesans"
                style={{ color: "#4B4B4B", fontWeight: 500, fontSize: "13px" }}
              >
                Product Unit{" "}
                <span
                  style={{
                    color: "#FF3A3A",
                    fontSize: "14px",
                    fontWeight: "bold",
                  }}
                >
                  *
                </span>
              </span>
              <div className="relative mt-1 flex flex-row items-center">
                <div
                  className="flex-grow relative border rounded-[10px] focus-within:border-bdbfc0"
                  style={{
                    border: "1.5px solid #E5E7EB",
                    boxSizing: "border-box",
                  }}
                >
                  <input
                    className="bg-[#FFF] text-gray-900 text-sm rounded-[10px] rounded-r-none block pl-4 pr-0 py-2.5 placeholder-gray-300 focus:outline-none"
                    style={{
                      border: "none",
                      // paddingRight: "40px", // compensate for the dropdown arrow
                    }}
                    onFocus={(e) => (e.target.style.borderColor = "#bdbfc0")}
                    onBlur={(e) => (e.target.style.borderColor = "#E5E7EB")}
                    placeholder="Enter Price"
                    required
                  />
                  <select
                    className="text-sm absolute top-0 right-0 h-full bg-transparent border-0 rounded-r-[10px] focus:outline-none"
                    style={{
                      boxSizing: "border-box",
                      appearance: "none",
                      background: `url('/arrow-down.png') no-repeat right 0.5rem center/16px 16px`,
                      paddingRight: "30px",
                      borderRight: "1.5px solid #E5E7EB",
                    }}
                  >
                    <option
                      style={{
                        color: "#8E8E8E",
                        fontWeight: 400,
                        fontSize: "12px",
                      }}
                      value="Per Piece"
                    >
                      Per Piece
                    </option>
                  </select>
                </div>
                <span
                  className="font-freesans ml-3"
                  style={{
                    color: "#8E8E8E",
                    fontWeight: 400,
                    fontSize: "12px",
                  }}
                >
                  Per Piece
                </span>
              </div>
            </div>
          </div>
        </div>
        <div
          className="w-full md:w-[40%] h-auto text-white p-1 md:p-3"
          style={{
            borderRadius: "10px",
            backgroundColor: "var(--white-color, #FFF)",
          }}
        >
          {" "}
          <div
            className="p-4"
            style={{
              borderRadius: "10px",
              backgroundColor: "var(--white-color, #FFF)",
              border: "1px solid #e3e3e3",
            }}
          >
            {" "}
            <h3
              className="m-0 font-freesans"
              style={{
                color: "#4B4B4B",
                fontWeight: 500,
                fontSize: "14px",
              }}
            >
              Inventory{" "}
            </h3>
            <div className="mt-4">
              <span
                className="font-freesans"
                style={{
                  color: "#4B4B4B",
                  fontWeight: 500,
                  fontSize: "13px",
                }}
              >
                Quantity{" "}
              </span>
              <input
                className="bg-[#FFF] text-gray-900 text-sm rounded-[10px] block w-full px-4 py-2.5 mt-1 placeholder-gray-300  focus:outline-none"
                style={{
                  border: "1.5px solid #E5E7EB",
                  boxSizing: "border-box",
                }}
                onFocus={(e) => (e.target.style.borderColor = "#bdbfc0")}
                onBlur={(e) => (e.target.style.borderColor = "#E5E7EB")}
                placeholder="Eg. 10"
                required
              />
            </div>
            <div className="mt-4">
              <span
                className="font-freesans"
                style={{
                  color: "#4B4B4B",
                  fontWeight: 500,
                  fontSize: "13px",
                }}
              >
                SKU ID{" "}
              </span>
              <input
                className="bg-[#FFF] text-gray-900 text-sm rounded-[10px] block w-full px-4 py-2.5 mt-1 placeholder-gray-300  focus:outline-none"
                style={{
                  border: "1.5px solid #E5E7EB",
                  boxSizing: "border-box",
                }}
                onFocus={(e) => (e.target.style.borderColor = "#bdbfc0")}
                onBlur={(e) => (e.target.style.borderColor = "#E5E7EB")}
                placeholder="Eg. 100007733"
                required
              />
            </div>
          </div>
          <div
            className="p-4 mt-6"
            style={{
              borderRadius: "10px",
              backgroundColor: "var(--white-color, #FFF)",
              border: "1px solid #e3e3e3",
            }}
          >
            {" "}
            <h3
              className="m-0 font-freesans"
              style={{
                color: "#4B4B4B",
                fontWeight: 500,
                fontSize: "14px",
              }}
            >
              Shipping & Tax{" "}
            </h3>
            <div className="w-full mt-4">
              <div className="flex justify-between items-center">
                <span
                  className="font-freesans"
                  style={{
                    color: "#4B4B4B",
                    fontWeight: 500,
                    fontSize: "13px",
                  }}
                >
                  Shipment Weight
                </span>

                <span
                  className="font-freesans"
                  style={{ color: "#7A91FF", fontSize: "12px" }}
                >
                  Know how to calculate
                </span>
              </div>

              <div className="relative mt-1 flex flex-row items-center">
                <div
                  className="flex-grow relative border rounded-[10px] focus-within:border-bdbfc0"
                  style={{
                    border: "1.5px solid #E5E7EB",
                    boxSizing: "border-box",
                  }}
                >
                  <input
                    className="bg-[#FFF] text-gray-900 text-sm rounded-[10px] rounded-r-none block pl-4 pr-0 py-2.5 placeholder-gray-300 focus:outline-none"
                    style={{
                      border: "none",
                      // paddingRight: "40px", // compensate for the dropdown arrow
                    }}
                    onFocus={(e) => (e.target.style.borderColor = "#bdbfc0")}
                    onBlur={(e) => (e.target.style.borderColor = "#E5E7EB")}
                    placeholder="Eg. 1.2"
                    required
                  />
                  <select
                    className="text-sm absolute top-0 right-0 h-full bg-transparent border-0 rounded-r-[10px] focus:outline-none"
                    style={{
                      boxSizing: "border-box",
                      appearance: "none",
                      background: `url('/arrow-down.png') no-repeat right 0.5rem center/16px 16px`,
                      paddingRight: "30px",
                    }}
                  >
                    <option
                      style={{
                        color: "#8E8E8E",
                        fontWeight: 400,
                        fontSize: "12px",
                      }}
                      value="Per Piece"
                    >
                      kg{" "}
                    </option>
                  </select>
                </div>
              </div>
            </div>
            <div className="mt-4">
              <span
                className="font-freesans"
                style={{
                  color: "#4B4B4B",
                  fontWeight: 500,
                  fontSize: "13px",
                }}
              >
                HSN Code{" "}
              </span>
              <input
                className="bg-[#FFF] text-gray-900 text-sm rounded-[10px] block w-full px-4 py-2.5 mt-1 placeholder-gray-300  focus:outline-none"
                style={{
                  border: "1.5px solid #E5E7EB",
                  boxSizing: "border-box",
                }}
                onFocus={(e) => (e.target.style.borderColor = "#bdbfc0")}
                onBlur={(e) => (e.target.style.borderColor = "#E5E7EB")}
                placeholder="Enter HSN Code"
                required
              />

              <div className="flex mt-1">
                <span
                  className="font-freesans mr-1"
                  style={{
                    color: "#8E8E8E",
                    fontSize: "12px",
                  }}
                >
                  Not sure about the code?{" "}
                </span>

                <span
                  className="font-freesans"
                  style={{
                    color: "#7A91FF",
                    fontSize: "12px",
                  }}
                >
                  Search here{" "}
                </span>
              </div>
            </div>
            <div className="mt-4">
              <span
                className="font-freesans"
                style={{
                  color: "#4B4B4B",
                  fontWeight: 500,
                  fontSize: "13px",
                }}
              >
                GST{" "}
              </span>
              <input
                className="bg-[#FFF] text-gray-900 text-sm rounded-[10px] block w-full px-4 py-2.5 mt-1 placeholder-gray-300  focus:outline-none"
                style={{
                  border: "1.5px solid #E5E7EB",
                  boxSizing: "border-box",
                }}
                onFocus={(e) => (e.target.style.borderColor = "#bdbfc0")}
                onBlur={(e) => (e.target.style.borderColor = "#E5E7EB")}
                placeholder="Enter GST Percentage"
                required
              />

              <div className="flex mt-1">
                <span
                  className="font-freesans mr-1"
                  style={{
                    color: "#8E8E8E",
                    fontSize: "12px",
                  }}
                >
                  Setup GST in store settings to enter GSTpercentage{" "}
                </span>

                <span
                  className="font-freesans"
                  style={{
                    color: "#7A91FF",
                    fontSize: "12px",
                  }}
                >
                  Set up GST{" "}
                </span>
              </div>
            </div>
          </div>
          <div
            className="p-4 mt-6"
            style={{
              borderRadius: "10px",
              backgroundColor: "var(--white-color, #FFF)",
              border: "1px solid #e3e3e3",
            }}
          >
            {" "}
            <div className="font-freesans flex flex-col items-start justify-start">
              <span
                className="font-freesans mb-2"
                style={{
                  color: "#4B4B4B",
                  fontWeight: 500,
                  fontSize: "14px",
                }}
              >
                Variants{" "}
              </span>
              <span
                className="m-0 font-freesans"
                style={{
                  color: "#8E8E8E",
                  fontWeight: 400,
                  fontSize: "12px",
                }}
              >
                Add variants like size, color, etc to the product.
              </span>
            </div>
            <div className="flex flex-row items-center justify-center mt-6">
              {" "}
              <button
                className=" cursor-pointer ml-4"
                style={{
                  backgroundColor: "#ffffff",
                  color: "#4162FF",
                  padding: "8px 24px",
                  borderRadius: "4px",
                  border: "1px dashed #4162FF",
                }}
              >
                Add Variants{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
