import React, { useState, useRef } from "react";
import CustomDrawer from "../../../drawer-contents/custom-drawer";
import { CustomEditor } from "../../../TinyMCE";
import UnitSelect from "../../../dropdown-selects/unit-select";
import TagSelect from "../../../dropdown-selects/tag-select";

const variantData = [
  {
    image: "/gallery.png",
    title: "Small",
    description: "In stock",
  },
  {
    image: "/gallery.png",
    title: "Small",
    description: "In stock",
  },
  //... add more variants as needed
];

const modules = {
  toolbar: [
    [{ size: [] }],
    ["bold", "italic", "background", "link", "image", "blockquote"],
  ],
  clipboard: {
    matchVisual: false,
  },
};

export default function EditProduct() {
  const [content, setContent] = useState("");
  const [showSidebar, setShowSidebar] = useState(false);
  const [contentType, setContentType] = useState("");

  const handleQuillChange = (value) => {
    setContent(value);
  };

  const handleTagChange = (selectedOption) => {
    console.log(`Selected: ${selectedOption.value}`);
  };

  const handleUnitChange = (selectedOption) => {
    console.log(`Selected: ${selectedOption.value}`);
  };

  const customCss = `
        .tox .tox-notification {
          display: none !important;
        }
      `;
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
          className="w-full md:w-[60%] h-auto  p-1 md:p-3 mr-0 md:mr-2 mb-4 md:mb-0"
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
              <div className="bg-[#E1E1E1] rounded-[8px] mr-4 w-20 h-20 flex items-center justify-center overflow-hidden">
                <img
                  src={"/product1.png"}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col">
                {" "}
                <button
                  className="cursor-pointer w-[80%] md:w-[70%]"
                  style={{
                    backgroundColor: "#4162FF",
                    color: "#ffffff",
                    padding: "8px 12px",
                    borderRadius: "4px",
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
              className="pb-3"
              style={{
                borderBottom: "1px solid #E5E7EB",
              }}
            >
              <span
                className="font-roboto"
                style={{
                  color: "#4B4B4B",
                  fontWeight: 400,
                  fontSize: "13px",
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
                style={{
                  color: "#4B4B4B",
                  fontWeight: 500,
                  fontSize: "13px",
                }}
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

              <div className="flex mt-1 items-center">
                <div
                  className="relative flex-grow flex items-center border rounded-[10px] focus-within:border-bdbfc0"
                  style={{
                    border: "1.5px solid #E5E7EB",
                    boxSizing: "border-box",
                  }}
                >
                  <input
                    className="bg-[#FFF] text-gray-900 text-sm flex-grow rounded-[10px] block pl-4 py-2.5 placeholder-gray-300 focus:outline-none"
                    onFocus={(e) => (e.target.style.borderColor = "#bdbfc0")}
                    onBlur={(e) => (e.target.style.borderColor = "#E5E7EB")}
                    placeholder="Enter Price"
                    required
                    style={{
                      border: "none",
                      flex: "1", // Ensures input takes up available space
                    }}
                  />

                  <div className="absolute right-2 top-1/2 transform -translate-y-1/2">
                    <UnitSelect onChange={handleUnitChange} />
                  </div>
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
          {/* editor   */}
          <div className="px-0 py-4 mt-3 ">
            <CustomEditor />
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

              <div className="flex mt-1 items-center">
                <div
                  className="relative flex-grow flex items-center border rounded-[10px] focus-within:border-bdbfc0"
                  style={{
                    border: "1.5px solid #E5E7EB",
                    boxSizing: "border-box",
                  }}
                >
                  <input
                    className="bg-[#FFF] text-gray-900 text-sm flex-grow rounded-[10px] block pl-4 py-2.5 placeholder-gray-300 focus:outline-none"
                    onFocus={(e) => (e.target.style.borderColor = "#bdbfc0")}
                    onBlur={(e) => (e.target.style.borderColor = "#E5E7EB")}
                    placeholder="Enter Price"
                    required
                    style={{
                      border: "none",
                      flex: "1",
                    }}
                  />

                  <div className="absolute right-2 top-1/2 transform -translate-y-1/2">
                    <UnitSelect onChange={handleUnitChange} />
                  </div>
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
            <div className="font-freesans flex flex-row items-center justify-between">
              <div className="font-freesans flex flex-col items-start justify-start w-[50%]">
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
                    width: "80%",
                  }}
                >
                  Add variants like size, color, etc to the product.
                </span>
              </div>{" "}
              <button
                className=" cursor-pointer"
                style={{
                  backgroundColor: "#ffffff",
                  color: "#4162FF",
                  padding: "8px 18px",
                  borderRadius: "4px",
                  border: "1px dashed #4162FF",
                }}
                onClick={() => {
                  setShowSidebar(true);
                  setContentType("add-variant");
                }}
              >
                Add Variants{" "}
              </button>
            </div>
            <div className="flex flex-col mt-6">
              {variantData.map((item, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center mb-6"
                >
                  <div className="flex items-center">
                    {" "}
                    <div className="bg-[#E1E1E1] rounded-[8px] mr-2.5 w-10 h-10 flex items-center justify-center p-2.5">
                      <img
                        src={item.image}
                        alt={`Description for ${item.title}`}
                        className="w-7 h-7 object-contain"
                      />
                    </div>
                    <div className="flex flex-col">
                      {" "}
                      <span
                        className="mb-1"
                        style={{ color: "#4B4B4B", fontSize: "14px" }}
                      >
                        {item.title}
                      </span>
                      <p
                        style={{ color: "#04B000", fontSize: "14px" }}
                        className="m-0"
                      >
                        {item.description}
                      </p>
                    </div>
                  </div>
                  <div
                    onClick={() => {
                      setShowSidebar(true);
                      setContentType("edit-product-variant");
                    }}
                    style={{
                      borderRadius: "6px",
                      border: "1px dashed #7A91FF",
                      background: "#FFF",
                      width: "30px",
                      height: "30px",
                      cursor: "pointer",
                    }}
                    className="flex justify-center items-center"
                  >
                    <img
                      src="/edit-blue.png"
                      alt="Description"
                      className="max-h-full max-w-full"
                    />
                  </div>
                </div>
              ))}
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
                className="font-freesans mb-1"
                style={{
                  color: "#4B4B4B",
                  fontWeight: 500,
                  fontSize: "14px",
                }}
              >
                Additional Information{" "}
              </span>
              <span
                className="m-0 font-freesans"
                style={{
                  color: "#8E8E8E",
                  fontWeight: 400,
                  fontSize: "12px",
                }}
              >
                Add tags to the products.{" "}
              </span>
            </div>
            <div className="w-full mt-6">
              <div className="flex justify-between items-center mb-2">
                <span
                  className="font-freesans"
                  style={{
                    color: "#4B4B4B",
                    fontWeight: 500,
                    fontSize: "13px",
                  }}
                >
                  Tags{" "}
                </span>

                <span
                  className="font-freesans"
                  style={{ color: "#7A91FF", fontSize: "12px" }}
                >
                  Manage{" "}
                </span>
              </div>
              <TagSelect onChange={handleTagChange} />
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
            <div className="font-freesans flex flex-col items-start justify-start">
              <span
                className="font-freesans mb-2"
                style={{
                  color: "#4B4B4B",
                  fontWeight: 500,
                  fontSize: "14px",
                }}
              >
                Google Search Preview
              </span>
            </div>
            <div className="flex justify-between items-start mt-4">
              {/* Left Div with Product Name, Description, and URL */}
              <div className="flex flex-col pr-4">
                <span
                  className="font-freesans mb-1"
                  style={{
                    fontWeight: 500,
                    color: "#4162FF",
                    fontSize: "16px",
                  }}
                >
                  Shoes 003{" "}
                </span>
                <span
                  style={{ color: "#4B4B4B", fontSize: "13px" }}
                  className="font-freesans mb-1"
                >
                  Description Area
                </span>
                <span
                  style={{ color: "#169C00", fontSize: "13px" }}
                  className="font-freesans"
                >
                  launchmystore.io/product/shoes001/
                </span>
              </div>

              <div className="flex-grow"></div>

              <div className="flex-none">
                <img src="/product1.png" alt="Product" className="w-14 h-14" />
              </div>
            </div>

            <div className="flex flex-row items-center justify-center mt-6">
              <button
                className=" cursor-pointer ml-4"
                style={{
                  backgroundColor: "#ffffff",
                  color: "#4162FF",
                  padding: "8px 24px",
                  borderRadius: "4px",
                  border: "1px dashed #4162FF",
                }}
                onClick={() => {
                  setShowSidebar(true);
                  setContentType("edit-variant");
                }}
              >
                Edit Variant{" "}
              </button>
            </div>
          </div>
        </div>
      </div>

      <CustomDrawer
        key={contentType}
        showSidebar={showSidebar}
        setShowSidebar={setShowSidebar}
        contentType={contentType}
      />
    </div>
  );
}
