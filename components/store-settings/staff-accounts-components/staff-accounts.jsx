import React from "react";
import Style from "./staffAccountsSearchStyle.module.css";
import { useState } from "react";
import { useEffect } from "react";
import StaffAccountsEditDropdown from "../../dropdowns/staff-accounts-edit";
import { useRef } from "react";
import CustomDrawer from "../../drawer-contents/custom-drawer";

export default function StaffAccounts({ onEditClick }) {
  const [showSidebar, setShowSidebar] = useState(false);
  const [contentType, setContentType] = useState("");
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

  const data = [
    {
      name: "Shivam",
      email: "Shivam@gmail.com",
      role: "Owner",
      actionImage: "/menu-dots-round.png",
    },
    {
      name: "Ahmed",
      email: "ahm@gmail.com",
      role: "Staff-Store",
      actionImage: "/menu-dots-round.png",
    },
  ];
  return (
    <>
      <div
        className="ml-3 w-[65%] h-[600px] text-blue-600 p-4"
        style={{
          borderRadius: "10px",
          backgroundColor: "var(--white-color, #FFF)",
          border: "1px solid #e3e3e3",
        }}
      >
        <div className="flex flex-row items-center">
          <h3
            className="m-0 mr-4"
            style={{
              color: "#4B4B4B",
              fontWeight: 600,
              fontSize: "16px",
            }}
          >
            Staff Accounts (0 of 10)
          </h3>

          <div className="flex flex-row items-center">
            {" "}
            <img
              style={{
                color: "#8E8E8E",
              }}
              src={"/question-circle.png"}
              className="mr-1 w-4 h-4"
            />
            <span
              style={{
                color: "#8E8E8E",
                fontSize: "12px",
              }}
            >
              {" "}
              How it works{" "}
            </span>
          </div>
        </div>

        {/* <div className="flex flex-col items-center justify-center h-full">
        <img src={"/staff.png"} className="w-600 h-600 " />

        <div className="flex flex-col items-center">
          <h3
            style={{ color: "#4B4B4B", fontSize: "20px" }}
            className="mt-0 mb-3 font-bold font-freesans"
          >
            Add your staff members
          </h3>
          <p
            style={{
              color: "#8E8E8E",
              textAlign: "center",
              fontSize: "14px",
            }}
            className="mt-0 mb-1 my-0 font-thin w-[100%]"
          >
            Add your staff members and let them access & manage your store.
          </p>
        </div>

        <button    
        onClick={() => {
              setShowSidebar(true);
              setContentType("add-staff");
            }}
          className="mt-4 mb-8 cursor-pointer"
          style={{
            backgroundColor: "#4162FF",
            color: "#ffffff",
            padding: "10px 24px",
            borderRadius: "4px",
          }}
        >
          Add Staff
        </button>
      </div> */}

        <div className="flex mt-7 justify-between items-center">
          <div className={`w-[40%] ${Style.inputcontainer}`}>
            <input
              style={{ border: "1px solid #D0D5DD" }}
              className=" h-[35px] rounded-lg w-full"
              placeholder="Search"
              type="text"
            />
          </div>

          <button
            onClick={() => {
              setShowSidebar(true);
              setContentType("add-staff");
            }}
            className=" cursor-pointer ml-4"
            style={{
              backgroundColor: "#4162FF",
              color: "#ffffff",
              padding: "10px 28px",
              borderRadius: "4px",
            }}
          >
            Add Staff{" "}
          </button>
        </div>

        <div className="flex justify-between items-center mt-6">
          <table className="min-w-full divide-y divide-gray-200 font-freesans">
            <thead>
              <tr>
                <th
                  className="py-3 px-4 bg-f9fafb text-left font-freesans"
                  style={{
                    borderBottom: "1px solid var(--gray-200, #EAECF0)",
                    backgroundColor: "#F9FAFB",
                    color: "#1D2939",
                    fontSize: "12px",
                  }}
                >
                  Name & Email{" "}
                </th>
                <th
                  className="py-3 px-4 bg-f9fafb text-left"
                  style={{
                    borderBottom: "1px solid var(--gray-200, #EAECF0)",
                    backgroundColor: "#F9FAFB",
                    color: "#1D2939",
                    fontSize: "12px",
                  }}
                >
                  Role{" "}
                </th>
                <th
                  className="py-3 px-4 bg-f9fafb text-left"
                  style={{
                    borderBottom: "1px solid var(--gray-200, #EAECF0)",
                    backgroundColor: "#F9FAFB",
                    color: "#1D2939",
                    fontSize: "12px",
                  }}
                >
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {data.map((row, index) => (
                <tr key={index}>
                  <td
                    className="py-4 px-4"
                    style={{
                      borderBottom: "1px solid var(--gray-200, #EAECF0)",
                    }}
                  >
                    <div className="flex flex-col">
                      <span
                        className="font-freesans font-medium"
                        style={{
                          color: "#4B4B4B",
                          fontSize: "13px",
                        }}
                      >
                        {" "}
                        {row.name}
                      </span>{" "}
                      <span
                        className="mt-2"
                        style={{
                          color: "#8E8E8E",
                          fontSize: "13px",
                        }}
                      >
                        {" "}
                        {row.email}
                      </span>{" "}
                    </div>
                  </td>
                  <td
                    className="py-4 px-4"
                    style={{
                      borderBottom: "1px solid var(--gray-200, #EAECF0)",
                    }}
                  >
                    <span
                      style={{
                        color: "#8E8E8E",
                        fontSize: "13px",
                      }}
                    >
                      {" "}
                      {row.role}
                    </span>{" "}
                  </td>
                  <td
                    className="py-4 px-4"
                    style={{
                      borderBottom: "1px solid var(--gray-200, #EAECF0)",
                    }}
                  >
                    <div className="relative">
                      <img
                        src={row.actionImage}
                        alt={`Description for ${row.actionImage}`}
                        className="max-w-full max-h-full object-contain cursor-pointer"
                        onClick={() =>
                          setDropdownOpenIndex(
                            dropdownOpenIndex !== index ? index : null
                          )
                        }
                      />
                      <div ref={(el) => (dropdownRef.current[index] = el)}>
                        <StaffAccountsEditDropdown
                          isOpen={dropdownOpenIndex === index}
                          onEditClick={onEditClick}
                        />
                      </div>{" "}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <CustomDrawer
        key={contentType}
        showSidebar={showSidebar}
        setShowSidebar={setShowSidebar}
        contentType={contentType}
        setContentType={setContentType}
      />
    </>
  );
}
