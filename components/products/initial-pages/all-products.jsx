import React from "react";
import FreeTrialFooter from "../../free-trial-footer";
import ProductsListing from "../inner-pages/products/products-listing";
import AddNewProduct from "../inner-pages/products/add-new-product";
import ProductsToolBar from "../inner-pages/products/products-tool-bar";
import { useState } from "react";
import EditProduct from "../inner-pages/products/edit-product";

export default function AllProducts({
  showAddNewProduct,
  setShowAddNewProduct,
  isEditingProduct,
  setIsEditingProduct,
}) {
  const handleEditClick = () => {
    setIsEditingProduct(true);
  };

  if (showAddNewProduct) {
    return <AddNewProduct goBack={() => setShowAddNewProduct(false)} />;
  }

  if (isEditingProduct) {
    return <EditProduct goBack={() => setIsEditingProduct(false)} />;
  }

  // If none of the above, show the main component layout
  return (
    <div
      className="min-h-[calc(108vh-180px)] sm:min-h-[calc(100% - 100px)] overflow-y-auto flex flex-col items-stretch justify-between"
      style={{
        backgroundColor: "var(--white-color, #FFF)",
        borderRadius: "10px",
        boxShadow: `#00000011 0px 2px 4px 2px`,
      }}
    >
      <div className="flex justify-center w-full">
        <ProductsToolBar setShowAddNewProduct={setShowAddNewProduct} />
      </div>

      <div className="w-full flex-grow flex flex-col">
        {" "}
        <ProductsListing onEditClick={handleEditClick} className="flex-grow" />
      </div>

      {/*Initial Product Page Content  */}
      {/* <div
        className="my-4 mx-4 sm:my-4 sm:mx-4 md:my-8 md:mx-4 lg:my-6 lg:mx-24 lg:w-[70%] w-[90%]"
        style={{
          // border: "1px solid #e3e3e3",
          backgroundColor: "var(--white-color, #FFF)",
          borderRadius: "10px",
        }}
      >
        <div className="flex flex-col items-center justify-between ">
          <img
            src={"/dashboard_images/product_search.png"}
            className="w-500 h-500 "
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
            className="mt-2 mb-6 cursor-pointer"
            onClick={() => setShowAddNewProduct(true)}
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

      <div className="w-[95%] mx-auto mb-4 mt-6 flex justify-center items-center">
        {" "}
        <FreeTrialFooter />
      </div>
    </div>
  );
}
