import React, { useState, useRef, useEffect } from "react";
import "./DesignProject.css";
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

const DesignProject = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const { image, title, description, featured, url } = props;

  const designContent = (
    <div
      className={`design-project__content ${
        props.inverse ? "left-center" : "right-center"
      }`}
    >
      <div className="design-project-inner-content">
        <span className="company">{props.company}</span>
        {/* <span className="company">Business: {props.company}</span> */}
        <h2>{props.title}</h2>
        <p className="description">{props.description}</p>
        <div className="content-container">
          <h3>Technology Used</h3>
          <div>{props.technology}</div>
        </div>
      </div>
    </div>
  );

  const designImage = (
    <div className="design-project__image">
      <img src={`${image}`} alt={title} />
    </div>
  );

  return (
    <>
      <div className={`design-project-item-container`}>
        {designContent}
        {designImage}
      </div>
    </>
  );
};

export default DesignProject;
// <Button onClick={() => setShowMap(true)}> 								<Expand /> 							</Button>
// {descriptionIsEditMode ? updateDesc : description}
