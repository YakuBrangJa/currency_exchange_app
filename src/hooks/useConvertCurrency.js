import React, { useCallback } from "react";
import { useSelector } from "react-redux";

function useConvertCurrency() {
  const { currencyList, exchangeRates, loadingCurrencyData } = useSelector((state) => state.currencyDataState);

  const convertCurrency = useCallback(
    ({ from, to, amount }) => {
      const sourceRate = exchangeRates[`USD${from}`] || 1;
      const targetRate = exchangeRates[`USD${to}`] || 1;
      const convertedValue = amount / sourceRate;

      return convertedValue * targetRate;
    },
    [currencyList, exchangeRates]
  );

  return convertCurrency;
}

export default useConvertCurrency;
