import React, { useState, useEffect, useRef } from "react";

const tabs = [
  "All (07)",
  "Pending (07)",
  "Accepted (07)",
  "Shipped (07)",
  "Delivered (07)",
  "Other (42)",
];

const OtherTabValues = [
  { title: "Modified", count: "07" },
  { title: "Cancelled", count: "07" },
  { title: "Returned", count: "07" },
  { title: "Failed", count: "07" },
  { title: "Cancelled", count: "07" },
  { title: "Returned", count: "07" },
  { title: "Failed", count: "07" },
];

export default function OrdersFilterBar({ setShowCreateOrder }) {
  const [activeTab, setActiveTab] = useState(0);
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [isDownloadDropdownVisible, setDownloadDropdownVisible] =
    useState(false);
  const downloadRef = useRef(null);
  const otherTabRef = useRef(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleDocumentClick(event) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        !otherTabRef.current.contains(event.target) &&
        downloadRef.current &&
        !downloadRef.current.contains(event.target)
      ) {
        setDropdownVisible(false);
        setDownloadDropdownVisible(false);
      }
    }

    document.addEventListener("mousedown", handleDocumentClick);
    return () => {
      document.removeEventListener("mousedown", handleDocumentClick);
    };
  }, []);

  return (
    <div className="flex flex-row items-center justify-between px-8 py-6 w-full box-border">
      <div
        style={{ borderBottom: "2px solid #E5E7EB" }}
        className="flex justify-between items-center w-[64%] lg:w-[70%] border-b border-gray-200"
      >
        {/* Tabs Section */}
        <div className="flex-grow">
          {tabs.map((tabName, index) => (
            <button
              key={index}
              onClick={() => {
                setActiveTab(index);
                if (tabName === "Other (42)") {
                  setDropdownVisible(!isDropdownVisible);
                }
              }}
              className={`text-center py-2 px-4 lg:px-6 text-[14px] bg-white cursor-pointer ${
                activeTab === index
                  ? "border-b-2 border-primary-300-main text-primary-300-main font-bold"
                  : "text-neutral-500 hover:bg-gray-100"
              }`}
              ref={tabName === "Other (42)" ? otherTabRef : null} // Attach reference to the "Other (42)" tab
            >
              {tabName}
            </button>
          ))}
        </div>

        {isDropdownVisible && otherTabRef.current && (
          <div
            ref={dropdownRef}
            className="mt-2 w-64 px-3 py-1.5 bg-white rounded-md shadow-lg overflow-hidden z-50 "
            style={{
              position: "absolute",
              top:
                otherTabRef.current.offsetTop +
                otherTabRef.current.offsetHeight,
              left: otherTabRef.current.offsetLeft,
              border: "1px solid #EDEDED",
              boxShadow: "-1px 4px 4px 0px rgba(28, 28, 75, 0.08)",
              borderRadius: "12px",
              width: "120px",
              backgroundColor: "#fff",
              height: "auto",
            }}
          >
            {/* Text items */}
            {OtherTabValues.map((item, index) => (
              <div
                style={{
                  color: "#4B4B4B",
                  fontSize: "14px",
                  fontWeight: 500,
                }}
                key={index}
                className="px-2 py-4 font-freesans cursor-pointer"
              >
                {item.title}{" "}
                <span
                  style={{ fontWeight: 500, color: "#8E8E8E" }}
                >{`(${item.count})`}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="flex flex-row items-center">
        {" "}
        <div
          ref={downloadRef}
          style={{
            borderRadius: "6px",
            border: "1px dashed #7A91FF",
            background: "#FFF",
          }}
          className="px-2 py-1.5 h-6 w-6 mr-4 cursor-pointer"
          onClick={() => setDownloadDropdownVisible(!isDownloadDropdownVisible)}
        >
          <img
            src="/document-download1.png"
            alt="Description"
            className="h-6 w-6"
          />
        </div>
        {isDownloadDropdownVisible && downloadRef.current && (
          <div
            ref={dropdownRef}
            className="mt-2 px-2 py-2 w-64 bg-white rounded-md shadow-lg overflow-hidden z-50 flex flex-col items-start"
            style={{
              position: "absolute",
              top:
                downloadRef.current.offsetTop +
                downloadRef.current.offsetHeight,
              left: downloadRef.current.offsetLeft,
              border: "1px solid #DADADA",
              boxShadow: "0px 2px 16px 0px rgba(0, 0, 0, 0.10)",
              borderRadius: "8px",
              width: "200px",
              height: "auto",
            }}
          >
            <div className="flex items-center px-2 py-3">
              <div
                style={{ backgroundColor: "#ECEFFF" }}
                className="rounded-[50px] mr-4 w-8 h-8 flex justify-center items-center"
              >
                <div className="flex justify-center items-center p-1.5">
                  <img
                    src={"/pdf.png"}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              </div>
              <span
                className="font-roboto"
                style={{ color: "#8E8E8E", fontSize: "14px" }}
              >
                Download in PDF{" "}
              </span>
            </div>
            <div className="flex items-center px-2 py-3">
              <div
                style={{ backgroundColor: "#ECEFFF" }}
                className="rounded-[50px] mr-4 w-8 h-8 flex justify-center items-center"
              >
                <div className="flex justify-center items-center p-1.5">
                  <img
                    src={"/docx.png"}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              </div>
              <span
                className="font-roboto"
                style={{ color: "#8E8E8E", fontSize: "14px" }}
              >
                Download in XLSL{" "}
              </span>
            </div>{" "}
          </div>
        )}
        <button
          onClick={() => setShowCreateOrder(true)}
          style={{
            borderRadius: "6px",
            border: "1px solid #D0D5DD",
            fontSize: "14px",
            color: "#ffffff",
            backgroundColor: "#4162ff",
          }}
          className="flex cursor-pointer items-center px-1.5 md:px-9 py-2.5 hover:bg-gray-300"
        >
          Create Order{" "}
        </button>
      </div>
    </div>
  );
}
