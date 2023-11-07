import React, { useState } from "react";
import FreeTrialFooter from "../../free-trial-footer";
import CreateOrder from "../inner-pages/create-order";
import OrdersToolBar from "../inner-pages/orders-tool-bar";
import OrderListing from "../inner-pages/orders-listing";
import OrdersFilterBar from "../inner-pages/orders-filter-bar";
import OrderDetails from "../inner-pages/order-details";

export default function AllOrders({
  showCreateOrder,
  setShowCreateOrder,
  showOrderDetails,
  setShowOrderDetails,
}) {
  const [selectedOrder, setSelectedOrder] = useState(null);

  if (showCreateOrder) {
    return <CreateOrder goBack={() => setShowCreateOrder(false)} />;
  }

  return (
    <>
      {showOrderDetails && (
        <div
          className="relative h-auto overflow-y-auto flex flex-col md:flex-row items-center justify-between bg-white rounded-lg shadow-md mb-5"
          style={{
            borderRadius: "10px",
            boxShadow: "#00000011 0px 2px 4px 2px",
            marginBottom: "20px",
          }}
        >
          {/* Image and h4 section */}
          <div className="flex flex-row items-start md:items-center relative w-12">
            {/* Adjust the width accordingly if needed */}
            <img
              src={"/Rectangle_green.png"}
              className="absolute top-0 right-0 md:left-0 w-[330px]  sm:w-[385px] md:w-[280px] h-full"
            />
            <h4 className="font-freesans text-white ml-[-8.5rem] sm:ml-[-15rem] md:ml-4 z-10 whitespace-nowrap">
              Request Online Payment{" "}
            </h4>
          </div>

          {/* Description section */}
          <div className="flex flex-col items-start justify-center max-w-[400px] md:max-w-[270px] lg:max-w-none xl:max-w-none mt-4 md:mt-0 ml-[1rem] sm:ml-[1rem] md:ml-[13rem] lg:ml-[8rem] xl:ml-[10rem] 2xl:ml-[-1rem]">
            <span
              style={{
                fontSize: "14px",
                color: "#4B4B4B",
              }}
            >
              Share payment link with your customer & get paid online.
            </span>
          </div>

          {/* Social sharing section */}
          <div className="flex flex-row justify-end md:justify-start items-center my-4 md:my-0 ml-[10rem]  sm:ml-[23rem] md:ml-[4rem] lg:ml-[5rem] md:mr-4">
            <button
              // onClick={handleDeleteClick}
              className="cursor-pointer"
              style={{
                backgroundColor: "#fff",
                border: "1px dashed #009821",
                color: "#009821",
                padding: "7px 30px",
                borderRadius: "4px",
              }}
            >
              Request
            </button>
          </div>
        </div>
      )}
      <div
        className="min-h-[calc(106vh-160px)] sm:min-h-[calc(100% - 100px)] overflow-y-auto flex flex-col items-center justify-between "
        style={{
          backgroundColor: "var(--white-color, #FFF)",
          borderRadius: "10px",
          boxShadow: `#00000011 0px 2px 4px 2px`,
        }}
      >
        <div className="w-full flex-grow flex flex-col mb-4">
          {showOrderDetails ? (
            <OrderDetails
              goBack={() => setShowOrderDetails(false)}
              selectedOrder={selectedOrder}
            />
          ) : (
            <>
              <div className="flex justify-center w-full">
                <OrdersFilterBar setShowCreateOrder={setShowCreateOrder} />
              </div>
              <div className="w-full flex-grow flex flex-col mb-4">
                <OrderListing
                  showOrderDetails={showOrderDetails}
                  setShowOrderDetails={setShowOrderDetails}
                  setSelectedOrder={setSelectedOrder}
                  className="flex-grow"
                />
              </div>
            </>
          )}
        </div>

        {/* <div
        className=" my-4 mx-4 sm:my-4 sm:mx-4 md:my-8 md:mx-4 lg:my-6 lg:mx-24 lg:w-[70%] w-[90%]"
        style={{
          // border: "1px solid #e3e3e3",
          backgroundColor: "var(--white-color, #FFF)",
          borderRadius: "10px",
        }}
      >
        <div className="flex flex-col items-center justify-between ">
          <img
            src={"/dashboard_images/all_orders.png"}
            className="w-600 h-600 "
          />

          <div className="flex flex-col items-center justify-between ">
            <h2
              style={{ color: "#4B4B4B" }}
              className="mt-0 mb-4 font-bold font-freesans"
            >
              Manage orders
            </h2>
            <p
              style={{
                color: "#8E8E8E",
                textAlign: "center",
              }}
              className="mt-0 mb-2 my-0 font-thin text-base w-[100%] lg:max-w-[80%] max-w-[100%]"
            >
              Track and manage your orders here once you receive them, or create
              a manual order now.
            </p>
          </div>

          <button
            onClick={() => setShowCreateOrder(true)}
            className="mt-4 mb-8 cursor-pointer"
            style={{
              backgroundColor: "#4162FF",
              color: "#ffffff",
              padding: "10px 30px",
              borderRadius: "4px",
            }}
          >
            Create Order
          </button>
        </div>
      </div> */}

        <div className="w-[90%] mx-4 mb-8 mt-2 flex flex-col items-center justify-between">
          <FreeTrialFooter />
        </div>
      </div>
    </>
  );
}
