import React, { use, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import {addTax} from "../../../redux/slices/settings/taxes/taxesSlice"
import cogoToast from "cogo-toast";


export default function Tax() {
  const [inclusiveOfTax, setInclusiveOfTax] = useState(false);
  const dispatch = useDispatch();
  const {loading, error, taxes, status} = useSelector(state => state.taxesSlice);

  const schema = yup.object({
    x: yup.string().required("Please select Exclusive or Exclusive of tax"),
    productPrices: yup.string().required("Please select Exclusive or Exclusive of tax"),
    gstNumber: yup.string().required("GST number is required"),
    gstPercentage: yup.number("gstPercentage must be a number").required("GST Percentage are required"),
  }).required();

  useEffect(()=>{
    if(status){
      cogoToast.success("Successfully added")
    } 
    if(error){
      cogoToast.error(error)
    }
  }, [status, error])
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      productPrices: 'asd',
      gstNumber:'',
      gstPercentage: ''
    }
  }); 
  

  const handleCheckboxChange = () => {
    setInclusiveOfTax((prev) => !prev);
  };

  const onSubmitHandler =  (data) => {
    dispatch(addTax(data))
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
    <form onSubmit={handleSubmit(onSubmitHandler)}>
        <div className="flex flex-row items-center">
          <h3
            className="m-0 mr-4"
            style={{
              color: "#4B4B4B",
              fontWeight: 600,
              fontSize: "16px",
            }}
          >
            Tax
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
            <span
              className="font-freesans"
              style={{
                color: "#4B4B4B",
                fontWeight: 500,
                fontSize: "14px",
              }}
            >
              GST{" "}
            </span>

            <label className="relative inline-flex items-center cursor-pointer">
              <input
                onChange={handleCheckboxChange}
                type="checkbox"
                value=""
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 focus:ring-0 peer-focus:outline-none dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-300 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            </label>
          </div>

          {inclusiveOfTax && (
            <div className="flex flex-col mt-6">
              <span className="text-[#8E8E8E] font-freesans text-[14px]">
                All Product prices are
              </span>
              <div className="flex flex-row items-center mt-1">
                
                  <div
                    className="flex items-center pr-6 border border-gray-200 rounded dark:border-gray-700 mr-12"
                  >
                    <input
                      type="radio"
                      {...register("productPrices")}
                      value="ExclusiveOfTax"
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
                      Inclusive of tax
                    </label>

                    <img
                      style={{
                        color: "#8E8E8E",
                      }}
                      src={"/info-circle.png"}
                      className=" w-4 h-4 ml-2"
                    />
                  </div>

                  <div
                    className="flex items-center pr-6 border border-gray-200 rounded dark:border-gray-700 mr-12"
                  >
                    <input
                      type="radio"
                      {...register("productPrices")}
                      value="ExclusiveOfTax"
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
                      Exclusive of tax
                    </label>

                    <img
                      style={{
                        color: "#8E8E8E",
                      }}
                      src={"/info-circle.png"}
                      className=" w-4 h-4 ml-2"
                    />
                  </div>
              </div>
              {errors.productPrices && <p className="text-red-500">{errors.productPrices.message}</p> }
                      
              <div className="grid mb-3 gap-6 md:grid-cols-2 mt-4">
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
                      GST Number{" "}
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
                    {...register("gstNumber")}
                    className="bg-gray-50 font-freesans p-3 focus:border-red-500"
                    style={{
                      borderRadius: "8px",
                      border: "1.5px solid #E5E7EB",
                      background: "#FFF",
                    }}
                    placeholder="Enter GST Number"
                  />
                {errors.gstNumber && <p className="text-red-500">{errors.gstNumber.message}</p> }
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
                    GST Percentage{" "}
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
                    type="text"
                    {...register("gstPercentage")}
                    className="bg-gray-50 font-freesans p-3 focus:border-red-500"
                    style={{
                      borderRadius: "8px",
                      border: "1.5px solid #E5E7EB",
                      background: "#FFF",
                    }}
                    placeholder="Charges"
                  />
                {errors.gstPercentage && <p className="text-red-500">{errors.gstPercentage.message}</p> }

                </div>
              </div>

              <div className="flex flex-row items-start mb-2">
                <span className="text-[#4B4B4B] font-freesans text-[14px]">
                  To know more about GST calculation.{" "}
                </span>
                <span className="text-[#4162FF] font-freesans text-[14px]">
                  Click Here{" "}
                </span>
              </div>
            </div>
          )}
        </div>

        {inclusiveOfTax && (
          <div className="flex justify-end mt-4 ">
            {" "}
            <button
              className="cursor-pointer ml-4"
              type="submit"
              style={{
                backgroundColor: "#4162FF",
                color: "#ffffff",
                padding: "10px 30px",
                borderRadius: "4px",
              }}
            >
              {loading? "loading .." : "Save"}
            </button>
          </div>
        )}
    </form>
      </div>
    
  );
}
