import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import useSetupCurrencyDataState from "./useSetupCurrencyDataState";
import { setError } from "../store/CurrencyDataReducer";
import useGetExchangeRateData from "./useGetExchangeRateData";
import useGetCurrencyList from "./useGetCurrencyList";

function useResolveApiError() {
  const dispatch = useDispatch();
  const errors = useSelector((state) => state.currencyDataState.errors);

  const { getExchangeRate } = useGetExchangeRateData({ mode: "manual" });
  const { getCurrencyList } = useGetCurrencyList({ mode: "manual" });

  const handleApiCall = {
    getExchangeRate,
    getCurrencyList,
  };

  const resolveApiError = useCallback(() => {
    Object.keys(errors).forEach((errorKey) => {
      handleApiCall[errorKey]();
    });
    dispatch(setError());
  }, [errors]);

  return { resolveApiError };
}

export default useResolveApiError;
