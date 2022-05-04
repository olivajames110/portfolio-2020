import React from "react";
import { ReactComponent as BottomCurve } from "../../../svgs/curvedBackground.svg";
import { ReactComponent as JLogo } from "../../../svgs/jlogo-gradient.svg";
import { ReactComponent as LinkedIn } from "../../../icons/linkedin.svg";
import { ReactComponent as Envelope } from "../../../icons/envelope.svg";
import { ReactComponent as Github } from "../../../icons/github.svg";

import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <section className="inner-wrapper">
        <h2>Get in contact with me!</h2>
        <div className="icons-container">
          <div className="icon-wrapper" id="email">
            <a href="mailto:olivajames110@gmail.com?subject=Hello There">
              {mail}
            </a>
          </div>
          <div className="icon-wrapper" id="github">
            <a
              href="https://github.com/olivajames110"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github />
            </a>
          </div>
          <div className="icon-wrapper" id="linked-in">
            <a
              href="https://www.linkedin.com/in/james-oliva-2a5725148/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedIn />
            </a>
          </div>
        </div>
      </section>

      <section id="copyright">Copyright ©2022 Jimmy Oliva</section>
    </footer>
  );
};

export default Footer;

const mail = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <path d="M20 4H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm0 2v.511l-8 6.223-8-6.222V6h16zM4 18V9.044l7.386 5.745a.994.994 0 0 0 1.228 0L20 9.044 20.002 18H4z"></path>
  </svg>
);
