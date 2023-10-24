import { combineReducers } from "redux";
import counterReducer from "./counterSlice";
import userReducer from "./userSlice";
import productReducer from "./productSlice";
import addNewProductReducer from "./addNewProductSlice";
import addNewCategoryReducer from "./addNewCategorySlice";
import showCreateOrderReducer from "./showCreateOrderSlice";
import editProductReducer from "./editProductSlice";
import editCategoryReducer from "./editCategorySlice";

const rootReducer = combineReducers({
  counter: counterReducer,
  user: userReducer,
  products: productReducer,
  addNewProduct: addNewProductReducer,
  addNewCategory: addNewCategoryReducer,
  showCreateOrder: showCreateOrderReducer,
  editProduct: editProductReducer,
  editCategory: editCategoryReducer,
});

export default rootReducer;
