// categorySlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../../middleware/axiosInstance";


const baseUrl = process.env.BASE_URL;

const initialState = {
  category: {},
  loading: false,
  error: null,
};

export const addCategory = createAsyncThunk(
  "categories/addCategory",
  async (categoryData) => {
    try {
      const url = `${baseUrl}/categories/add-category`;
      const response = await axiosInstance.post(url, categoryData);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

export const getAllCategories = createAsyncThunk(
  "categories/getAllCategories",
  async (categoryData) => {
    try {
      const url = `${baseUrl}/categories/get-all-categories`;
      const response = await axiosInstance.get(url,categoryData);
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
        state.category = action.payload;
      })
      .addCase(getAllCategories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});


export default categorySlice.reducer;
