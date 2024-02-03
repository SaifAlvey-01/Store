import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import {addTax, getAllTaxes, editTax} from "../../../redux/slices/settings/taxes/taxesSlice"
import cogoToast from "cogo-toast";
import Cookies from "js-cookie";


export default function Tax() {
  const dispatch = useDispatch();
  const {loading, error, taxes, status} = useSelector(state => state.taxesSlice);
  const [initialData, setInitialData] = useState(taxes);
  const [inclusiveOfTax, setInclusiveOfTax] = useState(false);

  const storeID = Cookies.get("id");
    const schema = yup.object({
      productPrices: yup.string().required("Please select Exclusive or Exclusive of tax"),
      gstNumber: yup.string().test('is-gst', 'Invalid GST number', function (value) {
        if (this.resolve(yup.ref('gstNumber'))) {
          return yup.string().matches(/\d{2}[A-Z]{5}\d{4}[A-Z]{1}[A-Z\d]{1}[Z]{1}[A-Z\d]{1}/).isValidSync(value);
        }
        return true;
      }),
      gstPercentage: yup
      .number("Enter number only")
      .required()
      .test({
        name: 'maxValue',
        message: 'Gst Percentage cannot be 100%',
        test: value => value !== 100,
      })
      .test({
        name: 'maxDigits',
        message: 'Gst Percentage should not have more than 2 digits',
        test: value => (value + '').length <= 2,
      }),
    }).required();
 
  useEffect( ()=>{
    const params = {
      storeID, 
      page: 1,
      limit:1
    }
    dispatch(getAllTaxes(params));
  },[]);
  
  useEffect(()=>{
    if(status === true){
      cogoToast.success("Successfully added");
    }
    if(error){
      cogoToast.error(error)
    }
  }, [error]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  }); 

  useEffect(() => {
    if(taxes?.taxStatus === "Enable"){
      setInclusiveOfTax(true);
    } 
    if (taxes) {
      setInitialData(taxes);
      reset({
        productPrices: taxes?.productPrices || "",
        gstNumber: taxes?.gstNumber || "",
        gstPercentage: taxes?.gstPercentage || "",
      });
    }
  }, [taxes, reset]);

  const handleCheckboxChange =  () => {
    setInclusiveOfTax((prev) => !prev);
  };
  const onSubmitHandler = async (data) => {
    if(inclusiveOfTax && taxes == []){
      try{
        const body = {
          taxStatus : "Enable",
          ...data
        }
        dispatch(addTax(body));  
      cogoToast.success('Post saved successfully!');
      }catch(error){
        cogoToast.error('Failed to save the post');
      }
    };
    if(taxes){
      try { 
      const taxId = taxes.taxId;
      const body = {
        taxStatus : "Enable",
        ...data
      }
      await dispatch(editTax({taxId, body})).unwrap();
      cogoToast.success('Post saved successfully!');
    }catch(error){
      cogoToast.error('Failed to save the post');
    }
    }
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
                  value="true"
                  className="sr-only peer"
                />
                <div className={`${initialData?.taxStatus === "Enable" ? "active" : ""} w-11 h-6 bg-gray-200 focus:ring-0 peer-focus:outline-none dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-300 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600`}></div>
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
                        value="InclusiveOfTax"
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
                 {loading ?(
                          <svg
                            aria-hidden="true"
                            role="status"
                            class="inline mr-1 w-6 h-4 text-white animate-spin"
                            viewBox="0 0 100 101"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                              fill="#E5E7EB"
                            ></path>
                            <path
                              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                        ) : "Save"}
              </button>
            </div>
          )}
      </form>
    </div>
    
  );
}
