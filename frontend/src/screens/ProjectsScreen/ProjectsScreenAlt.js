import React, { useState, useRef, useEffect } from "react";
import Main from "../../shared/components/UIElements/Main/Main";
import Project from "./Project/Project";
import { sortAZ } from "../../shared/utils/sortAZ";
import { isMobile } from "react-device-detect";
import DevicePreview from "./DevicePreview/DevicePreview";
import ProjectSwitcher from "./ProjectSwitcher/ProjectSwitcher";
import { projectData } from "./ProjectData";
import PageHeaderImage from "../../shared/components/UIElements/PageHeaderImage/PageHeaderImage";
import ProjectScreenHeaderImage from "../../shared/images/pageHeaders/code-background.jpg";

import "./ProjectsScreen.css";
import ProjectModern from "./ProjectModern/ProjectModern";
import DesignProject from "../DesignScreen/DesignProject/DesignProject";

const ProjectsScreenAlt = () => {
  const [projectPreview, setProjectPreview] = useState(false);
  const [projectGroup, setProjectGroup] = useState("all");
  const [allProjectList, setAllProjectList] = useState([]);

  const handleProjectPreview = (title, url) => {
    console.log("preview");
    let project = {
      title: title,
      url: url,
    };
    setProjectPreview(project);
  };

  useEffect(() => {
    let list = [];

    Object.keys(projectData).map((project) => {
      projectData[project].map((p) => list.push(p));
    });

    let sortedList = sortAZ(list, "title");
    setAllProjectList(sortedList);
  }, []);

  return (
    <React.Fragment>
      <PageHeaderImage image={ProjectScreenHeaderImage} title="MY PROJECTS" />

      <Main>
        <DevicePreview
          show={projectPreview}
          onCancel={() => setProjectPreview(false)}
          project={projectPreview}
        />

        <section className="" id="featured-projects">
          {allProjectList.map((p, i) => (
            <ProjectModern
              image={p.image}
              title={p.title}
              description={p.description}
              technology={p.technology}
              frameworks={p.frameworks}
              url={p.url}
              github={p.github}
              isFeatured={p.isFeatured}
              handleProjectPreview={handleProjectPreview}
              inverse={i % 2 == 0 ? false : true}
              features={p.features}
              logos={p.logos}
            />
          ))}
        </section>
      </Main>
    </React.Fragment>
  );
};

export default ProjectsScreenAlt;
