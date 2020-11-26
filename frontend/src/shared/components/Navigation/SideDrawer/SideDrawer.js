import React from 'react';
import ReactDOM from 'react-dom';
import {CSSTransition} from 'react-transition-group';
import {ReactComponent as CrossIcon} from '../../../icons/times.svg';
import {ReactComponent as Times} from '../../../icons/times.svg';
import {ReactComponent as Jlogo} from '../../../svgs/jlogo.svg';
import './SideDrawer.css';

const SideDrawer = (props) => {
   const content = (
      <CSSTransition
         in={props.show}
         timeout={500}
         classNames="sidenav"
         mountOnEnter
         unmountOnExit>
         <aside className="side-drawer" onClick={props.onClick}>
            <div onClick={props.closeDrawer} id="cross-wrapper">
               <Times/>
            </div>

            <div className="mobile-header">
               <Jlogo/>
            </div>
            {props.children}
         </aside>
      </CSSTransition>
   );
   return ReactDOM.createPortal(content, document.getElementById('drawer-hook'));
};

export default SideDrawer;
