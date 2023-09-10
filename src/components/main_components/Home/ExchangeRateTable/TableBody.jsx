import React from "react";
import { useSelector } from "react-redux";
import { TableBodyContainer, TableBodyHeader, TableBodyListContainer, TableBodyListItem } from "./TableBodyComps";
import useConvertCurrency from "../../../../hooks/useConvertCurrency";

function TableBody() {
  const { currencyList, exchangeRates, loadingCurrencyData } = useSelector((state) => state.currencyDataState);
  const { selectedBaseCurrency, baseValue } = useSelector((state) => state.currencyTableInputState);

  const convertCurrency = useConvertCurrency();

  return (
    <TableBodyContainer>
      <TableBodyHeader />
      <TableBodyListContainer>
        {Object.keys(currencyList).map((key) => {
          const exchangedValue = convertCurrency({ from: selectedBaseCurrency, to: key, amount: baseValue });
          return (
            <TableBodyListItem
              key={key}
              label={{ unit: key, full: currencyList[key] }}
              rateValue={exchangedValue}
            />
          );
        })}
      </TableBodyListContainer>
    </TableBodyContainer>
  );
}

export default TableBody;
