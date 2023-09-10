import React, { ReactNode } from "react";
import "./SectionPrimary.css";

function SectionPrimary({ children, className }: { children: ReactNode; className?: string }) {
  return <section className={`SectionPrimary ${className}`}>{children}</section>;
}
export default SectionPrimary;
