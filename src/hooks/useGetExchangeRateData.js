import React, { useEffect, useState } from "react";
import { ACCESS_KEY, axiosExchangeRateAPI } from "../libs/axios";

function useGetExchangeRateData(source = null) {
  const [exchangeRates, setExchangeRates] = useState([]);
  const [loading, setLoading] = useState(false);

  const getExchangeRate = async (source) => {
    try {
      setLoading(true);
      const response = await axiosExchangeRateAPI(`live?access_key=${ACCESS_KEY}`);
      console.log(response);
      if (response.data.error) return;

      setExchangeRates(response?.data?.quotes);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (source) getExchangeRate();
  }, [source]);

  return { getExchangeRate, exchangeRates, loading, setLoading };
}

export default useGetExchangeRateData;
