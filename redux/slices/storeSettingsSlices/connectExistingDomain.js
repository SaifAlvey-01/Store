import { createSlice } from "@reduxjs/toolkit";

const connectExistingDomainSlice = createSlice({
  name: "showConnectExistingDomain",
  initialState: false,
  reducers: {
    setShowConnectExistingDomain: (state, action) => action.payload,
  },
});

export const { setShowConnectExistingDomain } =
  connectExistingDomainSlice.actions;
export default connectExistingDomainSlice.reducer;
