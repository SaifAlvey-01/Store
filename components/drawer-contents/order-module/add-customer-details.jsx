import React, { useEffect } from "react";

const headers = [
  { title: "Name & Email" },
  { title: "Numbers" },
  { title: "City" },
];

const data = [
  {
    name: "Hayden Par",
    email: "hayden@gmail.com",
    numbers: "+91-8452733694",
    city: "Dehli",
  },
  {
    name: "Hayden Par",
    email: "hayden@gmail.com",
    numbers: "+91-8452733694",
    city: "Dehli",
  },
  {
    name: "Hayden Par",
    email: "hayden@gmail.com",
    numbers: "+91-8452733694",
    city: "Dehli",
  },
  {
    name: "Hayden Par",
    email: "hayden@gmail.com",
    numbers: "+91-8452733694",
    city: "Dehli",
  },
  {
    name: "Hayden Par",
    email: "hayden@gmail.com",
    numbers: "+91-8452733694",
    city: "Dehli",
  },
  {
    name: "Hayden Par",
    email: "hayden@gmail.com",
    numbers: "+91-8452733694",
    city: "Dehli",
  },
  {
    name: "Hayden Par",
    email: "hayden@gmail.com",
    numbers: "+91-8452733694",
    city: "Dehli",
  },
  {
    name: "Hayden Par",
    email: "hayden@gmail.com",
    numbers: "+91-8452733694",
    city: "Dehli",
  },
  {
    name: "Hayden Par",
    email: "hayden@gmail.com",
    numbers: "+91-8452733694",
    city: "Dehli",
  },
];

export default function AddCustomerDetails({
  setShowSidebar,
  setAddingNewCustomer,
  contentType,
}) {
  const handleAddNewCustomer = () => {
    setAddingNewCustomer(true);
    setShowSidebar(true);
  };

  useEffect(() => {
    setAddingNewCustomer(false);
  }, [contentType]);

  return (
    <div>
      {" "}
      <div className="h-[820px]">
        <div className="flex justify-between items-center">
          <h3 style={{ fontSize: "18px", fontWeight: "normal" }}>
            Select Customer{" "}
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
            placeholder="Search by Name, Email or Number...."
            className="w-full pl-9 pr-32 py-2.5 focus:outline-none focus:border-blue-500"
          />
        </div>

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
              {data.map((customer, index) => (
                <tr key={index}>
                  <td
                    style={{ borderBottom: "1px solid #EAECF0" }}
                    className="items-center p-2 w-[50%]"
                  >
                    <label
                      className="flex flex-row items-center py-1.5 w-full border border-gray-200 rounded dark:border-gray-700"
                      style={{
                        color: "#4B4B4B",
                        fontSize: "14px",
                        fontWeight: "500",
                      }}
                    >
                      <input
                        type="radio"
                        name="selected-customer"
                        className="w-4 h-4 cursor-pointer m-0 text-blue-600 bg-gray-100 border-none focus:ring-none dark:focus:ring-none focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        style={{
                          boxShadow: "none",
                        }}
                      />
                      <span className="flex flex-col ml-2 font-lato ">
                        <span style={{ fontSize: "13px", color: "#4B4B4B" }}>
                          {customer.name}
                        </span>{" "}
                        <span
                          className="mt-1.5"
                          style={{ fontSize: "12px", color: "#8E8E8E" }}
                        >
                          {customer.email}
                        </span>
                      </span>
                    </label>
                  </td>
                  <td
                    className="p-2 w-[30%]"
                    style={{
                      borderBottom: "1px solid #EAECF0",
                    }}
                  >
                    <span
                      className="font-freesans"
                      style={{
                        color: "#8E8E8E",
                        fontSize: "12px",
                        fontWeight: 400,
                      }}
                    >
                      {customer.numbers}
                    </span>
                  </td>
                  <td
                    className="p-2 w-[30%]"
                    style={{
                      borderBottom: "1px solid #EAECF0",
                    }}
                  >
                    <span
                      className="font-freesans"
                      style={{
                        color: "#8E8E8E",
                        fontSize: "12px",
                        fontWeight: 400,
                      }}
                    >
                      {customer.city}
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
          style={{
            borderRadius: "6px",
            border: "1px dashed #7A91FF",
            fontSize: "14px",
            color: "#7A91FF",
            backgroundColor: "#ffffff",
          }}
          className="px-7 py-2.5 rounded cursor-pointer mr-4"
          onClick={handleAddNewCustomer}
        >
          Add New Customer{" "}
        </button>
        <button className="bg-blue-600 text-white px-8 py-2.5 rounded cursor-pointer">
          Select{" "}
        </button>
      </div>
    </div>
  );
}
