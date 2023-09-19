import { configureStore } from "@reduxjs/toolkit";

import rootReducer from "./appSlice";

export const store = configureStore({
  reducer: rootReducer,
});
