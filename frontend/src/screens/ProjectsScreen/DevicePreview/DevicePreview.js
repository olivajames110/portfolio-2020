import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { isMobile } from "react-device-detect";
import { CSSTransition } from "react-transition-group";
import Backdrop from "../../../shared/components/UIElements/Backdrop/Backdrop";
import LoadingSpinner from "../../../shared/components/UIElements/LoadingSpinner/LoadingSpinner";
import { ReactComponent as Desktop } from "../../../shared/icons/desktop.svg";
import { ReactComponent as Mobile } from "../../../shared/icons/mobile.svg";
import { ReactComponent as Brackets } from "../../../shared/icons/brackets.svg";
import { ReactComponent as Cross } from "../../../shared/icons/times.svg";
import "./DevicePreview.css";

const DevicePreviewOverlay = (props) => {
  const {
    className,
    style,
    headerClass,
    header,
    onSubmit,
    contentClass,
    footer,
    footerClass,
    project,
  } = props;
  const [previewIsMobile, setPreviewIsMobile] = useState(false);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(true);
  useEffect(() => {
    if (isMobile) {
      console.log("yes", isMobile);
    } else {
      console.log("no", isMobile);
    }
  }, []);

  const mobilePreviewHandler = () => {
    setIsFullScreen(false);
    setPreviewIsMobile(true);
  };

  const fullScreenPreviewHandler = () => {
    setIsFullScreen((p) => !p);
    setPreviewIsMobile(false);
  };

  const loadingSpinner = (
    <div className="loading-spinner-container">
      <LoadingSpinner />
      <div className="loading-spinner__body">
        Retrieving project...one second please.
      </div>
      <a
        className=""
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
      >
        Click here to go directly to the project
      </a>
    </div>
  );

  const linkIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <path d="m13 3 3.293 3.293-7 7 1.414 1.414 7-7L21 11V3z"></path>
      <path d="M19 19H5V5h7l-2-2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2v-5l-2-2v7z"></path>
    </svg>
  );

  const content = (
    <div
      className={`modal ${previewIsMobile && "mobile"} ${
        isFullScreen && "desktop-full-screen"
      }`}
      style={style}
    >
      <div className={`modal__header ${headerClass}`}>
        <div class="three-btn-container">
          <div onClick={props.onCancel} class="btn-circle close" />{" "}
          {!isMobile && (
            <React.Fragment>
              <div
                onClick={() => setIsFullScreen(false)}
                class={`btn-circle middle ${isFullScreen && "circle-inactive"}`}
              />
              <div
                onClick={fullScreenPreviewHandler}
                class="btn-circle expand"
              />
            </React.Fragment>
          )}
        </div>
        <div className="title-container">
          <div className="view-live-wrapper">
            <a href={project.url} target="_blank" rel="noopener noreferrer">
              <h3>
                <span>{project.title}</span>{" "}
                <div className="project-icon-wrapper">{linkIcon}</div>
              </h3>
            </a>
          </div>
        </div>
        <div className="device-switcher-container">
          {!isMobile && (
            <React.Fragment>
              <div
                onClick={() => setPreviewIsMobile(false)}
                className={`device-switcher__icon-wrapper ${
                  !previewIsMobile && "icon-active"
                }`}
              >
                {desktop}
              </div>
              <div
                onClick={mobilePreviewHandler}
                className={`device-switcher__icon-wrapper ${
                  previewIsMobile && "icon-active"
                }`}
              >
                {mobileIcon}
              </div>
            </React.Fragment>
          )}
        </div>
      </div>

      <div className="modal__body">
        <CSSTransition
          in={isLoaded}
          timeout={200}
          classNames="fade-in"
          mountOnEnter
          unmountOnExit
        >
          {loadingSpinner}
        </CSSTransition>

        <iframe
          src={project.url}
          onLoad={() => setIsLoaded(false)}
          title="title"
        />
      </div>
    </div>
  );

  return ReactDOM.createPortal(content, document.getElementById("modal-hook"));
};

const DevicePreview = (props) => {
  const { show, onCancel } = props;

  return (
    <React.Fragment>
      {show && <Backdrop onClick={onCancel} />}
      <CSSTransition
        in={show}
        timeout={200}
        classNames="fade-in"
        mountOnEnter
        unmountOnExit
      >
        <DevicePreviewOverlay {...props} />
      </CSSTransition>
    </React.Fragment>
  );
};

export default DevicePreview;

const mobileIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
    />
  </svg>
);

const desktop = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    />
  </svg>
);
