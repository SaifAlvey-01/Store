import React from "react";

export default function StaffAccounts() {
  return (
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

      <div className="flex flex-col items-center justify-center h-full">
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
      </div>
    </div>
  );
}
