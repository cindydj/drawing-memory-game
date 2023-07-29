import React from "react";

import "./button.css";

interface ButtonProps {
  children: JSX.Element | string;
  onClick: () => void;
}

function Button(props: ButtonProps) {
  const { children, onClick } = props;

  return (
    <div className="button-style" onClick={onClick}>
      {children}
    </div>
  );
}

export default Button;
