import React, { useState } from "react";
import Layout from "../../../components/Layout";
import AllOrders from "../../../components/orders/initial-pages/all-orders";

export default function index() {
  const [showCreateOrder, setShowCreateOrder] = useState(false);

  return (
    <Layout
      backText={showCreateOrder ? "Create Order" : undefined}
      backImageUrl={showCreateOrder ? "/back-arrow.png" : undefined}
      backUrl={() => setShowCreateOrder(false)}
      showCreateOrder={showCreateOrder}
    >
      <AllOrders
        showCreateOrder={showCreateOrder}
        setShowCreateOrder={setShowCreateOrder}
      />
    </Layout>
  );
}
