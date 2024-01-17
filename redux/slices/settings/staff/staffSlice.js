// registerManagerEmailSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../../../middleware/axiosInstance";

const baseUrl = process.env.BASE_URL;

const initialState = {
  // Define your initial state here for the new slice
  EmailInfo: {},
  loading: false,
  error: null,
  status: null,
};

export const registerManagerEmail = createAsyncThunk(
  "auth/registerManagerEmail",
  async (managerEmailData) => {
    try {
      const url = `${baseUrl}/auth/register-manager-email`;
      const response = await axiosInstance.post(url, managerEmailData);
      return response.data;
    } catch (error) {
      throw error.response.data.message;
    }
  }
);

const registerManagerEmailSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerManagerEmail.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerManagerEmail.fulfilled, (state, action) => {
        state.loading = false;
        state.status = true;
        state.managerEmailInfo = action.payload.data;
      })
      .addCase(registerManagerEmail.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default registerManagerEmailSlice.reducer;
