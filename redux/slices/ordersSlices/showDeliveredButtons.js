import { createSlice } from "@reduxjs/toolkit";

const showDeliveredButtonsSlice = createSlice({
  name: "showDeliveredButtons",
  initialState: false,
  reducers: {
    setShowDeliveredButtons: (state, action) => {
      return action.payload;
    },
  },
});

export const { setShowDeliveredButtons } = showDeliveredButtonsSlice.actions;
export default showDeliveredButtonsSlice.reducer;
