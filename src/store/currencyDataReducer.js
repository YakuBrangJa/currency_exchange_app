import { createSlice } from "@reduxjs/toolkit";

const currencyDataSlice = createSlice({
  name: "currencyData",
  initialState: {
    currencyList: [],
    exchangeRates: [],
    loadingCurrencyData: false,
    loadingExchangeRateData: false,
    errors: {},
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

    setLoadingExchangeRateData: (state, action) => {
      state.loadingExchangeRateData = action.payload;
    },

    setError: (state, action) => {
      state.errors = {};
    },

    setNewError: (state, action) => {
      // state.errors.push(action.payload);
      state.errors[action.payload.actionLabel] = action.payload;
    },
  },
});

export const { setCurrencyList, setExchangeRates, setLoadingCurrencyData, setLoadingExchangeRateData, setNewError, setError } = currencyDataSlice.actions;
export default currencyDataSlice.reducer;
