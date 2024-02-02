// registerManagerEmailSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../../../middleware/axiosInstance";

const baseUrl = process.env.BASE_URL;

const initialState = {
  // Define your initial state here for the new slice
<<<<<<< HEAD
  EmailInfo: {},
=======
  managerEmailInfo: "",
>>>>>>> 1901fc3330c73e458f2b09a46d93a953dbf7aec0
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
<<<<<<< HEAD
        state.managerEmailInfo = action.payload.data;
=======
        state.managerEmailInfo = action.payload.message;
>>>>>>> 1901fc3330c73e458f2b09a46d93a953dbf7aec0
      })
      .addCase(registerManagerEmail.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default registerManagerEmailSlice.reducer;
