import React, { useState, useRef, useEffect } from "react";
import baseballCardBuilder from "../../shared/images/projectThumbnails/projects/baseballCardBuilder.jpg";
import cattery from "../../shared/images/projectThumbnails/projects/cattery.jpg";
import fipCalc from "../../shared/images/projectThumbnails/projects/fipCalc.jpg";
import ooComparison from "../../shared/images/projectThumbnails/projects/ooprice.jpg";
import truCircle from "../../shared/images/projectThumbnails/projects/truCircle2.jpg";
import rewards from "../../shared/images/projectThumbnails/projects/rewards.jpg";
import laNovaTimeline from "../../shared/images/projectThumbnails/projects/laNovaTimeline.jpg";
import fuku from "../../shared/images/projectThumbnails/projects/fuku.gif";
import domainLookup from "../../shared/images/projectThumbnails/projects/domain3.jpg";
import businessCardBuilder from "../../shared/images/projectThumbnails/projects/businessCard.png";
import sharkii from "../../shared/images/projectThumbnails/projects/sharkii.jpg";
import waiver from "../../shared/images/projectThumbnails/projects/waiver.png";
import flatIron from "../../shared/images/projectThumbnails/projects/flatIron.png";
//Icons
import { ReactComponent as ReactIcon } from "./techIcons/react.svg";
import { ReactComponent as ReactRouter } from "./techIcons/reactRouter.svg";
import { ReactComponent as Sass } from "./techIcons/sass.svg";
import { ReactComponent as Redux } from "./techIcons/redux.svg";
import { ReactComponent as Firebase } from "./techIcons/firebase.svg";
import { ReactComponent as Mui } from "./techIcons/mui.svg";
import { ReactComponent as Node } from "./techIcons/nodejs.svg";
import { ReactComponent as Redis } from "./techIcons/redis.svg";
import { ReactComponent as Express } from "./techIcons/express.svg";
import { ReactComponent as AWS } from "./techIcons/aws.svg";
import { ReactComponent as Email } from "./techIcons/emailjs.svg";
import { ReactComponent as Mongo } from "./techIcons/mongo.svg";
import { ReactComponent as GooglePlaces } from "./techIcons/googleMaps.svg";
import { ReactComponent as Discord } from "./techIcons/discord.svg";
import { ReactComponent as Socket } from "./techIcons/socket.svg";
import { ReactComponent as Typescript } from "./techIcons/typescript.svg";
import { ReactComponent as Html } from "./techIcons/html.svg";
import { ReactComponent as Css } from "./techIcons/css.svg";
import { ReactComponent as Js } from "./techIcons/javascript.svg";

