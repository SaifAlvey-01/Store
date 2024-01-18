import React, { useState, useEffect } from "react";
import axios from "axios";
import { getCountryCallingCode } from 'libphonenumber-js';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import cogoToast from "cogo-toast";
import { useDispatch, useSelector } from "react-redux";
import { addWarehouse, editWarehouse } from "../../../redux/slices/settings/warehouse/warehouseSlice";

export default function AddWarehouse({warehouseToEdit, isEdit, setShowSidebar}) {
  const [isChecked, setIsChecked] = useState(false);
  const [addPostRequestStatus, setAddPostRequestStatus] = useState('idle');
  const [checkValidate, setCheckValidate] = useState(false);
  const {loading, status, error} = useSelector((state)=> state.warehouseSlice);
  const dispatch = useDispatch();
  const schema = yup.object({
    warehouseName: yup.string().required("Warehouse name is required"),
    contactPerson: yup.string().required("Contact person number is required"),
    mobileNumber: yup
      .string()
      .matches(/^(?:\+\d{1,3}\s?)?\d+$/, 'Invalid mobile number')
      .required("Mobile number is required"),
    address: yup.string().required("Please enter address"),
    area: yup.string().required("Please enter area"),
    pinCode: yup.string().required("Please enter pincode"),
    city: yup.string().required("City is required"),
    state: yup.string().required("State is required"),
    gstNumber: yup.string().test('is-gst', 'Invalid GST number', function (value) {
      // Apply the validation only if gstNumber is present
      if (this.resolve(yup.ref('gstNumber'))) {
        return yup.string().matches(/\d{2}[A-Z]{5}\d{4}[A-Z]{1}[A-Z\d]{1}[Z]{1}[A-Z\d]{1}/).isValidSync(value);
      }
      return true;
    }),
  });
  
  const defaultValues = {
    warehouseName: "",
    contactPerson: "",
    mobileNumber: "",
    address: "",
    area: "",
    pinCode: "",
    city: "",
    state: "",
    gstNumber: "",
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      ...defaultValues,
      ...warehouseToEdit, // Assign values from warehouseToEdit, if available
    }
  });   

  useEffect(()=>{
    if(status === "success"){
      cogoToast.success("Successfully added");
    }
    if(error){
      cogoToast.error(error)
    }
  }, [error]);


  function getCallingCode(countryCode) {
    try {
      const callingCode = getCountryCallingCode(countryCode);
      return callingCode ? `+${callingCode}` : 'Calling code not found';
    } catch (error) {
      console.error('Error:', error.message);
      return 'Error fetching calling code';
    }
  }

  useEffect(() => {
    axios.get("https://1.1.1.1/cdn-cgi/trace").then((response) => {
      var locRegex = /loc=([^\s]+)/;
      var match = response.data.match(locRegex);
      var locValue = match ? match[1] : null;
      const callingCode = getCallingCode(locValue);
      callingCode && !warehouseToEdit && reset({
        mobileNumber: `${callingCode} `
      });
    });
  }, []);

  const onSubmitHandler = (data) => {

      if(!isChecked){
        return setCheckValidate(true)
      }
      
    if(isEdit === false){
      dispatch(addWarehouse(data));
      reset();
    }
    if(isEdit === true){
      const warehouseId = warehouseToEdit?.warehouseId;
      dispatch(editWarehouse({ warehouseId, warehouseData:data}));
    }
    setShowSidebar(false);
  }



  return (
      <div className="flex flex-col h-screen">
        <div className="flex justify-between items-center">
          <div className="flex flex-rowitems-start mt-4">
            <h3
              className="m-0"
              style={{ fontSize: "17px", fontWeight: "normal" }}
            >
              {warehouseToEdit ? "Edit Warehouse" : "Add Warehouse"}
            </h3>
            <div className="flex flex-row items-center ml-3">
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
        </div>
        <form onSubmit={handleSubmit(onSubmitHandler)}>

          <div
            className="flex-1 overflow-y-auto pb-[80px]"
            style={{ overflowY: "scroll" }}
          >
            <div className="mt-8">
              <span
                className="font-freesans"
                style={{
                  color: "#4B4B4B",
                  fontWeight: 500,
                  fontSize: "13px",
                }}
              >
                Warehouse Name{" "}
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
                {...register("warehouseName")}
                onFocus={(e) => (e.target.style.borderColor = "#bdbfc0")}
                onBlur={(e) => (e.target.style.borderColor = "#E5E7EB")}
                placeholder="Enter Warehouse Name"
              />
              <p className="text-sm	text-red-600">{errors?.warehouseName?.message}</p>
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
                Contact Person{" "}
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
                {...register("contactPerson")}
                onFocus={(e) => (e.target.style.borderColor = "#bdbfc0")}
                onBlur={(e) => (e.target.style.borderColor = "#E5E7EB")}
                placeholder="Enter Full Name"
              />
              <p className="text-sm	text-red-600">{errors?.contactPerson?.message}</p>

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
                Mobile Number{" "}
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
                {...register("mobileNumber")}
                onFocus={(e) => (e.target.style.borderColor = "#bdbfc0")}
                onBlur={(e) => (e.target.style.borderColor = "#E5E7EB")}
                placeholder="Enter Mobile Number"
              />
              <p className="text-sm	text-red-600">{errors?.mobileNumber?.message}</p>

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
                Flat, House no., Building, Company, Apartment{" "}
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
                {...register("address")}
                onFocus={(e) => (e.target.style.borderColor = "#bdbfc0")}
                onBlur={(e) => (e.target.style.borderColor = "#E5E7EB")}
                placeholder="Enter Flat, House no., Building, Company, Apartment"
              />
              <p className="text-sm	text-red-600">{errors?.address?.message}</p>

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
                Area, Colony, Street, Sector, Village{" "}
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
                {...register("area")}
                onFocus={(e) => (e.target.style.borderColor = "#bdbfc0")}
                onBlur={(e) => (e.target.style.borderColor = "#E5E7EB")}
                placeholder="Area, Colony, Street, Sector, Village"
              />
              <p className="text-sm	text-red-600">{errors?.area?.message}</p>

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
                Pin Code{" "}
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
                {...register("pinCode")}
                onFocus={(e) => (e.target.style.borderColor = "#bdbfc0")}
                onBlur={(e) => (e.target.style.borderColor = "#E5E7EB")}
                placeholder="Enter Pin Code"
              />
              <p className="text-sm	text-red-600">{errors?.pinCode?.message}</p>

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
                City{" "}
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
                {...register("city")}
                onFocus={(e) => (e.target.style.borderColor = "#bdbfc0")}
                onBlur={(e) => (e.target.style.borderColor = "#E5E7EB")}
                placeholder="Enter City"
              />
              <p className="text-sm	text-red-600">{errors?.city?.message}</p>
              
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
                State{" "}
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
                {...register("state")}
                onFocus={(e) => (e.target.style.borderColor = "#bdbfc0")}
                onBlur={(e) => (e.target.style.borderColor = "#E5E7EB")}
                placeholder="Enter State"
              />
              <p className="text-sm	text-red-600">{errors?.state?.message}</p>

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
                GST Number{" "}
              </span>
              <input
                className="bg-[#FFF] text-gray-900 text-sm rounded-[10px] block w-full px-4 py-2.5 mt-1 placeholder-gray-300  focus:outline-none"
                style={{
                  border: "1.5px solid #E5E7EB",
                  boxSizing: "border-box",
                }}
                {...register("gstNumber")}
                onFocus={(e) => (e.target.style.borderColor = "#bdbfc0")}
                onBlur={(e) => (e.target.style.borderColor = "#E5E7EB")}
                placeholder="Enter GST Number"
              />
              <p className="text-sm	text-red-600">{errors?.gstNumber?.message}</p>

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
                  fontStyle: 500,
                  display: "inline-flex",
                  alignItems: "center",
                  position: "relative",
                }}
                htmlFor="checked-checkbox"
                className="text-sm font-medium cursor-pointer font-freesans"
              >
                <span
                  style={{
                    width: "12px",
                    height: "12px",
                    borderRadius: "4px",
                    border: isChecked ? "2px solid #3B82F6" : "2px solid #D1D5DB",
                    backgroundColor: isChecked ? "white" : "transparent",
                    marginRight: "6px",
                    display: "inline-block",
                  }}
                ></span>
                {isChecked && (
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="absolute text-blue-600 w-4 h-4"
                    style={{
                      left: 0,
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
                I accept all{" "}
                <span className="ml-1 text-[#4162FF] font-freesans font-medium">
                  terms & conditions
                </span>
              </label>
              
            </div>
              {checkValidate  && <p className="text-sm	text-red-600">please accept terms & conditions</p>}
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
            <button type="submit" className="bg-blue-600 text-white px-7 py-2.5 rounded cursor-pointer">
             {loading ? (
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
                        )  : warehouseToEdit ? "Edit Warehouse" : "Add Warehouse"}
            </button>
          </div>
          </form>
      </div>
  );
}
