import { createSlice } from "@reduxjs/toolkit";

const showCreateOrderSlice = createSlice({
  name: "showCreateOrder",
  initialState: false,
  reducers: {
    setShowCreateOrder: (state, action) => action.payload,
  },
});

export const { setShowCreateOrder } = showCreateOrderSlice.actions;
export default showCreateOrderSlice.reducer;
