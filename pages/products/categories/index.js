import React, { useEffect } from "react";
import Layout from "../../../components/Layout";
import Categories from "../../../components/products/initial-pages/categories";
import { useDispatch, useSelector } from "react-redux";
import { setShowAddNewCategory } from "../../../redux/slices/addNewCategorySlice";

export default function index() {
  const dispatch = useDispatch();
  const showAddNewCategory = useSelector((state) => state.addNewCategory);

  const handleSetShowAddNewCategory = (value) => {
    dispatch(setShowAddNewCategory(value));
  };

  return (
    <Layout
      backText={showAddNewCategory ? "Add New Category" : undefined}
      backImageUrl={showAddNewCategory ? "/back-arrow.png" : undefined}
      backUrl={() => handleSetShowAddNewCategory(false)}
      showAddNewCategory={showAddNewCategory}
    >
      <Categories
        showAddNewCategory={showAddNewCategory}
        setShowAddNewCategory={handleSetShowAddNewCategory}
      />
    </Layout>
  );
}
