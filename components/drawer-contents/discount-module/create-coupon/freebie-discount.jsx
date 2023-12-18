import React, { useState } from "react";
import ApplyCouponSelect from "../../../dropdown-selects/apply-coupon-select";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function FreebieDiscount({ setShowSidebar }) {
  const [isChecked, setIsChecked] = useState(false);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);

  const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
    setSelectedDate(start);
    setShowDatePicker(false);
  };

  const handleInputClick = () => {
    setShowDatePicker(true);
  };

  const handleDatePickerOutsideClick = () => {
    setShowDatePicker(false);
  };

  const data = [
    {
      label: "Show coupon to customer",
      imageSrc: "/question-circle.png",
      checkboxId: "checkbox1",
    },
    {
      label: "Valid only for online payments",
      imageSrc: "/question-circle.png",
      checkboxId: "checkbox2",
    },
    {
      label: "Valid only for new customers",
      imageSrc: "/question-circle.png",
      checkboxId: "checkbox3",
    },
    {
      label: "Auto apply coupon",
      imageSrc: "/question-circle.png",
      checkboxId: "checkbox4",
    },
  ];

  return (
    <div className="flex flex-col h-screen">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <h3 style={{ fontSize: "18px", fontWeight: "normal" }}>
            Create Coupon{" "}
          </h3>
        </div>
      </div>

      <div
        className="flex-1 overflow-y-auto pb-[80px]"
        style={{ overflowY: "scroll" }}
      >
        <div className="mt-4">
          <span
            className="font-freesans"
            style={{
              color: "#4B4B4B",
              fontWeight: 500,
              fontSize: "13px",
            }}
          >
            Coupon Code{" "}
            <span
              style={{
                color: "#FF3A3A",
                fontSize: "14px",
                fontWeight: "bold",
              }}
            >
              *
            </span>
          </span>
          <input
            className="bg-[#FFF] text-gray-900 text-sm rounded-[10px] block w-full px-4 py-2.5 mt-1 placeholder-gray-300  focus:outline-none"
            style={{
              border: "1.5px solid #E5E7EB",
              boxSizing: "border-box",
            }}
            onFocus={(e) => (e.target.style.borderColor = "#bdbfc0")}
            onBlur={(e) => (e.target.style.borderColor = "#E5E7EB")}
            placeholder="Enter Coupon Code"
            required
          />
        </div>

        <div className="mt-6">
          <span
            className="font-freesans"
            style={{
              color: "#4B4B4B",
              fontWeight: 500,
              fontSize: "13px",
            }}
          >
            Uses Per Customer{" "}
            <span
              style={{
                color: "#FF3A3A",
                fontSize: "14px",
                fontWeight: "bold",
              }}
            >
              *
            </span>
          </span>
          <input
            className="bg-[#FFF] text-gray-900 text-sm rounded-[10px] block w-full px-4 py-2.5 mt-1 placeholder-gray-300  focus:outline-none"
            style={{
              border: "1.5px solid #E5E7EB",
              boxSizing: "border-box",
            }}
            onFocus={(e) => (e.target.style.borderColor = "#bdbfc0")}
            onBlur={(e) => (e.target.style.borderColor = "#E5E7EB")}
            placeholder="Number of Times Uses Per Customer"
            required
          />
        </div>

        <div className=" flex flex-col mt-6">
          <span
            className="font-freesans mb-4"
            style={{
              color: "#4B4B4B",
              fontWeight: 500,
              fontSize: "16px",
            }}
          >
            Coupon Functionality{" "}
          </span>

          <div className="mt-1">
            {data.map((item, index) => (
              <div
                className="flex justify-between items-center mb-5"
                key={index}
              >
                <div className="flex flex-row items-center">
                  <span
                    className="mr-2 font-roboto"
                    style={{
                      color: "#4B5563",
                      fontWeight: 400,
                      fontSize: "14px",
                    }}
                  >
                    {item.label}
                  </span>
                  <img src={item.imageSrc} className="w-4 h-4" />
                </div>

                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    value=""
                    className="sr-only peer"
                    id={item.checkboxId}
                  />
                  <div className="w-9 h-5 bg-gray-200 focus:ring-0 peer-focus:outline-none dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-300 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                </label>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col relative mt-4">
          <span
            className="font-freesans mb-6"
            style={{
              color: "#4B4B4B",
              fontWeight: 500,
              fontSize: "16px",
            }}
          >
            Coupon Validity{" "}
          </span>
          <span
            className="font-freesans"
            style={{
              color: "#4B4B4B",
              fontWeight: 500,
              fontSize: "13px",
            }}
          >
            From
          </span>
          <input
            className="bg-[#FFF] cursor-pointer text-gray-900 text-sm rounded-[10px] block w-full px-4 py-2.5 mt-1 placeholder-gray-300  focus:outline-none"
            style={{
              paddingRight: "30px",
              border: "1.5px solid #E5E7EB",
              boxSizing: "border-box",
            }}
            onFocus={(e) => {
              e.target.style.borderColor = "#bdbfc0";
              handleInputClick();
            }}
            onBlur={(e) => (e.target.style.borderColor = "#E5E7EB")}
            placeholder="Select Date"
            required
            value={selectedDate ? selectedDate.toLocaleDateString() : ""}
          />
          <img
            src="/arrow-down.png"
            alt="Description"
            className={`absolute right-3 top-[80%] transform -translate-y-1/2 w-4 h-4 ${
              showDatePicker ? "hidden" : ""
            }`}
            onClick={handleInputClick}
          />
          {showDatePicker && (
            <DatePicker
              selected={selectedDate}
              onChange={onChange}
              startDate={startDate}
              endDate={endDate}
              selectsRange
              inline
              onClickOutside={handleDatePickerOutsideClick}
            />
          )}
        </div>

        <div className="mt-6">
          <span
            className="font-freesans"
            style={{
              color: "#4B4B4B",
              fontWeight: 500,
              fontSize: "13px",
            }}
          >
            Time{" "}
          </span>
          <input
            className="bg-[#FFF] text-gray-900 text-sm rounded-[10px] block w-full px-4 py-2.5 mt-1 placeholder-gray-300  focus:outline-none"
            style={{
              border: "1.5px solid #E5E7EB",
              boxSizing: "border-box",
            }}
            onFocus={(e) => (e.target.style.borderColor = "#bdbfc0")}
            onBlur={(e) => (e.target.style.borderColor = "#E5E7EB")}
            placeholder="00/00"
            required
          />
        </div>

        <div className="flex items-center mt-4">
          <input
            style={{
              appearance: "none",
              display: "none",
            }}
            checked={isChecked}
            onChange={() => setIsChecked(!isChecked)}
            id="checked-checkbox"
            type="checkbox"
            value=""
          />
          <label
            style={{
              color: "#4B5563",
              fontSize: "14px",
              fontWeight: 500,
              display: "inline-flex",
              alignItems: "center",
              position: "relative",
            }}
            htmlFor="checked-checkbox"
            className=" text-sm font-medium cursor-pointer"
          >
            <span
              style={{
                width: "16px",
                height: "16px",
                borderRadius: "4px",
                border: isChecked ? "2px solid #3B82F6" : "2px solid #D1D5DB",
                backgroundColor: isChecked ? "white" : "transparent",
                marginRight: "8px",
                display: "inline-block",
              }}
            ></span>
            {isChecked && (
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="absolute text-blue-600 w-4 h-4"
                style={{
                  left: "2px",
                  top: "50%",
                  transform: "translateY(-50%)",
                }}
              >
                <path
                  d="M20 6L9 17L4 12"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
            Set an end date{" "}
          </label>
        </div>

        {isChecked && (
          <>
            {" "}
            <div className="flex flex-col relative mt-4">
              <span
                className="font-freesans"
                style={{
                  color: "#4B4B4B",
                  fontWeight: 500,
                  fontSize: "13px",
                }}
              >
                From
              </span>
              <input
                className="bg-[#FFF] cursor-pointer text-gray-900 text-sm rounded-[10px] block w-full px-4 py-2.5 mt-1 placeholder-gray-300  focus:outline-none"
                style={{
                  paddingRight: "30px",
                  border: "1.5px solid #E5E7EB",
                  boxSizing: "border-box",
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = "#bdbfc0";
                  handleInputClick();
                }}
                onBlur={(e) => (e.target.style.borderColor = "#E5E7EB")}
                placeholder="Select Date"
                required
                value={selectedDate ? selectedDate.toLocaleDateString() : ""}
              />
              <img
                src="/arrow-down.png"
                alt="Description"
                className={`absolute right-3 top-[80%] transform -translate-y-1/2 w-4 h-4 ${
                  showDatePicker ? "hidden" : ""
                }`}
                onClick={handleInputClick}
              />
              {showDatePicker && (
                <DatePicker
                  selected={selectedDate}
                  onChange={onChange}
                  startDate={startDate}
                  endDate={endDate}
                  selectsRange
                  inline
                  onClickOutside={handleDatePickerOutsideClick}
                />
              )}
            </div>
            <div className="mt-6">
              <span
                className="font-freesans"
                style={{
                  color: "#4B4B4B",
                  fontWeight: 500,
                  fontSize: "13px",
                }}
              >
                Time{" "}
              </span>
              <input
                className="bg-[#FFF] text-gray-900 text-sm rounded-[10px] block w-full px-4 py-2.5 mt-1 placeholder-gray-300  focus:outline-none"
                style={{
                  border: "1.5px solid #E5E7EB",
                  boxSizing: "border-box",
                }}
                onFocus={(e) => (e.target.style.borderColor = "#bdbfc0")}
                onBlur={(e) => (e.target.style.borderColor = "#E5E7EB")}
                placeholder="00/00"
                required
              />
            </div>
          </>
        )}
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
        <button className="bg-blue-600 text-white px-4 py-2.5 rounded cursor-pointer">
          Create coupon{" "}
        </button>
      </div>
    </div>
  );
}
