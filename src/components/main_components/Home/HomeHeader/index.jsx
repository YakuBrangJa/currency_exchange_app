import React from "react";
import "./HomeHeader.css";
import SectionPrimary from "../../../library/section/SectionPrimary/SectionPrimary";

function HomeHeader() {
  return (
    <SectionPrimary>
      <h1 className="HomeHeader_h1">Currency Rate Converter</h1>
    </SectionPrimary>
  );
}

export default HomeHeader;
