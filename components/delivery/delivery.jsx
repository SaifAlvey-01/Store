import React from "react";
import FreeTrialFooter from "../free-trial-footer";

export default function Delivery() {
  return (
    <div
      className="h-auto overflow-y-auto flex flex-col items-center justify-between "
      style={{
        backgroundColor: "var(--white-color, #FFF)",
        borderRadius: "10px",
        boxShadow: `#00000011 0px 2px 4px 2px`,
        marginBottom: "10px",
      }}
    >
      <div
        className="my-8 mx-4 sm:my-8 sm:mx-4 lg:my-16 lg:mx-24 lg:my-16 lg:mx-24 lg:w-[70%] w-[90%]"
        style={{
          border: "1px solid #e3e3e3",
          backgroundColor: "var(--white-color, #FFF)",
          borderRadius: "10px",
        }}
      >
        <div className="flex flex-col items-center justify-between ">
          <img
            src={"/dashboard_images/delivery.png"}
            // alt={label}
            className="w-600 h-600 "
          />

          <div className="flex flex-col items-center justify-between ">
            <p
              style={{
                color: "#4B4B4B",
                textAlign: "center",
              }}
              className=" my-2 font-light font-poppins text-base w-[100%] lg:w-[100%]"
            >
              Ship any order to see details.
            </p>
          </div>

          <div className="flex mb-10 mt-4  flex-row items-center justify-between ">
            <button
              className="mr-2 cursor-pointer"
              style={{
                backgroundColor: "#4162FF",
                color: "#ffffff",
                padding: "10px 36px",
                borderRadius: "4px",
              }}
            >
              Ship Now
            </button>
            <button
              className="ml-2 cursor-pointer"
              style={{
                backgroundColor: "#ffffff",
                color: "#4162FF",
                padding: "10px 30px",
                borderRadius: "4px",
                border: "1px solid #eeeeee",
              }}
            >
              Learn More
            </button>
          </div>
        </div>
      </div>

      <div className="w-[90%] mx-4 mb-8 mt-4   flex flex-col items-center justify-between">
        <FreeTrialFooter />
      </div>
    </div>
  );
}
