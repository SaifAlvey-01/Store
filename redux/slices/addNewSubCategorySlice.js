import { createSlice } from "@reduxjs/toolkit";

const addNewSubCategorySlice = createSlice({
  name: "addNewSubCategory",
  initialState: false,
  reducers: {
    setShowAddNewSubCategory: (state, action) => action.payload,
  },
});

export const { setShowAddNewSubCategory } = addNewSubCategorySlice.actions;
export default addNewSubCategorySlice.reducer;
