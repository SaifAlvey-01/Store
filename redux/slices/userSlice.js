import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: {},
  status: "idle",
  error: null,
};

export const postUser = createAsyncThunk("users/postUser", async (newItem) => {
  let response = {
    data: newItem,
  };
  return response.data;
});

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(postUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(postUser.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(postUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default userSlice.reducer;
