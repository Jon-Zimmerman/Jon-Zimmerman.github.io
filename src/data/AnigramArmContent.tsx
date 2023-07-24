import React from "react";
declare var require: any;
export const title = "Animatronic Granular Jamming Robotic Arm";
export const intro = (
  <>
    {" "}
    This robot was designed as an experiment to investigate the practicality of
    granular jamming for use in the entertainment industry as a highly
    interactive animatronic.
  </>
);

export const sections = [
  {
    id: 0,
    imageFloat: "left",
    maxWidth: 500,
    cardHeader: "Intro ",
    description: (
      <>
        The system included 7 degreees of freedom with smooth motion from
        stepper motors, clever mechanisms to package within the tight confines
        of the arm, and a vision system for identifying objects placed in front
        of the robot. The entire robot including prototypes, motors, material,
        and electronics was built for under $1000. Most importantly the robot
        took advantage of a technology called granular jamming to enable the
        robot to pick objects like a large coin, a toy ball or food items. These
        items served to show that the robot is very universal in its
        application.
      </>
    ),

    slides: [
      {
        description: "",
        src: require("../assets/AniGram_Arm_Frame.png"),
      },
    ],
  },
  {
    id: 1,
    imageFloat: "right",
    maxWidth: 550,
    cardHeader: "Finished Robot ",
    description: (
      <>
        Finished robot model in the lab attached to a test structure. The robot
        included stepper motors, servo motors, micro-controllers, pnuematic
        control modules, a camera, and a Raspberry Pi for central control.
      </>
    ),

    slides: [
      {
        description: "",
        src: require("../assets/AniGram_Arm_Finished.jpg"),
      },
    ],
  },
  {
    id: 1,
    imageFloat: "left",
    maxWidth: 700,
    cardHeader: "Robot Testing",
    description: (
      <>
        After completing the extensive build over a few weeks we dove into
        testing of all of the systems on the robot. I wrote all of the code for
        the robot using the ROS framework and did most of the testing, one
        example of which is shown in the video here. The robot performed very
        well for its material and control limititations imposed by budget
        constraints.
      </>
    ),

    slides: [
      {
        type: "custom-slide",
        src: "https://www.youtube.com/watch?v=Ikw7pUl9Z5E",
        videoId: "Ikw7pUl9Z5E",
      },
    ],
  },
  {
    id: 2,
    imageFloat: "right",
    maxWidth: 400,
    cardHeader: "Hand Design ",
    description: (
      <>
        Robot hand with interior exposed to show details of key mechanisms. The
        hand was designed to be somewhat module and only had 2 servo wires and
        the vacuum tube at its exit. This made it much easier to test the hand
        in isolation without requiring the rest of the arm to funtion. The robot
        hand and the robot arm both include components that were sculpted to be
        as close of a resemblance to a human as possible. Ultimately these
        components could be fitted with clothing and artificial skin to complete
        the illusion. These steps were omitted from the project as they are well
        defined processes in the industry.
      </>
    ),

    slides: [
      {
        description: "",
        src: require("../assets/AniGram_Arm_Hand.jpg"),
      },
    ],
  },
  {
    id: 3,
    imageFloat: "left",
    maxWidth: 500,
    cardHeader: "Hand Internals breakdown",
    description: (
      <>
        Details of how the hand operates with multiple motors embeded in the
        hand itself. The hand used pulleys with thin wires attaching them to
        allow flexibilty in the mechanism to avoid crushing sensitive objects.
      </>
    ),

    slides: [
      {
        description: "",
        src: require("../assets/AniGram_Arm_Hand_Details.JPG"),
      },
    ],
  },
  {
    id: 4,
    imageFloat: "right",
    maxWidth: 600,
    cardHeader: "Robot Arm CAD",
    description: (
      <>
        The robot CAD included outer shells and inner frames/motor mounts. This
        was an incredibly important piece of the design because it created a
        very lightweight while simultaneously strong design. Due to cost
        constraints we also designed the shells to have features that acted as
        rotational bearings at the various joints.{" "}
      </>
    ),

    slides: [
      {
        description: "",
        src: require("../assets/AniGram_Arm_Exploded.jpg"),
      },
    ],
  },
  {
    id: 5,
    imageFloat: "left",
    maxWidth: 400,
    cardHeader: "Elbow Structure FEA",
    description: (
      <>
        Initially there was concern about the strength of the critical elbow
        joint. FEA was performed on this part to ensure the maximum stress
        within the part was well below the yield strength of the material.
      </>
    ),

    slides: [
      {
        description: "",
        src: require("../assets/AniGram_Arm_FEA.jpg"),
      },
    ],
  },
  {
    id: 6,
    imageFloat: "right",
    maxWidth: 400,
    cardHeader: "Differential Wrist Mechanism",
    description: (
      <>
        One of the most interesting mechanisms on the robot was the differential
        gearing used in the wrist. This allowed the robot wrist to move in two
        degrees of freedom on intersecting axes. This design more closely
        mimicks the behavior of a human wrist ball joint.
      </>
    ),

    slides: [
      {
        description: "",
        src: require("../assets/AniGram_Arm_Belt.jpg"),
      },
    ],
  },
];
