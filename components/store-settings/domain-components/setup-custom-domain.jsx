import React, { useState } from "react";

export default function SetupCustomDomains({ setShowCustomDomain }) {
  const domainData = [
    { id: 1, name: "raynaz.com", price: "₹1,499", originalPrice: "₹3,499" },
    { id: 2, name: "raynaz.com", price: "₹1,499", originalPrice: "₹3,499" },
    { id: 3, name: "raynaz.com", price: "₹1,499", originalPrice: "₹3,499" },
    { id: 4, name: "raynaz.com", price: "₹1,499", originalPrice: "₹3,499" },
    { id: 5, name: "raynaz.com", price: "₹1,499", originalPrice: "₹3,499" },
    { id: 6, name: "raynaz.com", price: "₹1,499", originalPrice: "₹3,499" },
    { id: 7, name: "raynaz.com", price: "₹1,499", originalPrice: "₹3,499" },
    { id: 8, name: "raynaz.com", price: "₹1,499", originalPrice: "₹3,499" },

    // Add more items as needed
  ];
  const [selectedDomain, setSelectedDomain] = useState(null);

  const handleRadioChange = (domainId) => {
    setSelectedDomain(domainId);
  };
  return (
    <>
      <div
        className="min-h-[calc(100vh-180px)] sm:min-h-[calc(100% - 100px)] overflow-y-auto flex flex-col w-full box-border"
        style={{
          backgroundColor: "var(--white-color, #FFF)",
          borderRadius: "10px",
          boxShadow: `#00000011 0px 2px 4px 2px`,
          padding: "20px ",
        }}
      >
        <div
          style={{
            borderRadius: "10px",
            background:
              "linear-gradient(0deg, rgba(255, 255, 255, 0.90) 0%, rgba(255, 255, 255, 0.90) 100%), #4162FF",
          }}
        >
          <div
            className="w-full flex flex-col items-center bg-cover rounded-lg overflow-hidden py-[4rem]"
            style={{
              background: `url("/domain-bg.png") 100% 100% / 100% 100% no-repeat`,
              borderRadius: "10px",
            }}
          >
            <h3 className="text-[#1C1C4B] text-[22px] font-bold m-0 font-freesans ">
              Get your own domain up and running in under 10 mins!
            </h3>

            <div className="flex flex-row justify-between items-center px-6 mt-3">
              <div className="flex items-center ">
                <div
                  style={{ backgroundColor: "#FFF" }}
                  className="rounded-full mr-2 w-9 h-9 flex justify-center items-center"
                >
                  <div className="flex justify-center items-center p-1.5">
                    <img
                      src={"/lock.png"}
                      // alt={`Description for ${item.orderNumber}`}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                </div>
                <span
                  className="max-w-[6rem]"
                  style={{ color: "#4B4B4B", fontSize: "14px" }}
                >
                  Free SSL Certificate
                </span>
              </div>
              <div className="flex items-center mx-12">
                <div
                  style={{ backgroundColor: "#FFF" }}
                  className="rounded-full mr-2 w-9 h-9 flex justify-center items-center"
                >
                  <div className="flex justify-center items-center p-1.5">
                    <img
                      src={"/web.png"}
                      // alt={`Description for ${item.orderNumber}`}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                </div>
                <span
                  className="max-w-[8rem]"
                  style={{ color: "#4B4B4B", fontSize: "14px" }}
                >
                  Unlimited bandwidth & hosting
                </span>
              </div>
              <div className="flex items-center ">
                <div
                  style={{ backgroundColor: "#FFF" }}
                  className="rounded-full mr-2 w-9 h-9 flex justify-center items-center"
                >
                  <div className="flex justify-center items-center p-1.5">
                    <img
                      src={"/circle-p.png"}
                      // alt={`Description for ${item.orderNumber}`}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                </div>
                <span
                  className="max-w-[8rem]"
                  style={{ color: "#4B4B4B", fontSize: "14px" }}
                >
                  Your own brand Identity
                </span>
              </div>
            </div>

            <div className="relative mt-4 w-[44%]">
              <input
                className="bg-[#FFF] text-gray-900 text-sm rounded-[8px] block w-full px-3 py-3 mt-1 placeholder-gray-300  focus:outline-none"
                style={{
                  paddingRight: "30px",
                  border: "1.5px solid #D0D5DD",
                  boxSizing: "border-box",
                  boxShadow: "0px 1px 2px 0px rgba(16, 24, 40, 0.05)",
                }}
                onFocus={(e) => (e.target.style.borderColor = "#bdbfc0")}
                onBlur={(e) => (e.target.style.borderColor = "#E5E7EB")}
                placeholder="raynaz"
                required
              />
              <img
                src="/search-status.png"
                alt="Description"
                className="absolute right-3 top-[53%] transform -translate-y-1/2 w-5 h-5 cursor-pointer"
              />
            </div>

            <span
              className="mt-3"
              style={{ color: "#4B4B4B", fontSize: "14px" }}
            >
              4000+ sellers have already bought their domain on LaunchMyStore{" "}
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
          <div className="flex flex-row justify-between w-full">
            <h3 className="text-[#4B4B4B] text-[16px] font-bold m-0 font-freesans ">
              Choose your domain name{" "}
            </h3>
            <span className="text-[#4162FF] text-[13px] font-medium m-0 font-freesans ">
              or connect existing domain
            </span>
          </div>
          <div className="grid gap-6 md:grid-cols-2 my-5">
            {domainData.map((domain) => (
              <div key={domain.id} className="w-full box-border">
                <div
                  style={{
                    border: "1px solid #EAECF0",
                    padding: "14px",
                    borderRadius: "8px",
                    backgroundColor: "#F9FAFF",
                  }}
                >
                  <div className="flex justify-between items-center">
                    <div className="font-freesans flex flex-col items-start justify-start">
                      <span
                        className={`font-freesans mb-1.5 ${
                          selectedDomain === domain.id
                            ? "text-[#4162FF]"
                            : "text-[#4B4B4B]"
                        }`}
                        style={{
                          fontWeight: 500,
                          fontSize: "14px",
                        }}
                      >
                        {domain.name}{" "}
                      </span>

                      <div className="flex flex-row items-center">
                        <span
                          className={`font-freesans mr-1.5 ${
                            selectedDomain === domain.id
                              ? "text-[#4162FF]"
                              : "text-[#4B4B4B]"
                          }`}
                          style={{
                            fontWeight: 400,
                            fontSize: "13px",
                          }}
                        >
                          {domain.price}{" "}
                        </span>
                        <span
                          className={`m-0 font-freesans ${
                            selectedDomain === domain.id
                              ? "text-[#7A91FF]"
                              : "text-[#8E8E8E]"
                          }`}
                          style={{
                            fontWeight: 400,
                            fontSize: "12px",
                            textDecoration: "line-through",
                          }}
                        >
                          {domain.originalPrice}{" "}
                        </span>
                      </div>
                    </div>
                    <input
                      type="radio"
                      id={`radio-${domain.id}`}
                      value=""
                      name="radio-group"
                      className="w-4 h-4 m-0 cursor-pointer text-blue-600 bg-gray-100 border-gray-300 dark:ring-offset-gray-800  dark:bg-gray-700 dark:border-gray-600 outline-none"
                      onChange={() => handleRadioChange(domain.id)}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
