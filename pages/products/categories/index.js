import React from "react";
import Layout from "../../../components/Layout";
import Categories from "../../../components/products/initial-pages/categories";
import { useDispatch, useSelector } from "react-redux";
import { setShowAddNewCategory } from "../../../redux/slices/categoriesSlices/showCategorySlice";
import { setIsEditingCategory } from "../../../redux/slices/categoriesSlices/editCategorySlice";
import { setShowAddNewSubCategory } from "../../../redux/slices/categoriesSlices/showSubCategorySlice";

export default function index() {
  const dispatch = useDispatch();
  const showAddNewCategory = useSelector((state) => state.addNewCategory);
  const showAddNewSubCategory = useSelector((state) => state.addNewSubCategory);
  const isEditingCategory = useSelector((state) => state.editCategory);

  const handleSetShowAddNewCategory = (value) => {
    dispatch(setShowAddNewCategory(value));
  };

  const handleSetShowAddNewSubCategory = (value) => {
    dispatch(setShowAddNewSubCategory(value));
  };

  const handleSetIsEditingCategory = (value) => {
    dispatch(setIsEditingCategory(value));
  };

  const backText = showAddNewSubCategory
    ? "Add New SubCategory"
    : showAddNewCategory || isEditingCategory
    ? isEditingCategory
      ? "Edit Category"
      : "Add New Category"
    : undefined;

  return (
    <Layout
      backText={backText}
      backImageUrl={
        showAddNewCategory || isEditingCategory || showAddNewSubCategory
          ? "/back-arrow.png"
          : undefined
      }
      backUrl={() => {
        if (isEditingCategory) handleSetIsEditingCategory(false);
        else if (showAddNewSubCategory) handleSetShowAddNewSubCategory(false);
        else handleSetShowAddNewCategory(false);
      }}
      showAddNewCategory={showAddNewCategory || isEditingCategory}
      isEditingCategory={isEditingCategory}
      showAddNewSubCategory={showAddNewSubCategory}
      setShowAddNewSubCategory={handleSetShowAddNewSubCategory}
    >
      <Categories
        showAddNewCategory={showAddNewCategory}
        setShowAddNewCategory={handleSetShowAddNewCategory}
        showAddNewSubCategory={showAddNewSubCategory}
        setShowAddNewSubCategory={handleSetShowAddNewSubCategory}
        isEditingCategory={isEditingCategory}
        setIsEditingCategory={handleSetIsEditingCategory}
      />
    </Layout>
  );
}
