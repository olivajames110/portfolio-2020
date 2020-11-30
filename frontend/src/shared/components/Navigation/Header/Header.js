import React, {useState} from 'react';

import {ReactComponent as Logo} from '../../../icons/logo.svg';
import {ReactComponent as Hamburger} from '../../../icons//hamburger/hamburger.svg';
import {ReactComponent as Jlogo} from '../../../svgs/jlogo.svg';
import {ReactComponent as JlogoGradient} from '../../../svgs/jlogo-gradient.svg';
import Nav from '../Nav/Nav';
import NavLinksList from '../NavLinksList/NavLinksList';
import NavLinkItem from '../NavLinkItem/NavLinkItem';
import SideDrawer from '../SideDrawer/SideDrawer';
import Backdrop from '../../UIElements/Backdrop/Backdrop';
import './Header.css';

const Header = (props) => {
   const [drawerIsOpen,
      setDrawerIsOpen] = useState(false);

   const closeDrawer = () => {
      setDrawerIsOpen(false);
      console.log('CLOSE');
   };

   const sideDrawerContent = (
      <SideDrawer closeDrawer={closeDrawer} show={drawerIsOpen}>
         <Nav onClick={closeDrawer} id="side-drawer-nav">
            <NavLinksList {...props}/>
         </Nav>
      </SideDrawer>
   );
   return (
      <React.Fragment>
         {drawerIsOpen && <Backdrop onClick={closeDrawer}/>}
         {sideDrawerContent}
         <header>
            <div className="header-inner-wrapper">
               <NavLinkItem to="/">
                  <JlogoGradient/>
               </NavLinkItem>
               <Nav id="desktop-nav">
                  <NavLinksList/>
                  <button
                     onClick={() => setDrawerIsOpen(true)}
                     className="sidedrawer-toggle-button">
                     <Hamburger/>
                  </button>
               </Nav>
            </div>
         </header>
      </React.Fragment>
   );
};

export default Header;
