import { createSlice } from "@reduxjs/toolkit";

const addNewCategorySlice = createSlice({
  name: "addNewCategory",
  initialState: false,
  reducers: {
    setShowAddNewCategory: (state, action) => action.payload,
  },
});

export const { setShowAddNewCategory } = addNewCategorySlice.actions;
export default addNewCategorySlice.reducer;
