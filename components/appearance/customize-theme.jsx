import React from "react";
import FreeTrialFooter from "../free-trial-footer";

export default function CustomizeTheme() {
  return (
    <div
      className="min-h-[calc(108vh-180px)] sm:min-h-[calc(100% - 100px)] overflow-y-auto flex flex-col items-center justify-between "
      style={{
        backgroundColor: "var(--white-color, #FFF)",
        borderRadius: "10px",
        boxShadow: `#00000011 0px 2px 4px 2px`,
      }}
    >
      <div
        className="my-4 mx-4 sm:my-4 sm:mx-4 md:my-8 md:mx-4 lg:my-10 lg:mx-24 lg:w-[70%] w-[90%]"
        style={{
          // border: "1px solid #e3e3e3",
          backgroundColor: "var(--white-color, #FFF)",
          borderRadius: "10px",
        }}
      >
        <div className="flex flex-col items-center justify-between ">
          <img
            src={"/dashboard_images/coding-page.png"}
            className="w-600 h-600 "
          />

          <div className="flex flex-col items-center justify-between ">
            <h2
              style={{ color: "#4B4B4B" }}
              className="my-0 font-bold font-freesans"
            >
              Select Theme To Customize{" "}
            </h2>
          </div>

          <button
            className="mt-4 mb-8 cursor-pointer"
            style={{
              backgroundColor: "#4162FF",
              color: "#ffffff",
              padding: "10px 30px",
              borderRadius: "4px",
            }}
          >
            Add New Theme{" "}
          </button>
        </div>
      </div>

      <div className=" w-[90%] mx-4 mb-8 mt-4   flex flex-col items-center justify-between">
        <FreeTrialFooter />
      </div>
    </div>
  );
}
