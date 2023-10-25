import { createSlice } from "@reduxjs/toolkit";

const editCategorySlice = createSlice({
  name: "editCategory",
  initialState: false,
  reducers: {
    setIsEditingCategory: (state, action) => action.payload,
  },
});

export const { setIsEditingCategory } = editCategorySlice.actions;
export default editCategorySlice.reducer;
