import React from "react";
import { useDispatch } from "react-redux";
import { setShowOrderDetails } from "../../../redux/slices/ordersSlices/orderDetailsSlice";
import { setShowConfirmDelivery } from "../../../redux/slices/ordersSlices/confirmDeliverySlice";
import { setShowDeliveredButtons } from "../../../redux/slices/ordersSlices/showDeliveredButtons";

export default function MyCredit({ setShowSidebar }) {
  const dispatch = useDispatch();

  const handleProceedClick = () => {
    dispatch(setShowConfirmDelivery(false));
    setShowSidebar(false);
    dispatch(setShowDeliveredButtons(true));
  };

  return (
    <div>
      {" "}
      <div className="h-[650px]">
        <div className="flex justify-between items-center">
          <div className="flex flex-col items-start mt-4">
            <h3
              className="m-0"
              style={{ fontSize: "17px", fontWeight: "normal" }}
            >
              My Credit{" "}
            </h3>
          </div>
        </div>

        <div
          className="w-[100%]  text-white px-3 py-2 mt-6"
          style={{
            borderRadius: "6px",
            backgroundColor: "#F6F7FF",
            boxSizing: "border-box",
          }}
        >
          <div className="flex justify-between items-center">
            <div className="font-freesans flex flex-row items-center justify-start">
              <span
                style={{
                  color: "#4B4B4B",
                  fontWeight: 500,
                  fontSize: "14px",
                }}
              >
                Total Amount to Credit{" "}
              </span>
            </div>

            <div className="flex flex-row">
              <button
                style={{
                  borderRadius: "6px",
                  fontSize: "14px",
                  color: "#FFF",
                  backgroundColor: "#4162FF",
                  fontWeight: 400,
                }}
                className="flex items-center py-2.5 px-4 font-freesans "
              >
                ₹108{" "}
              </button>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <span
            className="font-freesans"
            style={{
              color: "#4B4B4B",
              fontWeight: 500,
              fontSize: "13px",
            }}
          >
            Contact Detail{" "}
          </span>
          <input
            className="bg-[#FFF] text-gray-900 text-sm rounded-[10px] block w-full px-4 py-2.5 mt-1 placeholder-gray-300  focus:outline-none"
            style={{
              border: "1.5px solid #E5E7EB",
              boxSizing: "border-box",
            }}
            onFocus={(e) => (e.target.style.borderColor = "#bdbfc0")}
            onBlur={(e) => (e.target.style.borderColor = "#E5E7EB")}
            placeholder="+91-23523342422452"
            required
          />
        </div>
      </div>
      <div
        style={{
          borderTop: "1px solid #E5E7EB",
          padding: "16px 0",
          position: "sticky",
          bottom: 16,
          background: "white",
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
        }}
      >
        <button
          onClick={handleProceedClick}
          className="bg-blue-600 text-white px-7 py-2.5 rounded cursor-pointer"
        >
          Proceed{" "}
        </button>
      </div>
    </div>
  );
}
