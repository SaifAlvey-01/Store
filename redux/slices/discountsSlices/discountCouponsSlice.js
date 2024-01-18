import { createSlice } from "@reduxjs/toolkit";

const showDiscountCouponsSlice = createSlice({
  name: "showDiscountCoupons",
  initialState: false,
  reducers: {
    setShowDiscountCoupons: (state, action) => action.payload,
  },
});

export const { setShowDiscountCoupons } = showDiscountCouponsSlice.actions;
export default showDiscountCouponsSlice.reducer;
