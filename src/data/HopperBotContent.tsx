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
    imageHeight: 350,
    cardHeader: "Industrial Design Concept ",
    description: (
      <>
        {" "}
        This is a concept of what the robot could look like, rendered in
        Solidworks.
      </>
    ),

    image: [
      {
        description: "",

        src: require("../assets/HopperBot Render 1.png"),
      },
    ],
  },
  {
    id: 1,
    imageFloat: "right",
    imageHeight: 450,
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

    image: [
      {
        description: " ",

        src: require("../assets/HopperBot_Tech.webp"),
      },
    ],
  },
  {
    id: 2,
    imageFloat: "left",
    imageHeight: 360,
    cardHeader: "Software ",
    description: (
      <>
        The robot software is built on the ROS framework which uses publishers
        and subscribers. The map above shows the transform map between the
        different coordinate systems.
      </>
    ),

    image: [
      {
        description: "",

        src: require("../assets/HopperBot_Data_Tree.webp"),
      },
    ],
  },
  {
    id: 3,
    imageFloat: "right",
    imageHeight: 400,
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

    image: [
      {
        description: " ",

        src: require("../assets/HopperBot_Lidar.webp"),
      },
    ],
  },
  {
    id: 4,
    imageFloat: "left",
    imageHeight: 400,
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

    image: [
      {
        description: " ",

        src: require("../assets/HopperBot_Electrical.webp"),
      },
    ],
  },
];
