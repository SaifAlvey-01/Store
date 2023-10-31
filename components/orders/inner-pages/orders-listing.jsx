import React, { useState, useRef, useEffect } from "react";
import Pagination from "../../pagination";
import OrdersToolBar from "./orders-tool-bar";

const headers = [
  { title: "Order ID" },
  { title: "Date" },
  { title: "Customer" },
  { title: "Items" },
  { title: "Payment" },
  { title: "Status" },
  { title: "Amount" },
];

const data = [
  {
    image: "/solar.png",
    orderNumber: "#99441033",
    description: "Order description",
    date: "Mar 03, Fri - 01:30PM",
    customer: "John Doe",
    items: "01",
    payment: "COD",
    status: "Rejected",
    amount: "₹5,333",
  },
  {
    image: "/solar.png",
    orderNumber: "#99441033",
    description: "Order description",
    date: "Mar 03, Fri - 01:30PM",
    customer: "John Doe",
    items: "03",
    payment: "Paid",
    status: "Shipped",
    amount: "₹5,333",
  },
  {
    image: "/solar.png",
    orderNumber: "#99441033",
    description: "Order description",
    date: "Mar 03, Fri - 01:30PM",
    customer: "John Doe",
    items: "05",
    payment: "Paid",
    status: "Delivered",
    amount: "₹5,333",
  },
  {
    image: "/solar.png",
    orderNumber: "#99441033",
    description: "Order description",
    date: "Mar 03, Fri - 01:30PM",
    customer: "John Doe",
    items: "08",
    payment: "Paid",
    status: "Shipped",
    amount: "₹5,333",
  },
  {
    image: "/solar.png",
    orderNumber: "#99441033",
    description: "Order description",
    date: "Mar 03, Fri - 01:30PM",
    customer: "John Doe",
    items: "09",
    payment: "COD",
    status: "Failed",
    amount: "₹5,333",
  },
  {
    image: "/solar.png",
    orderNumber: "#99441033",
    description: "Order description",
    date: "Mar 03, Fri - 01:30PM",
    customer: "John Doe",
    items: "06",
    payment: "COD",
    status: "Delivered",
    amount: "₹5,333",
  },
  {
    image: "/solar.png",
    orderNumber: "#99441033",
    description: "Order description",
    date: "Mar 03, Fri - 01:30PM",
    customer: "John Doe",
    items: "08",
    payment: "COD",
    status: "Pending",
    amount: "₹5,333",
  },
  {
    image: "/solar.png",
    orderNumber: "#99441033",
    description: "Order description",
    date: "Mar 03, Fri - 01:30PM",
    customer: "John Doe",
    items: "04",
    payment: "Paid",
    status: "Pending",
    amount: "₹5,333",
  },
];

export default function OrderListing({ onEditClick }) {
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

  function getStatusBackgroundColor(status) {
    switch (status) {
      case "Rejected":
        return "#FFE4E4";
      case "Shipped":
        return "#FFF6DD";
      case "Delivered":
        return "#ECFDF3";
      case "Failed":
        return "#F5F5F5";
      case "Pending":
        return "#ECEFFF";
      default:
        return "#ECEFFF";
    }
  }

  function getStatusColor(status) {
    switch (status) {
      case "Rejected":
        return "#FF4A4A";
      case "Shipped":
        return "#F2B500";
      case "Delivered":
        return "#47B263";
      case "Failed":
        return "#4B4B4B";
      case "Pending":
        return "#4162FF";
      default:
        return "#4162FF";
    }
  }

  function getStatusTextColor(status) {
    switch (status) {
      case "Rejected":
        return "#FF4A4A";
      case "Shipped":
        return "#F2B500";
      case "Delivered":
        return "#47B263";
      case "Failed":
        return "#4B4B4B";
      case "Pending":
        return "#4162FF";
      default:
        return "#4162FF";
    }
  }

  return (
    <div className="flex justify-between items-center mt-2 px-5 h-full">
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
            <th
              colSpan={headers.length}
              style={{ borderBottom: "1px solid #EAECF0" }}
            >
              <div className="flex justify-center w-full">
                <OrdersToolBar />
              </div>
            </th>
          </tr>
          <tr>
            {headers.map((header, idx) => (
              <th
                key={idx}
                className="py-3 px-4 bg-f9fafb text-start font-freesans"
                style={{
                  borderBottom: "1px solid #EAECF0",
                  backgroundColor: "#F9FAFB",
                  color: "#1D2939",
                  fontSize: "12px",
                }}
              >
                <div className="flex flex-row items-center">
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
              <td style={{ borderBottom: "1px solid #EAECF0" }} className="p-3">
                <div className="flex items-center">
                  <div
                    style={{ backgroundColor: "#F3F5FF" }}
                    className="rounded-[50px] mr-3 w-8 h-8 flex justify-center items-center"
                  >
                    <div className="flex flex-row justify-center items-center p-1.5">
                      <img
                        src={row.image}
                        alt={`Description for ${row.orderNumber}`}
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
                  </div>
                  <span style={{ color: "#4B4B4B", fontSize: "13px" }}>
                    {row.orderNumber}
                  </span>
                </div>
              </td>
              <td
                style={{
                  borderBottom: "1px solid #EAECF0",
                  color: "#8E8E8E",
                  fontSize: "13px",
                }}
                className="p-3"
              >
                {row.date}
              </td>
              <td
                style={{
                  borderBottom: "1px solid #EAECF0",
                  color: "#8E8E8E",
                  fontSize: "13px",
                }}
                className="p-3"
              >
                {row.customer}
              </td>
              <td
                style={{
                  borderBottom: "1px solid #EAECF0",
                  color: "#8E8E8E",
                  fontSize: "13px",
                }}
                className="p-5"
              >
                {row.items}
              </td>
              <td style={{ borderBottom: "1px solid #EAECF0" }} className="p-3">
                <div
                  className="flex items-center justify-center p-1.5 w-full md:w-[70%]"
                  style={{
                    borderRadius: "16px",
                    background: row.payment === "COD" ? "#FFF6DD" : "#ECFDF3",
                  }}
                >
                  <span
                    style={{
                      color: row.payment === "COD" ? "#F2B500" : "#47B263",
                      fontSize: "13px",
                    }}
                  >
                    {row.payment}
                  </span>
                </div>
              </td>
              <td style={{ borderBottom: "1px solid #EAECF0" }} className="p-3">
                <div
                  className="flex items-center justify-center p-1.5 w-full md:w-[70%]"
                  style={{
                    borderRadius: "16px",
                    background: getStatusBackgroundColor(row.status),
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="8"
                    height="8"
                    viewBox="0 0 8 8"
                    fill="none"
                    style={{ flexShrink: 0 }}
                  >
                    <circle
                      cx="4"
                      cy="4"
                      r="3"
                      fill={getStatusColor(row.status)}
                    />
                  </svg>

                  <span
                    style={{
                      marginLeft: "5px",
                      color: getStatusTextColor(row.status),
                      fontSize: "13px",
                    }}
                  >
                    {row.status}
                  </span>
                </div>
              </td>

              <td
                style={{
                  borderBottom: "1px solid #EAECF0",
                  color: "#4B4B4B",
                  fontSize: "13px",
                }}
                className="p-4"
              >
                {row.amount}
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
