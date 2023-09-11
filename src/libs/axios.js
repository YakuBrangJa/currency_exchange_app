import axios from "axios";

export const ACCESS_KEY = "6b21eff22f1d38843d766dcbedda6624";
const EXCHANGE_RATE_API_FREE = `http://apilayer.net/api/`;
const EXCHANGE_RATE_API_PAID = `https://api.currencylayer.com/`;

export const axiosExchangeRateAPI = axios.create({
  baseURL: EXCHANGE_RATE_API_FREE,
});
