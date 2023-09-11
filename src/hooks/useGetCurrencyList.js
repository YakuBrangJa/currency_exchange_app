import React, { useEffect, useState } from "react";
import { ACCESS_KEY, axiosExchangeRateAPI } from "../libs/axios";
import { useDispatch } from "react-redux";
import { setCurrencyList, setLoadingCurrencyData, setNewError } from "../store/CurrencyDataReducer";

function useGetCurrencyList(config = { mode: "auto" }) {
  const dispatch = useDispatch();

  const getCurrencyList = async () => {
    try {
      dispatch(setLoadingCurrencyData(true));

      const response = await axiosExchangeRateAPI(`list?access_key=${ACCESS_KEY}`);
      console.log(response);
      if (response.data.error) {
        console.error(response.data.error.info);
        throw response.data.error;
      }

      dispatch(setCurrencyList(response?.data?.currencies));
      return response.data;
    } catch (e) {
      console.error(e);
      dispatch(
        setNewError({
          actionLabel: "getCurrencyList",
          error: e,
        })
      );
      return e;
    } finally {
      dispatch(setLoadingCurrencyData(false));
    }
  };

  useEffect(() => {
    if (config.mode === "auto") getCurrencyList();
  }, [config.mode]);

  return { getCurrencyList };
}

export default useGetCurrencyList;
