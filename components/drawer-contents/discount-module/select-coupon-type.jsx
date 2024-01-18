import React, { useState } from "react";

export default function SelectCouponType({ setContentType }) {
  const [selectedRadio, setSelectedRadio] = useState(1);

  const coupons = [
    {
      id: 1,
      image: "/percentage.png",
      bgColor: "#ECEFFF",
      name: "Percentage Discount",
      description: "Offer a percentage discount to your customers.",
    },
    {
      id: 2,
      image: "/flat.png",
      bgColor: "#EDFFF5",
      name: "Flat Discount",
      description: "Offer a fixed discount to your customers.",
    },
    {
      id: 3,
      image: "/buy-cart.png",
      bgColor: "#FFEEFE",
      name: "Buy X Get Y Free",
      description: "Offer free product on purchase of certain number of items.",
    },
    {
      id: 4,
      image: "/shipping.png",
      bgColor: "#FEF9EC",
      name: "Free Shipping",
      description: "Offer free shipping to your customers.",
    },
    {
      id: 5,
      image: "/freebie.png",
      bgColor: "#EBF8F5",
      name: "Freebie",
      description:
        "Offer free item on every purchase or above a certain amount.",
    },
  ];

  const handleNextButtonClick = () => {
    updateContentType(selectedRadio);
  };

  const updateContentType = (selectedRadio) => {
    switch (selectedRadio) {
      case 1:
        setContentType("percentage-discount");
        break;
      case 2:
        setContentType("flat-discount");
        break;
      case 3:
        setContentType("buyX-getY-free-discount");
        break;
      case 4:
        setContentType("free-shipping-discount");
        break;
      case 5:
        setContentType("freebie-discount");
        break;
      default:
        break;
    }
  };

  return (
    <div className="flex flex-col h-screen">
      {" "}
      <div className="flex justify-between items-center">
        <div className="flex flex-col items-start mt-4">
          <h3
            className="m-0"
            style={{ fontSize: "17px", fontWeight: "normal" }}
          >
            Select Coupon Type{" "}
          </h3>
        </div>
      </div>
      <div
        className="flex-1 overflow-y-auto pb-[80px] mt-6"
        style={{ overflowY: "scroll" }}
      >
        {coupons.map((coupon) => (
          <div key={coupon.id} className="mt-6">
            <div className="flex flex-row justify-between items-center">
              <div className="flex items-center w-full">
                <div
                  style={{ backgroundColor: coupon.bgColor }}
                  className="rounded-full w-14 h-12 flex justify-center items-center"
                >
                  <div className="flex flex-row justify-center items-center p-2.5">
                    <img
                      src={coupon.image}
                      className="max-w-full max-h-full object-contain"
                      alt="Percentage"
                    />
                  </div>
                </div>
                <div className="flex flex-col w-full ml-2">
                  <span
                    className="mb-1.5 font-medium"
                    style={{ color: "#4B4B4B", fontSize: "14px" }}
                  >
                    {coupon.name}
                  </span>
                  <p
                    style={{ color: "#8E8E8E", fontSize: "12px" }}
                    className="m-0 w-full"
                  >
                    {coupon.description}
                  </p>
                </div>
              </div>
              <input
                checked={selectedRadio === coupon.id}
                onChange={() => setSelectedRadio(coupon.id)}
                type="radio"
                value=""
                name="radio-group"
                className="w-5 h-5 mx-4 cursor-pointer text-blue-600 bg-gray-100 border-gray-300 dark:ring-offset-gray-800  dark:bg-gray-700 dark:border-gray-600 outline-none"
              />
            </div>
          </div>
        ))}
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
          onClick={handleNextButtonClick}
          className="bg-blue-600 text-white px-7 py-2.5 rounded cursor-pointer"
        >
          Next{" "}
        </button>
      </div>
    </div>
  );
}
