import React, { useState, useRef, useEffect } from "react";
import baseballCardBuilder from "../../shared/images/projectThumbnails/projects/baseballCardBuilder.jpg";
import cattery from "../../shared/images/projectThumbnails/projects/cattery.jpg";
import fipCalc from "../../shared/images/projectThumbnails/projects/fipCalc.jpg";
import ooComparison from "../../shared/images/projectThumbnails/projects/ooComparison.jpg";
import grillmarx from "../../shared/images/projectThumbnails/projects/grillmarx.jpg";
import truCircle from "../../shared/images/projectThumbnails/projects/truCircle2.jpg";
import rewards from "../../shared/images/projectThumbnails/projects/rewards.jpg";
import laNovaTimeline from "../../shared/images/projectThumbnails/projects/laNovaTimeline.jpg";
import fuku from "../../shared/images/projectThumbnails/projects/fuku.jpg";
import domainLookup from "../../shared/images/projectThumbnails/projects/domainLookup.jpg";
import itc from "../../shared/images/projectThumbnails/projects/itc.jpg";
import sharkii from "../../shared/images/projectThumbnails/projects/sharkii.jpg";
import waiver from "../../shared/images/projectThumbnails/projects/waiver.png";
// import Waypoint from "../../shared/images/projectThumbnails/projects/waypoint.jpg";
// import ordereze from "../../shared/images/projectThumbnails/projects/ordereze.png";
// import wheelSpin from "../../shared/images/projectThumbnails/projects/wheelSpin.png";
// import singularity from "../../shared/images/projectThumbnails/projects/singularity.png";

// import node from "../../shared/logos/node.jpg";
import react from "../../shared/logos/react.png";
import mui from "../../shared/logos/mui.png";
import saas from "../../shared/logos/saas.png";
import redux from "../../shared/logos/redux.png";
import node from "../../shared/logos/node.png";
import express from "../../shared/logos/express.png";
import mongo from "../../shared/logos/mongo.png";
import mongoose from "../../shared/logos/mongoose.png";
import xd from "../../shared/logos/xd.png";
import css from "../../shared/logos/css.png";
import html from "../../shared/logos/html.png";
import js from "../../shared/logos/js.png";
import socket from "../../shared/logos/socket.png";
import discord from "../../shared/logos/discord.png";
import redis from "../../shared/logos/redis.png";
import typescript from "../../shared/logos/typescript.png";
// import ps from "../../shared/logos/ps.jpg";
// import ai from "../../shared/logos/ai.jpg";

