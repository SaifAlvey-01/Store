import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";


export default function ExtraCharges() {
  const dispatch = useDispatch();
  const [showSection, setShowSection] = useState("initial");

  const radioOptions = [
    { id: "bordered-radio-1", label: "Percent" },
    { id: "bordered-radio-2", label: "Flat Price" },
  ];

  const schema = yup.object({
    extraCharges: yup.string().required("Please select chargePercent"),
    chargeName: yup.string().required("chargeName number is required"),
    chargePercent: yup.number().required(),
  }).required();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  }); 

  const handleCreateButtonClick = () => {
    if (showSection === "initial") {
      setShowSection("createCharges");
    } else if (showSection === "createCharges") {
      setShowSection("liveCharges");
    }
  };

  console.log(errors, "<----errors")

  const onSubmitHandler = (data) =>{
    console.log(data, "<----onSubmitHandler")
  }

  return (
    <div
      className="ml-3 w-[65%] h-[auto] text-blue-600 p-4"
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
          Extra charges{" "}
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

      {showSection === "initial" && (
        <div className="flex flex-col items-center justify-center h-full">
          <img src={"/cards.png"} className="w-600 h-600 " />

          <div className="flex flex-col items-center">
            <h3
              style={{ color: "#4B4B4B", fontSize: "20px" }}
              className="mt-4 mb-3 font-bold font-freesans"
            >
              Create Extra Charges{" "}
            </h3>
            <p
              style={{
                color: "#8E8E8E",
                textAlign: "center",
                fontSize: "14px",
              }}
              className="mt-0 mb-1 my-0 font-thin w-[100%]"
            >
              Add percentage based or fixed additional fees on your orders.{" "}
            </p>
          </div>

          <button
            onClick={handleCreateButtonClick}
            className="mt-4 mb-8 cursor-pointer"
            style={{
              backgroundColor: "#4162FF",
              color: "#ffffff",
              padding: "10px 16px",
              borderRadius: "4px",
            }}
          >
            Create Extra Charges 
          </button>
        </div>
      )}

<form onSubmit={handleSubmit(onSubmitHandler)} >
      {showSection === "createCharges" && (
          <div>
            <div
              style={{
                border: "1px solid #EAECF0",
                borderRadius: "8px",
              }}
              className="mt-6 p-4 pt-2"
            >
              <div className="flex flex-col">
                <div className="flex flex-row items-center">
                 
                    <div
                      className="flex items-center pr-6 border border-gray-200 rounded dark:border-gray-700 mr-12"
                    >
                      <input
                        type="radio"
                        {...register("extraCharges")}
                        value="Percent"
                        className="w-6 h-6 cursor-pointer m-0 text-blue-600 bg-gray-100 border-none focus:ring-none dark:focus:ring-none focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        style={{
                          boxShadow: "none",
                        }}
                      />
                      <label
                        className="w-full py-3 ml-2 text-sm font-medium font-lato flex items-center"
                        style={{
                          color: "var(--Neutral-600, #4B4B4B)",
                          fontSize: "14px",
                          fontStyle: "normal",
                          fontWeight: "600",
                          lineHeight: "normal",
                          letterSpacing: "0.14px",
                        }}
                      >
                        Percent
                      </label>
                    </div>

                    <div
                      
                      className="flex items-center pr-6 border border-gray-200 rounded dark:border-gray-700 mr-12"
                    >
                      <input
                        type="radio"
                        {...register("extraCharges")}
                        value="FlatPrice"
                        className="w-6 h-6 cursor-pointer m-0 text-blue-600 bg-gray-100 border-none focus:ring-none dark:focus:ring-none focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        style={{
                          boxShadow: "none",
                        }}
                      />
                      <label
                        className="w-full py-3 ml-2 text-sm font-medium font-lato flex items-center"
                        style={{
                          color: "var(--Neutral-600, #4B4B4B)",
                          fontSize: "14px",
                          fontStyle: "normal",
                          fontWeight: "600",
                          lineHeight: "normal",
                          letterSpacing: "0.14px",
                        }}
                      >
                        Flat Price
                      </label>
                    </div>
                    {errors.extraCharges && <p className="text-red-500">{errors.extraCharges.message}</p> }

                </div>
                <div className="grid mb-3 gap-6 md:grid-cols-2 mt-5">
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
                        Charge Name{" "}
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
                        {...register("chargeName")}
                      type="text"
                      className="bg-gray-50 font-freesans p-3 focus:border-red-500"
                      style={{
                        borderRadius: "8px",
                        border: "1.5px solid #E5E7EB",
                        background: "#FFF",
                      }}
                      placeholder="Enter Name"
                      
                    />
                  {errors.chargeName && <p className="text-red-500">{errors.chargeName.message}</p> }
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
                      Charges in Percent{" "}
                      <span
                        style={{
                          color: "#FF4A4A",
                          fontSize: "14px",
                          fontWeight: "bold",
                        }}
                      >
                        *
                      </span>
                    </label>
                    <input
                        {...register("chargePercent")}
                      type="text"
                      className="bg-gray-50 font-freesans p-3 focus:border-red-500"
                      style={{
                        borderRadius: "8px",
                        border: "1.5px solid #E5E7EB",
                        background: "#FFF",
                      }}
                      placeholder="Charges"
                      required
                    />
                  {errors.chargePercent && <p className="text-red-500">{errors.chargePercent.message}</p> }

                  </div>
                </div>
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
                  padding: "10px 30px",
                  borderRadius: "4px",
                }}
              >
                Create
              </button>
            </div>
          </div> 
      )}
      </form>

      {showSection === "liveCharges" && (
        <div
          style={{
            border: "1px solid #EAECF0",
            padding: "14px",
            borderRadius: "8px",
          }}
          className="mt-6"
        >
          <div className="flex justify-between items-center">
            <div className="flex flex-col items-start">
              <span
                className="font-freesans"
                style={{
                  color: "#4B4B4B",
                  fontWeight: 600,
                  fontSize: "14px",
                }}
              >
                Live{" "}
              </span>
              <span
                className="font-freesans mt-1"
                style={{
                  color: "#8E8E8E",
                  fontWeight: 400,
                  fontSize: "12px",
                }}
              >
                15% Extra Charges{" "}
              </span>
            </div>

            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" value="" className="sr-only peer" />
              <div className="w-11 h-6 bg-gray-200 focus:ring-0 peer-focus:outline-none dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-300 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            </label>
          </div>
        </div>
      )}

    </div>
  );
}
