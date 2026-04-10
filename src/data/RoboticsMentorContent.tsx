import React from "react";
declare var require: any;
export const title = "FIRST Robotics Mentor";
export const intro = (
  <>
    I am the lead engineering mentor for FIRST Robotics Competition Team 226 Hammerheads, a Troy Michigan
    based high school robotics team.{" "}
  </>
);

export const sections = [
  {
    id: 0,
    imageFloat: "right",
    maxWidth: 600,
    cardHeader: "Intro",
    description: (
      <>
        
          I am the <strong>lead engineering mentor</strong> for FIRST Robotics Competition Team 226 Hammerheads, a
          Troy Michigan based high school robotics team.
        {" "}
        As the lead engineering mentor I led the students through design,
        manufacturing, wiring, programming, and testing.{" "}
      </>
    ),

    slides: [
      {
        description: "",

        src: require("../assets/226/group_photo.png"),
      },
    ],
  },
    {
    id: 0,
    imageFloat: "left",
    maxWidth: 600,
    cardHeader: "Competition",
    description: (
      <>

          Each year FIRST Robotics Competition releases a new game with a new set of challenges. Teams design a robot to complete these challenges and advance from district to state to world levels based on their performance. Our team works 6 days a week for ~7 weeks to design, build, and program a highly advanced robot with camera systems, brushless motors, sensors, and software automations. We compete in 3+ events each season, culminating in the World Championship in Houston Texas.{" "}

        As the lead technical mentor I led the students through design, manufacturing, wiring, programming, and testing.{" "}
      </>
    ),

    slides: [
      {
        description: "",

        src: require("../assets/226/2026_Lake_City.jpg"),
      },
    ],
  },
    {
    id: 1,
    imageFloat: "right",
    maxWidth: 650,
    cardHeader: "Robot CAD",
    description: (
      <>
        Each year the team designs a new robot to compete in the FRC game. The design process starts with brainstorming and prototyping, then moves to CAD modeling and manufacturing. The students are responsible for the design of the robot, with mentors providing critical advice and feedback on design feasibility, ability to manufacture, and performance. 
      </>),
      slides: [
      {
        description: "",

        src: require("../assets/226/Triton_CAD_2.jpg"),
      },
    ],
  },
    {
    id: 0,
    imageFloat: "left",
    maxWidth: 600,
    cardHeader: "Setting Records",
    description: (
      <>
        This year's game "Rebuilt" challenges teams to score "fuel" into the "hub" as quickly as possible. The catch is, points scored in the hub only count during your "shift", which alternates every 25 seconds between the red and blue alliance. This alternating pattern requires close coordination and benefits teams that can score as quickly as possible even under defense. Team 226 and alliance members set event high score of 568 points.
      </>
    ),

    slides: [
      {
        type: "custom-slide",
        src: "https://www.youtube.com/watch?v=yISE-72afTE",
        videoId: "yISE-72afTE",
      },
    ],
  },
  {
    id: 0,
    imageFloat: "right",
    maxWidth: 600,
    cardHeader: "State + World Championship",
    description: (
      <>
        By developing strong engineering skills in students, I've helped them to be <strong>Division Winners at the Michigan State Championship</strong> and qualify for
        the <strong>World Championship</strong> for the past 3 years.{" "}
      </>
    ),

    slides: [
      {
        description: "",

        src: require("../assets/226/W_2.jpg"),
      },
    ],
  },


  {
    id: 2,
    imageFloat: "left",
    maxWidth: 550,
    cardHeader: "Build Process",
    description: (
      <>
        The team builds the robot in the 6 weeks between the game reveal and the competition. As a mentor I'm responsible for guiding the students through an engineering design process. We iterate on prototypes, improve the CAD, manufacture components, complete assemblies, conduct testing and tuning of subsystems to optimize performance, integrate the subsystems, and complete full robot battle testing.
      </>
    ),

    slides: [
      {
        description: "",

        src: require("../assets/226/finished_robot.jpg"),
      },
    ],
  },
];
