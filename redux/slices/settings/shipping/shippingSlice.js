// shippingSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../../../middleware/axiosInstance";

const baseUrl = process.env.BASE_URL;

const initialState = {
  shippingOptions: [],
  loading: false,
  error: null,
  status: null,
};

export const updateShippingOption = createAsyncThunk(
  "shipping/updateShippingOption",
  async ( shippingData ) => {
    try {
      const url = `${baseUrl}/shipping/update-shipping`;
      const response = await axiosInstance.patch(url, shippingData);
      return response.data;
    } catch (error) {
      throw error.response.data.message;
    }
  }
);

export const getShippingOption = createAsyncThunk(
  "shipping/getShippingOption",
  async (storeId ) => {
    try {
      const url = `${baseUrl}/shipping/get-shipping`;
      const response = await axiosInstance.get(url, {
        params:{storeId: storeId }
      });
      return response.data;
    } catch (error) {
      throw error.response.data.message;
    }
  }
);

const shippingSlice = createSlice({
  name: "shipping",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(updateShippingOption.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateShippingOption.fulfilled, (state, action) => {
        state.loading = false;
        state.status = true;
        // Update the corresponding shipping option in the shippingOptions array
        const updatedShippingIndex = state.shippingOptions.findIndex(
          (shippingOption) => shippingOption.shippingId === action.payload.shippingId
        );
        if (updatedShippingIndex !== -1) {
          state.shippingOptions[updatedShippingIndex] = action.payload.data;
        }
      })
      .addCase(updateShippingOption.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(getShippingOption.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getShippingOption.fulfilled, (state, action) => {
        state.loading = false;
        state.shippingOptions = action.payload.data; // Assuming you only get one shipping option
        
      })
      .addCase(getShippingOption.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default shippingSlice.reducer;
