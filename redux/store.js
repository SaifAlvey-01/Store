import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import rootReducer from "./slices";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["addNewProduct", "user", "addNewCategory", "showCreateOrder", "business"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: ["persist/PERSIST"],
    },
  }),
});

export const persistor = persistStore(store);
