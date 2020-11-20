import baseballCardBuilder from './ProjectImages/baseballCardBuilder.png';
import cattery from './ProjectImages/cattery.png';
import fipCalc from './ProjectImages/fipCalc.png';
import ooComparison from './ProjectImages/ooComparison.png';
import ordereze from './ProjectImages/ordereze.png';
import travelMap from './ProjectImages/travelMap.png';
import truCircle from './ProjectImages/truCircle2.png';
import ooSuccess from './ProjectImages/ooSuccess2.png';
import laNovaTimeline from './ProjectImages/laNovaTimeline.png';

export const projectData = {
		websites: [
				// { 	image       :
				// 'https://digitalmarketing.blob.core.windows.net/10042/images/items/image67427
				// 1 .png', 	title       : 'Millhouse Brewing', 	description : 'Create an
				// account and store your favorite locations or places you have visited.',
				// 	technology : 'HTML, CSS, Javascript, Node JS, Mongo DB, Google API', 	url :
				// 'https://olivajames110.github.io/online-ordering-price-comparison/', 	github
				//   : 'https://github.com/olivajames110/mern', 	group       : 'websites' }, {
				// 	image       :
				// 'https://digitalmarketing.blob.core.windows.net/5587/images/items/image608624
				// . jpg', 	title       : 'Benvenuto Cafe', 	description : 'Create an account
				// and store your favorite locations or places you have visited.', 	technology :
				// 'HTML, CSS, Javascript, Node JS, Mongo DB, Google API', 	 	url         :
				// 'https://olivajames110.github.io/online-ordering-price-comparison/', 	github
				// : 'https://github.com/olivajames110/mern', 	group       : 'websites' },
				{
						image: ordereze,
						title: 'Ordereze ',
						description: 'Entire website built and managed for a Full-service Digital Marketing & Website ' +
										'company tailored for Restaurants and small businesses. ',
						technology: "Built using Ordereze's proprietary website builder built with React JS. The buil" +
										'ding process Heavily incorpates plain HTML, CSS, and JS.',
						url: 'http://ordereze.com/',
						github: 'https://github.com/olivajames110/mern',
						group: 'websites'
				},
				// { 	image       : '
				// https://digitalmarketing.blob.core.windows.net/5587/images/items/image608625.
				// j pg', 	title       : 'Grillmarx Steakhouse', 	description : 'Create an
				// account and store your favorite locations or places you have visited.',
				// 	technology : 'HTML, CSS, Javascript, Node JS, Mongo DB, Google API', 	url :
				// 'https://olivajames110.github.io/online-ordering-price-comparison/', 	github
				//   : 'https://github.com/olivajames110/mern', 	group       : 'websites' },
				{
						image: truCircle,
						title: 'Trucircle',
						description: 'A website dedicated to increasing accessability of finding mental health help on' +
										'line or in person.',
						technology: 'Single-page application built using Create React App utilizing React JS, SCSS, a' +
										'nd Firebase for hosting.',
						url: 'https://tru-circle.web.app/',
						github: 'https://github.com/olivajames110/mern',
						group: 'websites'
				}
		],
		projectsforpeople: [
				{
						image: ooComparison,
						title: 'Online Ordering Price Comparison',
						description: 'Price calculator that compares the prices of different online ordering companies' +
										', and shows the savings Ordereze Online Ordering can yield. Built for the Ordere' +
										'ze sales team.',
						technology: 'Single-page application built using Create React App utilizing React JS, SCSS, a' +
										'nd Firebase for hosting.',
						url: 'https://olivajames110.github.io/online-ordering-price-comparison/',
						github: 'https://github.com/olivajames110/mern',
						group: 'projectsforpeople'
				}, {
						image: fipCalc,
						title: 'FIP Cost Calculator',
						description: 'Price calculator comparing the dosage amount and costs of different brands of GS' +
										', and experimental treatment for cats suffering FIV. Built for the Nonprofit Gro' +
										'up FIV Warriors.',
						technology: 'Single-page application built using Create React App utilizing React JS, SCSS, a' +
										'nd Firebase for hosting.',
						url: 'https://olivajames110.github.io/fip-calculator/',
						github: 'https://github.com/olivajames110/mern',
						group: 'projectsforpeople'
				}, {
						image: ooSuccess,
						title: 'Online Ordering Success Examples',
						description: 'Displays a list of Ordereze Online Ordering success examples on the map as well ' +
										'as on cards. Map accounts for multilocation businesses. Built for the Ordereze s' +
										'ales team.',
						technology: 'Single-page application built using Create React App utilizing React JS, SCSS, a' +
										'nd Firebase for hosting.',
						url: 'https://oo-success-examples.web.app/',
						github: 'https://github.com/olivajames110/mern',
						group: 'projectsforpeople'
				}, {
						image: cattery,
						title: 'Cattery Occupancy Manager',
						description: 'Occupant capacity management tool built for a Catpurrccinos Cat Cafe for managin' +
										'g the number of guests in the room. Considers a 15 person maximum capicity while' +
										' also showing the next time available time a party of a specific size will be al' +
										'lowed to enter the room. This utilizes a websocket so view this project on a dif' +
										'ferent device to see immediate party additions.',
						technology: 'Utilizes React JS, SCSS, Node JS with Express, Mongo DB with Mongoose, and a Web' +
										'socket using Socket.io. Frontend is hosted with  Firebase and backend is hosted ' +
										'with Heroku.',

						url: 'https://olivajames110.github.io/cattery',
						github: 'https://github.com/olivajames110/mern',
						group: 'projectsforpeople'
				}, {
						image: laNovaTimeline,
						title: 'La Nova Timeline',
						description: 'Custom responsive timeline built for La Nova Pizzeria in Buffalo, NY. They are t' +
										'he offical pizza partners of the Buffalo Bills, Buffalo Sabres, and Buffalo Biso' +
										'ns.',
						technology: 'Built with standard vanilla HTML5 and CSS.',

						url: 'http://lanovapizzacom.saas.setupwebsitelink.com/history',
						github: 'https://github.com/olivajames110/mern',
						group: 'projectsforpeople'
				}
		],
		forfun: [
				{
						image: travelMap,
						title: 'Travel Map',
						description: 'Create an account and store your favorite locations or places you have visited.',
						technology: 'HTML, CSS, Javascript, Node JS, Mongo DB, Google API',
						url: 'https://jimmy-mern-fullstack-project.web.app/',
						github: 'https://github.com/olivajames110/mern',
						group: 'forfun',
						isFeatured: true
				}, {
						image: baseballCardBuilder,
						title: 'Baseball Card Builder',
						description: 'Build your own custom baseball card.',
						technology: 'Single-page application built using Create React App utilizing React JS, SCSS, a' +
										'nd Firebase for hosting.',
						url: 'https://baseballcard-builder.web.app/',
						github: 'https://github.com/olivajames110/mern',
						group: 'forfun'
				}
		]
};
