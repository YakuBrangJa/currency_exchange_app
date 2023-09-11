import React, { useEffect, useState } from "react";
import { ACCESS_KEY, axiosExchangeRateAPI } from "../libs/axios";
import { setExchangeRates, setLoadingExchangeRateData, setNewError } from "../store/CurrencyDataReducer";
import { useDispatch } from "react-redux";

function useGetExchangeRateData(config = { mode: "auto" }) {
  const dispatch = useDispatch();
  // const [exchangeRates, setExchangeRates] = useState([]);

  const getExchangeRate = async () => {
    try {
      dispatch(setLoadingExchangeRateData(true));
      const response = await axiosExchangeRateAPI(`live?access_key=${ACCESS_KEY}`);
      console.log(response);
      if (response.data.error) {
        console.error(response.data.error.info);
        throw response.data.error;
      }

      dispatch(setExchangeRates(response?.data?.quotes));
      return response.data;
    } catch (e) {
      console.error(e);
      dispatch(
        setNewError({
          actionLabel: "getExchangeRate",
          error: e,
        })
      );
      return e;
    } finally {
      dispatch(setLoadingExchangeRateData(false));
    }
  };

  useEffect(() => {
    if (config.mode === "auto") getExchangeRate();
  }, [config.mode]);

  return { getExchangeRate };
}

export default useGetExchangeRateData;
