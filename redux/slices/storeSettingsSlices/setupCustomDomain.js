import { createSlice } from "@reduxjs/toolkit";

const setupCustomDomainSlice = createSlice({
  name: "showSetupCustomDomain",
  initialState: false,
  reducers: {
    setShowSetupCustomDomain: (state, action) => action.payload,
  },
});

export const { setShowSetupCustomDomain } = setupCustomDomainSlice.actions;
export default setupCustomDomainSlice.reducer;
