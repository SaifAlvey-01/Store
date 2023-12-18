// policySlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../../../middleware/axiosInstance";

const baseUrl = process.env.BASE_URL;

const initialState = {
  policies: [], // Change to an array to store multiple policies
  loading: false,
  error: null,
  status: null,

};

export const addPolicy = createAsyncThunk(
  "policies/addPolicy",
  async (policyData) => {
    try {
      const url = `${baseUrl}/policies/add-policy`;
      const response = await axiosInstance.post(url, policyData);
      return response.data;
    } catch (error) {
      throw error.response.data.message;
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

export const updatePolicy = createAsyncThunk(
  "policies/updatePolicy",
  async ({ policyId, updatedPolicyData }) => {
    try {
      const url = `${baseUrl}/policies/update-policies/${policyId}`;
      const response = await axiosInstance.patch(url, updatedPolicyData);
      return response.data;
    } catch (error) {
      throw error.response.data.message;
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
        state.status = true;
        state.policies.data.push(action.payload);
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
      })
      .addCase(updatePolicy.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updatePolicy.fulfilled, (state, action) => {
        state.loading = false;
        // Find the index of the updated policy in the array and replace it
        state.status = true;
        const updatedPolicyIndex = state.policies.data.findIndex(
          (policy) => policy.id === action.payload.id
        );
        if (updatedPolicyIndex !== -1) {
          state.policies.data[updatedPolicyIndex] = action.payload;
        }
      })
      .addCase(updatePolicy.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });

  },
});

export default policySlice.reducer;
