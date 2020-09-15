import React from 'react';
import ReactDOM from 'react-dom';
import { CSSTransition } from 'react-transition-group';
import Backdrop from '../Backdrop/Backdrop';
import { ReactComponent as Cross } from '../../../shared/icons/times.svg';
import './ProjectSwitcher.css';

const ProjectSwitcherOverlay = (props) => {
	const { className, style, headerClass, header, onSubmit, contentClass, footer, footerClass } = props;

	const content = (
		<div className={`modal ${className}`} style={style}>
			<header className={`modal__header ${headerClass}`}>
				<h3>{header}</h3>
				<div onClick={props.onCancel} className="cancel">
					<Cross />
				</div>
			</header>
			<div className="modal-body">body</div>
		</div>
	);

	return ReactDOM.createPortal(content, document.getElementById('modal-hook'));
};

const ProjectSwitcher = (props) => {
	const { show, onCancel } = props;

	return (
		<React.Fragment>
			{show && <Backdrop onClick={onCancel} />}
			<CSSTransition in={show} timeout={200} classNames="fade-in" mountOnEnter unmountOnExit>
				<ProjectSwitcherOverlay {...props} />
			</CSSTransition>
		</React.Fragment>
	);
};

export default ProjectSwitcher;
