import { combineReducers } from "redux";
import counterReducer from "./counterSlice";
import userReducer from "./userSlice";
import productReducer from "./productsSlices/productSlice";
import addNewProductReducer from "./productsSlices/addNewProductSlice";
import addNewCategoryReducer from "./categoriesSlices/addNewCategorySlice";
import addNewSubCategoryReducer from "./categoriesSlices/addNewSubCategorySlice";
import editCategoryReducer from "./categoriesSlices/editCategorySlice";
import showCreateOrderReducer from "./ordersSlices/showCreateOrderSlice";
import editProductReducer from "./productsSlices/editProductSlice";
import showOrderDetailsReducer from "./ordersSlices/orderDetailsSlice";
import showConfirmDeliveryReducer from "./ordersSlices/confirmDeliverySlice";
import showDeliveredButtonsReducer from "./ordersSlices/showDeliveredButtons";
import showUpgradePlanReducer from "./storeSettingsSlices/upgradePlanSlice";
import getBusiness from "./getBusiness";
import addCategory from "./categoriesSlices/addCategory";

const rootReducer = combineReducers({
  counter: counterReducer,
  user: userReducer,
  products: productReducer,
  addNewProduct: addNewProductReducer,
  addNewCategory: addNewCategoryReducer,
  addNewSubCategory: addNewSubCategoryReducer,
  editCategory: editCategoryReducer,
  showCreateOrder: showCreateOrderReducer,
  editProduct: editProductReducer,
  showOrderDetails: showOrderDetailsReducer,
  showConfirmDelivery: showConfirmDeliveryReducer,
  showDeliveredButtons: showDeliveredButtonsReducer,
  showUpgradePlan: showUpgradePlanReducer,
  getBusiness,
  addCategory,
});

export default rootReducer;
