import React from "react";
declare var require: any;
export const title = "Autonomous Delivery Robot";
export const intro = (
  <>
    Independently created a product concept design and working core technology
    prototype for indoor delivery in large buildings such as apartments and
    office spaces, reducing person to person contact and increasing delivery
    speed. The robot runs on ROS (coded in C++ and Python) and uses LIDAR plus
    odometry data for SLAM based navigation.
  </>
);

export const sections = [
  {
    id: 0,
    imageFloat: "left",
    maxWidth: 600,
    cardHeader: "Industrial Design Concept ",
    description: (
      <>
        {" "}
        This is a concept of what the robot could look like, rendered in
        Solidworks.
      </>
    ),

    slides: [
      {
        description: "",

        src: require("../assets/HopperBot Render 1.png"),
      },
    ],
  },
  {
    id: 1,
    imageFloat: "right",
    maxWidth: 450,
    cardHeader: "Low Cost Prototype",
    description: (
      <>
        The core technology prototype included two motors with quadruture
        encoders, a Raspberry Pi 3B, a motor controller, a RP Lidar A1, and an
        Arduino configured to interface with the uncommon motor controller
        pinout. The primary purpose of this prototype was to testing SLAM
        algorithm
      </>
    ),

    slides: [
      {
        description: " ",

        src: require("../assets/HopperBot_Tech.webp"),
      },
    ],
  },  {
    id: 2,
    imageFloat: "left",
    maxWidth: 600,
    cardHeader: "Testing ",
    description: (
      <>
        The robot was tested using SLAM algorithms to check its localization ability. Although the software correctly localized in the given space and was able to follow a trajectory correctly, the rate of localization updates was limited by the speed of the Raspberry Pi 3 being using. Upgrades to a more advanced processing board would allow for much better refinement and localization accuracy.
      </>
    ),

    slides: [
      {
        type: "custom-slide",
        src: "https://www.youtube.com/watch?v=KSGEKOYDzTs",
        videoId: "KSGEKOYDzTs",
      },
    ],
  },    
  {
    id: 2,
    imageFloat: "right",
    maxWidth: 600,
    cardHeader: "Software ",
    description: (
      <>
        The robot software is built on the ROS framework which uses publishers
        and subscribers. The map above shows the transform map between the
        different coordinate systems.
      </>
    ),

    slides: [
      {
        description: "",

        src: require("../assets/HopperBot_Data_Tree.webp"),
      },
    ],
  },
  {
    id: 3,
    imageFloat: "left",
    maxWidth: 400,
    cardHeader: "Lidar Base Localization",
    description: (
      <>
        This image shows a representation of what the lidar sensor is observing
        while the robot is localizing. The straightness of the major walls
        indicate the robot is localizing well and not experiencing much drift.
        This is in part due to the feature complexity in the space, whereas low
        feature spaces or repeated features can cause problems for localization
        even with advanced autonomous robots. Luckily precise odometry, fiducial
        markers or visual matching localization can assist with these problems.
      </>
    ),

    slides: [
      {
        description: " ",

        src: require("../assets/HopperBot_Lidar.webp"),
      },
    ],
  },
  {
    id: 4,
    imageFloat: "right",
    maxWidth: 400,
    cardHeader: "Electronics",
    description: (
      <>
        This image shows a representation of what the lidar sensor is observing
        while the robot is localizing. The straightness of the major walls
        indicate the robot is localizing well and not experiencing much drift.
        This is in part due to the feature complexity in the space, whereas low
        feature spaces or repeated features can cause problems for localization
        even with advanced autonomous robots. Luckily precise odometry, fiducial
        markers or visual matching localization can assist with these problems.
      </>
    ),

    slides: [
      {
        description: " ",

        src: require("../assets/HopperBot_Electrical.webp"),
      },
    ],
  },
];
