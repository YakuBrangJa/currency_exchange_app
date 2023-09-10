import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { TableContainer, TableControlLeft, TableControlRight, TableCurrencyInput } from "./TableControlsComps";
import ButtonPrimary from "../../../library/button/ButtonPrimary/ButtonPrimary";
import { setBaseValue, setSelectedBaseCurrency } from "../../../../store/currencyTableInputReducer";

function TableControls() {
  const dispatch = useDispatch();
  const { currencyList, exchangeRates, loadingCurrencyData } = useSelector((state) => state.currencyDataState);

  const { selectedBaseCurrency, baseValue } = useSelector((state) => state.currencyTableInputState);

  // const [inputAmount, setInputAmount] = useState(1);

  const handleSelectCurrency = (value) => {
    if (!value) return;
    dispatch(setSelectedBaseCurrency(value));
  };

  const handleAmountChange = (value) => {
    dispatch(setBaseValue(value));
  };

  return (
    <TableContainer>
      <TableControlLeft>
        <TableCurrencyInput
          currencyList={currencyList}
          selectedCurrency={selectedBaseCurrency}
          handleSelectSource={handleSelectCurrency}
          amount={baseValue}
          amountChangeHandler={handleAmountChange}
        />
      </TableControlLeft>
      {/* <TableControlRight>
        <span>sort</span>
      </TableControlRight> */}
    </TableContainer>
  );
}

export default TableControls;
