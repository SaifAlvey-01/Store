import React, { useEffect } from "react";

const headers = [{ title: "Type" }, { title: "Orders" }, { title: "Amount" }];

const data = [
  {
    type: "Gross Sales",
    orders: "03",
    amount: "₹55",
  },
  {
    type: "Cancellations",
    orders: "05",
    amount: "₹55",
  },
  {
    type: "Cancellations",
    orders: "08",
    amount: "₹55",
  },
];

export default function SalesBreakdown({ setShowSidebar }) {
  return (
    <div className="flex flex-col h-screen">
      {" "}
      <div className="flex flex-col justify-between">
        <div className="flex justify-between items-center">
          <h3 style={{ fontSize: "18px", fontWeight: "normal" }}>
            Sales Breakdown{" "}
          </h3>
        </div>
      </div>
      <div
        className="flex-1 overflow-y-auto pb-[80px]"
        style={{ overflowY: "scroll" }}
      >
        <div className="flex justify-between items-center mt-6">
          <table
            className="w-full font-freesans"
            style={{
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
                      {header.title}
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="bg-white">
              {data.map((sales, index) => (
                <tr key={index}>
                  <td
                    style={{ borderBottom: "1px solid #EAECF0" }}
                    className="items-center px-3 py-5 w-full flex flex-row"
                  >
                    <span
                      className="font-freesans"
                      style={{
                        color: "#8E8E8E",
                        fontSize: "13px",
                        fontWeight: 400,
                      }}
                    >
                      {sales.type}
                    </span>
                    {sales.type === "Cancellations" && (
                      <img
                        src={"/information.png"}
                        className=" ml-1.5 w-4 h-4"
                      />
                    )}{" "}
                  </td>
                  <td
                    className="px-6 py-4 w-[26%] "
                    style={{
                      borderBottom: "1px solid #EAECF0",
                    }}
                  >
                    <span
                      className="font-freesans "
                      style={{
                        color: "#8E8E8E",
                        fontSize: "13px",
                        fontWeight: 400,
                      }}
                    >
                      {sales.orders}
                    </span>
                  </td>
                  <td
                    className="px-6 py-4 w-[26%]"
                    style={{
                      borderBottom: "1px solid #EAECF0",
                    }}
                  >
                    <span
                      className="font-freesans"
                      style={{
                        color: "#8E8E8E",
                        fontSize: "13px",
                        fontWeight: 400,
                      }}
                    >
                      {sales.amount}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div
        style={{
          borderTop: "1px solid #E5E7EB",
          padding: "16px 0",
          position: "sticky",
          bottom: 16,
          background: "white",
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
        }}
      >
        <button
          onClick={() => setShowSidebar(false)}
          className="bg-blue-600 text-white px-8 py-2.5 rounded cursor-pointer"
        >
          Close{" "}
        </button>
      </div>
    </div>
  );
}
