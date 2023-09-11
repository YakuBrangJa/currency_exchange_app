import React from "react";
import "./RateExchangerErrorPanel.css";
import ErrorPanel from "../../../library/error_message/ErrorPanel";
import useSetupCurrencyDataState from "../../../../hooks/useSetupCurrencyDataState";
import useResolveApiError from "../../../../hooks/useResolveApiError";

function RateExchangerErrorPanel() {
  const { resolveApiError } = useResolveApiError();

  return (
    <div className="RateExchangerErrorPanel">
      <ErrorPanel errorResolveHandler={resolveApiError} />
    </div>
  );
}

export default RateExchangerErrorPanel;
