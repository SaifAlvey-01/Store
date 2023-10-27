import React from "react";
import Layout from "../../../components/Layout";
import AllProducts from "../../../components/products/initial-pages/all-products";
import { useDispatch, useSelector } from "react-redux";
import { setShowAddNewProduct } from "../../../redux/slices/addNewProductSlice";
import { setIsEditingProduct } from "../../../redux/slices/editProductSlice";

export default function index() {
  const dispatch = useDispatch();
  const showAddNewProduct = useSelector((state) => state.addNewProduct);
  const isEditingProduct = useSelector((state) => state.editProduct);

  const handleSetShowAddNewProduct = (value) => {
    dispatch(setShowAddNewProduct(value));
  };

  const handleSetIsEditingProduct = (value) => {
    dispatch(setIsEditingProduct(value));
  };

  return (
    <Layout
      backText={
        showAddNewProduct || isEditingProduct
          ? isEditingProduct
            ? "Edit Product"
            : "Add New Product"
          : undefined
      }
      backImageUrl={
        showAddNewProduct || isEditingProduct ? "/back-arrow.png" : undefined
      }
      backUrl={() => {
        if (isEditingProduct) handleSetIsEditingProduct(false);
        else handleSetShowAddNewProduct(false);
      }}
      showAddNewProduct={showAddNewProduct || isEditingProduct}
      isEditingProduct={isEditingProduct}
    >
      <AllProducts
        showAddNewProduct={showAddNewProduct}
        setShowAddNewProduct={handleSetShowAddNewProduct}
        isEditingProduct={isEditingProduct}
        setIsEditingProduct={handleSetIsEditingProduct}
      />
    </Layout>
  );
}
