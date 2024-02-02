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

<<<<<<< HEAD
=======
// New async thunk for fetching business logo
export const fetchBusinessLogo = createAsyncThunk('business/fetchBusinessLogo', async (id) => {
  const url = `${baseUrl}/accounts/business-logo/${id}`;

  try {
    const response = await axiosInstance.get(url);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
});

// New async thunk for adding business logo
export const addBusinessLogo = createAsyncThunk('business/addBusinessLogo', async ({ id, logoData }) => {
  const url = `${baseUrl}/accounts/add-business-logo/${id}`;
  console.log(logoData, "<----logoData")
  try {
    const response = await axiosInstance.put(url, { logoData });
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
});

>>>>>>> 1901fc3330c73e458f2b09a46d93a953dbf7aec0
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
<<<<<<< HEAD
      });
=======
      })
      .addCase(fetchBusinessLogo.pending, (state) => {
        state.loading = 'pending';
      })
      .addCase(fetchBusinessLogo.fulfilled, (state, action) => {
        state.loading = 'fulfilled';
        state.business = action.payload.data;
      })
      .addCase(fetchBusinessLogo.rejected, (state, action) => {
        state.loading = 'rejected';
        state.error = action.error.message;
      })
      .addCase(addBusinessLogo.pending, (state) => {
        state.loading = 'pending';
      })
      .addCase(addBusinessLogo.fulfilled, (state, action) => {
        state.loading = 'fulfilled';
        // You can handle the state update after adding the logo if needed
        state.business = action.payload.data;
      })
      .addCase(addBusinessLogo.rejected, (state, action) => {
        state.loading = 'rejected';
        state.error = action.error.message;
      })
>>>>>>> 1901fc3330c73e458f2b09a46d93a953dbf7aec0
  },
});

export default businessSlice.reducer;