export const projectData = [
  {
    image: businessCardBuilder,
    title: "Virtual Business Card Builder",
    description:
      "A proof of concept designed and built as a freelance project for Oak Creatives, Creative Agency. Build and customize your own Virtual Business Card to be viewed on a unique URL with downloadable VCF capability. Built in React JS, the project uses React-Redux for state management, as well as connects to Firebase Firestore for query efficiency and scalability purposes.",

    url: "https://digital-business-card-builder.web.app/",
    github: "https://github.com/olivajames110/digital-business-card",
    logos: [
      { name: "React JS", icon: <ReactIcon /> },
      { name: "SASS", icon: <Sass /> },
      { name: "React Redux", icon: <Redux /> },
      { name: "MUI", icon: <Mui /> },
      { name: "Firestore DB", icon: <Firebase /> },
    ],
  },

  {
    image: rewards,
    title: "Catpurrccinos Rewards",
    description:
      "Customer loyalty rewards program built for local Cat Cafe, Catpurrccinos. This iPad-focused app allows users to check in once every 24 hours by entering a phone number. Points can be redeemed for products or free visits in an in-app store. Management of all points, item redemptions, and visits are done with Firestore Realtime Database for efficient and low-latency interaction.",
    url: "https://catpurrccinos-rewards.web.app/",
    github:
      "https://github.com/olivajames110/catpurrccinos-rewards/tree/main/frontend",
    features: ["SASS", "React JS"],
    logos: [
      { name: "React JS", icon: <ReactIcon /> },
      { name: "SASS", icon: <Sass /> },
      { name: "Redux", icon: <Redux /> },
      { name: "React Router", icon: <ReactRouter /> },
      { name: "Firebase", icon: <Firebase /> },
    ],
  },
  {
    image: waiver,
    title: "Catpurrccinos Safety Waiver",
    description:
      "Proof of concept of a customer liability waiver for local Cat Cafe, Catpurrccinos. This form dynamically renders the appropriate number of participant cards dependent on the quantity of each age group. Dependent on the age group type, input validation is required for most fields. React-Redux is used for state management and uses Firebase Hosting deployment services.",
    url: "https://catpurrccinos-waiver.web.app/",
    github: "https://github.com/olivajames110/catpurrccinos-waiver",
    features: ["SASS", "React JS"],
    logos: [
      { name: "React JS", icon: <ReactIcon /> },
      { name: "SASS", icon: <Sass /> },
      { name: "Redux", icon: <Redux /> },
      { name: "Firebase", icon: <Firebase /> },
    ],
  },

  {
    image: fuku,
    title: "Claw Machine Game",
    description:
      "Play and operate a real claw machine! This was a collaboration project between three friends that utilizes a variety of technologies, including Raspberry Pi which acted as the interface between the actual claw machine and an EC2 instance running a WebSocket server. My primary role for this project was designing and programming all visual aspects of the frontend. Fuku (pronounced foo-koo) is the romanization of the Japanese Kanji for “good fortune.”",
    url: "https://fuku.tv/",
    github: "https://github.com/Fuku-tv",
    logos: [
      { name: "React JS", icon: <ReactIcon /> },
      { name: "Typescript", icon: <Typescript /> },
      { name: "Redux", icon: <Redux /> },
      { name: "SASS", icon: <Sass /> },

      { name: "Node JS", icon: <Node /> },
      { name: "AWS", icon: <AWS /> },
      { name: "Redis", icon: <Redis /> },
      { name: "Socket.io", icon: <Socket /> },
      { name: "Discord JS", icon: <Discord /> },
    ],
    features: [
      "SCSS",
      "React JS",
      "Typescript",
      "Socket.io",
      "Reddis",
      "Redux",
      "Discord JS",
    ],

    isFeatured: true,
  },

  // {
  //   image: flatIron,
  //   title: "Winning Bid Funding",
  //   description:
  //     "Single page application built as a proof of concept for a new company called Winning Bid Funding, a child company of Flat Iron Funding. This multi-step form has input validation and offers a dynamic data trigger-based email upon form completion. Form state is managed by React-Redux and uses Firebase Hosting deployment services.",
  //   url: "https://winning-bid-funding.web.app/",
  //   github: "https://github.com/olivajames110/winning-bid-funding",
  //   logos: [
  //     { name: "React JS", icon: <ReactIcon /> },
  //     { name: "SASS", icon: <Sass /> },
  //     { name: "Redux", icon: <Redux /> },
  //     { name: "Google Places", icon: <GooglePlaces /> },
  //     { name: "Firebase", icon: <Firebase /> },
  //     { name: "Email JS", icon: <Email /> },
  //   ],
  //   features: [
  //     "SCSS",
  //     "React JS",
  //     "Typescript",
  //     "Socket.io",
  //     "Reddis",
  //     "Redux",
  //     "Discord JS",
  //   ],

  //   isFeatured: true,
  // },
  {
    image: cattery,
    title: "Cattery Occupancy Manager",
    description:
      "Occupant capacity management tool built for a Catpurrccinos Cat Cafe for managing the number of guests in the room. Considers a 15-person maximum capacity while also showing the next time available time a party of a specific size will be allowed to enter the room. This utilizes a websocket, so view this project in multiple tabs, add a new party, and watch new party additions.",

    url: "https://olivajames110.github.io/cattery",
    github: "https://github.com/olivajames110/cattery",
    features: ["SCSS", "React JS", "Socket.io", "MongoDB", "Mongoose"],
    logos: [
      { name: "React JS", icon: <ReactIcon /> },
      { name: "SASS", icon: <Sass /> },
      { name: "Redux", icon: <Redux /> },
      { name: "Node JS", icon: <Node /> },
      { name: "Socket.io", icon: <Socket /> },
      { name: "Express JS", icon: <Express /> },
      { name: "MongoDB & Mongoose", icon: <Mongo /> },
    ],
  },
  {
    image: fipCalc,
    title: "FIP Cost Calculator",
    description:
      "Price calculator comparing the dosage amount and costs of different brands of GS, which is an experimental treatment for cats suffering a deadly disease called FIV. Built for the Nonprofit Group FIV Warriors.",

    url: "https://olivajames110.github.io/fip-calculator/",
    github: "https://github.com/olivajames110/fip-calculator",
    logos: [
      { name: "React JS", icon: <ReactIcon /> },
      { name: "SASS", icon: <Sass /> },
    ],
  },
  {
    image: domainLookup,
    title: "Domain Lookup",
    description:
      "A query tool built for Ordereze, a restaurant web design company. Allows employees to search and display a business's WHOIS, DNS, and Registrar information all in one place.",

    url: "https://domain-lookup.ordereze.com/",
    github: "https://github.com/olivajames110/domain-lookup",
    features: ["SCSS", "React JS", "Material UI"],
    logos: [
      { name: "React JS", icon: <Typescript /> },
      { name: "SASS", icon: <Sass /> },
      { name: "Redux", icon: <Redux /> },
      { name: "MUI", icon: <Mui /> },
    ],
  },
  {
    image: baseballCardBuilder,
    title: "Baseball Card Builder",
    description:
      "Build your own custom baseball cards! As a major baseball card collector during my youth, this was a project I enjoyed working on. Create your own card and customize the name, image, position, and team. All major components such as the binder and card itself are built using CSS, with SASS as preprocessor.",

    url: "https://baseballcard-builder.web.app/",
    github: "https://github.com/olivajames110/baseball-card-builder",
    logos: [
      { name: "React JS", icon: <ReactIcon /> },
      { name: "SASS", icon: <Sass /> },
    ],
  },
  {
    image: ooComparison,
    title: "Price Comparison Calculator",
    description:
      "Price calculator that dynamically compares the prices of different online ordering companies, and shows the savings Ordereze Online Ordering can yield. Built for the Ordereze sales team.",

    url: "https://olivajames110.github.io/online-ordering-price-comparison/",
    github: "https://github.com/olivajames110/online-ordering-price-comparison",
    logos: [
      { name: "React JS", icon: <ReactIcon /> },
      { name: "SASS", icon: <Sass /> },
    ],
  },
  {
    image: truCircle,
    title: "Trucircle",
    description:
      "A simple single-page application of a homepage built for a business dedicated to increasing accessibility of finding mental health help online or in person.",
    url: "https://tru-circle.web.app/",
    github: "https://github.com/olivajames110/",
    logos: [
      { name: "React JS", icon: <ReactIcon /> },
      { name: "SASS", icon: <Sass /> },
    ],
  },

  {
    image: laNovaTimeline,
    title: "La Nova Timeline",
    description:
      "Custom responsive timeline built for La Nova Pizzeria in Buffalo, NY. They are the official pizza partners of the Buffalo Bills, Buffalo Sabres, and Buffalo Bisons. Due to the software limitations of the website, this project was required to be built purely with HTML, CSS, and Vanilla Javascript.",

    url: "https://digitalmarketing.blob.core.windows.net/8981/files/lanova.html",
    github: "https://github.com/olivajames110/la-nova",
    features: ["HTML 5", "SCSS", "Vanilla JS"],
    logos: [
      { name: "HTML5", icon: <Html /> },
      { name: "CSS3", icon: <Css /> },
      { name: "Vanilla JS", icon: <Js /> },
    ],
  },
  {
    image: sharkii,
    title: "Uncle Sharkii Locations Map",
    description:
      "An interactive map of business locations for Poke restaurant Uncle Sharkii. The map dynamically renders the populated US states as a result of a JSON object fetched on page load. Due to software limitations of the website, this was required to be built purely with HTML, CSS, and Vanilla Javascript.",

    url: "https://digitalmarketing.blob.core.windows.net/8981/files/uncleSharkiiMap.html",
    github: "https://github.com/olivajames110/uncle-sharkii-map",
    features: ["HTML 5", "SCSS", "Vanilla JS", "AJAX"],
    logos: [
      { name: "HTML5", icon: <Html /> },
      { name: "CSS3", icon: <Css /> },
      { name: "Vanilla JS", icon: <Js /> },
    ],
  },
];
