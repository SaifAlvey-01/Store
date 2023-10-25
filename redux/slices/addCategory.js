// categorySlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Define the initial state
const initialState = {
  category: null,
  loading: false,
  error: null,
};

// Define an async thunk for making the POST request
export const addCategory = createAsyncThunk('categories/addCategory', async (categoryData) => {
  try {
    const url = `${baseUrl}/categories/add-category`;

    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    };



    const response = await axios.post(url, categoryData, headers);
    return response.data; // Assuming the server returns the created category
  } catch (error) {
    throw error;
  }
});

// Create the slice
const categorySlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addCategory.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addCategory.fulfilled, (state, action) => {
        state.loading = false;
        state.category = action.payload;
      })
      .addCase(addCategory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

// Export the async action and the slice reducer
export default categorySlice.reducer;
