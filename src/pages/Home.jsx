import React from "react";
import "./Home.css";
import RateExchanger from "../components/main_components/Home/RateExchanger";
import HomeHeader from "../components/main_components/Home/HomeHeader";

function Home() {
  return (
    <main className="Home">
      <HomeHeader />
      <RateExchanger />
    </main>
  );
}

export default Home;
