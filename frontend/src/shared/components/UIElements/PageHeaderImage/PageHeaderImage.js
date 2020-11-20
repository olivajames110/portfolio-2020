import React from 'react';
import './PageHeaderImage.css';
const PageHeaderImage = (props) => {
		return (
				<div className="header-image-container">
						<h1>{props.title}</h1>
				</div>
		);
};

export default PageHeaderImage;
