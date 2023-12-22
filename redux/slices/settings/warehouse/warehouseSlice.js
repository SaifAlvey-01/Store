// warehouseSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../../../middleware/axiosInstance";

const baseUrl = process.env.BASE_URL;

const initialState = {
  warehouses: [],
  loading: false,
  error: null,
  status: null,
};

export const addWarehouse = createAsyncThunk(
  "warehouses/addWarehouse",
  async (warehouseData) => {
    try {
      const url = `${baseUrl}/warehouse/add-warehouse`;
      const response = await axiosInstance.post(url, warehouseData);
      return response.data;
    } catch (error) {
      throw error.response.data.message;
    }
  }
);

export const editWarehouse = createAsyncThunk(
  "warehouses/editWarehouse",
  async ({ warehouseId, warehouseData }) => {
    try {
      const url = `${baseUrl}/warehouse/update-warehouse/${warehouseId}`;
      const response = await axiosInstance.patch(url, warehouseData);
      return response.data;
    } catch (error) {
      throw error.response.data.message;
    }
  }
);

export const getAllWarehouses = createAsyncThunk(
  "warehouses/getAllWarehouses",
  async () => {
    try {
      const url = `${baseUrl}/warehouse/get-all-warehouses`;
      const response = await axiosInstance.get(url);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

const warehouseSlice = createSlice({
  name: "warehouses",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addWarehouse.pending, (state) => {
        state.loading = true;
        state.error = null;
    })
    .addCase(addWarehouse.fulfilled, (state, action) => {
        state.loading = false;
        state.status = action.payload.state
        state.warehouses.push(action.payload);
      })
      .addCase(addWarehouse.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(editWarehouse.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(editWarehouse.fulfilled, (state, action) => {
        state.loading = false;
        state.status = true;
        // Update the corresponding warehouse in the warehouses array
        const editedWarehouseIndex = state.warehouses.findIndex(
          (warehouse) => warehouse.warehouseId === action.payload.warehouseId
        );
        if (editedWarehouseIndex !== -1) {
          state.warehouses[editedWarehouseIndex] = action.payload.data;
        }
      })
      .addCase(editWarehouse.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(getAllWarehouses.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllWarehouses.fulfilled, (state, action) => {
        state.loading = false;
        state.warehouses = action.payload.data;
      })
      .addCase(getAllWarehouses.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default warehouseSlice.reducer;
