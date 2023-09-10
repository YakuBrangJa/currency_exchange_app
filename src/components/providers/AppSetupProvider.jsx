import React from "react";
import useSetupCurrencyDataState from "../../hooks/useSetupCurrencyDataState";

function AppSetupProvider({ children }) {
  useSetupCurrencyDataState();
  return <>{children}</>;
}

export default AppSetupProvider;
