import React, { useState } from "react";
import "./SearchBoxPrimary.css";
import { BsSearch } from "react-icons/bs";

interface Props {
  loading: boolean;
  config: {
    size: "small" | "normal" | "large";
    fullWidth: boolean;
  };
  refs?: {
    inputRef: any;
  };
}

const SearchBoxPrimary = (props: React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & Props) => {
  const { config = { size: "large", fullWidth: false }, refs, ...rest } = props;
  return (
    <div className={`SearchBoxPrimary ${config.size} ${config.fullWidth ? "full" : ""}`}>
      <input
        {...props}
        type="search"
        ref={refs?.inputRef}
      />
      <BsSearch className={`icon  ${props.value !== "" ? "visually_hidden" : ""}`} />
    </div>
  );
};

export default SearchBoxPrimary;
