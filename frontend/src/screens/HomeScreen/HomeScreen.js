import React from "react";
import Main from "../../shared/components/UIElements/Main/Main";
import "./HomeScreen.css";

import ParticleBackground from "./backgrounds/ParticleBackground.js";
import { ReactComponent as Arrow } from "../../shared/icons/long-arrow-right.svg";
import { ReactComponent as Chevron } from "../../shared/icons/chevron-right.svg";
import JimmySVG from "../../shared/svgs/jimmy";
import ThreeBackground from "./threeBackground/threeBackground";

const HomeScreen = () => {
  return (
    <Main full>
      <div className="home-img">
        <div className="content">
          <JimmySVG />
          <span className="sub-heading">
            I enjoy to build and design things.
          </span>

          <a class="projects-btn" href="projects">
            <span>See My Projects</span>
            <Chevron />
          </a>
        </div>
        <ThreeBackground />
        <ParticleBackground />
      </div>
    </Main>
  );
};

export default HomeScreen;
