import React from "react";
import FreeTrialFooter from "../free-trial-footer";
import StatusTracking from "./status-tracking";

export default function DashboardHome() {
  return (
    <>
      <div
        className="h-auto overflow-y-auto flex flex-col items-center justify-between"
        style={{
          backgroundColor: "#FFF",
          background: `
  linear-gradient(to right, rgba(255,255,255,0.1), rgba(255,255,255,0.2) 20%, rgba(255,255,255,1) 20%, rgba(255,255,255,1)), 
  url('/Rectangle_green.png') no-repeat left center / 18% 100%`,
          borderRadius: "10px",
          boxShadow: "#00000011 0px 2px 4px 2px",
          marginBottom: "20px",
        }}
      >
        <div className="flex justify-between items-center w-[97%]">
          <div className="flex flex-row justify-between items-center w-9/10 space-x-28">
            <h4
              className="self-stretch font-freesans mr-10"
              style={{ color: "#ffffff" }}
            >
              Share Store Link
            </h4>

            <div className="flex flex-col items-start justify-between">
              <span style={{ fontSize: "14px", color: "#4B4B4B" }}>
                Customers can visit the following link and place their orders.
              </span>
              <a
                style={{ fontSize: "13px" }}
                className="self-stretch font-freesans flex flex-row items-start justify-start"
                href="#"
              >
                launchedmystore.io/raynaz
              </a>
            </div>
          </div>

          <div className="flex flex-row space-y-4 w-1/10 md:space-y-0 md:space-x-4">
            <div className="flex flex-row items-center justify-between">
              <span className="text-neutral-500 text-sm mr-5">Share Via:</span>
              <img src={"/whatsapp.png"} className="w-7 h-7 " />
              <img src={"/facebook.png"} className="w-6 h-6 ml-3" />
              <img src={"/twitter.png"} className="w-6 h-6 ml-3" />
            </div>
          </div>
        </div>
      </div>

      <div
        className="h-auto overflow-y-auto flex flex-col items-center justify-between"
        style={{
          backgroundColor: "#FFF",
          background: `
  linear-gradient(to right, rgba(255,255,255,0.1), rgba(255,255,255,0.1) 20%, rgba(255,255,255,1) 20%, rgba(255,255,255,1)), 
  url('/Rectangle_purple.png') no-repeat left center / 16% 100%`,
          borderRadius: "10px",
          boxShadow: "#00000011 0px 2px 4px 2px",
          marginBottom: "20px",
        }}
      >
        <div className="flex justify-between items-center w-[97%]">
          <div className="flex flex-row justify-between items-center w-9/10 ">
            <h4
              className="self-stretch font-freesans mr-44"
              style={{ color: "#ffffff" }}
            >
              Get Domain{" "}
            </h4>

            <span style={{ fontSize: "14px", color: "#4B4B4B" }}>
              Connect your existing domain or search for the domain name best
              suited for your brand.{" "}
            </span>
          </div>

          <div className="flex flex-row space-y-4 w-1/10 md:space-y-0 md:space-x-4">
            <button
              className="cursor-pointer"
              style={{
                backgroundColor: "#4162FF",
                color: "#ffffff",
                padding: "8px 20px",
                borderRadius: "4px",
                border: "1px solid #4162FF",
              }}
            >
              Get Domain Now{" "}
            </button>
          </div>
        </div>
      </div>
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
          className="my-4 mx-4 sm:my-4 sm:mx-4 md:my-8 md:mx-24 lg:my-6 lg:mx-24 lg:w-[70%] w-[90%]"
          style={{
            border: "1px solid #e3e3e3",
            backgroundColor: "var(--white-color, #FFF)",
            borderRadius: "10px",
          }}
        >
          <div className="flex flex-col items-start justify-start p-6 ">
            <h2
              style={{ color: "#4B4B4B", fontSize: "20px" }}
              className="mt-0 mb-2 font-bold font-freesans"
            >
              Complete your store setup..{" "}
            </h2>
            <p
              style={{
                color: "#8E8E8E",
                fontSize: "14px",
                textAlign: "center",
              }}
              className="mt-0 mb-0 my-0 font-thin text-base "
            >
              Use high quality images and product descriptions to have a great
              looking product page. Let's get started.
            </p>

            <div
              style={{
                display: "flex",
                alignItems: "flex-end",
                marginTop: 30,
                width: "90%",
              }}
            >
              <StatusTracking />
              <div
                className="flex flex-col items-center justify-center px-10 py-10 ml-auto"
                style={{
                  border: "1px dashed #4162ff",
                  borderRadius: "10px",
                  marginBottom: 40,
                }}
              >
                <img src={"/image-outline.png"} className="mb-6" />
                <img src={"/group-line.png"} />
              </div>
            </div>
          </div>
        </div>

        <div className="w-[90%] mx-4 mb-8 mt-4   flex flex-col items-center justify-between">
          <FreeTrialFooter />
        </div>
      </div>
    </>
  );
}
