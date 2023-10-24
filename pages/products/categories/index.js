import React from "react";
import Layout from "../../../components/Layout";
import Categories from "../../../components/products/initial-pages/categories";
import { useDispatch, useSelector } from "react-redux";
import { setShowAddNewCategory } from "../../../redux/slices/addNewCategorySlice";
import { setIsEditingCategory } from "../../../redux/slices/editCategorySlice";

export default function index() {
  const dispatch = useDispatch();
  const showAddNewCategory = useSelector((state) => state.addNewCategory);
  const isEditingCategory = useSelector((state) => state.editCategory);

  const handleSetShowAddNewCategory = (value) => {
    dispatch(setShowAddNewCategory(value));
  };

  const handleSetIsEditingCategory = (value) => {
    dispatch(setIsEditingCategory(value));
  };

  return (
    <Layout
      backText={
        showAddNewCategory || isEditingCategory
          ? isEditingCategory
            ? "Edit Category"
            : "Add New Category"
          : undefined
      }
      backImageUrl={
        showAddNewCategory || isEditingCategory ? "/back-arrow.png" : undefined
      }
      backUrl={() => {
        if (isEditingCategory) handleSetIsEditingCategory(false);
        else handleSetShowAddNewCategory(false);
      }}
      showAddNewCategory={showAddNewCategory || isEditingCategory}
      isEditingCategory={isEditingCategory}
    >
      <Categories
        showAddNewCategory={showAddNewCategory}
        setShowAddNewCategory={handleSetShowAddNewCategory}
        isEditingCategory={isEditingCategory}
        setIsEditingCategory={handleSetIsEditingCategory}
      />
    </Layout>
  );
}
