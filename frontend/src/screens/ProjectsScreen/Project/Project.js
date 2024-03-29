import React, { useState, useRef, useEffect } from "react";
import "./Project.css";
import Card from "../../../shared/components/UIElements/Card/Card";
// import Button from '../../../shared/components/FormElements/Button/Button';
import { isMobile } from "react-device-detect";
import { ReactComponent as Desktop } from "../../../shared/icons/desktop.svg";
import { ReactComponent as Brackets } from "../../../shared/icons/brackets.svg";
import { ReactComponent as Star } from "../../../shared/icons/star-solid.svg";
import { ReactComponent as Eye } from "../../../shared/icons/eye.svg";
import { ReactComponent as Arrow } from "../../../shared/icons/arrow.svg";
// import Card from '../../../../../shared/components/UIElements/Card/Card';
// import LoadingSpinner from
// '../../../../../shared/components/UIElements/LoadingSpinner/LoadingSpinner';
// import ViewButton from '../ViewButton'

const ProjectItemCardItem = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const {
    image,
    title,
    userId,
    titleIsEditMode,
    descriptionIsEditMode,
    updateTitle,
    updateDesc,
    address,
    description,
    setShowMap,
    setDescriptionisEditMode,
    setTitleIsEditMode,
    className,
    featured,
    url,
  } = props;
  return (
    <div className="project-item-container">
      <li>
        <Card>
          <div className="project-item__image">
            <div className={`img-wrapper ${featured && "featured"}`}>
              <img src={`${image}`} alt={title} />
            </div>
            {props.isFeatured && (
              <div className="featured-icon">
                <Star />
              </div>
            )}
            <div className="icon-container">
              <div
                onClick={() => props.handleProjectPreview(title, url)}
                id="view-icon"
                className="icon-item-wrapper"
              >
                <Eye />
              </div>

              <div
                onClick={() => props.handleProjectPreview(title, url)}
                id="code-icon"
                className="icon-item-wrapper"
              >
                <a
                  href={props.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Brackets />
                </a>
              </div>
            </div>
          </div>
          <div
            onClick={() => setIsOpen((prevState) => !prevState)}
            className={`project-item__details ${isOpen && "details-open"}`}
          >
            <div className="details_header">
              <h3>{title}</h3>
              <span className={`arrow ${isOpen && `arrow-open`}`}>
                <Arrow />
              </span>
            </div>
            {isOpen && (
              <div className="details-content">
                <div className="details-content_row">
                  <h4>Background</h4>
                  <span>{description}</span>
                </div>
                <div className={`details-content_row `}>
                  <h4>Technology</h4>
                  <span>{props.technology}</span>
                </div>
              </div>
            )}
          </div>
        </Card>
      </li>
    </div>
  );
};

export default ProjectItemCardItem;
// <Button onClick={() => setShowMap(true)}> 								<Expand /> 							</Button>
// {descriptionIsEditMode ? updateDesc : description}
