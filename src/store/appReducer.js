import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "currencyInput",
  initialState: {
    windowWidth: 0,
  },

  reducers: {
    setWindowWidth: (state, action) => {
      state.windowWidth = action.payload;
    },
  },
});

export const { setWindowWidth } = appSlice.actions;
export default appSlice.reducer;
