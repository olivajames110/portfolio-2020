import React, { useState } from "react";
import "./Tooltip.css";

const Tooltip = (props) => {
  const [isActive, setIsActive] = useState(false);

  const handleHover = () => {
    setIsActive((s) => !s);
  };
  return (
    <div
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
      className="tooltip-wrapper"
    >
      <div
        style={{ opacity: isActive ? 1 : 0, transition: "110ms" }}
        className="tooltip"
      >
        {props.text}
      </div>
      {props.children}
    </div>
  );
};

export default Tooltip;
