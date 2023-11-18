// categorySlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../middleware/axiosInstance";

const baseUrl = process.env.BASE_URL;

const initialState = {
  category: {
    subCategories: [],
  },
  loading: false,
  error: null,
};

export const addCategory = createAsyncThunk(
  "categories/addCategory",
  async (categoryData, subCategoriesData) => {
    try {
      const url = `${baseUrl}/categories/add-category`;
      const payload = {
        ...categoryData,
        subCategories: subCategoriesData,
      };
      const response = await axiosInstance.post(url, payload);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

export const addSubCategory = createAsyncThunk(
  "categories/addSubCategory",
  async (subCategoryData, { getState }) => {
    // Access the current state to get the existing subCategories array
    const { category } = getState().categories || { category: { subCategories: [] } };

    // Ensure subCategories is always an array
    const existingSubCategories = Array.isArray(category.subCategories)
      ? category.subCategories
      : [];

    // Add the new subcategory object to the array
    const updatedSubCategories = [...existingSubCategories, subCategoryData];

    // Return the updated subCategories array
    return updatedSubCategories;
  }
);

export const getAllCategories = createAsyncThunk(
  "categories/getAllCategories",
  async (categoryData) => {
    try {
      const url = `${baseUrl}/categories/get-all-categories`;

      const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      };

      const response = await axiosInstance.get(url, {
        params: categoryData,
        headers: headers,
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

const categorySlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addCategory.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addCategory.fulfilled, (state, action) => {
        state.loading = false;
        state.category = action.payload;
      })
      .addCase(addSubCategory.fulfilled, (state, action) => {
        // Update the subCategories array with the new array from the async thunk
        state.category.subCategories = action.payload;
        
      })
      .addCase(addCategory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(getAllCategories.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllCategories.fulfilled, (state, action) => {
        state.loading = false;
        console.log(action.payload);
        state.category = action.payload;
      })
      .addCase(getAllCategories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default categorySlice.reducer;
