import { createSlice } from "@reduxjs/toolkit";

const showOrderDetailsSlice = createSlice({
  name: "showOrderDetails",
  initialState: false,
  reducers: {
    setShowOrderDetails: (state, action) => action.payload,
  },
});

export const { setShowOrderDetails } = showOrderDetailsSlice.actions;
export default showOrderDetailsSlice.reducer;
