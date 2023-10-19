import React, { useEffect } from "react";
import Layout from "../../../components/Layout";
import AllProducts from "../../../components/products/initial-pages/all-products";
import { useDispatch, useSelector } from "react-redux";
import { setShowAddNewProduct } from "../../../redux/slices/addNewProductSlice";

export default function index() {
  const dispatch = useDispatch();
  const showAddNewProduct = useSelector((state) => state.addNewProduct);

  const handleSetShowAddNewProduct = (value) => {
    dispatch(setShowAddNewProduct(value));
  };

  return (
    <Layout
      backText={showAddNewProduct ? "Add New Product" : undefined}
      backImageUrl={showAddNewProduct ? "/back-arrow.png" : undefined}
      backUrl={() => handleSetShowAddNewProduct(false)}
      showAddNewProduct={showAddNewProduct}
    >
      <AllProducts
        showAddNewProduct={showAddNewProduct}
        setShowAddNewProduct={handleSetShowAddNewProduct}
      />
    </Layout>
  );
}
