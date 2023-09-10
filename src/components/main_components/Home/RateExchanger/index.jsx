import React from "react";
import "./index.css";
import RenderExchangesummary from "./RenderExchangeSummary";
import ExchangeControls from "./ExchangeControls";
import SectionPrimary from "../../../library/section/SectionPrimary/SectionPrimary";

function RateExchanger() {
  return (
    <SectionPrimary className="RateExchanger">
      <RenderExchangesummary />
      <ExchangeControls />
    </SectionPrimary>
  );
}

export default RateExchanger;
