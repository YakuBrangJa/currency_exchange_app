import React from "react";
import { TbReload } from "react-icons/tb";
import "./ErrorPanel.css";

function ErrorPanel({ message, errorResolveHandler }: { message?: string; errorResolveHandler?: () => void }) {
  return (
    <div className="ErrorPanel">
      {errorResolveHandler && (
        <button onClick={errorResolveHandler}>
          <TbReload
            size={25}
            className="icon"
          />
        </button>
      )}
      <p>{message || "Someting went wrong!"}</p>
    </div>
  );
}

export default ErrorPanel;
