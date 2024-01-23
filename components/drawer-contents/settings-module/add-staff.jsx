import React, { useEffect, useState } from "react";
import RoleSelect from "../../dropdown-selects/role-select";
import { useForm } from 'react-hook-form';
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch, useSelector } from "react-redux";
import Cookies from "js-cookie";
import { registerManagerEmail } from "../../../redux/slices/settings/staff/staffSlice";
import cogoToast from "cogo-toast";

export default function AddStaff({ setShowSidebar }) {
  const dispatch = useDispatch();
  const storeId  = Cookies.get("id");
  const [role, setSelectedRole] = useState("");
  const [addRequestStatus, setAddRequestStatus] = useState('idle')
  const {business} = useSelector((state) => state?.getBusiness?.business || "");

  const canSave =
  [storeId, business, role].every(Boolean) && addRequestStatus === 'idle'



  const handleRoleChange = (selectedOption) => {
    setSelectedRole(selectedOption.value)
  };
  
  // const {EmailInfo} = useSelector((state) => state?.getBusiness?.business || "");
  const {managerEmailInfo, loading,  error} = useSelector ((state)=> state?.staffSlice)


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

   const onSubmit = async (data) =>{
    if(canSave){
      try{
        setAddRequestStatus('pending')
        const managerEmailData = {
          email:  data.email,
          name: data.name,
          role: role,
          storeName: business,
          parentId: storeId
        }
        const resultAction = await dispatch(registerManagerEmail(managerEmailData)).unwrap();
        if (resultAction.state === "success") {
          setAddRequestStatus('success');
          reset();
          setSelectedRole("")
        }else {
          console.log('Failed to save the post');
        }
      } catch (err){
        console.error('Failed to save the post: ', err)
      } 
    }
   }

   useEffect(()=>{
     if(addRequestStatus === "success" ){
      cogoToast.success(managerEmailInfo);
    }
   },[addRequestStatus])

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
          //  onClick={() =>  setShowSidebar(false)}
          className="bg-blue-600 text-white px-7 py-2.5 rounded cursor-pointer"
        >
         { loading ?  <svg
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
                          </svg> : "Send Invites"}
        </button>
      </div>

        
    </div>
      </form>
  );
}
