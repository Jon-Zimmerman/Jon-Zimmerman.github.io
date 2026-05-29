import React from "react";
declare var require: any;

export const title = "Low-Cost VLA Enabled Robot Arm";

export const intro = (
  <>
    A cost-effective robot arm designed for experimenting with Vision Language
    Action (VLA) models. The arm is <strong>3D printed</strong> and leverages{" "}
    <strong>affordable closed-loop servos</strong> for precise control. The
    robot arm is trained via a <strong>leader-follower setup</strong>, enabling
    intuitive learning of new manipulation tasks through demonstration.
  </>
);

export const sections = [
  {
    id: 0,
    imageFloat: "right",
    maxWidth: 550,
    cardHeader: "Design for Accessibility & 3D Printing",
    description: (
      <>
        The robot arm was designed in Onshape with a focus on
        manufacturability and accessibility. By utilizing 3D printing as the
        primary manufacturing method and affordable closed-loop servos, there is a lower barrier to entry to building the arm. The design emphasizes modularity and ease of assembly,
        without compromising the visual aesthetic aspects.
      </>
    ),
    slides: [
      {
        description: "Low Cost VLA Enabled Robot Arm",
        src: require("../assets/LCRA/LCRA_1.png"),
      },
      {
        description: "Low Cost VLA Enabled Robot Arm",
        src: require("../assets/LCRA/LCRA_3.jpg"),
      },
    ],
  },
  {
    id: 1,
    imageFloat: "left",
    maxWidth: 550,
    cardHeader: "Assembly & Development Progress",
    description: (
      <>
        The arm is fully assembled with both the leader and follower. It's been tested with basic control and is currently being integrated with a VLA model for training and experimentation.
      </>
    ),
    slides: [
      {
        description: "Progress on arm assembly.",
        src: require("../assets/LCRA/LCRA_6.jpg"),
      },
    ],
  },
];
