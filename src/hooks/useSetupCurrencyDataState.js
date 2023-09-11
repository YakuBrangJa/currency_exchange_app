import React, { useCallback, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import useGetCurrencyList from "./useGetCurrencyList";
import useGetExchangeRateData from "./useGetExchangeRateData";
import { setLoadingExchangeRateData } from "../store/CurrencyDataReducer";

function useSetupCurrencyDataState(config = { mode: "auto" }) {
  const dispatch = useDispatch();
  const { getCurrencyList } = useGetCurrencyList({ mode: "manual" });
  const { getExchangeRate } = useGetExchangeRateData({ mode: "manual" });

  const apiCallTimeout = useRef();

  const fetchAndStoreCurrencyData = useCallback(() => {
    getCurrencyList();

    // ! Intentionally delaying apart getExchangeRate() call with getCurrencyList(), as free version has api request rate limitation
    // If you are using subscription access key, you can call getExchangeRate() directly without setTimeout delay
    dispatch(setLoadingExchangeRateData(true));
    apiCallTimeout.current = setTimeout(() => {
      getExchangeRate();
    }, 1500);

    return () => {
      if (apiCallTimeout.current !== null) {
        clearTimeout(apiCallTimeout.current);
      }
    };
  }, [apiCallTimeout]);

  useEffect(() => {
    if (config.mode === "auto") fetchAndStoreCurrencyData();
  }, [fetchAndStoreCurrencyData, config.mode]);

  return {
    fetchAndStoreCurrencyData,
  };
}

export default useSetupCurrencyDataState;
