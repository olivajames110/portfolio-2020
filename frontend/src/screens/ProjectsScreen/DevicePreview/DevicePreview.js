import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { CSSTransition } from 'react-transition-group';
import Backdrop from '../../../shared/components/UIElements/Backdrop/Backdrop';
import { ReactComponent as Desktop } from '../../../shared/icons/desktop.svg';
import { ReactComponent as Mobile } from '../../../shared/icons/mobile.svg';
import { ReactComponent as Code } from '../../../shared/icons/sourceCode.svg';
import { ReactComponent as Cross } from '../../../shared/icons/times.svg';
import './DevicePreview.css';

const DevicePreviewOverlay = (props) => {
	const { className, style, headerClass, header, onSubmit, contentClass, footer, footerClass, project } = props;
	const [ isMobile, setIsMobile ] = useState(false);
	const [ isFullScreen, setIsFullScreen ] = useState(false);
	const content = (
		<div className={`modal ${isMobile && 'mobile'} || ${isFullScreen && 'desktop-full-screen'}`} style={style}>
			<header className={`modal__header ${headerClass}`}>
				<div class="three-btn-container">
					<div onClick={props.onCancel} class="btn-circle close" />
					<div onClick={() => setIsFullScreen(false)} class="btn-circle middle" />
					<div onClick={() => setIsFullScreen((prev) => !prev)} class="btn-circle expand" />
				</div>
				<h3>{project.title}</h3>
				<div className="device-switcher-container">
					<div onClick={() => setIsMobile(false)} className="device-switcher__icon-wrapper">
						<Desktop />
					</div>
					<div onClick={() => setIsMobile(true)} className="device-switcher__icon-wrapper">
						<Mobile />
					</div>
					<div className="device-switcher__icon-wrapper">
						<Code />
					</div>
					<div onClick={props.onCancel} className="device-switcher__icon-wrapper cancel">
						<Cross />
					</div>
				</div>
			</header>
			<div className="modal__body">
				<iframe src={project.url} title="title" />
			</div>
		</div>
	);

	return ReactDOM.createPortal(content, document.getElementById('modal-hook'));
};

const DevicePreview = (props) => {
	const { show, onCancel } = props;

	return (
		<React.Fragment>
			{show && <Backdrop onClick={onCancel} />}
			<CSSTransition in={show} timeout={200} classNames="fade-in" mountOnEnter unmountOnExit>
				<DevicePreviewOverlay {...props} />
			</CSSTransition>
		</React.Fragment>
	);
};

export default DevicePreview;
