import React from "react";
declare var require: any;
export const title = "Education and University Projects";
export const intro = (
  <>
    I achieved my Bachelors in Mechanical Engineering from The Ohio State
    University which gave me the opportunity to work on some incredible
    projects. Below are some highlights from classwork, personal projects, and
    extracurriculars.
  </>
);

export const sections = [
  {
    id: 0,
    imageFloat: "left",
    maxWidth: 570,
    cardHeader: "Ohio State Robot Competition",
    description: (
      <>
        I oversaw all team functions, helped design and build the final design,
        designed the robots sensor system, completed CAD/drawing set,
        contributed to a 100-page final report, and assisted in programming the
        robot to complete the course. Our robot cost only $125 to build
        (excluding provided microcontroller and battery) and our team finished
        2nd out of 64 teams.
      </>
    ),

    slides: [
      {
        description: "Render of competition robot",

        src: require("../assets/robot cad render for competition.PNG"),
      },
      {
        description: "Physical robot",

        //  description: "Physical Robot",

        src: require("../assets/OSU_Robot_Comp_Real.jpg"),
      },
      {
        description: "Finals Match",
        type: "custom-slide",
        src: "https://youtu.be/cAMcm-07DN0",
        videoId: "cAMcm-07DN0",
      },
      {
        description: "Early prototyping phase",

        src: require("../assets/OSU_Early_Prototype.jpg"),
      },
      {
        description: "Turning the crank precisely 180 degrees",

        src: require("../assets/OSU_Crank.jpg"),
      },
      {
        description: "Line following sensor",

        src: require("../assets/OSU_Line_Sensor.jpg"),
      },
      {
        description:
          "Sensing the color of a light under the robot and pushing the correct button",

        src: require("../assets/OSU_Top_Down_Sensor_Press.jpg"),
      },
    ],
  },
  {
    id: 1,
    imageFloat: "right",
    maxWidth: 425,
    cardHeader: " Ohio State Formula SAE",
    description: (
      <>
        I independently designed mounting plates for the electrical harness and
        assembled chassis components such as steel support arms for the
        suspension system as well as carbon fiber wheel components.
      </>
    ),

    slides: [
      {
        description: " ",

        src: require("../assets/formula sunset square.jpg"),
      },
    ],
  },
  {
    id: 2,
    imageFloat: "left",
    maxWidth: 600,
    cardHeader: "RFID Tag Launching Alarm Clock ",
    description: (
      <>
        This alarm clock prototype included a servo motor that would launch an
        RFID-equiped ball into the room when the alarm goes off, forcing the
        user to get out of bed thus increasing the likelihood of them staying
        awake. Additionally the lamp shows the real weather conditions via a
        WiFi module and an led strip.
      </>
    ),

    slides: [
      {
        description: "",

        src: require("../assets/rfid_alarm_clock.jpg"),
      },
      {
        description: "",

        src: require("../assets/Cloud Lamp.gif"),
      },
    ],
  },
  {
    id: 3,
    imageFloat: "right",
    maxWidth: 550,
    cardHeader: "Reverse Engineering Project ",
    description: (
      <>
        As part of our CAD design class we reverse engineered every piece of a
        toaster oven. We modeled all of the interior components and functional
        mates.
      </>
    ),

    slides: [
      {
        description:
          "Reverse engineered toaster oven modeled and rendered in Solidworks",

        src: require("../assets/FInal Assembly view 7.JPG"),
      },
      {
        description: "Exploded view animation of the toaster oven",
        type: "custom-slide",
        src: "https://www.youtube.com/embed/ArTjmDcmgbU",
        videoId: "ArTjmDcmgbU",
      },
      {
        description:
          "I reverse engineered this mechanism that controls which heating elements to turn on and maintains the temperature",

        src: require("../assets/Temp assembly 1.JPG"),
      },
    ],
  },
  {
    id: 4,
    imageFloat: "left",
    maxWidth: 550,
    cardHeader: "Spring Testing Machine",
    description: (
      <>
        This machine was designed in a machine design class as part of a group
        project. The intent of the machine is to test mountain bike springs for
        their cycle endurance. I did 100% of the CAD and completed formal
        strength and fatigue analysis on many components like shafts, bearings,
        chains, sprokets etc.{" "}
      </>
    ),

    slides: [
      {
        description: " ",

        src: require("../assets/render of total machine.JPG"),
      },
      {
        description: "Spring compression mechanism ",

        src: require("../assets/spring uncompressed.PNG"),
      },
      {
        description:
          "The selected motor was an industrial motor with a gearbox making it very heavy, therefore we selected to locate it at the bottom of the machine for stability. ",

        src: require("../assets/spring_machine_rear.JPG"),
      },      {
        description: "This flywheel design lowered the dynamic load on the motor per our Matlab simulations, increasing cycling durability of the motor and overall system. ",

        src: require("../assets/spring_machine_flywheel.JPG"),
      },
    ],
  },
  {
    id: 5,
    imageFloat: "right",
    maxWidth: 450,
    cardHeader: "Machining",
    description: (
      <>
        For several classes I machined various parts using conventional and CNC
        milling techiniques. These images show some of the parts that I
        machined. For the air cylinder and piston shown, the piston is
        within 0.0005" (half a thousand of an inch) of the corresponding bore.
      </>
    ),

    slides: [
      {
        description: " ",

        src: require("../assets/CNC Milling.jpg"),
      },
      {
        description: " ",

        src: require("../assets/block.jpg"),
      },
      {
        description: " ",

        src: require("../assets/cylinder.jpg"),
      },
    ],
  },
  {
    id: 6,
    imageFloat: "left",
    maxWidth: 500,
    cardHeader: "Airfoil Design",
    description: (
      <>
        For our fluid mechanics class we were tasked with desiging an airfoil
        and appropriate sizing details of an airplane such as weight, range,
        cruising altitude, drag, etc. This airfoil shown was tested using
        airflow simulation software to validate expected values calculated using
        airfoil lift and drag equations.
      </>
    ),

    slides: [
      {
        description: " ",

        src: require("../assets/plane render 2.JPG"),
      },
      {
        description: " ",

        src: require("../assets/plane cfd 2.PNG"),
      },
    ],
  },
];
