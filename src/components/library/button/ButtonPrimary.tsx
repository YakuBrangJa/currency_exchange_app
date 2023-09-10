import React from "react";

interface Props {
  loading: boolean;
}

function ButtonPrimary(props: React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & Props) {
  return (
    <button
      {...props}
      className="ButtonPrimary">
      ButtonPrimary
    </button>
  );
}

export default ButtonPrimary;
