import React, { useState } from "react";
import AllOrders from "../../../components/orders/all-orders";
import Layout from "../../../components/Layout";

export default function index() {
  const [showCreateOrder, setShowCreateOrder] = useState(false);

  return (
    <Layout
      backText={showCreateOrder ? "Create Order" : undefined}
      backImageUrl={showCreateOrder ? "/back-arrow.png" : undefined}
      backUrl={() => setShowCreateOrder(false)}
    >
      <AllOrders
        showCreateOrder={showCreateOrder}
        setShowCreateOrder={setShowCreateOrder}
      />
    </Layout>
  );
}
