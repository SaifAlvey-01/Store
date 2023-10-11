// productSlice.js

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import productService from '../services/productService'; // Replace with your product service file

// Async Thunk for fetching products
export const fetchProducts = createAsyncThunk('products/fetchAll', async () => {
  const response = await productService.getProducts(); // Replace with your API call
  return response.data;
});

// Async Thunk for creating a new product
export const createProduct = createAsyncThunk('products/create', async (productData) => {
  const response = await productService.createProduct(productData); // Replace with your API call
  return response.data;
});

// Async Thunk for updating a product
export const updateProduct = createAsyncThunk('products/update', async (productData) => {
  const response = await productService.updateProduct(productData); // Replace with your API call
  return response.data;
});

const productSlice = createSlice({
  name: 'products',
  initialState: {
    products: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(createProduct.fulfilled, (state, action) => {
        state.products.push(action.payload);
      })
      .addCase(updateProduct.fulfilled, (state, action) => {
        const updatedProduct = action.payload;
        const index = state.products.findIndex((product) => product.id === updatedProduct.id);
        if (index !== -1) {
          state.products[index] = updatedProduct;
        }
      });
  },
});

export default productSlice.reducer;

// Export the async thunks for use in components
export { fetchProducts, createProduct, updateProduct };
