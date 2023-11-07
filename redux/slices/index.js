import { combineReducers } from "redux";
import counterReducer from "./counterSlice";
import userReducer from "./userSlice";
import productReducer from "./productSlice";
import addNewProductReducer from "./addNewProductSlice";
import addNewCategoryReducer from "./addNewCategorySlice";
import addNewSubCategoryReducer from "./addNewSubCategorySlice";
import showCreateOrderReducer from "./showCreateOrderSlice";
import editProductReducer from "./editProductSlice";
import editCategoryReducer from "./editCategorySlice";
import showOrderDetailsReducer from "./orderDetailsSlice";
import getBusiness from "./getBusiness";
import addCategory from "./addCategory";

const rootReducer = combineReducers({
  counter: counterReducer,
  user: userReducer,
  products: productReducer,
  addNewProduct: addNewProductReducer,
  addNewCategory: addNewCategoryReducer,
  addNewSubCategory: addNewSubCategoryReducer,
  showCreateOrder: showCreateOrderReducer,
  editProduct: editProductReducer,
  editCategory: editCategoryReducer,
  showOrderDetails: showOrderDetailsReducer,
  getBusiness,
  addCategory,
});

export default rootReducer;
