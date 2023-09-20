import React from "react";

export default function index() {
  return (
    <div className="p-4 mt-2">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h1
          style={{ color: "#4B4B4B", fontSize: "52px", fontWeight: 600 }}
          className="font-leagueGothic m-0 mb-2"
        >
          401 Error
        </h1>
        <h3
          style={{ color: "#4B4B4B", fontSize: "24px" }}
          className="font-lato m-0 mb-2"
        >
          You are not authorized!{" "}
        </h3>
        <p
          style={{
            color: "#8E8E8E",
            fontSize: "14px",
            textAlign: "center",
            maxWidth: "650px",
            lineHeight: 1.5,
          }}
          className="font-lato m-0 mb-6"
        >
          You do not have permission to view this page using the credentials
          that you have provided while login. Please contact your site
          administrator.
        </p>
        <button
          className="cursor-pointer"
          style={{
            backgroundColor: "#4162FF",
            color: "#ffffff",
            padding: "10px 20px",
            borderRadius: "4px",
          }}
        >
          Back to Home{" "}
        </button>
      </div>
      <div
        style={{
          background: "linear-gradient(4deg, #f6f6f6  45%, transparent 45%)",
          height: "128vh",
          width: "100vw",
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: -1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {" "}
        <img
          className="h-[450px] w-auto"
          src={"/error401.png"}
          alt="404-error"
        />
      </div>
    </div>
  );
}
