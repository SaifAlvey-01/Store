// extraChargesSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../../../middleware/axiosInstance";

const baseUrl = process.env.BASE_URL;

const initialState = {
  extraCharges: [], // Change to an array to store multiple extra charges
  loading: false,
  error: null,
  status: null,
};

export const addExtraCharge = createAsyncThunk(
  "extraCharges/addExtraCharge",
  async (extraChargeData) => {
    try {
      const url = `${baseUrl}/settings-extraCharges/add-settings-extraCharges`;
      const response = await axiosInstance.post(url, extraChargeData);
      return response.data;
    } catch (error) {
      throw error.response.data.message;
    }
  }
);

export const getAllExtraCharges = createAsyncThunk(
  "extraCharges/getAllExtraCharges",
  async () => {
    try {
      const url = `${baseUrl}/settings-extraCharges/get-all-settings-extraCharges`;
      const response = await axiosInstance.get(url);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

export const updateExtraCharge = createAsyncThunk(
  "extraCharges/updateExtraCharge",
  async ({ extraChargesId, updatedExtraChargeData }) => {
    try {
      const url = `${baseUrl}/settings-extraCharges/update-settings-extraCharges/${extraChargesId}`;
      const response = await axiosInstance.patch(url, updatedExtraChargeData);
      return response.data;
    } catch (error) {
      throw error.response.data.message;
    }
  }
);

const extraChargesSlice = createSlice({
  name: "extraCharges",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addExtraCharge.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addExtraCharge.fulfilled, (state, action) => {
        state.loading = false;
        state.status = true;
        state.extraCharges.push(action.payload);
      })
      .addCase(addExtraCharge.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(getAllExtraCharges.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllExtraCharges.fulfilled, (state, action) => {
        state.loading = false;
        state.extraCharges = action.payload;
      })
      .addCase(getAllExtraCharges.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(updateExtraCharge.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateExtraCharge.fulfilled, (state, action) => {
        state.loading = false;
        state.status = true;
        // Find the index of the updated extra charge in the array and replace it
        const updatedExtraChargeIndex = state.extraCharges.findIndex(
          (extraCharge) => extraCharge.id === action.payload.id
        );
        if (updatedExtraChargeIndex !== -1) {
          state.extraCharges[updatedExtraChargeIndex] = action.payload;
        }
      })
      .addCase(updateExtraCharge.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default extraChargesSlice.reducer;
