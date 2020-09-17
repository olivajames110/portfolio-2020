import React, { useState, useEffect } from 'react';

// import { ReactComponent as Cross } from '../../../shared/icons/times.svg';
// import { projectData } from '../ProjectData/';
import './ProjectSwitcher.css';

const ProjectSwitcher = (props) => {
	const [ currentCategory, setCurrentCategory ] = useState('All');
	const categories = [ 'All', 'Websites', 'Calculators', 'For Fun' ];

	const handleProjectGroupChange = (cat) => {
		let group = cat.split(' ').join('').toLowerCase();
		setCurrentCategory(cat);
		console.log(group);
		props.setProjectGroup(group);
	};
	return (
		<div className="project-switcher-container">
			{categories.map((cat) => (
				<div
					onClick={() => handleProjectGroupChange(cat)}
					className={`category-item-wrapper ${currentCategory === cat && 'item-active'}`}
				>
					<button>{cat}</button>
				</div>
			))}
		</div>
	);
};

export default ProjectSwitcher;
