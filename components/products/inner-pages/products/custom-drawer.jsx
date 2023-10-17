import { useEffect, useRef, useState } from "react";

export default function CustomDrawer({
  showSidebar,
  setShowSidebar,
  contentType,
}) {
  const sidebarRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setShowSidebar(false);
      }
    }

    // Add event listener to detect clicks outside the sidebar/drawer
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup the event listener on component unmount
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
          {contentType === "add" && (
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
              <button
                className=" cursor-pointer mt-5"
                style={{
                  backgroundColor: "#ffffff",
                  color: "#4162FF",
                  padding: "8px 24px",
                  borderRadius: "4px",
                  border: "1px dashed #4162FF",
                }}
              >
                Add Another Option{" "}
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
                  Page URL{" "}
                </span>
                <input
                  className="bg-[#FFF] text-gray-900 text-sm rounded-[10px] block w-full px-4 py-2.5 mt-1 placeholder-gray-300  focus:outline-none"
                  style={{
                    border: "1.5px solid #E5E7EB",
                    boxSizing: "border-box",
                  }}
                  onFocus={(e) => (e.target.style.borderColor = "#bdbfc0")}
                  onBlur={(e) => (e.target.style.borderColor = "#E5E7EB")}
                  placeholder="launchmystore.io/product/shoes001/"
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
                  rows="10" // Adjust the number of rows as desired
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
              {contentType === "add" && (
                <button className="bg-blue-600 text-white px-4 py-2 rounded cursor-pointer">
                  Add Variant{" "}
                </button>
              )}
              {contentType === "edit" && (
                <button className="bg-blue-600 text-white px-6 py-2 rounded cursor-pointer">
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
