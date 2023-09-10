import { NumberInputSelectBox } from "../../../library/select/NumberInputSelectBox/NumberInputSelectBox";
import "./TableControlsComps.css";

export function TableContainer({ children }) {
  return <div className="TableContainer">{children}</div>;
}

export function TableControlLeft({ children }) {
  return <div className="TableControlLeft">{children}</div>;
}

export function TableControlRight({ children }) {
  return <div className="TableControlRight">{children}</div>;
}

export function TableCurrencyInput(props) {
  return (
    <div className="TableCurrencyInput">
      {/* <label>Base currency</label> */}
      <NumberInputSelectBox {...props} />
    </div>
  );
}
