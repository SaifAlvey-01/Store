import React, { use, useEffect } from "react";
import { useState } from "react";
import { CustomEditor } from "../../../components/TinyMCE";
import Cookies from "js-cookie";
import { useDispatch, useSelector } from "react-redux";
import { addPolicy, getAllPolicies } from "../../../redux/slices/policies/policies";
import cogoToast from "cogo-toast";


export default function Policies() {
  const dispatch = useDispatch();
  const [activeTab, setActiveTab] = useState(0);
  const [editorContent, setEditorContent] = useState("");
  const [policyType, setpolicyType] = useState("Privacy Policy");
  const storeId = Cookies.get("id");
  const {error, loading,  policies} = useSelector(state => state.policies)

  const handleEditorChange = (content) => {
    setEditorContent(content);
  };

  

  
  const handleActivePolicy = (id) =>{
    
    setActiveTab(id)
    if(id === 0){
      setpolicyType("Privacy Policy");
    }
    
    if(id === 1){
      setpolicyType("Refund Policy");
    }
    
    if(id === 2){
      setpolicyType("Terms and Conditions");
    }
  }

  useEffect(()=>{
    if(policies?.data?.length > 0 ){
      const currentPolicyTypeData = policies?.data.find(type => type.policyType === policyType );
      setEditorContent(currentPolicyTypeData.policyContent);
    }
  },[policyType])

  useEffect(()=>{
    dispatch(getAllPolicies(storeId));

  },[dispatch])

  useEffect(()=>{

    if(error){
      cogoToast.error(error)
    }
  }, [error])
  

  const handleAddPolicy = async () => {
    const policyData = {
      policyType,
      policyContent: editorContent,
      storeId
    }
    try {
      // Dispatch the addPolicy action with the policyData
      await dispatch(addPolicy(policyData));

      // You can perform additional actions after dispatch if needed
      // For example, reset the form or navigate to another page
    } catch (error) {
      // Handle any errors that may occur during the dispatch
      console.error("Error adding policy:", error.message);
    }
  };

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
          Policies
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
          padding: "14px",
        }}
        className="mt-6"
      >
        {" "}
        <div className="w-[70%]">
          <div className="flex justify-between w-[100%] border-b border-gray-200">
            <button
              onClick={()=> handleActivePolicy(0)}
              className={`flex-grow text-center py-2 px-2 text-[14px] bg-white cursor-pointer ${
                activeTab === 0
                  ? "border-b-2 border-primary-300-main text-primary-300-main font-bold"
                  : "text-neutral-500 hover:bg-gray-100"
              }`}
            >
              Privacy Policy{" "}
            </button>
            <button
              onClick={() => handleActivePolicy(1)}
              className={`flex-grow text-center py-2 px-2 text-[14px] bg-white cursor-pointer ${
                activeTab === 1
                  ? "border-b-2 border-primary-300-main text-primary-300-main font-bold"
                  : "text-neutral-500 hover:bg-gray-100"
              }`}
            >
              Refund Policy{" "}
            </button>
            <button
              onClick={() => handleActivePolicy(2)}
              className={`flex-grow text-center py-2 px-2 text-[14px] bg-white cursor-pointer ${
                activeTab === 2
                  ? "border-b-2 border-primary-300-main text-primary-300-main font-bold"
                  : "text-neutral-500 hover:bg-gray-100"
              }`}
            >
              Terms & Conditions{" "}
            </button>
          </div>
          <div
            style={{ borderTop: "2px solid #E5E7EB" }}
            className="tab-content text-neutral-500 text-[14px] pt-8 mb-0 flex items-center justify-center "
          ></div>
        </div>
        <span
          className="font-freesans"
          style={{
            color: "#4B4B4B",
            fontWeight: 500,
            fontSize: "14px",
          }}
        >
          {activeTab === 0 && "Privacy Policy"}
          {activeTab === 1 && "Refund Policy"}
          {activeTab === 2 && "Terms & Conditions"}
        </span>
        <div
          style={{
            border: "1px solid #E5E7EB",
            padding: "16px 14px",
            borderRadius: "8px",
          }}
          className="mt-2"
        >
         <CustomEditor content={editorContent} handleOnEditorChange={handleEditorChange} />
        </div>
        <div className="flex justify-end w-full mt-4 mb-4">
          <button
            className="cursor-pointer"
            onClick={handleAddPolicy}
            style={{
              backgroundColor: "#4162FF",
              color: "#ffffff",
              padding: "10px 20px",
              borderRadius: "4px",
            }}
          >
            Add As Store Page{" "}
          </button>
        </div>
      </div>
    </div>
  );
}
