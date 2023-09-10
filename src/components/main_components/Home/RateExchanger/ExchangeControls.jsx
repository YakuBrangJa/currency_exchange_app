import React, { useCallback, useEffect, useRef, useState } from "react";
import { CurrencyInput, ExchangeControlContainer } from "./ExchangeControlsComps";
import { LuArrowLeftRight, LuArrowDownUp } from "react-icons/lu";
import useGetExchangeRateData from "../../../../hooks/useGetExchangeRateData";
import useGetCurrencyList from "../../../../hooks/useGetCurrencyList";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedSource, setSelectedTargetSource } from "../../../../store/currencyInputReducer";

function ExchangeControls() {
  const dispatch = useDispatch();
  const [sourceValue, setSourceValue] = useState(1);
  const [targetValue, setTargetValue] = useState(0);

  const { currencyList, exchangeRates, loadingCurrencyData } = useSelector((state) => state.currencyDataState);
  const { selectedSource, selectedTargetSource } = useSelector((state) => state.currencyInputState);

  const handleSelectSource = (source) => {
    if (!source) return;
    dispatch(setSelectedSource(source));
  };

  const handleSelectTargetSource = (source) => {
    if (!source) return;
    dispatch(setSelectedTargetSource(source));
  };

  useEffect(() => {
    console.log(exchangeRates);
    console.log(currencyList);
  }, [exchangeRates, currencyList]);

  const handleSourceAmountChange = useCallback(
    (value) => {
      setSourceValue(value);
      console.log("source value change");

      // Also update target currency value
      if (isNaN(value)) value = 0;
      if (selectedSource == selectedTargetSource) {
        setTargetValue(value);
      } else {
        const sourceRate = exchangeRates[`USD${selectedSource}`] || 1;
        const targetRate = exchangeRates[`USD${selectedTargetSource}`] || 1;
        const convertedValue = value / sourceRate;

        setTargetValue(convertedValue * targetRate);
      }
    },
    [exchangeRates, selectedSource, selectedTargetSource]
  );

  const handleTargetAmountChange = useCallback(
    (value) => {
      setTargetValue(value);

      // Also update source currency value
      if (isNaN(value)) value = 0;
      if (selectedSource == selectedTargetSource) {
        setSourceValue(value);
      } else {
        const sourceRate = exchangeRates[`USD${selectedSource}`] || 1;
        const targetRate = exchangeRates[`USD${selectedTargetSource}`] || 1;
        const convertedValue = value * sourceRate;

        setSourceValue(convertedValue / targetRate);
      }
    },
    [exchangeRates, selectedSource, selectedTargetSource]
  );

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
      />
      <LuArrowDownUp className="icon" />
      <CurrencyInput
        currencyList={currencyList}
        selectedCurrency={selectedTargetSource}
        handleSelectSource={handleSelectTargetSource}
        amount={targetValue}
        amountChangeHandler={handleTargetAmountChange}
      />
    </ExchangeControlContainer>
  );
}

export default ExchangeControls;
