import React, { useState, useRef, useEffect } from "react";

const headers = [
  { title: "Refferal ID" },
  { title: "Refferal Names" },
  { title: "Refferal Email" },
  { title: "Status" },
  { title: "Commission" },
];

const data = [
  {
    refferalNumber: "1033",
    name: "John Doe",
    email: "johndoe@gmail.com",
    status: "Subscribed",
    commission: "5",
  },
  {
    refferalNumber: "1033",
    name: "John Doe",
    email: "johndoe@gmail.com",
    status: "Subscribed",
    commission: "5",
  },
  {
    refferalNumber: "1033",
    name: "John Doe",
    email: "johndoe@gmail.com",
    status: "UnSubscribed",
    commission: "5",
  },
];

export default function RefferalListing({
  showOrderDetails,
  setShowOrderDetails,
  setSelectedOrder,
}) {
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
      case "Subscribed":
        return "#e9f2ff";
      default:
        return "#ECEFFF";
    }
  }

  function getStatusColor(status) {
    switch (status) {
      case "Subscribed":
        return "#4162ff";
      default:
        return "#4162FF";
    }
  }

  function getStatusTextColor(status) {
    switch (status) {
      case "Subscribed":
        return "#FF4A4A";
      default:
        return "#4162FF";
    }
  }


  return (
    <div className="flex justify-between items-center mt-2 px-5 h-full">
      <table
        className="w-full h-full table-fa-stripe font-freesans"
        style={{
          border: "1px solid #EAECF0",
          borderRadius: "18px",
          borderCollapse: "separate",
        }}
      >
        <thead>
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
                <div className="flex flex-row">
                  {header.title}
                  <img className="ml-2" src={"/sort.png"} width="16" />
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white">
          {data.map((row, index) => (
            <tr
              key={index}
              className="h-auto cursor-pointer"
            >
              <td
                style={{ borderBottom: "1px solid #EAECF0", cursor: "pointer" }}
                className="p-3"
              >
                <div className="flex items-center">
                  <span style={{ color: "#4B4B4B", fontSize: "13px" }}>
                    {row.refferalNumber}
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
                {row.name}
              </td>
              <td
                style={{
                  borderBottom: "1px solid #EAECF0",
                  color: "#8E8E8E",
                  fontSize: "13px",
                }}
                className="p-5"
              >
                {row.email}
              </td>
              <td style={{ borderBottom: "1px solid #EAECF0" }} className="">
                <div
                  className="flex items-center justify-center p-1.5 mx-5 w-[70%]"
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
                  color: "#0c9d61",
                  fontSize: "13px",
                }}
                className="p-4 w-[100px]"
              >
                ${row.commission}
              </td>

            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
