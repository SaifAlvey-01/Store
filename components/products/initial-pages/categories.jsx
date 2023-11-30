import React, { useEffect } from "react";
import FreeTrialFooter from "../../free-trial-footer";
import AddNewCategory from "../inner-pages/categories/add-new-category";
import CategoriesToolBar from "../inner-pages/categories/categories-tool-bar";
import CategoriesListing from "../inner-pages/categories/categories-listing";
import EditCategory from "../inner-pages/categories/edit-category";
import addCategory, {
  getAllCategories,
} from "../../../redux/slices/categoriesSlices/addCategory";
import { useDispatch, useSelector } from "react-redux";
import Cookies from "js-cookie";

export default function Categories({
  showAddNewCategory,
  setShowAddNewCategory,
  isEditingCategory,
  setIsEditingCategory,
  setShowAddNewSubCategory,
}) {
  const dispatch = useDispatch();
  const id = Cookies.get("id");
  const categories = useSelector((state)=> state?.categories?.category?.data?.data || []);

  useEffect(() => {
    dispatch(getAllCategories({params:{ page:1, limit:10, storeId: id }}));
  }, [dispatch]);

  const handleEditClick = () => {
    setIsEditingCategory(true);
  };

  if (showAddNewCategory) {
    return (
      <AddNewCategory
        setShowAddNewSubCategory={setShowAddNewSubCategory}
        goBack={() => setShowAddNewCategory(false)}
      />
    );
  }

  if (isEditingCategory) {
    return <EditCategory goBack={() => setIsEditingCategory(false)} />;
  }

  console.log(categories, "<=====Getall categories");

  return (

    <div
      className="min-h-[calc(108vh-180px)] sm:min-h-[calc(100% - 100px)] overflow-y-auto flex flex-col items-center justify-between "
      style={{
        backgroundColor: "var(--white-color, #FFF)",
        borderRadius: "10px",
        boxShadow: `#00000011 0px 2px 4px 2px`,
      }}
    >
      {categories.length < 0 ? 
    (  <div
        className="my-4 mx-4 sm:my-4 sm:mx-4 md:my-8 md:mx-4 lg:my-16 lg:mx-24 lg:w-[70%] w-[90%]"
        style={{
          backgroundColor: "var(--white-color, #FFF)",
          borderRadius: "10px",
        }}
      >
        <div className="flex flex-col items-center justify-between">
          <img
            src={"/dashboard_images/categories.png"}
            className="w-600 h-600"
          />
          <div className="flex flex-col items-center justify-between">
            <h2
              style={{ color: "#4B4B4B", fontSize: "20px" }}
              className="mt-0 mb-2 font-bold font-freesans"
            >
              Create your first category now
            </h2>
            <p
              style={{ color: "#8E8E8E", textAlign: "center" }}
              className="mt-0 mb-1 my-0 font-thin text-sm w-[100%] max-w-[90%]"
            >
              Showcase your products or services to the customers by creating
              beautiful categories.
            </p>
          </div>
          <button
            className="mt-4 mb-8 cursor-pointer"
            onClick={() => setShowAddNewCategory(true)}
            style={{
              backgroundColor: "#4162FF",
              color: "#ffffff",
              padding: "10px 20px",
              borderRadius: "4px",
            }}
          >
            Add New Category
          </button>
        </div>
      </div>)
      
      :

      (
        <>
      <div className="flex justify-center w-full">
      <CategoriesToolBar setShowAddNewCategory={setShowAddNewCategory} />
    </div>
    <div className="w-full flex-grow flex flex-col">
      <CategoriesListing
        categories={categories}
        onEditClick={handleEditClick}
        className="flex-grow"
      />
    </div> 

    <div className="w-[90%] mx-4 mb-8 mt-4   flex flex-col items-center justify-between">
      <FreeTrialFooter />
    </div> 
        
        </>
    
    )
    
    }

        
    </div>
  );
}
