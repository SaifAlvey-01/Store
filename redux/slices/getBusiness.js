import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';
import axiosInstance from '../../middleware/axiosInstance';


const baseUrl = process.env.BASE_URL;

const initialState = {
  business: null,
  loading: 'idle',
  error: null,
};

export const fetchBusiness = createAsyncThunk('business/fetchBusiness', async (id) => {

  const url = `${baseUrl}/accounts/${id}`;

  try {
    const response = await axiosInstance.get(url);
    return response.data;
  } catch (error) {
      console.log(error)
    throw error;
  }
});

const businessSlice = createSlice({
  name: 'business',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBusiness.pending, (state) => {
        state.loading = 'pending';
      })
      .addCase(fetchBusiness.fulfilled, (state, action) => {
        state.loading = 'fulfilled';
        state.business = action.payload.data;
      })
      .addCase(fetchBusiness.rejected, (state, action) => {
        state.loading = 'rejected';
        state.error = action.error.message;
      });
  },
});

export default businessSlice.reducer;