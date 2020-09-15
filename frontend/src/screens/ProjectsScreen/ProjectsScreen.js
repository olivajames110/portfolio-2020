import React, { useState, useRef, useEffect } from 'react';
import Main from '../../shared/components/UIElements/Main/Main';
import HorizontalScroll from '../../shared/components/UIElements/HorizontalScroll/HorizontalScroll';
import Project from './Project/Project';
import { isMobile } from 'react-device-detect';
import DevicePreview from './DevicePreview/DevicePreview';

import './ProjectsScreen.css';

const ProjectsScreen = () => {
	const [ projectPreview, setProjectPreview ] = useState(false);
	const handleProjectPreview = (t, u) => {
		console.log('preview');
		let project = {
			title : t,
			url   : u
		};
		setProjectPreview(project);
	};

	const projectList = (
		<div className="featured-project__secondary" style={{ padding: '0 2em' }}>
			<Project
				image={'https://digitalmarketing.blob.core.windows.net/10042/images/items/image674267.png'}
				title={'Online Ordering Comparison'}
				description={'Create an account and store your favorite locations or places you have visited.'}
				languages={'HTML, CSS, Javascript, Node JS, Mongo DB, Google API'}
				frameworks={'SASS, React JS, Express, Mongoose'}
				url="https://olivajames110.github.io/online-ordering-price-comparison/"
				github="https://github.com/olivajames110/mern"
				handleProjectPreview={handleProjectPreview}
			/>
			<Project
				image={'https://digitalmarketing.blob.core.windows.net/10042/images/items/image674266.png'}
				title={'FIP Cost Calculator'}
				description={'Create an account and store your favorite locations or places you have visited.'}
				languages={'HTML, CSS, Javascript, Node JS, Mongo DB, Google API'}
				frameworks={'SASS, React JS, Express, Mongoose'}
				url="https://olivajames110.github.io/fip-calculator/"
				github="https://github.com/olivajames110/mern"
				handleProjectPreview={handleProjectPreview}
			/>
			<Project
				image={'https://digitalmarketing.blob.core.windows.net/10042/images/items/image674271.png'}
				title={'Millhouse Brewing'}
				description={'Create an account and store your favorite locations or places you have visited.'}
				languages={'HTML, CSS, Javascript, Node JS, Mongo DB, Google API'}
				frameworks={'SASS, React JS, Express, Mongoose'}
				url="https://olivajames110.github.io/online-ordering-price-comparison/"
				github="https://github.com/olivajames110/mern"
				handleProjectPreview={handleProjectPreview}
			/>
		</div>
	);
	const mobileProjectList = (
		<div className="featured-project__secondary">
			<HorizontalScroll>
				<Project
					image={'https://digitalmarketing.blob.core.windows.net/10042/images/items/image674267.png'}
					title={'Online Ordering Comparison'}
					description={'Create an account and store your favorite locations or places you have visited.'}
					languages={'HTML, CSS, Javascript, Node JS, Mongo DB, Google API'}
					frameworks={'SASS, React JS, Express, Mongoose'}
					url="https://olivajames110.github.io/online-ordering-price-comparison/"
					github="https://github.com/olivajames110/mern"
					handleProjectPreview={handleProjectPreview}
				/>
				<Project
					image={'https://digitalmarketing.blob.core.windows.net/10042/images/items/image674266.png'}
					title={'FIP Cost Calculator'}
					description={'Create an account and store your favorite locations or places you have visited.'}
					languages={'HTML, CSS, Javascript, Node JS, Mongo DB, Google API'}
					frameworks={'SASS, React JS, Express, Mongoose'}
					url="https://olivajames110.github.io/fip-calculator/"
					github="https://github.com/olivajames110/mern"
					handleProjectPreview={handleProjectPreview}
				/>
				<Project
					image={'https://digitalmarketing.blob.core.windows.net/10042/images/items/image674271.png'}
					title={'Millhouse Brewing'}
					description={'Create an account and store your favorite locations or places you have visited.'}
					languages={'HTML, CSS, Javascript, Node JS, Mongo DB, Google API'}
					frameworks={'SASS, React JS, Express, Mongoose'}
					url="https://olivajames110.github.io/online-ordering-price-comparison/"
					github="https://github.com/olivajames110/mern"
					handleProjectPreview={handleProjectPreview}
				/>
			</HorizontalScroll>
		</div>
	);

	return (
		<Main>
			<DevicePreview show={projectPreview} onCancel={() => setProjectPreview(false)} project={projectPreview} />
			<section className="" id="featured-projects">
				<h1>Featured Projects</h1>
				<div className="featured-project__primary">
					<Project
						featured
						image={'https://digitalmarketing.blob.core.windows.net/10042/images/items/image674221.png'}
						title={'Travel Map'}
						description={'Create an account and store your favorite locations or places you have visited.'}
						languages={'HTML, CSS, Javascript, Node JS, Mongo DB, Google API'}
						frameworks={'SASS, React JS, Express, Mongoose'}
						url="https://jimmy-mern-fullstack-project.web.app/"
						github="https://github.com/olivajames110/mern"
						handleProjectPreview={handleProjectPreview}
					/>
				</div>
			</section>

			{
				!isMobile ? projectList :
				mobileProjectList}

			<section className="" id="other-projects">
				<h2>Other Projects</h2>
			</section>
		</Main>
	);
};

export default ProjectsScreen;
