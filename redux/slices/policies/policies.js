// policySlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../../middleware/axiosInstance";

const baseUrl = process.env.BASE_URL;

const initialState = {
  policy: {},
  loading: false,
  error: null,
};

export const addPolicy = createAsyncThunk(
  "policies/addPolicy",
  async (policyData) => {
    try {
      const url = `${baseUrl}/policies/add-policy`;
      const response = await axiosInstance.post(url, policyData);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

// You can add more async thunks if needed, similar to getAllCategories

const policySlice = createSlice({
  name: "policies",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addPolicy.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addPolicy.fulfilled, (state, action) => {
        state.loading = false;
        state.policy = action.payload;
      })
      .addCase(addPolicy.rejected, (state, action) => {
        state.loading = false;
        console.log(action.error, "<---action.error")
        state.error = action.error.message;
      });
  },
});

export default policySlice.reducer;
