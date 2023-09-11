import React from "react";
import "./index.css";
import ExchangeSummary from "./ExchangeSummary";
import ExchangeControls from "./ExchangeControls";
import SectionPrimary from "../../../library/section/SectionPrimary/SectionPrimary";
import { useSelector } from "react-redux";
import LoadingSpinnerPrimary from "../../../library/loading_spinner/LoadingSpinnerPrimary/LoadingSpinnerPrimary";
import RateExchangerLoader from "./RateExchangerLoader";
import RateExchangerErrorPanel from "./RateExchangerErrorPanel";

function RateExchanger() {
  const { loadingCurrencyData, loadingExchangeRateData, errors } = useSelector((state) => state.currencyDataState);

  const hasError = Object.keys(errors).length > 0;

  return (
    <SectionPrimary className="RateExchanger">
      {loadingCurrencyData || loadingExchangeRateData ? (
        <RateExchangerLoader />
      ) : hasError ? (
        <RateExchangerErrorPanel />
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
