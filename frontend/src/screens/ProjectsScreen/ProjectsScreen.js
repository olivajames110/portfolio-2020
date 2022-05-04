import React, { useState, useRef, useEffect } from "react";
import Main from "../../shared/components/UIElements/Main/Main";
import Project from "./Project/Project";
import { sortAZ } from "../../shared/utils/sortAZ";
import { isMobile } from "react-device-detect";
import DevicePreview from "./DevicePreview/DevicePreview";
import ProjectSwitcher from "./ProjectSwitcher/ProjectSwitcher";
import { projectData } from "./ProjectData";
import PageHeaderImage from "../../shared/components/UIElements/PageHeaderImage/PageHeaderImage";
import ProjectScreenHeaderImage from "../../shared/images/code-background.jpg";

import "./ProjectsScreen.css";

const ProjectsScreen = () => {
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

    // Object.keys(projectData).map((project) => {
    //   projectData[project].map((p) => list.push(p));
    // });

    // let sortedList = sortAZ(list, "title");
    // setAllProjectList(list);
    setAllProjectList(projectData);
  }, []);

  const allProjects = (
    <div className="featured-project__secondary">
      {allProjectList.map((p) => (
        <Project
          image={p.image}
          title={p.title}
          description={p.description}
          technology={p.technology}
          frameworks={p.frameworks}
          url={p.url}
          github={p.github}
          isFeatured={p.isFeatured}
          handleProjectPreview={handleProjectPreview}
        />
      ))}
    </div>
  );

  const projectList = (
    <React.Fragment>
      {projectGroup !== "all" && (
        <div className="featured-project__secondary">
          {allProjectList
            .filter((p) => p.group === projectGroup)
            .map((p) => (
              <Project
                image={p.image}
                title={p.title}
                description={p.description}
                technology={p.technology}
                frameworks={p.frameworks}
                url={p.url}
                github={p.github}
                isFeatured={p.isFeatured}
                handleProjectPreview={handleProjectPreview}
              />
            ))}
        </div>
      )}
    </React.Fragment>
  );

  return (
    <React.Fragment>
      <PageHeaderImage image={ProjectScreenHeaderImage} title="My Projects" />

      <Main>
        <DevicePreview
          show={projectPreview}
          onCancel={() => setProjectPreview(false)}
          project={projectPreview}
        />

        <section className="" id="featured-projects">
          <h2>Featured Project</h2>
          <div className="featured-project__primary">
            <Project
              featured
              image={projectData.forfun[0].image}
              title={projectData.forfun[0].title}
              description={projectData.forfun[0].description}
              technology={projectData.forfun[0].technology}
              url={projectData.forfun[0].url}
              github={projectData.forfun[0].github}
              handleProjectPreview={handleProjectPreview}
            />
          </div>
        </section>
        <section>
          <h2>Other Projects</h2>
          <ProjectSwitcher setProjectGroup={setProjectGroup} />
          <div className="project-list-container">
            {/* {projectGroup === "all" ? allProjects : projectList} */}
            {allProjectList.map((p) => (
              <Project
                image={p.image}
                title={p.title}
                description={p.description}
                technology={p.technology}
                frameworks={p.frameworks}
                url={p.url}
                github={p.github}
                isFeatured={p.isFeatured}
                handleProjectPreview={handleProjectPreview}
              />
            ))}
          </div>
        </section>
      </Main>
    </React.Fragment>
  );
};

export default ProjectsScreen;
