// policySlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../../../middleware/axiosInstance";

const baseUrl = process.env.BASE_URL;

const initialState = {
  policies: [], // Change to an array to store multiple policies
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

export const getAllPolicies = createAsyncThunk(
  "policies/getAllPolicies",
  async (storeId) => {
    try {
      const url = `${baseUrl}/policies/get-all-policies`;
      const response = await axiosInstance.get(url, { params: { storeId } });
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

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
        state.policies.push(action.payload); // Assuming addPolicy returns a single policy
      })
      .addCase(addPolicy.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(getAllPolicies.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllPolicies.fulfilled, (state, action) => {
        state.loading = false;
        state.policies = action.payload;
      })
      .addCase(getAllPolicies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default policySlice.reducer;
