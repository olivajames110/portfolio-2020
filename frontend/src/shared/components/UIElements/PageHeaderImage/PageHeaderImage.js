import React from "react";
import "./PageHeaderImage.css";
import BackgroundImage from "../../../images/code-background.jpg";
const PageHeaderImage = (props) => {
  const styles = {
    background: `url(${props.image})`,
  };
  return (
    <div style={styles} className="header-image-container">
      <h1>{props.title}</h1>
      <a href="#down" id="scroll-down">
        <span class="arrow-down"></span>
        <span id="scroll-title">Scroll</span>
      </a>
    </div>
  );
};

export default PageHeaderImage;
