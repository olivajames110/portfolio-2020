import baseballCardBuilder from "./ProjectImages/baseballCardBuilder.png";
import cattery from "./ProjectImages/cattery.png";
import fipCalc from "./ProjectImages/fipCalc.png";
import ooComparison from "./ProjectImages/ooComparison.png";
import ordereze from "./ProjectImages/ordereze.png";
import grillmarx from "./ProjectImages/grillmarx.png";
import truCircle from "./ProjectImages/truCircle2.png";
import ooSuccess from "./ProjectImages/ooSuccess2.png";
import laNovaTimeline from "./ProjectImages/laNovaTimeline.png";
import Waypoint from "./ProjectImages/waypoint.jpg";
import fuku from "./ProjectImages/fuku.png";
import domainLookup from "./ProjectImages/domainLookup.png";
import itc from "./ProjectImages/itc.png";
import sharkii from "./ProjectImages/sharkii.png";
import wheelSpin from "./ProjectImages/wheelSpin.png";
import singularity from "./ProjectImages/singularity.png";

export const projectData = {
  websites: [
    // { 	image       :
    // 'https://digitalmarketing.blob.core.windows.net/10042/images/items/image67427
    // 1 .png', 	title       : 'Millhouse Brewing', 	description : 'Create an
    // account and store your favorite locations or places you have visited.',
    // 	technology : 'HTML, CSS, Javascript, Node JS, Mongo DB, Google API', 	url :
    // 'https://olivajames110.github.io/online-ordering-price-comparison/', 	github
    // : 'https://github.com/olivajames110/mern', 	group       : 'websites' }, {
    // 	image       :
    // 'https://digitalmarketing.blob.core.windows.net/5587/images/items/image608624
    // . jpg', 	title       : 'Benvenuto Cafe', 	description : 'Create an account
    // and store your favorite locations or places you have visited.', 	technology :
    // 'HTML, CSS, Javascript, Node JS, Mongo DB, Google API', 	 	url         :
    // 'https://olivajames110.github.io/online-ordering-price-comparison/', 	github
    // : 'https://github.com/olivajames110/mern', 	group       : 'websites' },
    {
      image: ordereze,
      title: "Ordereze Homepage",
      description:
        "Entire website built and managed for a Full-service Digital Marketing & Website " +
        "company tailored for Restaurants and small businesses. ",
      technology:
        "Built using Ordereze's proprietary website builder built with React JS. The buil" +
        "ding process Heavily incorpates plain HTML, CSS, and JS.",
      url: "http://ordereze.com/",
      github: "https://github.com/olivajames110/mern",
      group: "websites",
    },
    {
      image: grillmarx,
      title: "Grillmarx Homepage",
      description:
        "Entire website built and managed for a Full-service Digital Marketing & Website " +
        "company tailored for Restaurants and small businesses. ",
      technology:
        "Built using Ordereze's proprietary website builder built with React JS. The buil" +
        "ding process Heavily incorpates plain HTML, CSS, and JS.",
      url: "https://grillmarx.web.app/",
      github: "https://github.com/olivajames110/mern",
      group: "websites",
    },
    {
      image: truCircle,
      title: "Trucircle",
      description:
        "A website dedicated to increasing accessability of finding mental health help on" +
        "line or in person.",
      technology:
        "Single-page application built using Create React App utilizing React JS, SCSS, a" +
        "nd Firebase for hosting.",
      url: "https://tru-circle.web.app/",
      github: "https://github.com/olivajames110/mern",
      group: "websites",
    },
  ],
  projectsforpeople: [
    {
      image: ooComparison,
      title: "Price Comparison Calculator",
      description:
        "Price calculator that compares the prices of different online ordering companies" +
        ", and shows the savings Ordereze Online Ordering can yield. Built for the Ordere" +
        "ze sales team.",
      technology:
        "Single-page application built using Create React App utilizing React JS, SCSS, a" +
        "nd Firebase for hosting.",
      url: "https://olivajames110.github.io/online-ordering-price-comparison/",
      github: "https://github.com/olivajames110/mern",
      group: "projectsforpeople",
    },
    {
      image: fipCalc,
      title: "FIP Cost Calculator",
      description:
        "Price calculator comparing the dosage amount and costs of different brands of GS" +
        ", and experimental treatment for cats suffering FIV. Built for the Nonprofit Gro" +
        "up FIV Warriors.",
      technology:
        "Single-page application built using Create React App utilizing React JS, SCSS, a" +
        "nd Firebase for hosting.",
      url: "https://olivajames110.github.io/fip-calculator/",
      github: "https://github.com/olivajames110/mern",
      group: "projectsforpeople",
    },
    {
      image: Waypoint,
      title: "Waypoint Dashboard",
      description:
        "A mocked up prototype of an example dashboard for restaurant owners.",
      technology:
        "Single-page application built using Create React App utilizing React JS, SCSS, a" +
        "nd Firebase for hosting.",
      url: "https://waypoint-oz-dashboard.web.app/",
      github: "https://github.com/olivajames110/mern",
      group: "projectsforpeople",
    },
    {
      image: ooSuccess,
      title: "Success Story Map",
      description:
        "Displays a list of Ordereze Online Ordering success examples on the map as well " +
        "as on cards. Map accounts for multilocation businesses. Built for the Ordereze s" +
        "ales team.",
      technology:
        "Single-page application built using Create React App utilizing React JS, SCSS, a" +
        "nd Firebase for hosting.",
      url: "https://oo-success-examples.web.app/",
      github: "https://github.com/olivajames110/mern",
      group: "projectsforpeople",
    },
    {
      image: cattery,
      title: "Cattery Occupancy Manager",
      description:
        "Occupant capacity management tool built for a Catpurrccinos Cat Cafe for managin" +
        "g the number of guests in the room. Considers a 15 person maximum capicity while" +
        " also showing the next time available time a party of a specific size will be al" +
        "lowed to enter the room. This utilizes a websocket so view this project on a dif" +
        "ferent device to see immediate party additions.",
      technology:
        "Utilizes React JS, SCSS, Node JS with Express, Mongo DB with Mongoose, and a Web" +
        "socket using Socket.io. Frontend is hosted with  Firebase and backend is hosted " +
        "with Heroku.",

      url: "https://olivajames110.github.io/cattery",
      github: "https://github.com/olivajames110/mern",
      group: "projectsforpeople",
    },
    {
      image: laNovaTimeline,
      title: "La Nova Timeline",
      description:
        "Custom responsive timeline built for La Nova Pizzeria in Buffalo, NY. They are t" +
        "he offical pizza partners of the Buffalo Bills, Buffalo Sabres, and Buffalo Biso" +
        "ns.",
      technology: "Built with standard vanilla HTML5 and CSS.",

      url: "https://digitalmarketing.blob.core.windows.net/8981/files/lanova.html",
      github: "https://github.com/olivajames110/mern",
      group: "projectsforpeople",
    },
    {
      image: itc,
      title: "ITC",
      description:
        "Custom responsive timeline built for La Nova Pizzeria in Buffalo, NY. They are t" +
        "he offical pizza partners of the Buffalo Bills, Buffalo Sabres, and Buffalo Biso" +
        "ns.",
      technology: "Built with standard vanilla HTML5 and CSS.",

      url: "https://digitalmarketing.blob.core.windows.net/8981/files/itc.html",
      github: "https://github.com/olivajames110/mern",
      group: "projectsforpeople",
    },

    {
      image: wheelSpin,
      title: "Wheel Spinner",
      description:
        "Custom responsive timeline built for La Nova Pizzeria in Buffalo, NY. They are t" +
        "he offical pizza partners of the Buffalo Bills, Buffalo Sabres, and Buffalo Biso" +
        "ns.",
      technology: "Built with standard vanilla HTML5 and CSS.",

      url: "https://digitalmarketing.blob.core.windows.net/8981/files/wheelSpin.html",
      github: "https://github.com/olivajames110/mern",
      group: "projectsforpeople",
    },
    {
      image: singularity,
      title: "Singularity",
      description:
        "Custom responsive timeline built for La Nova Pizzeria in Buffalo, NY. They are t" +
        "he offical pizza partners of the Buffalo Bills, Buffalo Sabres, and Buffalo Biso" +
        "ns.",
      technology: "Built with standard vanilla HTML5 and CSS.",

      url: "https://domain-lookup.ordereze.com/",
      github: "https://github.com/olivajames110/mern",
      group: "projectsforpeople",
    },
    {
      image: sharkii,
      title: "Uncle Sharkii Locations",
      description:
        "Custom responsive timeline built for La Nova Pizzeria in Buffalo, NY. They are t" +
        "he offical pizza partners of the Buffalo Bills, Buffalo Sabres, and Buffalo Biso" +
        "ns.",
      technology: "Built with standard vanilla HTML5 and CSS.",

      url: "https://digitalmarketing.blob.core.windows.net/8981/files/uncleSharkiiMap.html",
      github: "https://github.com/olivajames110/mern",
      group: "projectsforpeople",
    },
    {
      image: domainLookup,
      title: "Domain Lookup",
      description:
        "Custom responsive timeline built for La Nova Pizzeria in Buffalo, NY. They are t" +
        "he offical pizza partners of the Buffalo Bills, Buffalo Sabres, and Buffalo Biso" +
        "ns.",
      technology: "Built with standard vanilla HTML5 and CSS.",

      url: "https://domain-lookup.ordereze.com/",
      github: "https://github.com/olivajames110/mern",
      group: "projectsforpeople",
    },
  ],
  forfun: [
    {
      image: fuku,
      title: "Claw Machine Game",
      description:
        "Play and operate a real claw machine from your computer or phone!",
      technology: "HTML, CSS, Typescript, Socket.io, Reddis, Redux, Discord.js",
      url: "https://fuku.tv/",
      github: "https://github.com/olivajames110",
      group: "forfun",
      isFeatured: true,
    },
    {
      image: baseballCardBuilder,
      title: "Baseball Card Builder",
      description: "Build your own custom baseball card.",
      technology:
        "Single-page application built using Create React App utilizing React JS, SCSS, a" +
        "nd Firebase for hosting.",
      url: "https://baseballcard-builder.web.app/",
      github: "https://github.com/olivajames110/mern",
      group: "forfun",
    },
  ],
};
