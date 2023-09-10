import React from "react";
import "./index.css";
import TableControls from "./TableControls";
import SectionPrimary from "../../../library/section/SectionPrimary/SectionPrimary";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";

function ExchangeRateTable() {
  return (
    <SectionPrimary className="ExchangeRateTable">
      <TableHeader />
      <TableControls />
      <TableBody />
    </SectionPrimary>
  );
}

export default ExchangeRateTable;
