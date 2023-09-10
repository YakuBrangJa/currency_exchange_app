import React, { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import useGetCurrencyList from "./useGetCurrencyList";
import useGetExchangeRateData from "./useGetExchangeRateData";
import { setCurrencyList, setExchangeRates, setLoadingCurrencyData } from "../store/CurrencyDataReducer";

function useSetupCurrencyDataState() {
  const dispatch = useDispatch();
  const { currencyList, loading: loadingCurrencyList } = useGetCurrencyList();
  const { getExchangeRate, exchangeRates, loading: loadingExchangeRates, setLoading: setLoadingExchangeRates } = useGetExchangeRateData();

  const delayAPICallTimeout = useRef();
  useEffect(() => {
    // ! Intentionally delaying live exchange rate API call, as free version has rate limitation
    // If you are using subscription access key, you can call getExchangeRate() directly
    setLoadingExchangeRates(true);
    delayAPICallTimeout.current = setTimeout(() => {
      getExchangeRate();
    }, 1800);

    return () => {
      if (delayAPICallTimeout.current !== null) {
        clearTimeout(delayAPICallTimeout.current);
      }
    };
  }, []);

  // setting store currency list
  useEffect(() => {
    dispatch(setCurrencyList(currencyList));
  }, [currencyList]);

  // setting store exchange rate list
  useEffect(() => {
    dispatch(setExchangeRates(exchangeRates));
  }, [exchangeRates]);

  // setting currency data fetching state
  useEffect(() => {
    dispatch(setLoadingCurrencyData(loadingCurrencyList || loadingExchangeRates));
  }, [loadingCurrencyList, loadingExchangeRates]);

  return {};
}

export default useSetupCurrencyDataState;
