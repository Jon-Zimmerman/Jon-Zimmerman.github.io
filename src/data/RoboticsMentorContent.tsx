import React from "react";
declare var require: any;
export const title = "FIRST Robotics Mentor";
export const intro = (
  <>
    {/* I am the lead engineering mentor for FIRST Robotics Competition Team 226 Hammerheads, a Troy Michigan
    based high school robotics team.{" "} */}
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
    id: 1,
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

        src: require("../assets/226/2026_Lake_City_2.jpg"),
      },
    ],
  },
    {
    id: 2,
    imageFloat: "right",
    maxWidth: 600,
    cardHeader: "Robot CAD",
    description: (
      <>
        Each year the team designs a new robot to compete in the FRC game. The design process starts with brainstorming and prototyping, then moves to CAD modeling and manufacturing. The students are responsible for the design of the robot, with mentors providing critical advice and feedback on design feasibility, ability to manufacture, and performance. 
      </>),
      slides: [
      {
        description: "Full robot CAD",

        src: require("../assets/226/Triton_CAD_2.jpg"),
      },
      {
        description:
          "The turret shooter can spin about its axis, change its hood angle, and precisely control its shooting speed.",
        src: require("../assets/226/turret_shooter_cad.jpg"),
      },
      {
        description:
          "The intake system allows the robot to pick up and store game pieces.",
        src: require("../assets/226/intake_CAD.jpg"),
      },
      {
        description:
          "The indexing system feeds the balls from the hopper to the dual shooters.",
        src: require("../assets/226/indexer_CAD.jpg"),
      },
    ],
  },
    {
    id: 3,
    imageFloat: "left",
    maxWidth: 600,
    cardHeader: "Setting Records",
    description: (
      <>
        This year's game "Rebuilt" challenges teams to score "fuel" into the "hub" as quickly as possible. The catch is, points scored in the hub only count during your "shift", which alternates every 25 seconds between the red and blue alliance. This alternating pattern requires close coordination and benefits teams that can score as quickly as possible even under defense. In the video shown 226 and alliance members set an event high score of 568 points.
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
    id: 4,
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
    id: 5,
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
  
  {
    id: 6,
    imageFloat: "right",
    maxWidth: 500,
    cardHeader: "Robot in a Box Learning Tool",
    description: (
      <>
        To help programming students learn the fundamentals of robot programming, I developed a "Robot in a Box" tool that allows them to practice coding and debugging more easily by having all of the controls hardware pre-configured.
        To make sure it's robust enough to be in a machine shop and hold a 12 lb battery, it's constructed out of a milk crate. This makes it easy to stack multiple robot in a box kits.
        The Robot in a Box can be connected to up to 20 motors, sensors and other devices that would go on a competition robot.
      </>
    ),

    slides: [
      {
        description: "Robot in a Box model",

        src: require("../assets/226/RIAB.jpg"),
      },
            {
        description: "Robot in a Box electrical wiring",


        src: require("../assets/226/RIAB_electrical.jpg"),
      },
            {
        description: "Robot in a Box electrical wiring",

        src: require("../assets/226/RIAB_electrical_2.jpg"),
      },
            {
        description: "Robot in a Box physical build",

        src: require("../assets/226/RIAB_Real.jpg"),
      },
    ],
  },
  {
    id: 7,
    imageFloat: "left",
    maxWidth: 450,
    cardHeader: "Pit Workbench Build",
    description: (
      <>
       At competitions the team works out of a "pit" just like nascar teams. The pit is where we do repairs, maintenance, and tuning of the robot between matches. To make our pit more functional, I designed and built a custom workbench with integrated power distribution and a computer mount for programming and diagnostics.
      </>
    ),

    slides: [
      {
        description: "Pit Workbench Model",

        src: require("../assets/226/Pit_Workbench.jpg"),
      },
      {
        description: "Pit Workbench Build",

        src: require("../assets/226/workbench.jpg"),
      },
      {
        description: "Pit Workbench at Competition",

        src: require("../assets/226/workbench2.jpg"),
      },
    ],
  },
];
