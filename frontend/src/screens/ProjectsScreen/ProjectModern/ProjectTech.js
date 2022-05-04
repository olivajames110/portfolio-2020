import React, { useState } from "react";

const ProjectTech = (props) => {
  const [isActive, setIsActive] = useState(false);

  const handleHover = () => {
    setIsActive((s) => !s);
  };
  return (
    <div
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
      className="logo-wrapper"
    >
      <div
        style={{ opacity: isActive ? 1 : 0, transition: "110ms" }}
        className="tooltip"
      >
        {props.name}
      </div>
      {props.icon}
    </div>
  );
};

export default ProjectTech;
