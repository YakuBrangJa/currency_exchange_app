import React from "react";
import "./RateExchangerLoader.css";
import LoadingSpinnerPrimary from "../../../library/loading_spinner/LoadingSpinnerPrimary/LoadingSpinnerPrimary";

function RateExchangerLoader() {
  return (
    <div className="RateExchangerLoader">
      <LoadingSpinnerPrimary size={1.8} />;
    </div>
  );
}

export default RateExchangerLoader;
