import React, { useEffect } from "react";
import Layout from "../../../components/Layout";
import AllOrders from "../../../components/orders/initial-pages/all-orders";
import { useDispatch, useSelector } from "react-redux";
import { setShowConfirmDelivery } from "../../../redux/slices/ordersSlices/confirmDeliverySlice";
import { setShowCreateOrder } from "../../../redux/slices/ordersSlices/showCreateOrderSlice";
import { setShowOrderDetails } from "../../../redux/slices/ordersSlices/orderDetailsSlice";

export default function index() {
  const dispatch = useDispatch();
  const showCreateOrder = useSelector((state) => state.showCreateOrder);
  const showOrderDetails = useSelector((state) => state.showOrderDetails);
  const showConfirmDelivery = useSelector((state) => state.showConfirmDelivery);

  const handleGoBack = () => {
    if (showConfirmDelivery) {
      dispatch(setShowConfirmDelivery(false));
    } else if (showCreateOrder) {
      dispatch(setShowCreateOrder(false));
    } else if (showOrderDetails) {
      dispatch(setShowOrderDetails(false));
    }
  };

  const backText = showConfirmDelivery
    ? "Confirm Delivery"
    : showCreateOrder
    ? "Create Order"
    : showOrderDetails
    ? "Order Details"
    : undefined;

  const backImageUrl =
    showCreateOrder || showOrderDetails || showConfirmDelivery
      ? "/back-arrow.png"
      : undefined;

  return (
    <Layout
      backText={backText}
      backImageUrl={backImageUrl}
      backUrl={handleGoBack}
      showCreateOrder={showCreateOrder}
      showOrderDetails={showOrderDetails}
      showConfirmDelivery={showConfirmDelivery}
    >
      <AllOrders
        showCreateOrder={showCreateOrder}
        setShowCreateOrder={(value) => dispatch(setShowCreateOrder(value))}
        showOrderDetails={showOrderDetails}
        setShowOrderDetails={(value) => dispatch(setShowOrderDetails(value))}
        showConfirmDelivery={showConfirmDelivery}
        setShowConfirmDelivery={(value) =>
          dispatch(setShowConfirmDelivery(value))
        }
      />
    </Layout>
  );
}
