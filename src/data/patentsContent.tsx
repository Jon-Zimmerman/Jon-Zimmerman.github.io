//import React from "react";
declare var require: any;

// Note: Add patent images to src/assets/patents/ as patent1.jpg, patent2.jpg, patent3.jpg
export const patentsContent = [
  {
    id: 1,
    title: "Robotic Gantry Charging Station for Electric Vehicles",
    patentNumber: "US 12,547,177 & US Application 2024/0293938",
    description: "Using robotic gantry technology to automate the charging process for electric vehicles.",
    image: require("../assets/patents/Patent_charger.png"),
  },
  {
    id: 2,
    title: "Steering Pinion Offset Calibration Using Vision Systems",
    patentNumber: "US Application 2025/0333102",
    description: "Utilizing vision systems to analyze and calibrate the steering pinion offset for semi-autonomous vehicles.",
    image: require("../assets/patents/patent_SWA.jpg"),
  },
  {
    id: 3,
    title: "Deployable Tailgate Handle System for Easier Access to Truck Bed",
    patentNumber: "US Application 2025/0376099",
    description: "A system for deploying a unique handle solution to make it easier to get in and out of a pickup truck bed.",
    image: require("../assets/patents/patent_tailgate.jpg"),
  },
];