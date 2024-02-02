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

export const editTax = createAsyncThunk(
  "taxes/editTax",
<<<<<<< HEAD
  async ({ taxId, taxData }) => {
    try {
      const url = `${baseUrl}/taxes/update-tax/${taxId}`;
      const response = await axiosInstance.patch(url, taxData);
=======
  async ( {taxId, body} ) => {
    try {
      const url = `${baseUrl}/taxes/update-tax/${taxId}`;
      const response = await axiosInstance.patch(url, body);
>>>>>>> 1901fc3330c73e458f2b09a46d93a953dbf7aec0
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
      const response = await axiosInstance.get(url, {
        params: { storeId: params.storeID, page: params.page, limit: params.limit },
      });
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
<<<<<<< HEAD
        state.taxes.push(action.payload);
=======
        state.taxes = action.payload;
>>>>>>> 1901fc3330c73e458f2b09a46d93a953dbf7aec0
      })
      .addCase(addTax.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(editTax.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(editTax.fulfilled, (state, action) => {
        state.loading = false;
<<<<<<< HEAD
        state.status = true;
        // Update the corresponding tax in the taxes array
        const editedTaxIndex = state.taxes.data.data.findIndex(
          (tax) => tax.taxId === action.payload.taxId
        );
        if (editedTaxIndex !== -1) {
          state.taxes.data.data[editedTaxIndex] = action.payload.data;
        }
=======
        state.status = action.payload.state;
        state.taxes = action.payload.data;
>>>>>>> 1901fc3330c73e458f2b09a46d93a953dbf7aec0
      })
      .addCase(editTax.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(getAllTaxes.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllTaxes.fulfilled, (state, action) => {
        state.loading = false;
<<<<<<< HEAD
        state.taxes = action.payload;
=======
        state.taxes = action.payload.data.data[0];
>>>>>>> 1901fc3330c73e458f2b09a46d93a953dbf7aec0
      })
      .addCase(getAllTaxes.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default taxSlice.reducer;
