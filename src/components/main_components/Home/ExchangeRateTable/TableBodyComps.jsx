import React, { useEffect, useRef, useState } from "react";
import "./TableBodyComps.css";
import LoadingSpinnerPrimary from "../../../library/loading_spinner/LoadingSpinnerPrimary/LoadingSpinnerPrimary";
import { BsSearch } from "react-icons/bs";
import IconButtonSecondary from "../../../library/button/IconButtonSecondary/IconButtonSecondary";
import SearchBoxPrimary from "../../../library/search/SearchBoxPrimary/SearchBoxPrimary";
import { setCurrencySearchValue } from "../../../../store/currencyTableInputReducer";
import { useDispatch, useSelector } from "react-redux";
import ErrorPanel from "../../../library/error_message/ErrorPanel";
import useResolveApiError from "../../../../hooks/useResolveApiError";
import useSetupCurrencyDataState from "../../../../hooks/useSetupCurrencyDataState";

export function TableBodyContainer({ children }) {
  return <div className="TableBodyContainer">{children}</div>;
}

export function TableBodyHeader() {
  const dispatch = useDispatch();
  const currencySearchValue = useSelector((state) => state.currencyTableInputState.currencySearchValue);

  const [showSearchBox, setShowSearchBox] = useState(false);

  const handleSearchCurrency = (value) => {
    dispatch(setCurrencySearchValue(value));
  };

  return (
    <div className="TableBodyHeader">
      <div className="left">
        {!showSearchBox && <span className="">Currency</span>}
        <span className="search">
          {showSearchBox ? (
            <SearchBoxPrimary
              placeholder="Search currencies"
              value={currencySearchValue}
              onChange={(e) => handleSearchCurrency(e.target.value)}
              config={{ size: "small" }}
              onBlur={() => setShowSearchBox(false)}
              autoFocus
            />
          ) : (
            <IconButtonSecondary
              config={{ size: "small" }}
              onClick={() => setShowSearchBox(true)}>
              <BsSearch className="icon" />
            </IconButtonSecondary>
          )}
        </span>
      </div>
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
      <span className="rate">{rateValue}</span>
    </li>
  );
}

export function TableLoading() {
  return (
    <div className="TableLoading">
      <LoadingSpinnerPrimary size={1.8} />
    </div>
  );
}

export function TableErrorPanel() {
  const { resolveApiError } = useResolveApiError();
  return (
    <div className="TableLoading">
      <ErrorPanel errorResolveHandler={resolveApiError} />
    </div>
  );
}
