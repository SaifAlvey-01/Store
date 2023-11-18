import { createSlice } from "@reduxjs/toolkit";

const editProductSlice = createSlice({
  name: "editProduct",
  initialState: false,
  reducers: {
    setIsEditingProduct: (state, action) => action.payload,
  },
});

export const { setIsEditingProduct } = editProductSlice.actions;
export default editProductSlice.reducer;
