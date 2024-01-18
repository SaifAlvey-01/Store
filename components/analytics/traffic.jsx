import React, { useState } from "react";
import FreeTrialFooter from "../free-trial-footer";
import AverageStoreViewsChart from "../doughnut-charts/analytics/traffic/average-store-views";
import ReturningVisitorsChart from "../doughnut-charts/analytics/traffic/returning-visitors";
import StoreViewsChart from "../line-charts/analytics/traffic/store-views";
import SessionsChart from "../line-charts/analytics/traffic/sessions";

export default function Traffic() {
  return (
    <div
      className="min-h-[calc(100vh-180px)] sm:min-h-[calc(100% - 100px)] overflow-y-auto flex flex-col items-center justify-between "
      style={{
        backgroundColor: "var(--white-color, #FFF)",
        borderRadius: "10px",
        boxShadow: `#00000011 0px 2px 4px 2px`,
      }}
    >
      <div className="flex justify-between items-center mt-6 mb-6 w-[96%]">
        <div className="self-stretch font-freesans flex flex-row items-start justify-start">
          <h3 style={{ color: "var(--Neutral-600, #4B4B4B)", margin: 0 }}>
            Traffic
          </h3>
        </div>

        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
          <div className="relative">
            <button
              style={{
                borderRadius: "6px",
                border: "1px solid #8E8E8E",
                fontSize: "14px",
                color: "#8E8E8E",
                backgroundColor: "#ffffff",
              }}
              className="flex items-center px-3 py-1.5 hover:bg-gray-300 cursor-pointer"
            >
              This Month{" "}
              <img
                style={{
                  color: "#8E8E8E",
                }}
                src={"/chevron-grey.png"}
                alt="Dropdown Icon"
                className="ml-2 w-4 h-4"
              />
            </button>
          </div>
        </div>
      </div>

      <div className="flex justify-between w-[98%]">
        <div
          className="w-1/2 p-4 mx-3 mb-8 flex flex-col"
          style={{
            border: "1px solid #e3e3e3",
            backgroundColor: "var(--white-color, #FFF)",
            borderRadius: "10px",
            boxSizing: "border-box",
          }}
        >
          <div className="font-freesans flex flex-row items-center justify-start px-1 mb-8">
            <h2
              style={{
                color: "#4B4B4B",
                fontWeight: 500,
                fontSize: "16px",
                margin: 0,
              }}
            >
              Average Store Views Per Day
            </h2>
            <img src={"/info-dark.png"} className="ml-2 w-4 h-4" />
          </div>

          <div className="flex justify-center w-full">
            <AverageStoreViewsChart />
          </div>
        </div>

        <div
          className="w-1/2 p-4 mx-3 mb-8 flex flex-col"
          style={{
            border: "1px solid #e3e3e3",
            backgroundColor: "var(--white-color, #FFF)",
            borderRadius: "10px",
            boxSizing: "border-box",
          }}
        >
          <div className="font-freesans flex flex-row items-center justify-start px-1 mb-8">
            <h2
              style={{
                color: "#4B4B4B",
                fontWeight: 500,
                fontSize: "16px",
                margin: 0,
              }}
            >
              Returning Visitors{" "}
            </h2>
            <img src={"/info-dark.png"} className="ml-2 w-4 h-4" />
          </div>

          <div className="flex justify-center w-full">
            <ReturningVisitorsChart />
          </div>
        </div>
      </div>

      <div className="flex justify-between w-[98%]">
        <div
          className="w-1/2 p-4 mx-3 mb-8"
          style={{
            border: "1px solid #e3e3e3",
            backgroundColor: "var(--white-color, #FFF)",
            borderRadius: "10px",
            boxSizing: "border-box",
          }}
        >
          <div className="font-freesans flex flex-row items-center justify-start px-1 mt-2 mb-4">
            <h2
              style={{
                color: "#4B4B4B",
                fontWeight: 500,
                fontSize: "16px",
                margin: 0,
              }}
            >
              Store Views{" "}
            </h2>
            <img src={"/info-dark.png"} className="ml-2 w-4 h-4" />
          </div>

          <div className="flex flex-row items-center justify-start mb-4">
            {" "}
            <span
              className="px-4 py-2 mr-4 font-roboto"
              style={{
                color: "#8E8E8E",
                backgroundColor: "#f1f1f1",
                fontSize: "18px",
                fontWeight: 500,
                borderRadius: "10px",
              }}
            >
              0000{" "}
            </span>
          </div>
          <StoreViewsChart />
          <div className="flex justify-center">
            <button
              className="ml-8 mt-2 cursor-pointer"
              style={{
                backgroundColor: "#ffffff",
                color: "#4162FF",
                padding: "10px 30px",
                borderRadius: "4px",
                fontSize: "13px",
              }}
            >
              View Detailed Report{" "}
            </button>
          </div>
        </div>

        <div
          className="w-1/2 p-4 mx-3 mb-8"
          style={{
            border: "1px solid #e3e3e3",
            backgroundColor: "var(--white-color, #FFF)",
            borderRadius: "10px",
            boxSizing: "border-box",
          }}
        >
          <div className="font-freesans flex flex-row items-center justify-start px-1 mt-2 mb-4">
            <h2
              style={{
                color: "#4B4B4B",
                fontWeight: 500,
                fontSize: "16px",
                margin: 0,
              }}
            >
              Sessions{" "}
            </h2>
            <img src={"/info-dark.png"} className="ml-2 w-4 h-4" />
          </div>

          <div className="flex flex-row items-center justify-start mb-4">
            {" "}
            <span
              className="px-4 py-2 mr-4 font-roboto"
              style={{
                color: "#8E8E8E",
                backgroundColor: "#f1f1f1",
                fontSize: "18px",
                fontWeight: 500,
                borderRadius: "10px",
              }}
            >
              0000{" "}
            </span>
          </div>
          <SessionsChart />
          <div className="flex justify-center">
            <button
              className="ml-8 mt-2 cursor-pointer"
              style={{
                backgroundColor: "#ffffff",
                color: "#4162FF",
                padding: "10px 30px",
                borderRadius: "4px",
                fontSize: "13px",
              }}
            >
              View Detailed Report{" "}
            </button>
          </div>
        </div>
      </div>

      <div className="w-[90%] mx-4 mb-8 mt-4 flex flex-col items-center justify-between">
        <FreeTrialFooter />
      </div>
    </div>
  );
}
