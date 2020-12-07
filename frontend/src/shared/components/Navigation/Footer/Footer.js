import React from 'react';
import {ReactComponent as BottomCurve} from '../../../svgs/curvedBackground.svg';
import {ReactComponent as JLogo} from '../../../svgs/jlogo-gradient.svg';
import {ReactComponent as LinkedIn} from '../../../icons/linkedin.svg';
import {ReactComponent as Envelope} from '../../../icons/envelope.svg';
import {ReactComponent as Github} from '../../../icons/github.svg';

import './Footer.css';

const Footer = () => {
   return (
      <footer>
         <section className="inner-wrapper">
            <h2>Want to get in touch? Let's Talk</h2>
            <div className="icons-container">
               <div className="icon-wrapper" id="email">
                  <a href="mailto:olivajames110@gmail.com?subject=Hello There">
                     <Envelope/>
                  </a>
               </div>
               <div className="icon-wrapper" id="github">
                  <a
                     href="https://github.com/olivajames110"
                     target="_blank"
                     rel="noopener noreferrer">
                     <Github/>
                  </a>
               </div>
               <div className="icon-wrapper" id="linked-in">
                  <a
                     href="https://www.linkedin.com/in/james-oliva-2a5725148/"
                     target="_blank"
                     rel="noopener noreferrer">
                     <LinkedIn/>
                  </a>
               </div>
            </div>
         </section>
         <div className="curve">
            <BottomCurve/>
         </div>
         <section id="copyright">Copyright ©2020 Jimmy Oliva</section>
      </footer>
   );
};

export default Footer;
