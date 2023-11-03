import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import rootReducer from "./slices";
import thunk from "redux-thunk";

const persistConfig = {
  key: "root",
  storage,
  whitelist: [
    "addNewProduct",
    "user",
    "addNewCategory",
    "addNewSubCategory",
    "showCreateOrder",
    "business",
    "editProduct",
    "editCategory",
  ],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: ["persist/PERSIST"],
    },
    thunk: true,
  }).concat(thunk),
});

export const persistor = persistStore(store);
