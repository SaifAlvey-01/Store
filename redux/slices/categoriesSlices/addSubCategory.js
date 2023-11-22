import { createSlice } from "@reduxjs/toolkit";

const addSubCategorySlice = createSlice({
  name: "addSubCategory",
  initialState: {
    subCategories: [],
  },
  reducers: {
    addSubCategory: (state, action) => {
      // Return a new state object with the new subcategory added
      return {
        ...state,
        subCategories: [...state.subCategories, action.payload],
      };
    },
  },
});

export const { addSubCategory } = addSubCategorySlice.actions;
export default addSubCategorySlice.reducer;
