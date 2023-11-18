import React from "react";
import TrackingIDSelect from "../dropdown-selects/tracking-id-select";
import ShippingPartnerSelect from "../dropdown-selects/shipping-partner-select";
import { useDispatch } from "react-redux";
import { setShowDeliveredButtons } from "../../redux/slices/ordersSlices/showDeliveredButtons";

export default function AddTrackingDetails({ setShowSidebar }) {
  const dispatch = useDispatch();

  const handleChange = (selectedOption) => {
    console.log(`Selected: ${selectedOption.value}`);
  };

  const handleShipOrder = () => {
    setShowSidebar(false);
    dispatch(setShowDeliveredButtons(true));
  };

  return (
    <div>
      {" "}
      <div className="h-[850px]">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <h3 style={{ fontSize: "18px", fontWeight: "normal" }}>
              Add Tracking Details{" "}
            </h3>
          </div>
        </div>

        <div className="mt-2">
          {" "}
          <ShippingPartnerSelect onChange={handleChange} />
        </div>

        <div className="mt-2">
          {" "}
          <TrackingIDSelect onChange={handleChange} />
        </div>

        <div className="flex flex-row items-start p-2 mt-1 ">
          <span
            className="font-freesans"
            style={{
              color: "#4B4B4B",
              fontWeight: 500,
              fontSize: "13px",
            }}
          >
            Note:{" "}
          </span>
          <span
            className="ml-1"
            style={{
              color: "#8E8E8E",
              fontSize: "13px",
              fontWeight: 500,
            }}
          >
            The tracking details will be sent to your customer.
          </span>
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
          onClick={handleShipOrder}
          className="bg-blue-600 text-white px-5 py-2.5 rounded cursor-pointer"
        >
          Ship Order{" "}
        </button>
      </div>
    </div>
  );
}
