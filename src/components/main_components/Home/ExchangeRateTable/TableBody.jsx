import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { TableBodyContainer, TableBodyHeader, TableBodyListContainer, TableBodyListItem, TableLoading } from "./TableBodyComps";
import useConvertCurrency from "../../../../hooks/useConvertCurrency";

function TableBody() {
  const { currencyList, loadingCurrencyData } = useSelector((state) => state.currencyDataState);
  const { selectedBaseCurrency, baseValue, currencySearchValue } = useSelector((state) => state.currencyTableInputState);
  const [searchFilteredCurs, setSearchFilteredCurs] = useState([]);

  const convertCurrency = useConvertCurrency();

  // filter currency with search value
  useEffect(() => {
    if (currencySearchValue === "") {
      setSearchFilteredCurs(Object.keys(currencyList));
      return;
    }
    const filteredCurrencies = Object.keys(currencyList).filter((key) => {
      const formattedSearchVal = currencySearchValue.trim().toLowerCase();
      const matchUnit = key.toLowerCase().includes(formattedSearchVal);
      const matchLabel = currencyList[key].toLowerCase().includes(formattedSearchVal);
      if (matchUnit || matchLabel) return key;
    });
    setSearchFilteredCurs(filteredCurrencies);
  }, [currencySearchValue, currencyList]);

  return (
    <TableBodyContainer>
      <TableBodyHeader />
      <TableBodyListContainer>
        {loadingCurrencyData ? (
          <TableLoading />
        ) : (
          <>
            {searchFilteredCurs.map((key) => {
              const exchangedValue = convertCurrency({ from: selectedBaseCurrency, to: key, amount: baseValue });
              return (
                <TableBodyListItem
                  key={key}
                  label={{ unit: key, full: currencyList[key] }}
                  rateValue={exchangedValue}
                />
              );
            })}
          </>
        )}
      </TableBodyListContainer>
    </TableBodyContainer>
  );
}

export default TableBody;
