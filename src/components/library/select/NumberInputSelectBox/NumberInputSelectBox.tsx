import React from "react";
import "./NumberInputSelectBox.css";

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../SelectInput/SelectInput";

import { AiFillCaretDown } from "react-icons/ai";

export interface NumberInputSelectBoxProps {
  currencyList: Record<string, string>[];
  selectedCurrency: string;
  amount: number;
  handleSelectSource: (value: string) => void;
  amountChangeHandler: (value: number) => void;
}

export function NumberInputSelectBox({ currencyList, selectedCurrency, handleSelectSource, amount, amountChangeHandler }: NumberInputSelectBoxProps) {
  return (
    <div className="CurrencySelect">
      <input
        type="number"
        className="CurrencySelect_numberInput"
        value={isNaN(amount) ? "" : Math.round(amount * 10000) / 10000}
        onChange={(e) => amountChangeHandler(parseInt(e.target.value, 10))}
        onFocus={() => {
          if (amount == 0) {
            amountChangeHandler(NaN);
          }
        }}
        onBlur={() => {
          if (isNaN(amount)) {
            amountChangeHandler(0);
          }
        }}
      />
      <div className="CurrencySelect_vt"></div>
      <Select
        value={selectedCurrency}
        onValueChange={(value) => {
          console.log(value);
          handleSelectSource(value);
        }}>
        <SelectTrigger className="CurrencySelect_selectTrigger">
          <SelectValue
            placeholder={selectedCurrency}
            className="CurrencySelect_selectValue"
          />
          <AiFillCaretDown className="icon" />
        </SelectTrigger>
        {currencyList && (
          <SelectContent className="CurrencySelect_selectContent">
            {Object.keys(currencyList).map((key) => (
              <SelectItem
                key={key}
                value={key}
                className="CurrencySelect_selectItem">
                <span className="unit">{key}</span>
                <span className="fullLabel"> - {currencyList[key]} </span>
              </SelectItem>
            ))}
          </SelectContent>
        )}
      </Select>
    </div>
  );
}
