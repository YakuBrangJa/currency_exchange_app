import { createSlice } from "@reduxjs/toolkit";

const currencyDataSlice = createSlice({
  name: "currencyData",
  initialState: {
    currencyList: [],
    exchangeRates: [],
    loadingCurrencyData: false,
  },

  reducers: {
    setCurrencyList: (state, action) => {
      state.currencyList = action.payload;
    },

    setExchangeRates: (state, action) => {
      state.exchangeRates = action.payload;
    },

    setLoadingCurrencyData: (state, action) => {
      state.loadingCurrencyData = action.payload;
    },
  },
});

export const { setCurrencyList, setExchangeRates, setLoadingCurrencyData } = currencyDataSlice.actions;
export default currencyDataSlice.reducer;
