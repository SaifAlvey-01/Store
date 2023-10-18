import React from "react";
import Layout from "../../../components/Layout";
import AllProducts from "../../../components/products/initial-pages/all-products";
import { useState } from "react";

export default function index() {
  const [showAddNewProduct, setShowAddNewProduct] = useState(false);

  return (
    <Layout
      backText={showAddNewProduct ? "Add New Product" : undefined}
      backImageUrl={showAddNewProduct ? "/back-arrow.png" : undefined}
      backUrl={() => setShowAddNewProduct(false)}
      showAddNewProduct={showAddNewProduct}
    >
      <AllProducts
        showAddNewProduct={showAddNewProduct}
        setShowAddNewProduct={setShowAddNewProduct}
      />
    </Layout>
  );
}
