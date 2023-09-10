import React from "react";
import "./TableBodyComps.css";

export function TableBodyContainer({ children }) {
  return <div className="TableBodyContainer">{children}</div>;
}

export function TableBodyHeader() {
  return (
    <div className="TableBodyHeader">
      <span className="left">Currency</span>
      <span className="right">Rate</span>
    </div>
  );
}

export function TableBodyListContainer({ children }) {
  return <ul className="TableBodyListContainer __scrollbar_1">{children}</ul>;
}

export function TableBodyListItem({ label, rateValue }) {
  if (isNaN(rateValue)) rateValue = 0;
  rateValue = Math.round(rateValue * 10000) / 10000;
  return (
    <li className="TableBodyListItem">
      <div className="currencyLabel">
        <span className="unit">{label.unit}</span>
        {label.full && <span className="fullLabel"> - {label.full}</span>}
      </div>
      <span>{rateValue}</span>
    </li>
  );
}
