import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import {isMobile} from 'react-device-detect';
import {CSSTransition} from 'react-transition-group';
import Backdrop from '../../../shared/components/UIElements/Backdrop/Backdrop';
import LoadingSpinner from '../../../shared/components/UIElements/LoadingSpinner/LoadingSpinner';
import {ReactComponent as Desktop} from '../../../shared/icons/desktop.svg';
import {ReactComponent as Mobile} from '../../../shared/icons/mobile.svg';
import {ReactComponent as Brackets} from '../../../shared/icons/brackets.svg';
import {ReactComponent as Cross} from '../../../shared/icons/times.svg';
import './DevicePreview.css';

const DevicePreviewOverlay = (props) => {
		const {
				className,
				style,
				headerClass,
				header,
				onSubmit,
				contentClass,
				footer,
				footerClass,
				project
		} = props;
		const [previewIsMobile,
				setPreviewIsMobile] = useState(false);
		const [isFullScreen,
				setIsFullScreen] = useState(false);
		const [isLoaded,
				setIsLoaded] = useState(true);
		useEffect(() => {
				if (isMobile) {
						console.log('yes', isMobile);
				} else {
						console.log('no', isMobile);
				}
		}, []);

		const mobilePreviewHandler = () => {
				setIsFullScreen(false);
				setPreviewIsMobile(true);
		};

		const fullScreenPreviewHandler = () => {
				setIsFullScreen((p) => !p);
				setPreviewIsMobile(false);
		};

		const loadingSpinner = (
				<div className="loading-spinner-container">
						<LoadingSpinner/>
						<div className="loading-spinner__body">Retrieving project...one second please</div>
				</div>
		);

		const content = (
				<div
						className={`modal ${previewIsMobile && 'mobile'} ${isFullScreen && 'desktop-full-screen'}`}
						style={style}>
						<header className={`modal__header ${headerClass}`}>
								<div class="three-btn-container">
										<div onClick={props.onCancel} class="btn-circle close"/> {' '}
										{!isMobile && (
												<React.Fragment>
														<div
																onClick={() => setIsFullScreen(false)}
																class={`btn-circle middle ${isFullScreen && 'circle-inactive'}`}/>
														<div onClick={fullScreenPreviewHandler} class="btn-circle expand"/>
												</React.Fragment>
										)}
								</div>
								<div className="title-container">
										<h3>{project.title}</h3>
										<div className="view-live-wrapper">
												<a href={project.url} target="_blank" rel="noopener noreferrer">
														(View Project Live)
												</a>
										</div>
								</div>
								<div className="device-switcher-container">
										{!isMobile && (
												<React.Fragment>
														<div
																onClick={() => setPreviewIsMobile(false)}
																className={`device-switcher__icon-wrapper ${ !previewIsMobile && 'icon-active'}`}>
																<Desktop/>
														</div>
														<div
																onClick={mobilePreviewHandler}
																className={`device-switcher__icon-wrapper ${previewIsMobile && 'icon-active'}`}>
																<Mobile/>
														</div>
												</React.Fragment>
										)}
										<div className="device-switcher__icon-wrapper">
												<Brackets/>
										</div>
								</div>
						</header>
						<div className="modal__body">
								<CSSTransition
										in={isLoaded}
										timeout={200}
										classNames="fade-in"
										mountOnEnter
										unmountOnExit>
										{loadingSpinner}
								</CSSTransition>

								<iframe src={project.url} onLoad={() => setIsLoaded(false)} title="title"/>
						</div>
				</div>
		);

		return ReactDOM.createPortal(content, document.getElementById('modal-hook'));
};

const DevicePreview = (props) => {
		const {show, onCancel} = props;

		return (
				<React.Fragment>
						{show && <Backdrop onClick={onCancel}/>}
						<CSSTransition
								in={show}
								timeout={200}
								classNames="fade-in"
								mountOnEnter
								unmountOnExit>
								<DevicePreviewOverlay {...props}/>
						</CSSTransition>
				</React.Fragment>
		);
};

export default DevicePreview;
