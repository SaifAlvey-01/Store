import { createSlice } from "@reduxjs/toolkit";

const showConfirmDeliverySlice = createSlice({
  name: "showConfirmDelivery",
  initialState: false,
  reducers: {
    setShowConfirmDelivery: (state, action) => {
      return action.payload;
    },
  },
});

export const { setShowConfirmDelivery } = showConfirmDeliverySlice.actions;
export default showConfirmDeliverySlice.reducer;
