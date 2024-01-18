import React, { useState } from "react";
import Inventory from "../../../components/products/initial-pages/inventory";
import Layout from "../../../components/Layout";

export default function index() {
  const [showInventoryList, setShowInventoryList] = useState(false);
  return (
    <Layout>
      <Inventory
        showInventoryList={showInventoryList}
        setShowInventoryList={setShowInventoryList}
      />
    </Layout>
  );
}
