import React from "react";
import FreeTrialFooter from "../free-trial-footer";

export default function Audience() {
  return (
    <div
      className="h-[84vh] overflow-y-auto flex flex-col items-center justify-between "
      style={{
        backgroundColor: "var(--white-color, #FFF)",
        borderRadius: "10px",
        boxShadow: `#00000011 0px 2px 4px 2px`,
        marginBottom: "10px",
      }}
    >
      <div
        className="h-screen my-4 mx-4 sm:my-4 sm:mx-4 md:my-8 md:mx-4 lg:my-6 lg:mx-24 lg:w-[70%] w-[90%]"
        style={{
          border: "1px solid #e3e3e3",
          backgroundColor: "var(--white-color, #FFF)",
          borderRadius: "10px",
        }}
      >
        <div className="flex flex-col items-center justify-between ">
          <img
            src={"/dashboard_images/audience.png"}
            className="w-600 h-600 "
          />

          <div className="flex flex-col items-center justify-between ">
            <h3
              style={{ color: "#4B4B4B", fontSize: "20px" }}
              className="mt-0 mb-2 font-bold font-freesans"
            >
              You don’t have any customers yet{" "}
            </h3>
            <p
              style={{
                color: "#8E8E8E",
                textAlign: "center",
                fontSize: "14px",
              }}
              className="mt-0 mb-2 my-0 font-thin text-base w-[100%] lg:max-w-[80%] max-w-[100%]"
            >
              View and manage the list of all customers who ordered from your
              store.
            </p>
          </div>

          <button
            className="mt-2 cursor-pointer"
            style={{
              backgroundColor: "#4162FF",
              color: "#ffffff",
              padding: "10px 30px",
              borderRadius: "4px",
            }}
          >
            Add Customers{" "}
          </button>

          <button
            className="mt-2 mb-4 cursor-pointer"
            style={{
              backgroundColor: "#ffffff",
              color: "#4162FF",
              padding: "10px 22px",
              borderRadius: "4px",
              border: "1px solid #eeeeee",
            }}
          >
            Import Customers{" "}
          </button>
        </div>
      </div>

      <div className="w-[90%] mx-4 mb-6 mt-2 flex flex-col items-center justify-between">
        <FreeTrialFooter />
      </div>
    </div>
  );
}
