import { createSlice } from "@reduxjs/toolkit";

const currencyTableInputSlice = createSlice({
  name: "currencyInput",
  initialState: {
    baseValue: 1,
    selectedBaseCurrency: "USD",
    currencySearchValue: "",
  },

  reducers: {
    setBaseValue: (state, action) => {
      state.baseValue = action.payload;
    },
    setSelectedBaseCurrency: (state, action) => {
      state.selectedBaseCurrency = action.payload;
    },
    setCurrencySearchValue: (state, action) => {
      state.currencySearchValue = action.payload;
    },
  },
});

export const { setBaseValue, setSelectedBaseCurrency, setCurrencySearchValue } = currencyTableInputSlice.actions;
export default currencyTableInputSlice.reducer;
