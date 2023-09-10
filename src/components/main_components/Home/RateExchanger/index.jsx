import React from "react";
import "./index.css";
import RenderExchangesummary from "./RenderExchangeSummary";
import ExchangeControls from "./ExchangeControls";
import SectionPrimary from "../../../library/section/SectionPrimary";

function RateExchanger() {
  return (
    <SectionPrimary>
      <RenderExchangesummary />
      <ExchangeControls />
    </SectionPrimary>
  );
}

export default RateExchanger;
