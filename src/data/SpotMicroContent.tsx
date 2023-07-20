import React from "react";
declare var require: any;
export const title = "Quadruped Exploration Robot";
export const intro = (
  <>
    I designed a scaled version of Spot Mini from Boston Dynamics to learn more
    about linkage design and Solidworks. For cost and complexity reasons I
    scaled the robot down quite a bit. This means that I had to develop a very
    small and compact solution for the servo motors to actuate the legs. I was
    able to design the robot in a way that hides the servo motors from the
    outside giving the robot a more sleek appearance. I fabricated almost the
    entire robot using my personal 3D printer with the main center plate being
    cut from my custom desktop CNC.
  </>
);

export const sections = [
  {
    id: 0,
    imageFloat: "left",
    imageHeight: 500,
    cardHeader: "CAD Design ",
    description: (
      <>
        {" "}
        Solidworks design of robot with fully detailed legs, sensors, motors,
        and body.
      </>
    ),

    image: [
      {
        description: "",

        src: require("../assets/Spot_Micro_CAD.PNG"),
      },
    ],
  },

  {
    id: 1,
    imageFloat: "right",
    imageHeight: 480,
    cardHeader: "Inverse Kinematics ",
    description: (
      <>
        The legs determine their target angles using inverse kinematics from
        given input coordinates. This approach can run in real time on low end
        hardware when the points for desired gait are pre-processed.{" "}
      </>
    ),

    image: [
      {
        description: "math",

        src: require("../assets/Spot_Micro_Math.PNG"),
      },
    ],
  },
  {
    id: 2,
    imageFloat: "right",
    imageHeight: 450,
    cardHeader: "Leg Simulation",
    description: (
      <>
        The leg angle calculations were simulated using matlab to generate a 3d
        view of how different gait paths would look. The combination of these
        paths and leg lengths created a natural looking motion.
      </>
    ),

    image: [
      {
        description: " ",

        src: require("../assets/Spot_Micro_Walking.gif"),
      },
    ],
  },
  {
    id: 0,
    imageFloat: "left",
    imageHeight: 500,
    cardHeader: "Leg Module ",
    description: (
      <>
        Close up of leg design with secondary motor 4 bar to allow for motor to
        be more concealed and protected.{" "}
      </>
    ),

    image: [
      {
        description: " ",

        src: require("../assets/Spot_Micro_Leg.PNG"),
      },
    ],
  },
  {
    id: 2,
    imageFloat: "right",
    imageHeight: 450,
    cardHeader: "Construction",
    description: (
      <>
        This is just one of many parts that were made for the robot, in
        particular this one was cut on my custom build CNC to ensire precise
        hole aligment and overall shape to fit within the 3d printed shell.
      </>
    ),

    image: [
      {
        description: " ",

        src: require("../assets/CNC_Finished_Part.jpg"),
      },
    ],
  },
  
  {
    id: 2,
    imageFloat: "left",
    imageHeight: 500,
    cardHeader: "Finished Robot",
    description: (
      <>
        The robot was printed out of PLA and features 8 servos and two
        ultrasonic sensors for basic obstacle avoidance. However the robot was
        designed to have a mounting point for lidar or other sensors for more
        advanced navigation.
      </>
    ),

    image: [
      {
        description: " ",

        src: require("../assets/Spot_Micro_Real.jpg"),
      },
    ],
  },
];
