import React, { useState } from "react";
import RoleSelect from "../../dropdown-selects/role-select";
import { useForm } from 'react-hook-form';
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch, useSelector } from "react-redux";
import Cookies from "js-cookie";
import { registerManagerEmail } from "../../../redux/slices/settings/staff/staffSlice";

export default function AddStaff({ setShowSidebar }) {
  const dispatch = useDispatch();
  const storeId  = Cookies.get("id");



  const handleRoleChange = (selectedOption) => {
    setSelectedRole(selectedOption.value)
  };
  const {business} = useSelector((state) => state?.getBusiness?.business || ""
  );

 

  const schema = yup.object({
    email: yup.string().email().required("email is required"),
    name: yup.string().required("name is required"),    
  }).required();

  const { control, 
    handleSubmit, 
    register, 
    reset,
   formState:{errors} } = useForm({
  resolver: yupResolver(schema),
   });

   const onSubmit = (data) =>{
    
    const managerEmailData = {
      email:  data.email,
      name: data.name,
      role: role,
      storeName: business,
      parentId: storeId
    }
    console.log("as")
    dispatch(registerManagerEmail(managerEmailData))
   }

  return (
          <form onSubmit={handleSubmit(onSubmit)}>
    <div className="flex flex-col h-screen">
      {" "}
      <div className="flex justify-between items-center">
        <div className="flex flex-col items-start mt-4">
          <h3
            className="m-0"
            style={{ fontSize: "17px", fontWeight: "normal" }}
          >
            Add Staff{" "}
          </h3>
        </div>
      </div>
        
      <div
        className="flex-1 overflow-y-auto pb-[80px]"
        style={{ overflowY: "scroll" }}
        >
        
        <div className="mt-7">
          <span
            className="font-freesans"
            style={{
              color: "#4B4B4B",
              fontWeight: 500,
              fontSize: "13px",
            }}
          >
            Email or Mobile Number{" "}
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
            {...register("email")}
            onFocus={(e) => (e.target.style.borderColor = "#bdbfc0")}
            onBlur={(e) => (e.target.style.borderColor = "#E5E7EB")}
            placeholder="Enter Email or Mobile Number"
            
          />
        {errors.email && <p className="text-red-500">{errors.email.message}</p> }

        </div>

        <div className="mt-4">
          <span
            className="font-freesans"
            style={{
              color: "#4B4B4B",
              fontWeight: 500,
              fontSize: "13px",
            }}
          >
            Name{" "}
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
            {...register("name")}
            onFocus={(e) => (e.target.style.borderColor = "#bdbfc0")}
            onBlur={(e) => (e.target.style.borderColor = "#E5E7EB")}
            placeholder="Enter Name of the Staff Member"
          />
        {errors.name && <p className="text-red-500">{errors.name.message}</p> }

        </div>

        <div className="mt-4">
          {" "}
          <RoleSelect onChange={handleRoleChange} />
        </div>
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
          type="submit"
          // onClick={() => setShowSidebar(false)}
          className="bg-blue-600 text-white px-7 py-2.5 rounded cursor-pointer"
        >
          Send Invites{" "}
        </button>
      </div>

        
    </div>
      </form>
  );
}
