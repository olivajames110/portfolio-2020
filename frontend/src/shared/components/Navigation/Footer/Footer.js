import React from 'react';
import './Footer.css';
const Footer = () => {
   return (
      <footer>
         <div className="inner-wrapper">
            <div id="name">
               <a href="mailto:olivajames110@gmail.com?subject=Hello There">olivajames110@gmail.com</a>
            </div>
            <div className="icons-container">
               <div className="icon" id="github">
                  <a
                     href="https://github.com/olivajames110"
                     target="_blank"
                     rel="noopener noreferrer">
                     Github
                  </a>
               </div>
               <div className="icon" id="linked-in">
                  <a
                     href="https://www.linkedin.com/in/james-oliva-2a5725148/"
                     target="_blank"
                     rel="noopener noreferrer">
                     LinkedIn
                  </a>
               </div>
            </div>
         </div>
      </footer>
   );
};

export default Footer;
