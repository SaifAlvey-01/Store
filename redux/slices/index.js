import { combineReducers } from "redux";
import counterReducer from "./counterSlice";
import userReducer from "./userSlice";
import productReducer from "./productsSlices/productSlice";
import addNewProductReducer from "./productsSlices/addNewProductSlice";
import addNewCategoryReducer from "./categoriesSlices/showCategorySlice";
import addNewSubCategoryReducer from "./categoriesSlices/showSubCategorySlice";
import addSubCategoryReducer from "./categoriesSlices/addSubCategory";
import editCategoryReducer from "./categoriesSlices/editCategorySlice";
import showCreateOrderReducer from "./ordersSlices/showCreateOrderSlice";
import editProductReducer from "./productsSlices/editProductSlice";
import showOrderDetailsReducer from "./ordersSlices/orderDetailsSlice";
import showConfirmDeliveryReducer from "./ordersSlices/confirmDeliverySlice";
import showDeliveredButtonsReducer from "./ordersSlices/showDeliveredButtons";
import showUpgradePlanReducer from "./storeSettingsSlices/upgradePlanSlice";
import showConnectExistingDomainReducer from "./storeSettingsSlices/connectExistingDomain";
import showSetupCustomDomainReducer from "./storeSettingsSlices/setupCustomDomain";
import showDiscountCouponsReducer from "./discountsSlices/discountCouponsSlice";
import getBusiness from "./getBusiness";
import categories from "./categoriesSlices/addCategory";
import policies from "./settings/policies/policies";
import taxesSlice from "./settings/taxes/taxesSlice";
import warehouseSlice from "./settings/warehouse/warehouseSlice";
import socialSlice from "./settings/social/socialSlice";
import extraChargesReducer from "./settings/extra-charges/extraCharges";
import shippingSlice from "./settings/shipping/shippingSlice";
import staffSlice from "./settings/staff/staffSlice";

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
  showConnectExistingDomain: showConnectExistingDomainReducer,
  showSetupCustomDomain: showSetupCustomDomainReducer,
  showDiscountCoupons: showDiscountCouponsReducer,
  getBusiness,
  categories,
  addSubCategory: addSubCategoryReducer,
  policies: policies,
  taxesSlice: taxesSlice,
  warehouseSlice,
  socialSlice,
  extraChargesReducer,
  shippingSlice,
  staffSlice
});

export default rootReducer;
