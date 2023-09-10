import React from "react";
import "./index.css";
import ExchangeSummary from "./ExchangeSummary";
import ExchangeControls from "./ExchangeControls";
import SectionPrimary from "../../../library/section/SectionPrimary/SectionPrimary";
import { useSelector } from "react-redux";
import LoadingSpinnerPrimary from "../../../library/loading_spinner/LoadingSpinnerPrimary/LoadingSpinnerPrimary";
import RateExchangerLoader from "./RateExchangerLoader";

function RateExchanger() {
  const loadingCurrencyData = useSelector((state) => state.currencyDataState.loadingCurrencyData);
  return (
    <SectionPrimary className="RateExchanger">
      {loadingCurrencyData ? (
        <RateExchangerLoader />
      ) : (
        <>
          <ExchangeSummary />
          <ExchangeControls />
        </>
      )}
    </SectionPrimary>
  );
}

export default RateExchanger;
