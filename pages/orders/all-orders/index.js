import React from "react";
import Layout from "../../../components/Layout";
import AllOrders from "../../../components/orders/initial-pages/all-orders";
import { useDispatch, useSelector } from "react-redux";
import { setShowCreateOrder } from "../../../redux/slices/showCreateOrderSlice";

export default function index() {
  const dispatch = useDispatch();
  const showCreateOrder = useSelector((state) => state.showCreateOrder);

  return (
    <Layout
      backText={showCreateOrder ? "Create Order" : undefined}
      backImageUrl={showCreateOrder ? "/back-arrow.png" : undefined}
      backUrl={() => dispatch(setShowCreateOrder(false))}
      showCreateOrder={showCreateOrder}
    >
      <AllOrders
        showCreateOrder={showCreateOrder}
        setShowCreateOrder={(value) => dispatch(setShowCreateOrder(value))}
      />
    </Layout>
  );
}
