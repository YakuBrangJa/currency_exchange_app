import { useEffect, useRef } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../../library/select/SelectInput";
import "./ExchangeControlsComps.css";
import { AiFillCaretDown } from "react-icons/ai";

export function ExchangeControlContainer({ children }) {
  return <div className="ExchangeControlContainer">{children}</div>;
}

export function CurrencyInput({ currencyList, selectedCurrency, handleSelectSource, amount, amountChangeHandler }) {
  return (
    <div className="CurrencySelect">
      <input
        type="number"
        className="CurrencySelect_numberInput"
        value={Math.round(amount * 10000) / 10000}
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
                <span>{currencyList[key]} </span>
                <span>({key})</span>
              </SelectItem>
            ))}
          </SelectContent>
        )}
      </Select>
    </div>
  );
}
