import React from "react";
import "./LoadingSpinnerPrimary.css";

interface Props {
  size: number | string;
  thickness: number | string;
  color: string;
  variant: 1 | 2;
  style: {};
}

function LoadingSpinnerPrimary({ size = 2, thickness = 0.12, color = "var(--blue-400)", variant = 1, style }: Props) {
  return (
    <div
      className={`LoadingSpinnerPrimary variant-${variant}`}
      style={{
        width: `${size}rem`,
        height: `${size}rem`,
        borderWidth: `${thickness}rem`,
        color: `${color}`,
        ...style,
      }}></div>
  );
}

export default LoadingSpinnerPrimary;
