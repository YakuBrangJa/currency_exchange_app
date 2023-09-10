import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { TableControlsContainer, TableControlLeft, TableControlRight, TableCurrencyInput, TableSearchBox } from "./TableControlsComps";
import ButtonPrimary from "../../../library/button/ButtonPrimary/ButtonPrimary";
import { setBaseValue, setCurrencySearchValue, setSelectedBaseCurrency } from "../../../../store/currencyTableInputReducer";
import SearchBoxPrimary from "../../../library/search/SearchBoxPrimary/SearchBoxPrimary";

function TableControls() {
  const dispatch = useDispatch();
  const { currencyList, exchangeRates, loadingCurrencyData } = useSelector((state) => state.currencyDataState);

  const { selectedBaseCurrency, baseValue, currencySearchValue } = useSelector((state) => state.currencyTableInputState);

  const handleSelectCurrency = (value) => {
    if (!value) return;
    dispatch(setSelectedBaseCurrency(value));
  };

  const handleAmountChange = (value) => {
    dispatch(setBaseValue(value));
  };

  const handleSearchCurrency = (value) => {
    dispatch(setCurrencySearchValue(value));
  };

  return (
    <TableControlsContainer>
      <TableControlLeft>
        <TableCurrencyInput
          currencyList={currencyList}
          selectedCurrency={selectedBaseCurrency}
          handleSelectSource={handleSelectCurrency}
          amount={baseValue}
          amountChangeHandler={handleAmountChange}
          loading={loadingCurrencyData}
        />
      </TableControlLeft>
      <TableControlRight>
        <TableSearchBox
          placeholder="Search currencies"
          value={currencySearchValue}
          onChange={(e) => handleSearchCurrency(e.target.value)}
          config={{ size: "normal" }}
        />
      </TableControlRight>
    </TableControlsContainer>
  );
}

export default TableControls;
