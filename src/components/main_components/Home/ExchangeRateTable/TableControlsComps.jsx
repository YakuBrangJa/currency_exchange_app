import SearchBoxPrimary from "../../../library/search/SearchBoxPrimary/SearchBoxPrimary";
import { NumberInputSelectBox } from "../../../library/select/NumberInputSelectBox/NumberInputSelectBox";
import "./TableControlsComps.css";

export function TableControlsContainer({ children }) {
  return <div className="TableControlsContainer">{children}</div>;
}

export function TableControlLeft({ children }) {
  return <div className="TableControlLeft">{children}</div>;
}

export function TableControlRight({ children }) {
  return <div className="TableControlRight">{children}</div>;
}

export function TableSearchBox(props) {
  return (
    <div className="TableSearchBox">
      <SearchBoxPrimary {...props} />
    </div>
  );
}

export function TableCurrencyInput(props) {
  return (
    <div className="TableCurrencyInput">
      {/* <label>Base currency</label> */}
      <NumberInputSelectBox
        {...props}
        config={{ partitionStyle: "full", reverse: true, size: "normal" }}
      />
    </div>
  );
}
