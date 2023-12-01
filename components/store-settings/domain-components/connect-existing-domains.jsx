import React, { useState } from "react";
import CustomDrawer from "../../drawer-contents/custom-drawer";
import { useDispatch } from "react-redux";
import { setShowConnectExistingDomain } from "../../../redux/slices/storeSettingsSlices/connectExistingDomain";

export default function ConnectExistingDomains({ setShowCustomDomain }) {
  const dispatch = useDispatch();
  const [showSidebar, setShowSidebar] = useState(false);
  const [contentType, setContentType] = useState("");

  const handleConnectDomain = () => {
    dispatch(setShowConnectExistingDomain(false));
    setShowCustomDomain(true);
  };

  return (
    <>
      <div
        className="min-h-[calc(100vh-180px)] sm:min-h-[calc(100% - 100px)] overflow-y-auto flex flex-col"
        style={{
          backgroundColor: "var(--white-color, #FFF)",
          borderRadius: "10px",
          boxShadow: `#00000011 0px 2px 4px 2px`,
          padding: "24px ",
        }}
      >
        <div className="flex flex-col items-start">
          <h3
            className="m-0 font-freesans"
            style={{
              color: "#4B4B4B",
              fontWeight: 600,
              fontSize: "16px",
            }}
          >
            DNS Configuration{" "}
          </h3>
          <p
            className="m-0 mt-1 font-freesans"
            style={{
              color: "#4B4B4B",
              fontWeight: 400,
              fontSize: "14px",
            }}
          >
            Please update both the A record of{" "}
            <a className="text-[#4162FF]" href="#">
              raynaz.com
            </a>{" "}
            to the following settings:{" "}
          </p>
        </div>

        <div
          style={{
            border: "1px solid #EAECF0",
            padding: "14px",
            borderRadius: "8px",
            width: "50%",
          }}
          className="mt-6"
        >
          <span
            className="font-freesans mb-2"
            style={{
              color: "#4B4B4B",
              fontWeight: 500,
              fontSize: "14px",
            }}
          >
            Record 01{" "}
          </span>
          <div className="grid gap-6 md:grid-cols-2 mt-6">
            <div>
              <span
                className="font-freesans"
                style={{
                  color: "#4B4B4B",
                  fontWeight: 500,
                  fontSize: "14px",
                }}
              >
                Type{" "}
              </span>
              <input
                className="bg-[#F5F5F5] border-2 border-[#E5E7EB] text-gray-900 text-sm rounded-[10px] block w-full px-4 py-2.5 mt-1 placeholder-gray-300  focus:outline-none"
                style={{
                  border: "1.5px solid #E5E7EB",
                  boxSizing: "border-box",
                }}
                onFocus={(e) => (e.target.style.borderColor = "#bdbfc0")}
                onBlur={(e) => (e.target.style.borderColor = "#E5E7EB")}
                placeholder="A"
                required
              />
            </div>
            <div>
              <span
                className="font-freesans"
                style={{
                  color: "#4B4B4B",
                  fontWeight: 500,
                  fontSize: "14px",
                }}
              >
                Host{" "}
              </span>
              <input
                className="bg-[#F5F5F5] border-2 border-[#E5E7EB] text-gray-900 text-sm rounded-[10px] block w-full px-4 py-2.5 mt-1 placeholder-gray-300  focus:outline-none"
                style={{
                  border: "1.5px solid #E5E7EB",
                  boxSizing: "border-box",
                }}
                onFocus={(e) => (e.target.style.borderColor = "#bdbfc0")}
                onBlur={(e) => (e.target.style.borderColor = "#E5E7EB")}
                placeholder="@"
                required
              />
            </div>
            <div className="relative">
              <span
                className="font-freesans"
                style={{
                  color: "#4B4B4B",
                  fontWeight: 500,
                  fontSize: "14px",
                }}
              >
                Points to{" "}
              </span>
              <input
                className="bg-[#F5F5F5] border-2 border-[#E5E7EB] text-gray-900 text-sm rounded-[10px] block w-full px-4 py-2.5 mt-1 placeholder-gray-300  focus:outline-none"
                style={{
                  paddingRight: "30px",
                  border: "1.5px solid #E5E7EB",
                  boxSizing: "border-box",
                }}
                onFocus={(e) => (e.target.style.borderColor = "#bdbfc0")}
                onBlur={(e) => (e.target.style.borderColor = "#E5E7EB")}
                placeholder="103.181.194.5"
                required
              />
              <img
                src="/copy-broken.png"
                alt="Description"
                className="absolute right-3 top-[66%] transform -translate-y-1/2 w-5 h-5"
              />
            </div>
            <div>
              <span
                className="font-freesans"
                style={{
                  color: "#4B4B4B",
                  fontWeight: 500,
                  fontSize: "14px",
                }}
              >
                TTL{" "}
              </span>
              <input
                className="bg-[#F5F5F5] border-2 border-[#E5E7EB] text-gray-900 text-sm rounded-[10px] block w-full px-4 py-2.5 mt-1 placeholder-gray-300  focus:outline-none"
                style={{
                  border: "1.5px solid #E5E7EB",
                  boxSizing: "border-box",
                }}
                onFocus={(e) => (e.target.style.borderColor = "#bdbfc0")}
                onBlur={(e) => (e.target.style.borderColor = "#E5E7EB")}
                placeholder="1 Hour"
                required
              />
            </div>
          </div>
        </div>

        <div
          style={{
            border: "1px solid #EAECF0",
            padding: "14px",
            borderRadius: "8px",
            width: "50%",
          }}
          className="mt-4"
        >
          <span
            className="font-freesans mb-2"
            style={{
              color: "#4B4B4B",
              fontWeight: 500,
              fontSize: "14px",
            }}
          >
            Record 02{" "}
          </span>
          <div className="grid gap-6 md:grid-cols-2 mt-6">
            <div>
              <span
                className="font-freesans"
                style={{
                  color: "#4B4B4B",
                  fontWeight: 500,
                  fontSize: "14px",
                }}
              >
                Type{" "}
              </span>
              <input
                className="bg-[#F5F5F5] border-2 border-[#E5E7EB] text-gray-900 text-sm rounded-[10px] block w-full px-4 py-2.5 mt-1 placeholder-gray-300  focus:outline-none"
                style={{
                  border: "1.5px solid #E5E7EB",
                  boxSizing: "border-box",
                }}
                onFocus={(e) => (e.target.style.borderColor = "#bdbfc0")}
                onBlur={(e) => (e.target.style.borderColor = "#E5E7EB")}
                placeholder="A"
                required
              />
            </div>
            <div>
              <span
                className="font-freesans"
                style={{
                  color: "#4B4B4B",
                  fontWeight: 500,
                  fontSize: "14px",
                }}
              >
                Host{" "}
              </span>
              <input
                className="bg-[#F5F5F5] border-2 border-[#E5E7EB] text-gray-900 text-sm rounded-[10px] block w-full px-4 py-2.5 mt-1 placeholder-gray-300  focus:outline-none"
                style={{
                  border: "1.5px solid #E5E7EB",
                  boxSizing: "border-box",
                }}
                onFocus={(e) => (e.target.style.borderColor = "#bdbfc0")}
                onBlur={(e) => (e.target.style.borderColor = "#E5E7EB")}
                placeholder="@"
                required
              />
            </div>
            <div className="relative">
              <span
                className="font-freesans"
                style={{
                  color: "#4B4B4B",
                  fontWeight: 500,
                  fontSize: "14px",
                }}
              >
                Points to{" "}
              </span>
              <input
                className="bg-[#F5F5F5] border-2 border-[#E5E7EB] text-gray-900 text-sm rounded-[10px] block w-full px-4 py-2.5 mt-1 placeholder-gray-300  focus:outline-none"
                style={{
                  paddingRight: "30px",
                  border: "1.5px solid #E5E7EB",
                  boxSizing: "border-box",
                }}
                onFocus={(e) => (e.target.style.borderColor = "#bdbfc0")}
                onBlur={(e) => (e.target.style.borderColor = "#E5E7EB")}
                placeholder="103.181.194.5"
                required
              />
              <img
                src="/copy-broken.png"
                alt="Description"
                className="absolute right-3 top-[66%] transform -translate-y-1/2 w-5 h-5"
              />
            </div>
            <div>
              <span
                className="font-freesans"
                style={{
                  color: "#4B4B4B",
                  fontWeight: 500,
                  fontSize: "14px",
                }}
              >
                TTL{" "}
              </span>
              <input
                className="bg-[#F5F5F5] border-2 border-[#E5E7EB] text-gray-900 text-sm rounded-[10px] block w-full px-4 py-2.5 mt-1 placeholder-gray-300  focus:outline-none"
                style={{
                  border: "1.5px solid #E5E7EB",
                  boxSizing: "border-box",
                }}
                onFocus={(e) => (e.target.style.borderColor = "#bdbfc0")}
                onBlur={(e) => (e.target.style.borderColor = "#E5E7EB")}
                placeholder="1 Hour"
                required
              />
            </div>
          </div>
        </div>

        <span
          className="font-freesans mt-5"
          style={{
            color: "#4B4B4B",
            fontWeight: 500,
            fontSize: "14px",
          }}
        >
          Note: It sometimes takes up to 24 hours for DNS records to propagate.{" "}
        </span>

        <div className="flex justify-start mt-10">
          {" "}
          <button
            onClick={handleConnectDomain}
            className="cursor-pointer"
            style={{
              backgroundColor: "#4162FF",
              color: "#ffffff",
              padding: "10px 36px",
              borderRadius: "4px",
            }}
          >
            Connect{" "}
          </button>
        </div>
      </div>
      <CustomDrawer
        key={contentType}
        showSidebar={showSidebar}
        setShowSidebar={setShowSidebar}
        contentType={contentType}
        setContentType={setContentType}
        setShowConnectExistingDomain={setShowConnectExistingDomain}
      />
    </>
  );
}
