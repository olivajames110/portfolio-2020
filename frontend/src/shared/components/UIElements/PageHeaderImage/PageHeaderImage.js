import React from 'react';
import './PageHeaderImage.css';
import BackgroundImage from '../../../images/code-background.jpg';
const PageHeaderImage = (props) => {
		const styles = {
				background: `url(${props.image})`
		};
		return (
				<div style={styles} className="header-image-container">
						<h1>{props.title}</h1>
				</div>
		);
};

export default PageHeaderImage;
