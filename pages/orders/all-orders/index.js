import React from "react";
import Layout from "../../../components/Layout";
import AllOrders from "../../../components/orders/initial-pages/all-orders";
import { useDispatch, useSelector } from "react-redux";
import { setShowCreateOrder } from "../../../redux/slices/showCreateOrderSlice";
import { setShowOrderDetails } from "../../../redux/slices/orderDetailsSlice";

export default function index() {
  const dispatch = useDispatch();
  const showCreateOrder = useSelector((state) => state.showCreateOrder);
  const showOrderDetails = useSelector((state) => state.showOrderDetails);

  const handleGoBack = () => {
    if (showCreateOrder) {
      dispatch(setShowCreateOrder(false));
    } else if (showOrderDetails) {
      dispatch(setShowOrderDetails(false));
    }
  };

  return (
    <Layout
      backText={
        showCreateOrder
          ? "Create Order"
          : showOrderDetails
          ? "Order Details"
          : undefined
      }
      backImageUrl={
        showCreateOrder
          ? "/back-arrow.png"
          : showOrderDetails
          ? "/back-arrow.png"
          : undefined
      }
      backUrl={handleGoBack}
      showCreateOrder={showCreateOrder}
      showOrderDetails={showOrderDetails}
    >
      <AllOrders
        showCreateOrder={showCreateOrder}
        setShowCreateOrder={(value) => dispatch(setShowCreateOrder(value))}
        showOrderDetails={showOrderDetails}
        setShowOrderDetails={(value) => dispatch(setShowOrderDetails(value))}
      />
    </Layout>
  );
}
