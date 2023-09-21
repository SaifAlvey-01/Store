import React from "react";
import FreeTrialFooter from "../free-trial-footer";

export default function Builder() {
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
        className="h-screen my-4 mx-4 sm:my-4 sm:mx-4 md:my-8 md:mx-4 lg:my-16 lg:mx-24 lg:w-[70%] w-[90%]"
        style={{
          border: "1px solid #e3e3e3",
          backgroundColor: "var(--white-color, #FFF)",
          borderRadius: "10px",
        }}
      >
        <div className="flex flex-col items-center justify-between ">
          <img src={"/dashboard_images/builder.png"} className="w-600 h-600 " />

          <div className="flex flex-col items-center justify-between ">
            <h2
              style={{ color: "#4B4B4B" }}
              className="mt-0 mb-12 font-bold font-freesans"
            >
              Page Builder{" "}
            </h2>
          </div>
        </div>
      </div>

      <div className="w-[90%] mx-4 mb-8 mt-4   flex flex-col items-center justify-between">
        <FreeTrialFooter />
      </div>
    </div>
  );
}
