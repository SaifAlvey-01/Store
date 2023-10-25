// businessSlice.js

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import Cookies from 'js-cookie';


const ID = Cookies.get("id");
const token = Cookies.get("token");
const baseUrl = process.env.BASE_URL;

const initialState = {
  business: null,
  loading: 'idle',
  error: null,
};

export const fetchBusiness = createAsyncThunk('business/fetchBusiness', async () => {

  const url = `${baseUrl}/accounts/${ID}`;

  const headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  };

  try {
    const response = await axios.get(url, { headers });
    console.log(response,"<---response")
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
        state.business = action.payload;
      })
      .addCase(fetchBusiness.rejected, (state, action) => {
        state.loading = 'rejected';
        state.error = action.error.message;
      });
  },
});

export default businessSlice.reducer;
