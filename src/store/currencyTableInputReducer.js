import { createSlice } from "@reduxjs/toolkit";

const currencyTableInputSlice = createSlice({
  name: "currencyInput",
  initialState: {
    baseValue: 1,
    selectedBaseCurrency: "USD",
  },

  reducers: {
    setBaseValue: (state, action) => {
      state.baseValue = action.payload;
    },
    setSelectedBaseCurrency: (state, action) => {
      state.selectedBaseCurrency = action.payload;
    },
  },
});

export const { setBaseValue, setSelectedBaseCurrency } = currencyTableInputSlice.actions;
export default currencyTableInputSlice.reducer;
