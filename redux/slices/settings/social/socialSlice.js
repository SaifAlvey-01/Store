// socialSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../../../middleware/axiosInstance";

const baseUrl = process.env.BASE_URL;

const initialState = {
  socialInfo: [],
  loading: false,
  error: null,
  status: null,
};

export const updateSocialInfo = createAsyncThunk(
  "social/updateSocialInfo",
  async (socialData) => {
    try {
      const url = `${baseUrl}/socials/update-social`; // Adjust the route accordingly
      const response = await axiosInstance.patch(url, socialData);
      return response.data;
    } catch (error) {
      throw error.response.data.message;
    }
  }
);

export const getSocialInfo = createAsyncThunk(
  "social/getSocialInfo",
  async (params) => {
    try {
      const url = `${baseUrl}/socials/get-socials`; // Adjust the route accordingly
      const response = await axiosInstance.get(url, {params: { storeId: params.storeID}});
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

const socialSlice = createSlice({
  name: "social",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(updateSocialInfo.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateSocialInfo.fulfilled, (state, action) => {
        state.loading = false;
        state.status = action.payload.state;
        state.socialInfo = action.payload.data;
      })
      .addCase(updateSocialInfo.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(getSocialInfo.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getSocialInfo.fulfilled, (state, action) => {
        state.loading = false;
        state.socialInfo = action.payload.data;
      })
      .addCase(getSocialInfo.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default socialSlice.reducer;
