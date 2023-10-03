import React from "react";

export default function Languages() {
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
          Languages
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
          padding: "14px",
          borderRadius: "8px",
        }}
        className="mt-6"
      >
        <div className="font-freesans flex flex-col items-start justify-start">
          <span
            className="font-freesans mb-2"
            style={{
              color: "#4B4B4B",
              fontWeight: 500,
              fontSize: "14px",
            }}
          >
            Languages{" "}
          </span>
          <span
            className="m-0 font-freesans"
            style={{
              color: "#8E8E8E",
              fontWeight: 400,
              fontSize: "12px",
            }}
          >
            These will be the languages in which your online store will be
            translated.{" "}
          </span>
        </div>

        <div className="flex justify-between items-center mt-8">
          <div className="font-freesans flex flex-col items-start justify-start">
            <span
              className="font-freesans mb-2"
              style={{
                color: "#4B4B4B",
                fontWeight: 500,
                fontSize: "14px",
              }}
            >
              English{" "}
            </span>
            <div
              className="flex items-center p-1.5"
              style={{ borderRadius: "16px", background: "#ECFDF3" }}
            >
              <img
                style={{
                  color: "#8E8E8E",
                }}
                src={"/dot.png"}
                className="mr-1 w-2 h-2"
              />

              <span
                style={{
                  color: "#47B263",
                  fontSize: "12px",
                }}
              >
                Primary{" "}
              </span>
            </div>
          </div>
          <span
            style={{
              color: "#4162FF",
              fontSize: "12px",
              cursor: "pointer",
            }}
          >
            Preview{" "}
          </span>
        </div>

        <div className="flex justify-between items-center mt-6">
          <span
            className="font-freesans mb-2"
            style={{
              color: "#4B4B4B",
              fontWeight: 500,
              fontSize: "14px",
            }}
          >
            Arabic{" "}
          </span>

          <img
            style={{
              color: "#8E8E8E",
            }}
            src={"/menu-dots.png"}
            className="mr-1 w-5 h-5"
          />
        </div>

        <div className="flex justify-center w-full mt-4 ">
          <button
            className="cursor-pointer"
            style={{
              backgroundColor: "#ffffff",
              color: "#4B4B4B",
              padding: "8px 12px",
              borderRadius: "4px",
              border: "1px dashed #8E8E8E",
            }}
          >
            Add More Languages{" "}
          </button>
        </div>
      </div>
    </div>
  );
}
