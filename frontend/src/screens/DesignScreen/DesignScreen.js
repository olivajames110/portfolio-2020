import React, { useState, useRef, useEffect } from "react";
import Main from "../../shared/components/UIElements/Main/Main";

import { sortAZ } from "../../shared/utils/sortAZ";
import { isMobile } from "react-device-detect";

import { designProjectData } from "./DesignProject/DesignProjectData";
import PageHeaderImage from "../../shared/components/UIElements/PageHeaderImage/PageHeaderImage";
import DesignScreenHeaderImage from "../../shared/images/pageHeaders/design-backgrounnd.jpg";

import "./DesignScreen.css";
import DesignProject from "./DesignProject/DesignProject";

const DesignScreen = () => {
  const [allProjectList, setAllProjectList] = useState([]);

  useEffect(() => {
    setAllProjectList(designProjectData);
  }, []);

  return (
    <React.Fragment>
      <PageHeaderImage image={DesignScreenHeaderImage} title="DESIGN WORK" />

      <Main>
        <section className="" id="featured-projects">
          {allProjectList.map((p, i) => (
            <DesignProject
              image={p.image}
              company={p.company}
              title={p.title}
              description={p.description}
              technology={p.technology}
              inverse={i % 2 == 0 ? false : true}
            />
          ))}
        </section>
      </Main>
    </React.Fragment>
  );
};

export default DesignScreen;
