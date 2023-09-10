import React from "react";
import useSetupCurrencyDataState from "../../hooks/useSetupCurrencyDataState";
import useReadWindowSize from "../../hooks/useReadWindowSize";

function AppSetupProvider({ children }) {
  useSetupCurrencyDataState();
  useReadWindowSize();

  return <>{children}</>;
}

export default AppSetupProvider;
