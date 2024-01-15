import React from "react";
import { useState } from "react";
import { useForm, Controller } from 'react-hook-form';

export default function Shipping() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isChecked, setIsChecked] = useState(false);
  const { control, 
      handleSubmit, 
      register, 
      reset,
     formState:{errors} } = useForm({
    resolver: yupResolver(schema),

     });

  const dropdownItems = [
    "30 - 60 Minnutes",
    "1 - 4 Hours",
    "6 - 24 Hours",
    "1 - 3 Days",
    "3 - 5 Days",
    "5 - 10 Days",
  ];

  const radioOptions = [
    { id: "bordered-radio-1", label: "Fixed" },
    { id: "bordered-radio-2", label: "Variable" },
  ];

  const handleSelect = (item) => {
    setSelectedItem(item);
    setShowDropdown(false);
  };

  const onSubmit = (data) => {
    console.log(data.selectedItem, "<----Selected Item");
  }

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
          Shipping
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
      <form onSubmit={handleSubmit(onSubmit)}>

        <div
          style={{
            border: "1px solid #EAECF0",
            padding: "16px 14px",
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
            Delivery{" "}
          </span>

          <div className="mt-6">
            <span
              className="font-freesans"
              style={{
                color: "#4B5563",
                fontWeight: 500,
                fontSize: "14px",
              }}
            >
              Delivery happens within{" "}
            </span>

            <button
              id="dropdownDefaultButton"
              onClick={() => setShowDropdown(!showDropdown)}
              className="text-center mt-2 inline-flex items-center rounded-lg text-sm px-3 py-3 focus:outline-none justify-between" // Added 'justify-between' for spacing
              type="button"
              style={{
                width: "100%",
                borderRadius: "8px",
                border: "1.5px solid #E5E7EB",
                background: "#FFF",
                color: "#4B4B4B",
                cursor: "pointer",
                fontSize: "14px",
              }}
            >
              {selectedItem || "Select an option"}

              <svg
                className="w-2.5 h-2.5 ml-2.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>

            {showDropdown && (
              <div
                className="z-10 text-sm text-gray-700 dark:text-gray-200 divide-y divide-gray-100"
                aria-labelledby="dropdownDefaultButton"
                style={{
                  marginTop: "6px",
                  borderRadius: "12px",
                  border: "1px solid #EDEDED",
                  background: "#FFF",
                  boxShadow: "-1px 4px 4px 0px rgba(28, 28, 75, 0.08)",
                  color: "var(--Neutral-600, #4B4B4B)",
                }}
              >
                  <Controller
                    name="selectedItem"
                    control={control}
                    defaultValue={null}
                    render={({ field }) => (
                      <ul className="py-0 px-2 my-2">
                        {dropdownItems.map((item) => (
                          <li
                            key={item}
                            onClick={() =>{ field.onChange(item); setShowDropdown(false); setSelectedItem(item);}}
                            className={`block px-3 py-3 cursor-pointer hover:bg-gray-200 ${
                              field.value === item ? 'bg-gray-200' : ''
                            }`}
                            style={{
                              color: '#4B4B4B',
                              fontWeight: 500,
                              borderRadius: '8px',
                              cursor: 'pointer',
                              fontSize: '14px',
                            }}
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    )}
                  />
              </div>
            )}
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
          {" "}
          <div className="flex justify-between items-center">
            <span
              className="font-freesans"
              style={{
                color: "#4B4B4B",
                fontWeight: 500,
                fontSize: "14px",
              }}
            >
              Delivery Charges{" "}
            </span>

            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" value="" className="sr-only peer" />
              <div className="w-11 h-6 bg-gray-200 focus:ring-0 peer-focus:outline-none dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-300 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            </label>
          </div>
          <div className="flex flex-row items-center mt-2">
            {radioOptions.map((option) => (
              <div
                key={option.id}
                className="flex items-center pr-6 border border-gray-200 rounded dark:border-gray-700 mr-12"
              >
                <input
                  id={option.id}
                  type="radio"
                  value=""
                  name="bordered-radio"
                  className="w-6 h-6 cursor-pointer m-0 text-blue-600 bg-gray-100 border-none focus:ring-none dark:focus:ring-none focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  style={{
                    boxShadow: "none",
                  }}
                />
                <label
                  htmlFor={option.id}
                  className="w-full py-3 ml-2 text-sm font-medium font-lato flex items-center"
                  style={{
                    color: "var(--Neutral-600, #4B4B4B)",
                    fontSize: "14px",
                    fontStyle: "normal",
                    fontWeight: "500",
                    lineHeight: "normal",
                    letterSpacing: "0.14px",
                  }}
                >
                  {option.label}
                </label>
              </div>
            ))}
          </div>
          <div className="grid gap-6 mb-4 md:grid-cols-2 mt-6">
            <div className="flex flex-col">
              <div className="flex">
                <label
                  className="block mb-2 font-freesans font-medium dark:text-white mr-0.5"
                  style={{
                    color: "#4B5563",
                    fontSize: "14px",
                    fontStyle: 500,
                  }}
                >
                  Delivery Charge Per Order
                </label>
                <span
                  style={{
                    color: "#FF4A4A",
                    fontSize: "14px",
                    fontWeight: "bold",
                  }}
                >
                  *
                </span>
              </div>
              <input
                type="text"
                className="bg-gray-50 font-freesans p-3 focus:border-red-500"
                style={{
                  borderRadius: "8px",
                  border: "1.5px solid #E5E7EB",
                  background: "#FFF",
                }}
                placeholder="Enter Delivery Charge"
                required
              />
            </div>
            <div className="flex flex-col">
              <label
                className="block mb-2 font-freesans font-medium"
                style={{
                  color: "var(--text-color-body-color-600, #4B5563)",
                  fontSize: "14px",
                  fontStyle: 500,
                }}
              >
                Free Delivery above
              </label>
              <input
                type="text"
                className="bg-gray-50 font-freesans p-3 focus:border-red-500"
                style={{
                  borderRadius: "8px",
                  border: "1.5px solid #E5E7EB",
                  background: "#FFF",
                }}
                placeholder="Enter Free Delivery above"
                required
              />
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center">
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
                  fontStyle: 500,
                  display: "inline-flex",
                  alignItems: "center",
                  position: "relative",
                }}
                htmlFor="checked-checkbox"
                className="ml-1.5 text-sm font-medium cursor-pointer"
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
                Offer different delivery charge for online paid orders.
              </label>
            </div>

            {isChecked && (
              <div className="flex flex-col mt-10 mb-2">
                <div className="flex">
                  <label
                    className="block mb-2 font-freesans font-medium dark:text-white mr-0.5"
                    style={{
                      color: "#4B5563",
                      fontSize: "14px",
                      fontStyle: 500,
                    }}
                  >
                    Delivery charges for online paid orders
                  </label>
                  <span
                    style={{
                      color: "#FF4A4A",
                      fontSize: "14px",
                      fontWeight: "bold",
                    }}
                  >
                    *
                  </span>
                </div>
                <input
                  type="text"
                  className="bg-gray-50 font-freesans p-3 focus:border-red-500 w-[40%]"
                  style={{
                    borderRadius: "8px",
                    border: "1.5px solid #E5E7EB",
                    background: "#FFF",
                  }}
                  placeholder="Charges for online paid orders"
                  required
                />
              </div>
            )}
          </div>
        </div>

        <div className="flex justify-end mt-4">
          {" "}
          <button
            type="submit"
            className="cursor-pointer ml-4"
            style={{
              backgroundColor: "#4162FF",
              color: "#ffffff",
              padding: "10px 22px",
              borderRadius: "4px",
            }}
          >
            Save Changes{" "}
          </button>
        </div>

      </form>


    </div>
  );
}
