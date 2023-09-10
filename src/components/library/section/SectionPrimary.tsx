import React, { ReactNode } from "react";
import "./SectionPrimary.css";

function SectionPrimary({ children }: { children: ReactNode }) {
  return <section className="SectionPrimary">{children}</section>;
}
export default SectionPrimary;
