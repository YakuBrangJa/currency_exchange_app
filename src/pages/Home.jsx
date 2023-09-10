import React from "react";
import "./Home.css";
import RateExchanger from "../components/main_components/Home/RateExchanger";
import HomeHeader from "../components/main_components/Home/HomeHeader";
import ExchangeRateTable from "../components/main_components/Home/ExchangeRateTable";

function Home() {
  return (
    <main className="Home">
      <HomeHeader />
      <RateExchanger />
      <ExchangeRateTable />
    </main>
  );
}

export default Home;
