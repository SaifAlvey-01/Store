import React from "react";
import Layout from "../../../components/Layout";
import AbandonedCarts from "../../../components/orders/abandoned-carts";

export default function index() {
  return (
    <Layout>
      <AbandonedCarts />
    </Layout>
  );
}
