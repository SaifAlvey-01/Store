import React from "react";

export default function SupportAndSocial() {
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
          Support & Social
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
        <span
          className="font-freesans"
          style={{
            color: "#4B4B4B",
            fontWeight: 500,
            fontSize: "14px",
          }}
        >
          Customer Support{" "}
        </span>

        <div className="mt-8">
          <span
            className="font-freesans"
            style={{
              color: "#4B4B4B",
              fontWeight: 500,
              fontSize: "14px",
            }}
          >
            Email{" "}
          </span>
          <input
            style={{ border: "1.5px solid #E5E7EB" }}
            type="email"
            id="email"
            className="bg-gray-50 text-gray-900 text-sm rounded-lg block w-[80%] px-4 py-3 mt-1"
            placeholder="nftwatcher022@gmail.com"
            required
          />
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
        <span
          className="font-freesans"
          style={{
            color: "#4B4B4B",
            fontWeight: 500,
            fontSize: "14px",
          }}
        >
          Social Profiles{" "}
        </span>

        <div className="mt-8">
          <span
            className="font-freesans"
            style={{
              color: "#4B4B4B",
              fontWeight: 500,
              fontSize: "14px",
            }}
          >
            Facebook URL
          </span>
          <input
            style={{ border: "1.5px solid #E5E7EB", boxSizing: "border-box" }}
            type="text"
            id="facebook"
            className="bg-gray-50 text-gray-900 text-sm rounded-lg block w-full px-4 py-3 mt-1"
            placeholder="facebook.com/username"
            required
          />
        </div>

        <div className="mt-4">
          <span
            className="font-freesans"
            style={{
              color: "#4B4B4B",
              fontWeight: 500,
              fontSize: "14px",
            }}
          >
            Twitter URL
          </span>
          <input
            style={{ border: "1.5px solid #E5E7EB", boxSizing: "border-box" }}
            type="text"
            id="twitter"
            className="bg-gray-50 text-gray-900 text-sm rounded-lg block w-full px-4 py-3 mt-1"
            placeholder="twitter.com/username"
            required
          />
        </div>

        <div className="mt-4">
          <span
            className="font-freesans"
            style={{
              color: "#4B4B4B",
              fontWeight: 500,
              fontSize: "14px",
            }}
          >
            Instagram URL
          </span>
          <input
            style={{ border: "1.5px solid #E5E7EB", boxSizing: "border-box" }}
            type="text"
            id="instagram"
            className="bg-gray-50 text-gray-900 text-sm rounded-lg block w-full px-4 py-3 mt-1"
            placeholder="instagram.com/username"
            required
          />
        </div>

        <div className="mt-4">
          <span
            className="font-freesans"
            style={{
              color: "#4B4B4B",
              fontWeight: 500,
              fontSize: "14px",
            }}
          >
            LinkedIn URL
          </span>
          <input
            style={{ border: "1.5px solid #E5E7EB", boxSizing: "border-box" }}
            type="text"
            id="linkedin"
            className="bg-gray-50 text-gray-900 text-sm rounded-lg block w-full px-4 py-3 mt-1"
            placeholder="linkedin.com/username"
            required
          />
        </div>

        <div className="mt-4">
          <span
            className="font-freesans"
            style={{
              color: "#4B4B4B",
              fontWeight: 500,
              fontSize: "14px",
            }}
          >
            YouTube URL
          </span>
          <input
            style={{ border: "1.5px solid #E5E7EB", boxSizing: "border-box" }}
            type="text"
            id="youtube"
            className="bg-gray-50 text-gray-900 text-sm rounded-lg block w-full px-4 py-3 mt-1"
            placeholder="youtube.com/username"
            required
          />
        </div>

        <div className="mt-4">
          <span
            className="font-freesans"
            style={{
              color: "#4B4B4B",
              fontWeight: 500,
              fontSize: "14px",
            }}
          >
            Pinterest URL
          </span>
          <input
            style={{ border: "1.5px solid #E5E7EB", boxSizing: "border-box" }}
            type="text"
            id="pinterest"
            className="bg-gray-50 text-gray-900 text-sm rounded-lg block w-full px-4 py-3 mt-1"
            placeholder="pinterest.com/username"
            required
          />
        </div>
      </div>
    </div>
  );
}
