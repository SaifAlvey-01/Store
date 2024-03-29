import React from "react";
import FreeTrialFooter from "../../free-trial-footer";
import InventoryToolBar from "../inner-pages/inventory/inventory-tool-bar";
import InventoryListing from "../inner-pages/inventory/inventory-listing";
import { useState } from "react";

export default function Inventory() {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div
      className="min-h-[calc(108vh-180px)] sm:min-h-[calc(100% - 100px)] overflow-y-auto flex flex-col items-center justify-between "
      style={{
        backgroundColor: "var(--white-color, #FFF)",
        borderRadius: "10px",
        boxShadow: `#00000011 0px 2px 4px 2px`,
      }}
    >
      <div className="flex justify-center w-full">
        <InventoryToolBar isEditing={isEditing} setIsEditing={setIsEditing} />
      </div>

      <div className="w-full flex-grow flex flex-col">
        {" "}
        <InventoryListing isEditing={isEditing} className="flex-grow" />
      </div>

      {/*Initial Inventory Page Content  */}
      {/* <div
        className=" my-4 mx-4 sm:my-4 sm:mx-4 md:my-8 md:mx-4 lg:my-8 lg:mx-24 lg:w-[70%] w-[90%]"
        style={{
          backgroundColor: "var(--white-color, #FFF)",
          borderRadius: "10px",
        }}
      >
        <div className="flex flex-col items-center justify-between ">
          <img
            src={"/dashboard_images/product_search.png"}
            className="w-600 h-600 "
          />

          <div className="flex flex-col items-center justify-between ">
            <h2
              style={{ color: "#4B4B4B", fontSize: "20px" }}
              className="mt-0 mb-2 font-bold font-freesans	"
            >
              Add products to your online store
            </h2>
            <p
              style={{
                color: "#8E8E8E",
                textAlign: "center",
              }}
              className="mt-0 mb-1 my-0 font-thin text-sm w-[100%] max-w-[90%]"
            >
              It takes only few seconds to add your products and start selling
              to the customers.
            </p>
          </div>

          <button
            className="mt-4 mb-8 cursor-pointer"
            style={{
              backgroundColor: "#4162FF",
              color: "#ffffff",
              padding: "10px 20px",
              borderRadius: "4px",
            }}
          >
            Add New Product
          </button>
        </div>
      </div> */}

      <div className="w-[90%] mx-4 mb-8 mt-4   flex flex-col items-center justify-between">
        <FreeTrialFooter />
      </div>
    </div>
  );
}
