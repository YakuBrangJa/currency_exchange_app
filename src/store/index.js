import { configureStore } from "@reduxjs/toolkit";

import currencyDataReducer from "./CurrencyDataReducer";
import currencyInputReducer from "./currencyInputReducer";
import currencyTableInputReducer from "./currencyTableInputReducer";
import appReducer from "./appReducer";

const store = configureStore({
  reducer: {
    currencyDataState: currencyDataReducer,
    currencyInputState: currencyInputReducer,
    currencyTableInputState: currencyTableInputReducer,
    appState: appReducer,
  },
});

export default store;
