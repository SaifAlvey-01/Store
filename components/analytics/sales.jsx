import React, { useState } from "react";
import FreeTrialFooter from "../free-trial-footer";
import TotalOrdersChart from "../line-charts/analytics/sales/total-orders";
import GrossSalesChart from "../line-charts/analytics/sales/gross-sales";
import StoreConversionRateChart from "../line-charts/analytics/sales/store-conversion-rate";

export default function Sales() {
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
            Sales
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

      <div className="flex justify-between w-[97%]">
        <div
          className="w-1/4 px-4 pt-5 pb-2 mb-8 mx-2 flex flex-col justify-between"
          style={{
            border: "1px solid #e3e3e3",
            backgroundColor: "var(--white-color, #FFF)",
            borderRadius: "10px",
            boxSizing: "border-box",
          }}
        >
          <span
            className="px-4 py-3 mb-3 font-roboto"
            style={{
              color: "#8E8E8E",
              backgroundColor: "#f1f1f1",
              fontSize: "24px",
              fontWeight: 500,
              borderRadius: "10px",
            }}
          >
            0.0000
          </span>

          <div className="font-freesans flex flex-row items-center justify-start px-1">
            <h3
              style={{
                color: "#4B4B4B",
                fontWeight: 500,
                fontSize: "15px",
              }}
            >
              Average Orders Per Day{" "}
            </h3>
            <img src={"/info-dark.png"} className="ml-2 w-4 h-4" />
          </div>
        </div>

        <div
          className="w-1/4 px-4 pt-5 pb-2 mb-8 mx-2 flex flex-col justify-between"
          style={{
            border: "1px solid #e3e3e3",
            backgroundColor: "var(--white-color, #FFF)",
            borderRadius: "10px",
            boxSizing: "border-box",
          }}
        >
          <span
            className="px-4 py-3 mb-3 font-roboto"
            style={{
              color: "#8E8E8E",
              backgroundColor: "#f1f1f1",
              fontSize: "24px",
              fontWeight: 500,
              borderRadius: "10px",
            }}
          >
            Rs 0.0{" "}
          </span>

          <div className="font-freesans flex flex-row items-center justify-start px-1">
            <h3
              style={{
                color: "#4B4B4B",
                fontWeight: 500,
                fontSize: "15px",
              }}
            >
              Average Orders Value{" "}
            </h3>
            <img src={"/info-dark.png"} className="ml-2 w-4 h-4" />
          </div>
        </div>

        <div
          className="w-1/4 px-4 pt-5 pb-2 mb-8 mx-2 flex flex-col justify-between"
          style={{
            border: "1px solid #e3e3e3",
            backgroundColor: "var(--white-color, #FFF)",
            borderRadius: "10px",
            boxSizing: "border-box",
          }}
        >
          <span
            className="px-4 py-3 mb-3 font-roboto"
            style={{
              color: "#8E8E8E",
              backgroundColor: "#f1f1f1",
              fontSize: "24px",
              fontWeight: 500,
              borderRadius: "10px",
            }}
          >
            Rs 0.0{" "}
          </span>

          <div className="font-freesans flex flex-row items-center justify-start px-1">
            <h3
              style={{
                color: "#4B4B4B",
                fontWeight: 500,
                fontSize: "15px",
              }}
            >
              Average Sales Per Day{" "}
            </h3>
            <img src={"/info-dark.png"} className="ml-2 w-4 h-4" />
          </div>
        </div>
        <div
          className="w-1/4 px-4 pt-5 pb-2 mb-8 mx-2 flex flex-col justify-between"
          style={{
            border: "1px solid #e3e3e3",
            backgroundColor: "var(--white-color, #FFF)",
            borderRadius: "10px",
            boxSizing: "border-box",
          }}
        >
          <span
            className="px-4 py-3 mb-3 font-roboto"
            style={{
              color: "#8E8E8E",
              backgroundColor: "#f1f1f1",
              fontSize: "24px",
              fontWeight: 500,
              borderRadius: "10px",
            }}
          >
            0.00%{" "}
          </span>

          <div className="font-freesans flex flex-row items-center justify-start px-1">
            <h3
              style={{
                color: "#4B4B4B",
                fontWeight: 500,
                fontSize: "15px",
              }}
            >
              Returning Customers{" "}
            </h3>
            <img src={"/info-dark.png"} className="ml-2 w-4 h-4" />
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
              Total Orders{" "}
            </h2>
            <img src={"/info-dark.png"} className="ml-2 w-4 h-4" />
          </div>
          <TotalOrdersChart />
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
          <div className="flex justify-between items-center mb-2">
            <div className="font-freesans flex items-center px-1 ">
              <h2
                style={{
                  color: "#4B4B4B",
                  fontWeight: 500,
                  fontSize: "16px",
                  margin: 0,
                }}
              >
                Gross Sales{" "}
              </h2>
              <img src={"/info-dark.png"} className="ml-2 w-4 h-4" />
            </div>
            <button
              className="cursor-pointer"
              style={{
                backgroundColor: "#ffffff",
                color: "#4162FF",
                padding: "10px 4px",
                borderRadius: "4px",
                fontSize: "13px",
              }}
            >
              View Breakdown{" "}
            </button>
          </div>

          <GrossSalesChart />
          <div className="flex justify-center">
            <button
              className="ml-8 mt-2 cursor-pointer"
              style={{
                backgroundColor: "#ffffff",
                color: "#4162FF",
                padding: "10px 30px",
                borderRadius: "4px",
                fontSize: "13px",
                // border: "1px solid #eeeeee",
              }}
            >
              View Detailed Report{" "}
            </button>
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
              Store Conversion Rate{" "}
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
              0.00%{" "}
            </span>
            <h3
              style={{
                color: "#8E8E8E",
                fontWeight: 500,
                fontSize: "13px",
              }}
            >
              (Total Sessions: 1){" "}
            </h3>
          </div>
          <StoreConversionRateChart />
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
          <div className="font-freesans flex flex-row items-center justify-start px-1 mt-2">
            <h2
              style={{
                color: "#4B4B4B",
                fontWeight: 500,
                fontSize: "16px",
                margin: 0,
              }}
            >
              Store Conversion Rate{" "}
            </h2>
            <img src={"/info-dark.png"} className="ml-2 w-4 h-4" />
          </div>
          <div className="flex justify-center items-center h-full font-freesans">
            <p
              className="ml-8 mt-2 cursor-pointer"
              style={{
                color: "#8E8E8E",
                padding: "10px 30px",
                fontSize: "14px",
              }}
            >
              Not enough data to show.{" "}
            </p>
          </div>
        </div>
      </div>

      <div className="w-[90%] mx-4 mb-8 mt-4 flex flex-col items-center justify-between">
        <FreeTrialFooter />
      </div>
    </div>
  );
}
