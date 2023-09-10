import React, { useCallback, useEffect, useRef, useState } from "react";
import { CurrencyInput, ExchangeControlContainer } from "./ExchangeControlsComps";
import { LuArrowLeftRight, LuArrowDownUp } from "react-icons/lu";
import useGetExchangeRateData from "../../../../hooks/useGetExchangeRateData";
import useGetCurrencyList from "../../../../hooks/useGetCurrencyList";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedSource, setSelectedTargetSource } from "../../../../store/currencyInputReducer";
import useConvertCurrency from "../../../../hooks/useConvertCurrency";

function ExchangeControls() {
  const dispatch = useDispatch();
  const [sourceValue, setSourceValue] = useState(1);
  const [targetValue, setTargetValue] = useState(0);

  const { currencyList, loadingCurrencyData } = useSelector((state) => state.currencyDataState);
  const { selectedSource, selectedTargetSource } = useSelector((state) => state.currencyInputState);

  const convertCurrency = useConvertCurrency();

  const handleSelectSource = (source) => {
    if (!source) return;
    dispatch(setSelectedSource(source));
  };

  const handleSelectTargetSource = (source) => {
    if (!source) return;
    dispatch(setSelectedTargetSource(source));
  };

  const handleSourceAmountChange = useCallback(
    (value) => {
      setSourceValue(value);

      // Also update target currency value
      if (isNaN(value)) value = 0;
      if (selectedSource == selectedTargetSource) {
        setTargetValue(value);
      } else {
        const convertedValue = convertCurrency({
          from: selectedSource,
          to: selectedTargetSource,
          amount: value,
        });

        setTargetValue(convertedValue);
      }
    },
    [convertCurrency, selectedSource, selectedTargetSource]
  );

  const handleTargetAmountChange = useCallback(
    (value) => {
      setTargetValue(value);

      // Also update source currency value
      if (isNaN(value)) value = 0;
      if (selectedSource == selectedTargetSource) {
        setSourceValue(value);
      } else {
        const convertedValue = convertCurrency({
          from: selectedTargetSource,
          to: selectedSource,
          amount: value,
        });
        setSourceValue(convertedValue);
      }
    },
    [convertCurrency, selectedSource, selectedTargetSource]
  );

  // Update target currency value when currency unit change + on Initial render
  useEffect(() => {
    handleSourceAmountChange(sourceValue);
  }, [handleSourceAmountChange]);

  return (
    <ExchangeControlContainer>
      <CurrencyInput
        currencyList={currencyList}
        selectedCurrency={selectedSource}
        handleSelectSource={handleSelectSource}
        amount={sourceValue}
        amountChangeHandler={handleSourceAmountChange}
        loading={loadingCurrencyData}
      />
      <LuArrowDownUp className="icon" />
      <CurrencyInput
        currencyList={currencyList}
        selectedCurrency={selectedTargetSource}
        handleSelectSource={handleSelectTargetSource}
        amount={targetValue}
        amountChangeHandler={handleTargetAmountChange}
        loading={loadingCurrencyData}
      />
    </ExchangeControlContainer>
  );
}

export default ExchangeControls;
