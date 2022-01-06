import React, { useRef, useState, useEffect } from "react";
import { getRandomNumRange } from "../../../shared/utils/getRandomNumRange";
import Particles from "react-particles-js";
import particleBackgroundData__nightSky from "./backgroundTypes/nightSky/nightSky.json";
import particleBackgroundData__name from "./backgroundTypes/name/name.json";
import particleBackgroundData__snow from "./backgroundTypes/snow/snow.json";
import { ReactComponent as Pencil } from "../../../shared/icons/pencil.svg";
import { ReactComponent as StarRegular } from "../../../shared/icons/star-regular.svg";
import { ReactComponent as PawSolid } from "../../../shared/icons/paw-solid.svg";
import { ReactComponent as SnowflakeRegular } from "../../../shared/icons/snowflake-regular.svg";
import "./ParticleBackground.css";
const ParticleBackground = (props) => {
  const [backgroundType, setBackgroundType] = useState(
    particleBackgroundData__nightSky
  );

  const [backgroundSwitcherActive, setBackgroundSwitcherActive] =
    useState(false);

  const backgroundSwitcherHandler = () => {
    setBackgroundType(particleBackgroundData__name);
  };

  const backgroundSwitcherOptions = (
    <div className="background-options-wrapper">
      <div
        class="background-options__button"
        onClick={() => setBackgroundType(particleBackgroundData__snow)}
      >
        <span>Snow</span>
        <SnowflakeRegular />
      </div>
      <div
        class="background-options__button"
        onClick={() => setBackgroundType(particleBackgroundData__name)}
      >
        <span>Deer</span>
        <PawSolid />
      </div>
      <div
        class="background-options__button"
        onClick={() => setBackgroundType(particleBackgroundData__nightSky)}
      >
        <span>Stars</span>
        <StarRegular />
      </div>
    </div>
  );

  return (
    <div id="particle-background">
      <div
        onClick={() => setBackgroundSwitcherActive((p) => !p)}
        className="background-switcher-container"
      >
        <div className="edit-background-button">
          <Pencil />
        </div>
        {backgroundSwitcherActive && backgroundSwitcherOptions}
      </div>
      <Particles params={backgroundType} />
    </div>
  );
};

export default ParticleBackground;
