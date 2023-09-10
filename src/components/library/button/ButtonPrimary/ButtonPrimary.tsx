import React from "react";
import "./ButtonPrimary.css";

interface Props {
  loading: boolean;
  children: React.ReactNode;
}

function ButtonPrimary(props: React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & Props) {
  return (
    <button
      {...props}
      className="ButtonPrimary">
      {props.children}
    </button>
  );
}

export default ButtonPrimary;
