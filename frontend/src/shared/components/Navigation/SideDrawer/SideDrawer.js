import React from "react";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";
import { ReactComponent as CrossIcon } from "../../../icons/times.svg";
import { ReactComponent as Times } from "../../../icons/times.svg";
import { ReactComponent as Jlogo } from "../../../svgs/jlogo.svg";
import { ReactComponent as BG } from "../../../svgs/curvedBackground.svg";
import "./SideDrawer.css";

const SideDrawer = (props) => {
  const closeButtonBackground = (
    <svg
      id="close-button-background"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 57.92 288"
    >
      <path
        d="M144.5,144.5v46.12a49.94,49.94,0,0,0,20.06,40c7.87,5.88,17,15.31,25.43,24.87a50,50,0,0,1,0,65.94c-8.41,9.56-17.56,19-25.43,24.87a49.94,49.94,0,0,0-20.06,40V432.5"
        transform="translate(-144.5 -144.5)"
        style="fill:#fff"
      />
    </svg>
  );
  const content = (
    <CSSTransition
      in={props.show}
      timeout={500}
      classNames="sidenav"
      mountOnEnter
      unmountOnExit
    >
      <aside className="side-drawer" onClick={props.closeDrawer}>
        <div onClick={props.closeDrawer} id="cross-wrapper">
          <Times />
        </div>

        <div className="mobile-header">
          <Jlogo />
        </div>
        {props.children}
      </aside>
    </CSSTransition>
  );
  return ReactDOM.createPortal(content, document.getElementById("drawer-hook"));
};

export default SideDrawer;
