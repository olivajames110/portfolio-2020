import React, { useState, useRef, useEffect } from 'react';
import Main from '../../shared/components/UIElements/Main/Main';
import HorizontalScroll from '../../shared/components/UIElements/HorizontalScroll/HorizontalScroll';
import Project from './Project/Project';
import { sortAZ } from '../../shared/utils/sortAZ';
import { isMobile } from 'react-device-detect';
import DevicePreview from './DevicePreview/DevicePreview';
import ProjectSwitcher from './ProjectSwitcher/ProjectSwitcher';
import { projectData } from './ProjectData';
import PageHeaderImage from '../../shared/components/UIElements/PageHeaderImage/PageHeaderImage';

import './ProjectsScreen.css';

const ProjectsScreen = () => {
	const [ projectPreview, setProjectPreview ] = useState(false);
	const [ projectGroup, setProjectGroup ] = useState('all');
	const [ allProjectList, setAllProjectList ] = useState([]);

	const handleProjectPreview = (title, url) => {
		console.log('preview');
		let project = {
			title : title,
			url   : url
		};
		setProjectPreview(project);
	};

	useEffect(() => {
		let list = [];

		Object.keys(projectData).map((project) => {
			projectData[project].map((p) => list.push(p));
		});

		let sortedList = sortAZ(list, 'title');
		setAllProjectList(sortedList);
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
					handleProjectPreview={handleProjectPreview}
				/>
			))}
		</div>
	);

	const projectList = (
		<React.Fragment>
			{projectGroup !== 'all' && (
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
								handleProjectPreview={handleProjectPreview}
							/>
						))}
				</div>
			)}
		</React.Fragment>
	);
	// const mobileProjectList = (
	// 	<div className="featured-project__secondary">
	// 		<HorizontalScroll>
	// 			{projectData[projectGroup].map((p) => (
	// 				<Project
	// 					image={p.image}
	// 					title={p.title}
	// 					description={p.description}
	// 					technology={p.technology}
	// 					frameworks={p.frameworks}
	// 					url={p.url}
	// 					github={p.github}
	// 					handleProjectPreview={handleProjectPreview}
	// 				/>
	// 			))}
	// 		</HorizontalScroll>
	// 	</div>
	// );

	return (
		<React.Fragment>
			<PageHeaderImage />

			<Main>
				<DevicePreview
					show={projectPreview}
					onCancel={() => setProjectPreview(false)}
					project={projectPreview}
				/>

				<section className="" id="featured-projects">
					<h1>Featured Project</h1>
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
						{
							projectGroup === 'all' ? allProjects :
							projectList}
					</div>
				</section>
			</Main>
		</React.Fragment>
	);
};

export default ProjectsScreen;
