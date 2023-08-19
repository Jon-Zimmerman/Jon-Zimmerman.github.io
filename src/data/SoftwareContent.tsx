import React from "react";
declare var require: any;
export const title = "Software";
export const intro = (
  <>
    Through my work experience and personal projects I have experience in
    <strong> C/C++ </strong>(robotics, Arduino), <strong>C#</strong> (WinForm
    Applications), <strong>Java</strong> (FRC Robotics Mentoring),<strong> Javascript, React.js, MUI, CSS, HTML </strong> 
     (work experience and personal portfolio development), <strong> Python </strong>
    (robotics, scripting), <strong> Matlab, and Simulink </strong> (work experience).
  </>
);

export const sections = [
  {
    id: 0,
    imageFloat: "left",
    maxWidth: 500,
    cardHeader: "This Website! ",
    description: (
      <>
        I built this website in React.js using the MUI styling framework and
        some styled elements from Roei Yaacobi on Github. I used React Router to
        handle the pages, Framer Motion for the animations, Three.js and Lamina
        for the interactive model on the homepage, and a highly modular media carousel and page layout component. The code is automatically
        deployed via a Github action when a pull request is submitted.
      </>
    ),

    slides: [
      {
        description: "",

        src: require("../assets/Website_Desktop.JPG"),
      },      {
        description: "",

        src: require("../assets/Website_Mobile.JPG"),
      },
    ],
  },
  {
    id: 1,
    imageFloat: "right",
    maxWidth: 450,
    cardHeader: "Custom 3D Printer Enclosure Plugin ",
    description: (
      <>
        {" "}
        I wrote a custom python plugin to connect the enclosure with the OctoPi
        API. This allows for access to the controls of the enclosure through the
        OcotPi web portal. In combination with remote camera monitoring its
        possible to adjust settings from any internet connected device to
        optimize the print in real time. This system includes control over the
        interior ambient leds using a pre-filled color pallet, control over the
        target setpoint and information about the current temperature, fan
        speed, and humidity. These values are retrieved over a custom serial
        interface from an Arduino.
      </>
    ),

    slides: [
      {
        description: "",

        src: require("../assets/Printer_Plugin.jpg"),
      },
    ],
  },
  {
    id: 2,
    imageFloat: "left",
    maxWidth: 500,
    cardHeader: "Robot Arm Motion Control and Vision System ",
    description: (
      <>
        I wrote the vision code for the granular jamming robot to determine when
        an object is placed within the pre determined goal region. As the intent
        of the robot was to be used as an interactive experience in a theme
        park, this would allow guests to place an object in front of the robot
        to trigger a specific response. This vision system was written using
        Python and OpenCV. The motion profiler for the arm was written in Python
        and C++ using the ROS framework.
      </>
    ),

    slides: [
      {
        description: "",

        src: require("../assets/AniGram_Arm_Vision_System.JPG"),
      },
    ],
  },
];
