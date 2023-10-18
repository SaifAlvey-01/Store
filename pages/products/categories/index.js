import React from "react";
import Layout from "../../../components/Layout";
import { useState } from "react";
import Categories from "../../../components/products/initial-pages/categories";

export default function index() {
  const [showAddNewCategory, setShowAddNewCategory] = useState(false);

  return (
    <Layout
      backText={showAddNewCategory ? "Add New Category" : undefined}
      backImageUrl={showAddNewCategory ? "/back-arrow.png" : undefined}
      backUrl={() => setShowAddNewCategory(false)}
      showAddNewCategory={showAddNewCategory}
    >
      <Categories
        showAddNewCategory={showAddNewCategory}
        setShowAddNewCategory={setShowAddNewCategory}
      />
    </Layout>
  );
}
