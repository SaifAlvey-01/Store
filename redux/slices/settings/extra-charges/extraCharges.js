// extraChargesSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../../../middleware/axiosInstance";

const baseUrl = process.env.BASE_URL;

const initialState = {
  extraCharges: [], 
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
  async (params) => {
    try {
      const url = `${baseUrl}/settings-extraCharges/get-all-settings-extraCharges`;
      const response = await axiosInstance.get(url,
        {
         params: { storeId: params.storeID, page: params.page, limit: params.limit },
        });
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

export const updateExtraCharge = createAsyncThunk(
  "extraCharges/updateExtraCharge",
<<<<<<< HEAD
  async ({ extraChargesId, updatedExtraChargeData }) => {
    try {
      const url = `${baseUrl}/settings-extraCharges/update-settings-extraCharges/${extraChargesId}`;
      const response = await axiosInstance.patch(url, updatedExtraChargeData);
=======
  async ({ extraChargesId, data }) => {
    try {
      const url = `${baseUrl}/settings-extraCharges/update-settings-extraCharges/${extraChargesId}`;
      const response = await axiosInstance.patch(url, data);
>>>>>>> 1901fc3330c73e458f2b09a46d93a953dbf7aec0
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
<<<<<<< HEAD
        // state.extraCharges = action.payload ;
=======
        state.extraCharges = action.payload.data ;
>>>>>>> 1901fc3330c73e458f2b09a46d93a953dbf7aec0
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
<<<<<<< HEAD
        state.extraCharges = action?.payload?.data;
=======
        state.extraCharges = action?.payload?.data?.data[0];
>>>>>>> 1901fc3330c73e458f2b09a46d93a953dbf7aec0
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
<<<<<<< HEAD
        // Find the index of the updated extra charge in the array and replace it
        const updatedExtraChargeIndex = state.extraCharges.findIndex(
          (extraCharge) => extraCharge.id === action.payload.id
        );
        if (updatedExtraChargeIndex !== -1) {
          state.extraCharges[updatedExtraChargeIndex] = action.payload;
        }
=======
        console.log(action?.payload?.data)
        state.extraCharges = action?.payload?.data;
>>>>>>> 1901fc3330c73e458f2b09a46d93a953dbf7aec0
      })
      .addCase(updateExtraCharge.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default extraChargesSlice.reducer;
