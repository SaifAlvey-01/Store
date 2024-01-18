// import { createSlice } from "@reduxjs/toolkit";

// const addNewSubCategorySlice = createSlice({
//   name: "addNewSubCategory",
//   initialState: {
//     showAddNewSubCategory: false,
//     subCategories: [],
//   },
//   reducers: {
//     setShowAddNewSubCategory: (state, action) => {
//       // Return a new state object with updated visibility
//       return {
//         ...state,
//         showAddNewSubCategory: action.payload,
//       };
//     },
//     addSubCategory: (state, action) => {
//       // Return a new state object with the new subcategory added
//       return {
//         ...state,
//         subCategories: [...state.subCategories, action.payload],
//       };
//     },
//   },
// });

// export const { setShowAddNewSubCategory, addSubCategory } =
//   addNewSubCategorySlice.actions;
// export default addNewSubCategorySlice.reducer;

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
