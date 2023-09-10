import React from "react";
import "./IconButtonSecondary.css";

interface Props {
  loading: boolean;
  children: React.ReactNode;
  className: string;
  config: {
    size: "small" | "normal" | "large";
  };
}

function IconButtonSecondary(props: React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & Props) {
  const { config = { size: "large" }, className, ...rest } = props;

  return (
    <button
      {...props}
      className={`IconButtonSecondary ${config.size} ${className}`}>
      {props.children}
    </button>
  );
}

export default IconButtonSecondary;
