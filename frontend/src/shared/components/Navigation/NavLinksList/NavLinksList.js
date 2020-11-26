import React from 'react';
import NavLinkItem from '../NavLinkItem/NavLinkItem';
import './NavLinkList.css';

const NavLinksList = (props) => {
   return (
      <ul>
         <li onCLick={props.closeDrawer} className="nav-item-wrapper">
            <NavLinkItem to="/about" text="About"/>
         </li>
         <li onCLick={props.closeDrawer} className="nav-item-wrapper">
            <NavLinkItem to="/projects" text="Projects"/>
         </li>
         <li onCLick={props.closeDrawer} className="nav-item-wrapper">
            <NavLinkItem to="/contact" text="Contact"/>
         </li>
      </ul>
   );
};

export default NavLinksList;
