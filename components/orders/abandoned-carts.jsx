import React from "react";
import FreeTrialFooter from "../free-trial-footer";

export default function AbandonedCarts() {
  return (
    <div
      className="min-h-[calc(100vh-180px)] sm:min-h-[calc(100% - 100px)] overflow-y-auto flex flex-col items-center justify-between "
      style={{
        backgroundColor: "var(--white-color, #FFF)",
        borderRadius: "10px",
        boxShadow: `#00000011 0px 2px 4px 2px`,
      }}
    >
      <div
        className="my-4 mx-4 sm:my-4 sm:mx-4 md:my-8 md:mx-4 lg:my-16 lg:mx-24 lg:w-[70%] w-[90%]"
        style={{
          border: "1px solid #e3e3e3",
          backgroundColor: "var(--white-color, #FFF)",
          borderRadius: "10px",
        }}
      >
        <div className="flex flex-col items-center justify-between ">
          <img
            src={"/dashboard_images/abandoned_carts.png"}
            className="w-600 h-600 "
          />

          <div className="flex flex-col items-center justify-between ">
            <p
              style={{
                color: "#4B4B4B",
                textAlign: "center",
              }}
              className="mt-0 mb-10 my-0 font-light font-poppins text-base w-[90%] lg:w-[100%]"
            >
              You don't have any abandoned orders.
            </p>
          </div>
        </div>
      </div>

      <div className="w-[90%] mx-4 mb-10 mt-4  flex flex-col items-center justify-between">
        <FreeTrialFooter />
      </div>
    </div>
  );
}
