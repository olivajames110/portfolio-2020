import React from 'react';
import Main from '../../shared/components/UIElements/Main/Main';
import './HomeScreen.css';
import ParticleBackground from './backgrounds/ParticleBackground.js';
import {ReactComponent as Arrow} from '../../shared/icons/long-arrow-right.svg';
import JimmySVG from '../../shared/svgs/jimmy';

const HomeScreen = () => {
		return (
				<Main full>
						<div className="home-img">
								<div className="content">
										<JimmySVG/>
										<span className="sub-heading">
												I am a self-tought Front-End Developer with strong UX/UI and design experience.
										</span>

										<a class="projects-btn" href="projects">
												<span>See My Projects</span>
												<Arrow/>
										</a>
								</div>
								<ParticleBackground/>
						</div>
				</Main>
		);
};

export default HomeScreen;
