import { createSlice } from "@reduxjs/toolkit";

const upgradePlanSlice = createSlice({
  name: "showUpgradePlan",
  initialState: false,
  reducers: {
    setShowUpgradePlan: (state, action) => action.payload,
  },
});

export const { setShowUpgradePlan } = upgradePlanSlice.actions;
export default upgradePlanSlice.reducer;
