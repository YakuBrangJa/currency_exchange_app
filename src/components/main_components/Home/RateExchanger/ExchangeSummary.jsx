import React from "react";
import "./ExchangeSummary.css";
import { useSelector } from "react-redux";
import { calculatePropotionalRelation } from "../../../../utils/calculatePropotionalRelation";

function ExchangeSummary() {
  const { selectedSource, selectedTargetSource } = useSelector((state) => state.currencyInputState);

  const { currencyList, exchangeRates } = useSelector((state) => state.currencyDataState);

  const baseSourceExchangeRate = exchangeRates[`USD${selectedSource}`] || 1;
  const baseTargetExchangeRate = exchangeRates[`USD${selectedTargetSource}`] || 1;

  const targetExchangeRate = calculatePropotionalRelation(baseSourceExchangeRate, baseTargetExchangeRate, 1);

  const sourceExchangeRate = calculatePropotionalRelation(baseTargetExchangeRate, baseSourceExchangeRate, 1);

  return (
    <div className="ExchangeSummary">
      <h2>Exchange Rate</h2>
      <div className="targetExchangeRate">
        <p className="baseValue">
          <span>1 </span>
          <span className="unit">{selectedSource} </span>
          <span>=</span>
        </p>
        <p className="targetValue">
          <span>{targetExchangeRate} </span>
          <span className="unit">{selectedTargetSource}</span>
        </p>
      </div>
      <div className="sourceExchangeRate">
        <p className="baseValue">
          <span>1 </span>
          <span className="unit">{selectedTargetSource}</span>
          <span> = </span>
          <span>{sourceExchangeRate} </span>
          <span className="unit">{selectedSource}</span>
        </p>
      </div>
    </div>
  );
}

export default ExchangeSummary;
