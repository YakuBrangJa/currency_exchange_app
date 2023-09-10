import React from "react";

import "./ExchangeControlsComps.css";
import { NumberInputSelectBox } from "../../../library/select/NumberInputSelectBox/NumberInputSelectBox";

export function ExchangeControlContainer({ children }) {
  return <div className="ExchangeControlContainer">{children}</div>;
}

export function CurrencyInput(props) {
  return <NumberInputSelectBox {...props} />;
}
