import React from "react";
import FreeTrialFooter from "../free-trial-footer";
import StatusTracking from "./status-tracking";
// import { useMediaQuery } from "react-responsive";

export default function DashboardHome() {
  // const mqMD = useMediaQuery({
  //   query: "(max-width: 900px)",
  // });

  return (
    <div className="min-h-[calc(100vh-180px)] sm:min-h-[calc(100% - 100px)] ">
      <div
        className="relative h-auto overflow-y-auto flex flex-row items-center justify-between bg-white rounded-lg shadow-md mb-5"
        style={{
          borderRadius: "10px",
          boxShadow: "#00000011 0px 2px 4px 2px",
          marginBottom: "20px",
        }}
      >
        {/* Image and h4 section */}
        <div className="flex flex-row items-center relative w-12">
          {/* Adjust the width accordingly if needed */}
          <img
            src={"/Rectangle_green.png"}
            className="absolute top-0 left-0 w-38 h-full"
          />
          <h4 className="font-freesans text-white ml-4 z-10 whitespace-nowrap">
            Share Store Link
          </h4>
        </div>

        {/* Description section */}
        <div className="flex flex-col items-start justify-center mx-20">
          <span className="text-sm text-gray-700 mb-1">
            Customers can visit the following link and place their orders.
          </span>
          <a
            href="#"
            className="font-freesans text-sm text-blue-500 hover:underline"
          >
            launchedmystore.io/raynaz
          </a>
        </div>

        {/* Social sharing section */}
        <div className="flex flex-row items-center ml-20 mr-4">
          <span className="text-neutral-500 text-sm mr-5">Share Via:</span>
          <img src={"/whatsapp.png"} className="w-7 h-7" />
          <img src={"/facebook.png"} className="w-6 h-6 ml-3" />
          <img src={"/twitter.png"} className="w-6 h-6 ml-3" />
        </div>
      </div>

      <div
        className="relative h-auto overflow-y-auto flex flex-row items-center justify-between bg-white rounded-lg shadow-md mb-5"
        style={{
          borderRadius: "10px",
          boxShadow: "#00000011 0px 2px 4px 2px",
          marginBottom: "20px",
        }}
      >
        {/* Image and h4 section */}
        <div className="flex flex-row items-center relative w-12">
          {/* Adjust the width accordingly if needed */}
          <img
            src={"/Rectangle_purple.png"}
            className="absolute top-0 left-0 w-38 h-full"
          />
          <h4 className="font-freesans text-white ml-4 z-10 whitespace-nowrap">
            Get Domain{" "}
          </h4>
        </div>

        {/* Description section */}
        <div className="flex flex-col items-start justify-center ml-32">
          <span style={{ fontSize: "14px", color: "#4B4B4B" }}>
            Connect your existing domain or search for the domain name best
            suited for your brand.{" "}
          </span>
        </div>

        {/* Social sharing section */}
        <div className="flex flex-row items-center ml-20 mr-4">
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

      <div
        className="min-h-[calc(100vh-180px)] sm:min-h-[calc(100% - 100px)] overflow-y-auto flex flex-col items-center justify-between "
        style={{
          backgroundColor: "var(--white-color, #FFF)",
          borderRadius: "10px",
          boxShadow: `#00000011 0px 2px 4px 2px`,
        }}
      >
        <div
          className="m-0 sm:my-8 sm:mx-24 lg:w-[70%] w-[100%]"
          style={{
            // border: mqMD ? "none" : "1px solid #e3e3e3",
            backgroundColor: "var(--white-color, #FFF)",
            borderRadius: "10px",
          }}
        >
          <div className="flex flex-col items-start justify-start p-4 md:p-6 ">
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
                // textAlign: "center",
              }}
              className="mt-0 mb-0 my-0 font-thin text-base "
            >
              Use high quality images and product descriptions to have a great
              looking product page. Let's get started.
            </p>

            <div className="flex md:flex-row flex-col items-center justify-center mt-4 md:mt-8 w-9/10">
              <StatusTracking />
              <div className="flex flex-col items-center justify-start px-10 py-10 ml-0 md:ml-auto sm:self-center border border-dashed border-blue-600 rounded-lg mb-10">
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
    </div>
  );
}
