import { createSlice } from "@reduxjs/toolkit";

const addNewProductSlice = createSlice({
  name: "addNewProduct",
  initialState: false,
  reducers: {
    setShowAddNewProduct: (state, action) => action.payload,
  },
});

export const { setShowAddNewProduct } = addNewProductSlice.actions;
export default addNewProductSlice.reducer;
