import React from "react";

export default function KYCVerification() {
  return (
    <div
      className="ml-3 w-[65%] h-auto text-blue-600 p-4"
      style={{
        borderRadius: "10px",
        backgroundColor: "var(--white-color, #FFF)",
        border: "1px solid #e3e3e3",
      }}
    >
      <div className="flex flex-row items-center">
        <h3
          className="m-0 mr-4"
          style={{
            color: "#4B4B4B",
            fontWeight: 600,
            fontSize: "16px",
          }}
        >
          KYC Verification
        </h3>

        <div className="flex flex-row items-center">
          {" "}
          <img
            style={{
              color: "#8E8E8E",
            }}
            src={"/question-circle.png"}
            className="mr-1 w-4 h-4"
          />
          <span
            style={{
              color: "#8E8E8E",
              fontSize: "12px",
            }}
          >
            {" "}
            How it works{" "}
          </span>
        </div>
      </div>

      <div
        style={{
          border: "1px solid #EAECF0",
          padding: "20px 14px",
          borderRadius: "12px",
          backgroundColor: "#FFF6F6",
        }}
        className="mt-6"
      >
        <div className="flex justify-between items-center">
          <div className="font-freesans flex flex-col items-start justify-start w-[62%]">
            <span
              className="font-freesans mb-2"
              style={{
                color: "#4B4B4B",
                fontWeight: 500,
                fontSize: "14px",
              }}
            >
              Verify KYC to Receive Payouts{" "}
            </span>
            <span
              className="m-0 font-freesans "
              style={{
                color: "#8E8E8E",
                fontWeight: 400,
                fontSize: "12px",
              }}
            >
              To receive your Launch My Store payouts timely and securely,
              please verify your KYC with Launch My Store.
            </span>
          </div>

          <button
            className="cursor-pointer"
            style={{
              backgroundColor: "#FF5353",
              color: "#FFF",
              padding: "10px 16px",
              borderRadius: "4px",
            }}
          >
            Complete KYC{" "}
          </button>
        </div>
      </div>
    </div>
  );
}
