import React, { useEffect, useState } from "react";
import { ACCESS_KEY, axiosExchangeRateAPI } from "../libs/axios";

function useGetCurrencyList() {
  const [currencyList, setCurrencyList] = useState([]);
  const [loading, setLoading] = useState(false);

  const getCurrencyList = async () => {
    try {
      setLoading(true);
      const response = await axiosExchangeRateAPI(`list?access_key=${ACCESS_KEY}`);
      console.log(response);
      if (response.data.error) return;

      setCurrencyList(response?.data?.currencies);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCurrencyList();
  }, []);

  return { getCurrencyList, currencyList, loading };
}

export default useGetCurrencyList;
