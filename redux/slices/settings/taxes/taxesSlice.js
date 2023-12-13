// taxesSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../../../middleware/axiosInstance";

const baseUrl = process.env.BASE_URL;

const initialState = {
  taxes: [], 
  loading: false,
  error: null,
  status: null,
};

export const addTax = createAsyncThunk(
  "taxes/addTax",
  async (taxData) => {
    try {
      const url = `${baseUrl}/taxes/add-tax`;
      const response = await axiosInstance.post(url, taxData);
      return response.data;
    } catch (error) {
      throw error.response.data.message;
    }
  }
);

export const getAllTaxes = createAsyncThunk(
  "taxes/getAllTaxes",
  async (params) => {
    try {
      const url = `${baseUrl}/taxes/get-all-taxes`;
      const response = await axiosInstance.get(url, { params: { storeId: params.stoteID, page: params.page, limit:params.limit} });
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

const taxSlice = createSlice({
  name: "taxes",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addTax.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addTax.fulfilled, (state, action) => {
        state.loading = false;
        state.status = true;
        state.taxes.push(action.payload); 
      })
      .addCase(addTax.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(getAllTaxes.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllTaxes.fulfilled, (state, action) => {
        state.loading = false;
        state.taxes = action.payload;
      })
      .addCase(getAllTaxes.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default taxSlice.reducer;
