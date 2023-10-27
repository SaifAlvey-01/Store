import { useEffect, useRef, useState } from "react";
import UnitSelect from "./unit-select";

export default function CustomDrawer({
  showSidebar,
  setShowSidebar,
  contentType,
}) {
  const sidebarRef = useRef(null);

  const handleUnitChange = (selectedOption) => {
    console.log(`Selected: ${selectedOption.value}`);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setShowSidebar(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div>
      {showSidebar && (
        <div
          style={{
            boxShadow: "-2px 0px 4px 4px rgba(55, 58, 60, 0.04)",
            borderRadius: "30px 0px 0px 30px",
          }}
          className="fixed top-0 right-0 h-full w-[460px] bg-white z-50 p-4 shadow-lg"
          ref={sidebarRef}
        >
          {contentType === "add-variant" && (
            <div className="h-[820px]">
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <h3 style={{ fontSize: "18px", fontWeight: "normal" }}>
                    Add Variants
                  </h3>
                  <img
                    src="/info-circle1.png"
                    alt="Close"
                    className="cursor-pointer h-5 w-5 ml-2.5"
                  />
                </div>
                <img
                  src="/cross.png"
                  alt="Close"
                  className="cursor-pointer h-5 w-5"
                  onClick={() => setShowSidebar(false)}
                />
              </div>

              <div className="flex items-center">
                {" "}
                <div className="bg-[#E1E1E1] rounded-[8px] mr-2.5 w-10 h-10 flex items-center justify-center p-2.5">
                  <img
                    src={"/gallery.png"}
                    className="w-7 h-7 object-contain"
                  />
                </div>
                <div className="flex flex-col w-[60%]">
                  {" "}
                  <span
                    className="mb-1"
                    style={{ color: "#4B4B4B", fontSize: "14px" }}
                  >
                    Small{" "}
                  </span>
                  <p
                    style={{ color: "#04B000", fontSize: "14px" }}
                    className="m-0"
                  >
                    In stock{" "}
                  </p>
                </div>
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
                  Option Name{" "}
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
                  placeholder="Eg. Style, Material"
                  required
                />
              </div>
              <div className="relative mt-6">
                <span
                  className="font-freesans"
                  style={{
                    color: "#4B4B4B",
                    fontWeight: 500,
                    fontSize: "13px",
                  }}
                >
                  Option Value{" "}
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
                    paddingRight: "30px",
                    border: "1.5px solid #E5E7EB",
                    boxSizing: "border-box",
                  }}
                  onFocus={(e) => (e.target.style.borderColor = "#bdbfc0")}
                  onBlur={(e) => (e.target.style.borderColor = "#E5E7EB")}
                  placeholder="Enter Category"
                  required
                />
                <img
                  src="/trash.png"
                  alt="Description"
                  className="absolute right-3 top-[66%] transform -translate-y-1/2 w-4 h-4"
                />
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
                  className="bg-[#FFF] text-gray-900 text-sm rounded-[10px] block w-full px-4 py-2.5 mt-1 placeholder-gray-300  focus:outline-none"
                  style={{
                    border: "1.5px solid #E5E7EB",
                    boxSizing: "border-box",
                  }}
                  onFocus={(e) => (e.target.style.borderColor = "#bdbfc0")}
                  onBlur={(e) => (e.target.style.borderColor = "#E5E7EB")}
                  placeholder="Eg. 99"
                  required
                />
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
                  Discounted Price{" "}
                </span>
                <input
                  className="bg-[#FFF] text-gray-900 text-sm rounded-[10px] block w-full px-4 py-2.5 mt-1 placeholder-gray-300  focus:outline-none"
                  style={{
                    border: "1.5px solid #E5E7EB",
                    boxSizing: "border-box",
                  }}
                  onFocus={(e) => (e.target.style.borderColor = "#bdbfc0")}
                  onBlur={(e) => (e.target.style.borderColor = "#E5E7EB")}
                  placeholder="Eg. 99"
                  required
                />
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
                  SKU ID{" "}
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
                  placeholder="Eg. 000010023002"
                  required
                />
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

              <div className="mt-6">
                <span
                  className="font-freesans"
                  style={{
                    color: "#4B4B4B",
                    fontWeight: 500,
                    fontSize: "13px",
                  }}
                >
                  Weight{" "}
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
                      placeholder="Eg. 1.2"
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
            </div>
          )}

          {contentType === "edit-variant" && (
            <div className="h-[820px]">
              <div className="flex justify-between items-center">
                <h3 style={{ fontSize: "18px", fontWeight: "normal" }}>
                  Edit Variant
                </h3>
                <img
                  src="/cross.png"
                  alt="Close"
                  className="cursor-pointer h-5 w-5"
                  onClick={() => setShowSidebar(false)}
                />
              </div>

              <div className="flex flex-row justify-between items-center">
                <div className="flex items-center w-[calc(100%-210px)]">
                  {" "}
                  <div className="bg-[#E1E1E1] rounded-[8px] mr-2.5 w-10 h-10 flex items-center justify-center p-2.5">
                    <img
                      src={"/gallery.png"}
                      className="w-7 h-7 object-contain"
                    />
                  </div>
                  <div className="flex flex-col w-[60%]">
                    {" "}
                    <span
                      className="mb-1"
                      style={{ color: "#4B4B4B", fontSize: "14px" }}
                    >
                      Small{" "}
                    </span>
                    <p
                      style={{ color: "#04B000", fontSize: "14px" }}
                      className="m-0"
                    >
                      In stock{" "}
                    </p>
                  </div>
                </div>

                <button
                  className="cursor-pointer"
                  style={{
                    backgroundColor: "#4162FF",
                    color: "#ffffff",
                    padding: "8px 16px",
                    borderRadius: "4px",
                    fontSize: "12px",
                  }}
                >
                  Upload Photo{" "}
                </button>
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
                  Price{" "}
                </span>
                <input
                  className="bg-[#FFF] text-gray-900 text-sm rounded-[10px] block w-full px-4 py-2.5 mt-1 placeholder-gray-300  focus:outline-none"
                  style={{
                    border: "1.5px solid #E5E7EB",
                    boxSizing: "border-box",
                  }}
                  onFocus={(e) => (e.target.style.borderColor = "#bdbfc0")}
                  onBlur={(e) => (e.target.style.borderColor = "#E5E7EB")}
                  placeholder="Eg. 99"
                  required
                />
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
                  Discounted Price{" "}
                </span>
                <input
                  className="bg-[#FFF] text-gray-900 text-sm rounded-[10px] block w-full px-4 py-2.5 mt-1 placeholder-gray-300  focus:outline-none"
                  style={{
                    border: "1.5px solid #E5E7EB",
                    boxSizing: "border-box",
                  }}
                  onFocus={(e) => (e.target.style.borderColor = "#bdbfc0")}
                  onBlur={(e) => (e.target.style.borderColor = "#E5E7EB")}
                  placeholder="Eg. 99"
                  required
                />
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
                  placeholder="Eg. 000010023002"
                  required
                />
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
              <div className="mt-6">
                <span
                  className="font-freesans"
                  style={{
                    color: "#4B4B4B",
                    fontWeight: 500,
                    fontSize: "13px",
                  }}
                >
                  Weight{" "}
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
                      placeholder="Eg. 1.2"
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

              <button
                className=" cursor-pointer mt-5"
                style={{
                  backgroundColor: "#ffffff",
                  color: "#FF5353",
                  padding: "8px 22px",
                  borderRadius: "6px",
                  border: "1px dashed #FF5353",
                }}
              >
                Delete Variant{" "}
              </button>
            </div>
          )}

          {contentType === "edit" && (
            <div className="h-[820px]">
              <div className="flex justify-between items-center">
                <div className="flex flex-col items-start mt-4">
                  <h3
                    className="m-0"
                    style={{ fontSize: "17px", fontWeight: "normal" }}
                  >
                    Search Engine Listing
                  </h3>
                  <span
                    className="mt-1"
                    style={{
                      fontSize: "13px",
                      fontWeight: "normal",
                      color: "#8E8E8E",
                      maxWidth: "400px",
                    }}
                  >
                    Add title & description to see how product might appear in
                    search engine listing
                  </span>
                </div>
                <img
                  src="/cross.png"
                  alt="Close"
                  className="cursor-pointer h-5 w-5"
                  onClick={() => setShowSidebar(false)}
                />
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
                  Page Title{" "}
                </span>
                <input
                  className="bg-[#FFF] text-gray-900 text-sm rounded-[10px] block w-full px-4 py-2.5 mt-1 placeholder-gray-300  focus:outline-none"
                  style={{
                    border: "1.5px solid #E5E7EB",
                    boxSizing: "border-box",
                  }}
                  onFocus={(e) => (e.target.style.borderColor = "#bdbfc0")}
                  onBlur={(e) => (e.target.style.borderColor = "#E5E7EB")}
                  placeholder="0 - 70 characters used"
                  required
                />
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
                  Meta Description{" "}
                </span>
                <textarea
                  rows="14" // Adjust the number of rows as desired
                  className="bg-[#FFF] text-gray-900 text-sm rounded-[10px] block w-full px-4 py-2.5 mt-1 placeholder-gray-300 focus:outline-none"
                  style={{
                    border: "1.5px solid #E5E7EB",
                    boxSizing: "border-box",
                    resize: "vertical", // Allows users to adjust the height of the textarea, if desired
                  }}
                  onFocus={(e) => (e.target.style.borderColor = "#bdbfc0")}
                  onBlur={(e) => (e.target.style.borderColor = "#E5E7EB")}
                  placeholder="0 - 320 characters used"
                  required
                ></textarea>
              </div>
            </div>
          )}

          <div className="mt-4" style={{ borderTop: "1px solid #E5E7EB" }}>
            <div className="flex justify-end items-center px-0 py-4">
              {contentType === "add-variant" && (
                <button className="bg-blue-600 text-white px-5 py-2.5 rounded cursor-pointer">
                  Add Variant{" "}
                </button>
              )}

              {contentType === "edit-variant" && (
                <button className="bg-blue-600 text-white px-5 py-2.5 rounded cursor-pointer">
                  Edit Variant{" "}
                </button>
              )}
              {contentType === "edit" && (
                <button className="bg-blue-600 text-white px-7 py-2.5 rounded cursor-pointer">
                  Save{" "}
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