export const projectData = {
  websites: [
    // {
    //   image: ordereze,
    //   title: "Ordereze Homepage",
    //   description:
    //     "Entire website built and managed for a Full-service Digital Marketing & Website " +
    //     "company tailored for Restaurants and small businesses. ",
    //   technology:
    //     "Built using Ordereze's proprietary website builder built with React JS. The buil" +
    //     "ding process Heavily incorpates plain HTML, CSS, and JS.",
    //   url: "http://ordereze.com/",
    //   github: "https://github.com/olivajames110/mern",
    //   features: ["SCSS", "React JS"],
    //   logos: [saas, react, node],
    //   group: "websites",
    // },
    // {
    //   image: grillmarx,
    //   title: "Grillmarx Homepage",
    //   description:
    //     "Entire website built and managed for a Full-service Digital Marketing & Website " +
    //     "company tailored for Restaurants and small businesses. ",
    //   technology:
    //     "Built using Ordereze's proprietary website builder built with React JS. The buil" +
    //     "ding process Heavily incorpates plain HTML, CSS, and JS.",
    //   url: "https://grillmarx.web.app/",
    //   github: "https://github.com/olivajames110/mern",
    //   features: ["SCSS", "React JS"],
    //   logos: [saas, react],
    //   group: "websites",
    // },
    {
      image: truCircle,
      title: "Trucircle",
      description:
        "A sample homepage built for a friend with a business that is dedicated to increasing accessability of finding mental health help online or in person.",
      technology:
        "Single-page application built using Create React App utilizing React JS, SCSS, a" +
        "nd Firebase for hosting.",
      url: "https://tru-circle.web.app/",
      github: "https://github.com/olivajames110/mern",
      features: ["SCSS", "React JS"],
      logos: [saas, react],
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
      features: ["SCSS", "React JS"],
      logos: [saas, react],
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
      features: ["SCSS", "React JS"],
      logos: [saas, react, xd],
      group: "projectsforpeople",
    },
    // {
    //   image: Waypoint,
    //   title: "Waypoint Dashboard",
    //   description:
    //     "A mocked up prototype of an example dashboard for restaurant owners.",
    //   technology:
    //     "Single-page application built using Create React App utilizing React JS, SCSS, a" +
    //     "nd Firebase for hosting.",
    //   url: "https://waypoint-oz-dashboard.web.app/",
    //   github: "https://github.com/olivajames110/mern",
    //   features: ["SCSS", "React JS"],
    //   logos: [saas, react, xd],
    //   group: "projectsforpeople",
    // },
    {
      image: rewards,
      title: "Catpurrccinos Rewards",
      description:
        "Displays a list of Ordereze Online Ordering success examples on the map as well " +
        "as on cards. Map accounts for multilocation businesses. Built for the Ordereze s" +
        "ales team.",
      technology:
        "Single-page application built using Create React App utilizing React JS, SCSS, a" +
        "nd Firebase for hosting.",
      url: "https://catpurrccinos-rewards.web.app/",
      github: "https://github.com/olivajames110/mern",
      features: ["SASS", "React JS"],
      logos: [saas, react, mongo, mongoose],
      group: "projectsforpeople",
    },
    {
      image: waiver,
      title: "Catpurrccinos Safety Waiver",
      description:
        "Displays a list of Ordereze Online Ordering success examples on the map as well",
      technology:
        "Single-page application built using Create React App utilizing React JS, SCSS, a" +
        "nd Firebase for hosting.",
      url: "https://catpurrccinos-waiver.web.app/",
      github: "https://github.com/olivajames110/mern",
      features: ["SASS", "React JS"],
      logos: [saas, react, mongo, mongoose],
      group: "projectsforpeople",
    },
    {
      image: cattery,
      title: "Cattery Occupancy Manager",
      description:
        "Occupant capacity management tool built for a Catpurrccinos Cat Cafe for managing the number of guests in the room. Considers a 15 person maximum capacity while also showing the next time available time a party of a specific size will be allowed to enter the room. This utilizes a websocket, so view this project in multiple tabs, add a new party, and watch new party additions.",
      technology:
        "Utilizes React JS, SCSS, Node JS with Express, Mongo DB with Mongoose, and a Web" +
        "socket using Socket.io. Frontend is hosted with  Firebase and backend is hosted " +
        "with Heroku.",

      url: "https://olivajames110.github.io/cattery",
      github: "https://github.com/olivajames110/mern",
      features: ["SCSS", "React JS", "Socket.io", "MongoDB", "Mongoose"],
      logos: [saas, react, node, express, mongo, mongoose],
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
      features: ["HTML 5", "SCSS", "Vanilla JS"],
      logos: [html, css, js],
      group: "projectsforpeople",
    },
    // {
    //   image: itc,
    //   title: "ITC",
    //   description:
    //     "Custom responsive timeline built for La Nova Pizzeria in Buffalo, NY. They are t" +
    //     "he offical pizza partners of the Buffalo Bills, Buffalo Sabres, and Buffalo Biso" +
    //     "ns.",
    //   technology: "Built with standard vanilla HTML5 and CSS.",

    //   url: "https://digitalmarketing.blob.core.windows.net/8981/files/itc.html",
    //   github: "https://github.com/olivajames110/mern",
    //   features: ["HTML 5", "SCSS", "Vanilla JS"],
    //   logos: [html, css, js],
    //   group: "projectsforpeople",
    // },

    // {
    //   image: wheelSpin,
    //   title: "Wheel Spinner",
    //   description:
    //     "Custom responsive timeline built for La Nova Pizzeria in Buffalo, NY. They are t" +
    //     "he offical pizza partners of the Buffalo Bills, Buffalo Sabres, and Buffalo Biso" +
    //     "ns.",
    //   technology: "Built with standard vanilla HTML5 and CSS.",

    //   url: "https://digitalmarketing.blob.core.windows.net/8981/files/wheelSpin.html",
    //   github: "https://github.com/olivajames110/mern",
    //   features: ["HTML 5", "SCSS", "Vanilla JS"],
    //   logos: [html, css, js],
    //   group: "projectsforpeople",
    // },
    // {
    //   image: singularity,
    //   title: "Singularity",
    //   description:
    //     "Custom responsive timeline built for La Nova Pizzeria in Buffalo, NY. They are t" +
    //     "he offical pizza partners of the Buffalo Bills, Buffalo Sabres, and Buffalo Biso" +
    //     "ns.",
    //   technology: "Built with standard vanilla HTML5 and CSS.",

    //   url: "https://domain-lookup.ordereze.com/",
    //   github: "https://github.com/olivajames110/mern",
    //   features: ["SCSS", "React JS", "Material UI"],
    //   logos: [saas, react, mui],
    //   group: "projectsforpeople",
    // },
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
      features: ["HTML 5", "SCSS", "Vanilla JS", "AJAX"],
      logos: [html, css, js],
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
      features: ["SCSS", "React JS", "Material UI"],
      logos: [saas, react, mui],
      group: "projectsforpeople",
    },
  ],
  forfun: [
    {
      image: fuku,
      title: "Claw Machine Game",
      description:
        "Play and operate a real claw machine from your computer or phone! This was a collaboration project between two other friends and utilizes a variety of technologies, including raspberry pi for connecting to the physical claw machine itself. My primary role for this project was designing and programming all visual aspects of the frontend. ",
      technology: "HTML, CSS, Typescript, Socket.io, Reddis, Redux, Discord.js",
      url: "https://fuku.tv/",
      github: "https://github.com/olivajames110",
      logos: [saas, typescript, redux, node, redis, socket, discord],
      features: [
        "SCSS",
        "React JS",
        "Typescript",
        "Socket.io",
        "Reddis",
        "Redux",
        "Discord JS",
      ],
      group: "forfun",
      isFeatured: true,
    },
    {
      image: baseballCardBuilder,
      title: "Baseball Card Builder",
      description:
        "Build your own custom baseball cards! As a major baseball card collector during my youth, this was a project I enjoyed working on. Create your own card and customize the name, image, position and team. All major components such as the binder and card itself are built using CSS, with SASS as preprocessor.",
      technology:
        "Single-page application built using Create React App utilizing React JS, SCSS, a" +
        "nd Firebase for hosting.",
      url: "https://baseballcard-builder.web.app/",
      github: "https://github.com/olivajames110/mern",
      features: ["SCSS", "React JS"],
      logos: [saas, react],
      group: "forfun",
    },
  ],
};
