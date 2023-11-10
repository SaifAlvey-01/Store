import React from "react";
import { useState } from "react";

const delivery_time = [
  { id: 1, time: "30-60 Minutes" },
  { id: 2, time: "1-4 Hours" },
  { id: 3, time: "6-24 Hours" },
  { id: 4, time: "1-3 Days" },
  { id: 5, time: "3-5 Days" },
  { id: 6, time: "5-10 Days" },
  { id: 7, time: "10+ Days" },
];

export default function ChooseDeliveryTime({
  setShowSidebar,
  setShowDeliveredButtons,
}) {
  const [selectedRadio, setSelectedRadio] = useState(1);

  const handleShipOrder = () => {
    setShowSidebar(false);
    setShowDeliveredButtons(true);
  };

  return (
    <div>
      {" "}
      <div className="h-[650px]">
        <div className="flex justify-between items-center">
          <h3 style={{ fontSize: "18px", fontWeight: "normal" }}>
            Choose Delivery Time{" "}
          </h3>
        </div>

        <div className="mt-2">
          {delivery_time.map((time) => (
            <div
              key={time.id}
              style={{ borderBottom: "1px solid #EAECF0" }}
              className="flex flex-row items-center justify-between p-3 mx-2"
            >
              <div className="flex items-center">
                <span
                  className="font-freesans mb-2"
                  style={{
                    color: "#4B4B4B",
                    fontSize: "13px",
                    fontWeight: 500,
                  }}
                >
                  {time.time}
                </span>
              </div>

              <div className="flex items-center flex-row">
                <input
                  id={`radio-${time.id}`}
                  type="radio"
                  value=""
                  name="radio-group"
                  checked={selectedRadio === time.id}
                  onChange={() => setSelectedRadio(time.id)}
                  className="w-4 h-4 m-0 cursor-pointer text-blue-600 bg-gray-100 border-gray-300 dark:ring-offset-gray-800  dark:bg-gray-700 dark:border-gray-600 outline-none"
                />
              </div>
            </div>
          ))}
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
          className="bg-blue-600 text-white px-7 py-2.5 rounded cursor-pointer"
        >
          Ship Order{" "}
        </button>
      </div>
    </div>
  );
}
