import { createSlice } from "@reduxjs/toolkit";

const currencyInputSlice = createSlice({
  name: "currencyInput",
  initialState: {
    selectedSource: "USD",
    selectedTargetSource: "MMK",
  },

  reducers: {
    setSelectedSource: (state, action) => {
      state.selectedSource = action.payload;
    },

    setSelectedTargetSource: (state, action) => {
      state.selectedTargetSource = action.payload;
    },
  },
});

export const { setSelectedSource, setSelectedTargetSource } = currencyInputSlice.actions;
export default currencyInputSlice.reducer;
