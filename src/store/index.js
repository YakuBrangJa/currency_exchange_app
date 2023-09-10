import { configureStore } from "@reduxjs/toolkit";

import currencyDataReducer from "./CurrencyDataReducer";
import currencyInputReducer from "./currencyInputReducer";
import currencyTableInputReducer from "./currencyTableInputReducer";

const store = configureStore({
  reducer: {
    currencyDataState: currencyDataReducer,
    currencyInputState: currencyInputReducer,
    currencyTableInputState: currencyTableInputReducer,
  },
});

export default store;
