import React, { useState } from "react";
import UpgradeToPlatinumModal from "../../modals/upgrade-to-platinum-modal";
import PaymentMethodModal from "../../modals/payment-method-modal";
import UpgradePlanSuccess from "./upgrade-plan-success";
import { useEffect } from "react";

export default function UpgradePlans({ setActiveDiv, setShowUpgradePlan }) {
  const [activeTab, setActiveTab] = useState("quarterly");
  const [showUpgradePlatinumModal, setShowUpgradePlatinumModal] =
    useState(false);
  const [showPaymentMethodModal, setShowPaymentMethodModal] = useState(false);
  const [showUpgradePlanSuccess, setShowUpgradePlanSuccess] = useState(false);

  const items = [
    { label: "Online Store", image: "/check.png" },
    { label: "Custom Domain", image: "/check.png" },
    { label: "Premium Themes", image: "/check.png" },
    { label: "Products", image: "/check.png" },
    { label: "Sales Channels", image: "/subtract.png" },
  ];

  const imageTextData = [
    {
      imageSrc: "/checkmark.png",
      text: "Return & Exchange Management For a Seamless e-commerce experience.",
    },
    {
      imageSrc: "/checkmark.png",
      text: "Easy integrate with leading WMS, ERP & Financial Tools.",
    },
    {
      imageSrc: "/checkmark.png",
      text: "Custom themes, plugins & 3rd party integrations B2B or B2C Marketplace.",
    },
    {
      imageSrc: "/checkmark.png",
      text: "Dedicated account managers for 24x7 assistance.",
    },
    // Add more items as needed
  ];

  const handleUpgradePlan = () => {
    setShowUpgradePlatinumModal(true);
  };

  const handleMoveToPayNow = () => {
    setShowUpgradePlatinumModal(false);
    setShowPaymentMethodModal(true);
  };

  const handlePayNow = () => {
    setShowUpgradePlatinumModal(false);
    setShowPaymentMethodModal(true);
    setShowUpgradePlanSuccess(true);
    setShowPaymentMethodModal(false);
  };

  useEffect(() => {
    if (showUpgradePlanSuccess) {
      const timeoutId = setTimeout(() => {
        setShowUpgradePlanSuccess(false);
      }, 2000);

      return () => clearTimeout(timeoutId);
    }
  }, [showUpgradePlanSuccess]);

  const handleGetInTouch = () => {
    setActiveDiv("preferences");
    setShowUpgradePlan(false);
  };

  return (
    <>
      {!showUpgradePlanSuccess && (
        <div
          className="min-h-[calc(106vh-130px)] sm:min-h-[calc(100% - 100px)] p-5 overflow-y-auto flex flex-col items-center justify-between "
          style={{
            backgroundColor: "var(--white-color, #FFF)",
            borderRadius: "10px",
            boxShadow: `#00000011 0px 2px 4px 2px`,
          }}
        >
          <div
            className="w-full"
            style={{
              border: "1px solid #EAECF0",
              backgroundColor: "var(--white-color, #FFF)",
              borderRadius: "10px",
              boxSizing: "border-box",
            }}
          >
            <div className="flex flex-col items-center justify-between ">
              <h3 className="font-freesans font-[400] text-[18px] text-[#4B4B4B] my-4">
                Upgrade to a plan that best suits your business requirements
              </h3>

              <div
                className="px-2 py-1 mt-2"
                style={{
                  borderRadius: "6px",
                  border: "1px solid #F3F4F6",
                  background: "#F9FAFB",
                  boxShadow: "0px 9px 16px 0px rgba(245, 250, 255, 0.04)",
                }}
              >
                <ul className="p-0 m-0 flex flex-wrap text-sm font-medium text-center text-gray-500 dark:text-gray-400 list-none">
                  <li class="me-1.5">
                    <a
                      href="#"
                      className={`inline-block px-4 py-1.5 rounded-[6px] text-[#9CA3AF] hover:bg-[#ECEFFF] hover:text-[#0A1F85] no-underline ${
                        activeTab === "quarterly"
                          ? "bg-[#ECEFFF] text-[#0A1F85]"
                          : ""
                      }`}
                      aria-current="page"
                      onClick={() => setActiveTab("quarterly")}
                    >
                      Quarterly{" "}
                    </a>
                  </li>
                  <li class="me-1.5">
                    <a
                      href="#"
                      className={`inline-block px-4 py-1.5 rounded-[6px] text-[#9CA3AF] hover:bg-[#ECEFFF] hover:text-[#0A1F85] no-underline ${
                        activeTab === "yearly"
                          ? "bg-[#ECEFFF] text-[#0A1F85]"
                          : ""
                      }`}
                      onClick={() => setActiveTab("yearly")}
                    >
                      Yearly (Save up to 25%){" "}
                    </a>
                  </li>
                </ul>
              </div>
              <div className="flex flex-row justify-between mt-5 w-full p-2 box-border">
                <div
                  className="w-[33%] mx-4 flex flex-col justify-between p-4 mt-12"
                  style={{
                    border: "1px solid #EDEDED",
                    backgroundColor: "#FFF",
                    borderRadius: "12px",
                    boxSizing: "border-box",
                  }}
                >
                  <div
                    className="font-freesans p-2.5"
                    style={{
                      color: "#0A1F85",
                      fontSize: "14px",
                      fontWeight: 700,
                      backgroundColor: "#F3F5FF",
                      borderRadius: "50px",
                      height: "30px",
                      width: "30px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    Silver{" "}
                  </div>

                  <div className="flex flex-col mt-4 font-freesans">
                    <span
                      style={{
                        color: "#0A1F85",
                        fontSize: "32px",
                        fontWeight: 700,
                      }}
                    >
                      {activeTab === "quarterly" ? "₹666" : "₹500"}
                      <span
                        className="font-freesans"
                        style={{
                          color: "#0A1F85",
                          fontSize: "18px",
                          fontWeight: 700,
                        }}
                      >
                        /month{" "}
                      </span>
                    </span>
                    <span
                      className="mt-1 font-freesans"
                      style={{
                        color: "#4B4B4B",
                        fontSize: "16px",
                        fontWeight: 400,
                      }}
                    >
                      {activeTab === "quarterly"
                        ? "Billed quarterly ₹1,999"
                        : "Billed yearly ₹5,999"}
                    </span>
                  </div>
                  <div className="flex flex-col w-full my-6">
                    {items.map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between w-full mb-1"
                      >
                        <div className="flex items-center">
                          <span className="mr-2 text-[26px] text-[#1C1C4B]  font-freesans">
                            &#8226;
                          </span>
                          <span className="mr-4 text-[14px] font-[500] text-[#1C1C4B] font-freesans">
                            {item.label}
                          </span>
                        </div>
                        <img
                          className="h-5 w-5"
                          src={item.image}
                          alt={`Image ${index + 1}`}
                        />
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col justify-center items-center ">
                    <button
                      className="mb-2 cursor-pointer"
                      style={{
                        backgroundColor: "#EEE",
                        color: "#4B4B4B",
                        padding: "14px 18px",
                        borderRadius: "12px",
                        fontSize: "16px",
                      }}
                    >
                      Choose Silver{" "}
                    </button>
                  </div>
                </div>

                <div
                  className="w-[33%] mx-4 flex flex-col justify-between overflow-hidden"
                  style={{
                    border: "1px solid #FF5353",
                    backgroundColor: "#FFF",
                    borderRadius: "12px",
                    boxSizing: "border-box",
                  }}
                >
                  <div className="font-freesans text-[18px] font-[400] text-white text-center bg-[#FF5353] overflow-hidden py-3.5 ">
                    Most Popular{" "}
                  </div>{" "}
                  <div className="p-4">
                    <div
                      className="font-freesans p-2.5"
                      style={{
                        color: "#0A1F85",
                        fontSize: "14px",
                        fontWeight: 700,
                        backgroundColor: "#F3F5FF",
                        borderRadius: "50px",
                        height: "30px",
                        width: "30px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      Gold{" "}
                    </div>
                    <div className="flex flex-col mt-4 font-freesans">
                      <span
                        style={{
                          color: "#0A1F85",
                          fontSize: "32px",
                          fontWeight: 700,
                        }}
                      >
                        {activeTab === "quarterly" ? "₹1,166" : "₹833"}
                        <span
                          className="font-freesans"
                          style={{
                            color: "#0A1F85",
                            fontSize: "18px",
                            fontWeight: 700,
                          }}
                        >
                          /month{" "}
                        </span>
                      </span>
                      <span
                        className="mt-1 font-freesans"
                        style={{
                          color: "#4B4B4B",
                          fontSize: "16px",
                          fontWeight: 400,
                        }}
                      >
                        {activeTab === "quarterly"
                          ? "Billed quarterly ₹3,499"
                          : "Billed yearly ₹9,999"}
                      </span>
                    </div>
                    <div className="flex flex-col w-full my-4">
                      {items.map((item, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between w-full mb-1"
                        >
                          <div className="flex items-center">
                            <span className="mr-2 text-[26px] text-[#1C1C4B]  font-freesans">
                              &#8226;
                            </span>
                            <span className="mr-4 text-[14px] font-[500] text-[#1C1C4B] font-freesans">
                              {item.label}
                            </span>
                          </div>
                          <img
                            className="h-5 w-5"
                            src={item.image}
                            alt={`Image ${index + 1}`}
                          />
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-col justify-center items-center ">
                      <button
                        className="mb-2 cursor-pointer"
                        style={{
                          backgroundColor: "#ECEFFF",
                          color: "#0A1F85",
                          padding: "14px 18px",
                          borderRadius: "12px",
                          fontSize: "16px",
                        }}
                      >
                        Current Plan{" "}
                      </button>
                    </div>
                  </div>
                </div>

                <div
                  className="w-[33%] mx-4 flex flex-col justify-between p-4 mt-12"
                  style={{
                    border: "1px solid #EDEDED",
                    backgroundColor: "#FFF",
                    borderRadius: "12px",
                    boxSizing: "border-box",
                  }}
                >
                  <div
                    className="font-freesans p-3.5"
                    style={{
                      color: "#0A1F85",
                      fontSize: "12px",
                      fontWeight: 700,
                      backgroundColor: "#F3F5FF",
                      borderRadius: "50px",
                      height: "30px",
                      width: "30px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    Platinum{" "}
                  </div>
                  <div className="flex flex-col mt-4 font-freesans">
                    <span
                      style={{
                        color: "#0A1F85",
                        fontSize: "32px",
                        fontWeight: 700,
                      }}
                    >
                      {activeTab === "quarterly" ? "₹3,333" : "₹2,500"}
                      <span
                        className="font-freesans"
                        style={{
                          color: "#0A1F85",
                          fontSize: "18px",
                          fontWeight: 700,
                        }}
                      >
                        /month{" "}
                      </span>
                    </span>
                    <span
                      className="mt-1 font-freesans"
                      style={{
                        color: "#4B4B4B",
                        fontSize: "16px",
                        fontWeight: 400,
                      }}
                    >
                      {activeTab === "quarterly"
                        ? "Billed quarterly ₹9,999"
                        : "Billed yearly ₹29,999"}
                    </span>
                  </div>
                  <div className="flex flex-col w-full my-6">
                    {items.map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between w-full mb-1"
                      >
                        <div className="flex items-center">
                          <span className="mr-2 text-[26px] text-[#1C1C4B]  font-freesans">
                            &#8226;
                          </span>
                          <span className="mr-4 text-[14px] font-[500] text-[#1C1C4B] font-freesans">
                            {item.label}
                          </span>
                        </div>
                        <img
                          className="h-5 w-5"
                          src={item.image}
                          alt={`Image ${index + 1}`}
                        />
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col justify-center items-center ">
                    <button
                      onClick={handleUpgradePlan}
                      className="mb-2 cursor-pointer"
                      style={{
                        backgroundColor: "#FF5353",
                        color: "#FFF",
                        padding: "14px 20px",
                        borderRadius: "12px",
                        fontSize: "16px",
                      }}
                    >
                      Upgrade{" "}
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex flex-row justify-between mt-5 w-full p-5 box-border">
                <div
                  className="w-full box-border px-6 py-4 flex flex-row "
                  style={{
                    background:
                      "linear-gradient(90deg, #1F1D2B 0%, #3A364F 101.13%)",
                    borderRadius: "12px",
                    border: "1px solid #EDEDED",
                  }}
                >
                  <div className="w-[65%] mx-8 flex flex-col justify-center">
                    {" "}
                    <div>
                      <img src={"/white-logo.png"} className="w-52 h-10" />
                    </div>
                    <p className="text-[#FAFAFA] text-[16px] font-freesans">
                      The LaunchMyStore enterprise plan helps you scale your
                      business with advanced features and more flexible
                      controls.
                    </p>
                    <div className="flex flex-col">
                      {imageTextData.map((item, index) => (
                        <div
                          key={index}
                          className="py-2 flex flex-row items-center"
                        >
                          <img
                            src={item.imageSrc}
                            className="w-4 h-4 object-cover mr-3"
                            alt={`Image ${index + 1}`}
                          />
                          <p className="text-[#FAFAFA] text-[16px] font-freesans m-0">
                            {item.text}
                          </p>
                        </div>
                      ))}
                    </div>
                    <div
                      className="mt-10"
                      style={{
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <button
                        style={{ border: "1px dashed #fff" }}
                        className="bg-transparent text-white px-7 py-2 rounded-[4px] cursor-pointer mr-3"
                      >
                        Learn More{" "}
                      </button>
                      <button
                        onClick={handleGetInTouch}
                        className="bg-white text-[#4B4B4B] px-7 py-2 rounded-[4px] cursor-pointer"
                      >
                        Get In Touch{" "}
                      </button>
                    </div>
                  </div>
                  <div className="w-[40%]">
                    {" "}
                    <div className="p-6">
                      <img
                        src="/megaPhone.png"
                        className="w-full h-full object-cover"
                        alt="Mega Phone"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <UpgradeToPlatinumModal
            isOpen={showUpgradePlatinumModal}
            onClose={() => setShowUpgradePlatinumModal(false)}
            activeTab={activeTab}
            onPayNow={handleMoveToPayNow}
          />

          <PaymentMethodModal
            isOpen={showPaymentMethodModal}
            onClose={() => setShowPaymentMethodModal(false)}
            onPayNow={handlePayNow}
          />
        </div>
      )}
      {/* UpgradePlanSuccess */}
      {showUpgradePlanSuccess && <UpgradePlanSuccess />}
    </>
  );
}
