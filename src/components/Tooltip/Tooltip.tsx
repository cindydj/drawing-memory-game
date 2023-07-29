import React from "react";

import "./tooltip.css";

interface TooltipProps {
  // Text displayed in the tooltip.
  text: string;
  children?: JSX.Element | string;
}

function Tooltip(props: TooltipProps) {
  const { children, text } = props;
  return (
    <div className="tooltip-wrapper">
      <div className="tooltip-trigger">{children}</div>
      <div className="tooltip">{text}</div>
    </div>
  );
}

export default Tooltip;
