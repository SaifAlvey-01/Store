import React from "react";
import Lottie from "lottie-react";
import animationData from "../../../public/upgrade-success.json";

export default function UpgradePlanSuccess() {
  return (
    <div
      className="min-h-[calc(96vh-130px)] sm:min-h-[calc(100% - 100px)] p-5 overflow-y-auto flex flex-col items-center justify-center"
      style={{
        backgroundColor: "var(--white-color, #FFF)",
        borderRadius: "10px",
        boxShadow: `#00000011 0px 2px 4px 2px`,
      }}
    >
      <div className="h-72 w-72 flex items-center justify-center">
        <Lottie
          animationData={animationData}
          options={{
            loop: true,
            autoplay: true,
            rendererSettings: {
              preserveAspectRatio: "xMidYMid slice",
            },
          }}
        />
      </div>
      <div className="flex flex-col items-center justify-between">
        <h2
          style={{ color: "#4B4B4B" }}
          className="mt-0 mb-3 font-[700] font-freesans text-[22px]"
        >
          Plan Upgraded Successfully{" "}
        </h2>
        <p
          style={{
            color: "#8E8E8E",
            textAlign: "center",
          }}
          className="mt-0 mb-2 my-0 font-[400] text-base w-[100%]"
        >
          Your payment of ₹8,460 for platinum plan received
        </p>
      </div>
    </div>
  );
}
