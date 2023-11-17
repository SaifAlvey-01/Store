import React, { useEffect } from "react";
import { setShowConfirmDelivery } from "../../redux/slices/ordersSlices/confirmDeliverySlice";
import { useDispatch } from "react-redux";

const headers = [
  { title: "Product" },
  { title: "Unit Weight" },
  { title: "Qty" },
];

const data = [
  {
    productImage: "/product-img.png",
    productName: "Product 001",
    productDescription: "Men Shoes",
    unitWeight: "1.25 KG",
    qty: "x 1",
  },
  {
    productImage: "/product-img.png",
    productName: "Product 001",
    productDescription: "Men Shoes",
    unitWeight: "1.25 KG",
    qty: "x 1",
  },
  {
    productImage: "/product-img.png",
    productName: "Product 001",
    productDescription: "Men Shoes",
    unitWeight: "1.25 KG",
    qty: "x 1",
  },
  {
    productImage: "/product-img.png",
    productName: "Product 001",
    productDescription: "Men Shoes",
    unitWeight: "1.25 KG",
    qty: "x 1",
  },
];

export default function ShipmentWeight({
  setShowSidebar,
  showSidebar,
  contentType,
  setContentType,
}) {
  const dispatch = useDispatch();

  const handleProceed = () => {
    setShowSidebar(false);
    dispatch(setShowConfirmDelivery(true));
  };

  return (
    <div>
      {" "}
      <div className="h-[820px]">
        <div className="flex justify-between items-center">
          <h3 style={{ fontSize: "18px", fontWeight: "normal" }}>
            Shipment Weight{" "}
          </h3>
        </div>

        <div
          style={{
            borderRadius: "6px",
            border: "1px solid #EEE",
            background: "#FFF",
          }}
          className="flex flex-row items-center justify-between py-6 px-3"
        >
          <span style={{ fontSize: "14px", color: "#8E8E8E" }}>
            Shipping Charges
          </span>
          <span className="mx-4" style={{ fontSize: "14px", color: "#4B4B4B" }}>
            ₹100
          </span>
        </div>

        <div
          style={{
            borderRadius: "6px",
            border: "1px solid #EEE",
            background: "#FFF",
          }}
          className="flex flex-row items-center justify-between py-6 px-3 mt-4"
        >
          <span style={{ fontSize: "14px", color: "#8E8E8E" }}>
            Shipping Partner{" "}
          </span>
          <img className="mx-4" src={"/xpress.png"} />
        </div>

        <div className="flex justify-between items-center mt-6">
          <table
            className="w-full font-freesans"
            style={{
              borderRadius: "8px",
              borderCollapse: "separate",
            }}
          >
            <thead>
              <tr>
                {headers.map((header, idx) => (
                  <th
                    key={idx}
                    className="py-3 px-2 bg-f9fafb text-start font-freesans "
                    style={{
                      borderBottom: "1px solid #EAECF0",
                      backgroundColor: "#F9FAFB",
                      color: "#1D2939",
                      fontSize: "12px",
                    }}
                  >
                    <div className="flex flex-row items-center">
                      {header.title}
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="bg-white">
              {data.map((product, index) => (
                <tr key={index}>
                  <td
                    style={{ borderBottom: "1px solid #EAECF0" }}
                    className="items-center p-2 w-[50%]"
                  >
                    <label
                      className="flex flex-row items-center py-1.5 w-full border border-gray-200 rounded dark:border-gray-700"
                      style={{
                        color: "#4B4B4B",
                        fontSize: "14px",
                        fontWeight: "500",
                      }}
                    >
                      <img
                        className="h-11 w-11"
                        src={product.productImage}
                        alt={product.productName}
                      />
                      <span className="flex flex-col ml-2 font-lato ">
                        <span style={{ fontSize: "13px", color: "#4B4B4B" }}>
                          {product.productName}
                        </span>{" "}
                        <span
                          className="mt-1.5"
                          style={{ fontSize: "12px", color: "#8E8E8E" }}
                        >
                          {product.productDescription}
                        </span>
                      </span>
                    </label>
                  </td>
                  <td
                    className="p-2 w-[30%]"
                    style={{
                      borderBottom: "1px solid #EAECF0",
                    }}
                  >
                    <div
                      className="font-freesans p-2"
                      style={{
                        color: "#8E8E8E",
                        fontSize: "12px",
                        fontWeight: 400,
                        borderRadius: "4px",
                        border: "1px solid #E5E7EB",
                        background: "#FFF",
                        textAlign: "center",
                        width: "40%",
                      }}
                    >
                      {product.unitWeight}
                    </div>
                  </td>
                  <td
                    className="p-2 w-[30%]"
                    style={{
                      borderBottom: "1px solid #EAECF0",
                    }}
                  >
                    <span
                      className="font-freesans"
                      style={{
                        color: "#8E8E8E",
                        fontSize: "12px",
                        fontWeight: 400,
                      }}
                    >
                      {product.qty}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
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
          onClick={handleProceed}
          className="bg-blue-600 text-white px-5 py-2.5 rounded cursor-pointer"
        >
          Proceed to ship{" "}
        </button>
      </div>
    </div>
  );
}
