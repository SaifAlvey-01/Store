import React from "react";
import Style from "./warehouseSearchStyle.module.css";
import { useState, useEffect } from "react";
import CustomDrawer from "../../drawer-contents/custom-drawer";
import { useDispatch, useSelector } from "react-redux";
import { getAllWarehouses } from "../../../redux/slices/settings/warehouse/warehouseSlice";

export default function Warehouse() {
  const dispatch = useDispatch();
  const [showSidebar, setShowSidebar] = useState(false);
  const [contentType, setContentType] = useState("");
  const [warehouseToEdit, setWarehouseToEdit] = useState(null);
  const {warehouses} = useSelector((state)=> state.warehouseSlice);

  useEffect(()=>{
    dispatch(getAllWarehouses())
  },[])



  return (
    <>
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
            Warehouse
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

        <div className="flex mt-8 justify-between items-center">
          <div className={`w-[40%] ${Style.inputcontainer}`}>
            <input
              style={{ border: "1px solid #D0D5DD" }}
              className=" h-[35px] rounded-lg w-full"
              placeholder="Search or create source"
              type="text"
            />
          </div>

          <button
            onClick={() => {
              setWarehouseToEdit(null)
              setShowSidebar(true);
              setContentType("add-warehouse");
            }}
            className=" cursor-pointer ml-4"
            style={{
              backgroundColor: "#4162FF",
              color: "#ffffff",
              padding: "12px 32px",
              borderRadius: "4px",
            }}
          >
            Add Warehouse{" "}
          </button>
        </div>

       
          {/* New div for span and button */}
          {warehouses?.map((warehouese)=>{
           return (
            <div
          style={{
            border: "1px solid #EAECF0",
            padding: "14px",
            borderRadius: "8px",
          }}
          className="mt-6"
        >
           <div className="flex justify-between items-center">
            <div className="font-freesans flex flex-col items-start justify-start">
              <span
                className="font-freesans mb-2"
                style={{
                  color: "#4B4B4B",
                  fontWeight: 500,
                  fontSize: "14px",
                }}
              >
                {warehouese.warehouseName}
              </span>
              <span
                className="m-0 font-freesans"
                style={{
                  color: "#8E8E8E",
                  fontWeight: 400,
                  fontSize: "12px",
                }}
              >
                {warehouese.address}
              </span>
            </div>
            <img
              onClick={() => {
                setShowSidebar(true);
                setContentType("add-warehouse");
                setWarehouseToEdit(warehouese);
              }}
              style={{
                color: "#8E8E8E",
              }}
              src={"/edit.png"}
              className="w-5 h-5 cursor-pointer"
            />
          </div>
        </div>
          )
          })}
      </div>
      <CustomDrawer
        key={contentType}
        warehouseToEdit={warehouseToEdit}
        showSidebar={showSidebar}
        setShowSidebar={setShowSidebar}
        contentType={contentType}
        setContentType={setContentType}
      />
    </>
  );
}
