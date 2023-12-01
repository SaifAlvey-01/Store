import React, { useState } from "react";
import UpgradeYourPlanModal from "../../modals/upgrade-your-plan-modal";
import CustomDrawer from "../../drawer-contents/custom-drawer";
import ManualPaymentEditDropdown from "../../dropdowns/manual-payment-edit-dropdown";

export default function Payments() {
  const [showSidebar, setShowSidebar] = useState(false);
  const [contentType, setContentType] = useState("");
  const [showUpgradeYourPlanModal, setShowUpgradeYourPlanModal] =
    useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showManualPaymentTest, setShowManualPaymentTest] = useState(false);

  const data = [
    {
      image: "/razorpay.png",
      title: "Razorpay",
      description:
        "Integrate Razorpay with your account and take online payments seamlessly into your bank account.",
    },
    {
      image: "/stripe.png",
      title: "Stripe",
      description:
        "Integrate stripe with your account and take online payments seamlessly into your bank account.",
    },
    {
      image: "/paypal.png",
      title: "Paypal",
      description:
        "Integrate paypal with your account and take online payments seamlessly into your bank account.",
    },
  ];

  const handleUpgradeYourPlan = () => {
    setShowUpgradeYourPlanModal(true);
  };

  const handleOpenDropdown = () => {
    setShowDropdown(true);
  };

  const handleCloseDropdown = () => {
    setShowDropdown(false);
  };

  const handleSetUpButtonClick = () => {
    setShowManualPaymentTest(true);
  };

  return (
    <>
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
            Payments
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
          <div className="flex justify-between items-center">
            <img
              style={{
                color: "#8E8E8E",
              }}
              src={"/payments-logo.png"}
            />

            <button
              className="cursor-pointer"
              style={{
                backgroundColor: "#E1E1E1",
                color: "#1F1F1F",
                padding: "6px 16px",
                borderRadius: "4px",
              }}
            >
              Details{" "}
            </button>
          </div>

          <div className="flex justify-between mt-8">
            <div className="w-1/2 flex flex-col items-start justify-between">
              <div className="flex mb-2 ">
                <span
                  style={{
                    color: "#8E8E8E",
                    fontSize: "14px",
                  }}
                  className="mb-2 font-roboto"
                >
                  Transaction Fee{" "}
                </span>
                <img src={"/question-circle.png"} className="ml-2 w-4 h-4" />
              </div>

              <div className="flex flex-row items-center">
                <span
                  style={{
                    color: "#8E8E8E",
                    fontSize: "14px",
                  }}
                  className="mr-1.5 font-roboto"
                >
                  1.49%
                </span>
                <span
                  onClick={handleUpgradeYourPlan}
                  className="font-roboto cursor-pointer"
                  style={{
                    color: "#7A91FF",
                    fontSize: "12px",
                  }}
                >
                  Reduce
                </span>
              </div>
            </div>

            <div className="w-1/2 flex flex-col items-start justify-between">
              <div className="flex mb-2">
                <span
                  style={{
                    color: "#8E8E8E",
                    fontSize: "14px",
                  }}
                  className="mb-2 font-roboto"
                >
                  Transaction Limit{" "}
                </span>
                <img src={"/question-circle.png"} className="ml-2 w-4 h-4" />
              </div>

              <div className="flex flex-row items-center">
                <span
                  style={{
                    color: "#8E8E8E",
                    fontSize: "14px",
                  }}
                  className="mr-1.5 font-roboto"
                >
                  ₹50,000{" "}
                </span>
                <span
                  className="font-roboto"
                  style={{
                    color: "#7A91FF",
                    fontSize: "12px",
                  }}
                >
                  Increase
                </span>
              </div>
            </div>
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
            className="font-freesans mb-2"
            style={{
              color: "#4B4B4B",
              fontWeight: 500,
              fontSize: "14px",
            }}
          >
            Other Payment Methods{" "}
          </span>

          <div className="flex flex-col mt-6">
            {data.map((item, index) => (
              <div
                key={index}
                className="flex justify-between items-center mb-4"
              >
                <div className="flex items-center">
                  {" "}
                  <div className="bg-[#E9F4FF] rounded-[6px] mr-3 w-8 h-8 flex items-center justify-center p-2.5">
                    <img
                      src={item.image}
                      alt={`Description for ${item.title}`}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                  <div className="flex flex-col w-[60%]">
                    {" "}
                    <span
                      className="mb-1"
                      style={{ color: "#4B4B4B", fontSize: "14px" }}
                    >
                      {item.title}
                    </span>
                    <p
                      style={{ color: "#8E8E8E", fontSize: "12px" }}
                      className="m-0"
                    >
                      {item.description}
                    </p>
                  </div>
                </div>

                {item.title === "Stripe" && (
                  <button
                    onClick={() => {
                      setShowSidebar(true);
                      setContentType("setup-stripe");
                    }}
                    className="cursor-pointer whitespace-nowrap"
                    style={{
                      backgroundColor: "#4162FF",
                      color: "#ffffff",
                      padding: "8px 12px",
                      borderRadius: "4px",
                      minWidth: "72px",
                    }}
                  >
                    Set Up
                  </button>
                )}
                {item.title !== "Stripe" && (
                  <button
                    className="cursor-pointer whitespace-nowrap"
                    style={{
                      backgroundColor: "#4162FF",
                      color: "#ffffff",
                      padding: "8px 12px",
                      borderRadius: "4px",
                      minWidth: "72px",
                    }}
                  >
                    Set Up
                  </button>
                )}
              </div>
            ))}

            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center">
                {" "}
                <div className="bg-[#FFF9EE] rounded-[6px] mr-3 w-8 h-8 flex items-center justify-center p-2.5">
                  <img
                    src={"/cash.png"}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <div className="flex flex-col w-[70%]">
                  {" "}
                  <span
                    className="mb-1"
                    style={{ color: "#4B4B4B", fontSize: "14px" }}
                  >
                    Cash on delivery{" "}
                  </span>
                  <p
                    style={{ color: "#8E8E8E", fontSize: "12px" }}
                    className="m-0"
                  >
                    Take payments in cash upon delivery.{" "}
                  </p>
                </div>
              </div>

              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" value="" className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-200 focus:ring-0 peer-focus:outline-none dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-300 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
              </label>
            </div>
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
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              {" "}
              <div className="bg-[#E9F4FF] rounded-[6px] mr-3 w-8 h-8 flex items-center justify-center p-2.5">
                <img
                  src={"/wallet-money.png"}
                  // alt={`Description for ${item.title}`}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <div className="flex flex-col w-[60%]">
                {" "}
                <span
                  className="mb-1"
                  style={{ color: "#4B4B4B", fontSize: "14px" }}
                >
                  Other Payment Methods{" "}
                </span>
                <p
                  style={{ color: "#8E8E8E", fontSize: "12px" }}
                  className="m-0"
                >
                  Payments that are made outside online store. Allows you to
                  accept cash, check or other custom forms of payment.{" "}
                </p>
              </div>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" value="" className="sr-only peer" />
              <div className="w-11 h-6 bg-gray-200 focus:ring-0 peer-focus:outline-none dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-300 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            </label>
          </div>

          {showManualPaymentTest && (
            <div className="flex justify-between items-center mt-6 mb-1">
              <div className="flex items-center">
                {" "}
                <div className="bg-[#FEF5FF] rounded-[6px] mr-3 w-8 h-8 flex items-center justify-center p-2.5">
                  <img
                    src={"/purple-wallet.png"}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>{" "}
                <span style={{ color: "#4B4B4B", fontSize: "14px" }}>
                  Manual Payment Test{" "}
                </span>
              </div>

              <div className="relative">
                <img
                  onClick={handleOpenDropdown}
                  src={"/menu-dots-round.png"}
                  className="max-w-full max-h-full object-contain cursor-pointer"
                />
                <ManualPaymentEditDropdown
                  isOpen={showDropdown}
                  onClose={handleCloseDropdown}
                />
              </div>
            </div>
          )}

          {!showManualPaymentTest && (
            <div
              style={{
                padding: "16px 16px 0px 16px",
                background: "white",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <button
                onClick={() => {
                  setShowSidebar(true);
                  setContentType("setup-manual-payment");
                }}
                className="w-[40%] cursor-pointer"
                style={{
                  backgroundColor: "#ffffff",
                  color: "#4162FF",
                  border: "1px dashed #4162FF ",
                  padding: "8px 12px",
                  borderRadius: "4px",
                  fontSize: "12px",
                }}
              >
                Add Manual Payment Method{" "}
              </button>
            </div>
          )}
        </div>
      </div>

      <UpgradeYourPlanModal
        isOpen={showUpgradeYourPlanModal}
        onClose={() => setShowUpgradeYourPlanModal(false)}
      />

      <CustomDrawer
        key={contentType}
        showSidebar={showSidebar}
        setShowSidebar={setShowSidebar}
        contentType={contentType}
        setContentType={setContentType}
        onSetUpButtonClick={handleSetUpButtonClick}
      />
    </>
  );
}
