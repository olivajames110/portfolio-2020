import React, { useState, useRef, useEffect } from "react";
import "./ProjectModern.css";
import Card from "../../../shared/components/UIElements/Card/Card";
// import Button from '../../../shared/components/FormElements/Button/Button';
import { isMobile } from "react-device-detect";
import { ReactComponent as Desktop } from "../../../shared/icons/desktop.svg";
import { ReactComponent as Brackets } from "../../../shared/icons/brackets.svg";
import { ReactComponent as Star } from "../../../shared/icons/star-solid.svg";
import { ReactComponent as Eye } from "../../../shared/icons/eye.svg";
import { ReactComponent as Arrow } from "../../../shared/icons/arrow.svg";
import ProjectTech from "./ProjectTech";
import Tooltip from "../../../shared/components/UIElements/Tooltip/Tooltip";
// import Card from '../../../../../shared/components/UIElements/Card/Card';
// import LoadingSpinner from
// '../../../../../shared/components/UIElements/LoadingSpinner/LoadingSpinner';
// import ViewButton from '../ViewButton'

const ProjectModern = (props) => {
  const [isActive, setIsActive] = useState(false);
  const { image, title, description, featured, url } = props;

  //New
  const interactionButtons = (
    <div className="interaction-icon-container">
      <Tooltip text="View Preview">
        <div
          onClick={() => props.handleProjectPreview(title, url)}
          id="view-icon"
          className="icon-item-wrapper"
        >
          <Eye />
        </div>
      </Tooltip>
      <Tooltip text="View Source Code">
        <div
          onClick={() => props.handleProjectPreview(title, url)}
          id="code-icon"
          className="icon-item-wrapper"
        >
          <a href={props.github} target="_blank" rel="noopener noreferrer">
            <Brackets />
          </a>
        </div>
      </Tooltip>
    </div>
  );

  const content = (
    <div
      className={`modern-project__content ${
        props.inverse ? "left-center" : "right-center"
      }`}
    >
      {interactionButtons}
      <div className="modern-project-inner-content">
        <h2>{props.title}</h2>
        <p className="description">{props.description}</p>
        <div className="content-container">
          <h3>Application Technologies</h3>
          <div className="logo-container">
            {props.logos.map((f) => (
              <>
                <ProjectTech name={f.name} icon={f.icon} />
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
  return (
    <>
      <div
        className={`modern-project-item-container ${
          props.inverse && "inverse"
        }`}
      >
        <a
          onMouseEnter={() => setIsActive(true)}
          onMouseLeave={() => setIsActive(false)}
          href={url}
          target="_blank"
        >
          <div className="modern-project__image">
            <div
              style={{ opacity: isActive ? 1 : 0, transition: "110ms" }}
              className="preview-overlay"
            >
              <Eye />
              <span>View Project</span>
            </div>

            <img src={`${image}`} alt={title} />
          </div>
        </a>
        {content}
      </div>
    </>
  );
};

export default ProjectModern;
// <Button onClick={() => setShowMap(true)}> 								<Expand /> 							</Button>
// {descriptionIsEditMode ? updateDesc : description}
