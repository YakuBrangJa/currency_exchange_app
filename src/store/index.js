import { configureStore } from "@reduxjs/toolkit";

import currencyDataReducer from "./CurrencyDataReducer";
import currencyInputReducer from "./currencyInputReducer";

const store = configureStore({
  reducer: {
    currencyDataState: currencyDataReducer,
    currencyInputState: currencyInputReducer,
  },
});

export default store;
