import { useState } from "react";
import Home from "./pages/Home";
import AppSetupProvider from "./components/providers/AppSetupProvider";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <AppSetupProvider>
        <Home />
      </AppSetupProvider>
    </Provider>
  );
}

export default App;
