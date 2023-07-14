import React from "react";
declare var require: any;
export const RoboticsMentorTitle = "FIRST Robotics Mentor";
export const RoboticsMentorIntro = (
  <>
    I am the lead technical mentor for Team 5901, the Electric Eels, a Detroit
    based high school robotics team.{" "}
  </>
);

export const RoboticsMentorSections = [
  {
    id: 0,
    imageFloat: "left",
    imageHeight: 350,
    subTitle: ("Intro"),
    description: (
      <>
        <strong>
          I am the lead technical mentor for Team 5901, the Electric Eels, a
          Detroit based high school robotics team.
        </strong>
       
          As the lead technical mentor I led the students through design,
          manufacturing, wiring, programming, and testing.{" "}


      </>
    ),

    image: [{
      description:
        "Team 5901, the Electric Eels, placing a game piece during the FRC World Championship.",

      src: require("../../../assets/FRC_Robot_Championship_Team.jpg"),
    },],

    links: {
      url: "/first-robotics-mentor",
    },
  },
  {
    id: 0,
    imageFloat: "right",
    imageHeight: 350,
    subTitle: ("World Championship"),
    description: (
      <>
        I acted as the drive team coach and led the team to become
        a <strong>Division Winner at the State Championship</strong> and attend
        the <strong>World Championship</strong> for the first time in their
        school's history.{" "}
      </>
    ),

    image: [{
      description:
        "Team 5901, the Electric Eels, placing a game piece during the FRC World Championship.",

      src: require("../../../assets/FRC_Robot_Championship.jpg"),
    },],

    links: {
      url: "/first-robotics-mentor",
    },
  },
  {
    id: 1,
    imageFloat: "left",
    imageHeight: 400,
    subTitle: ("Robot CAD"),
    description: (
      <>
        The design of the robot was decided by the students with the mentors
        providing necessary assistance to turn their ideas into a CAD model.
        Once the critical dimensions were laid out the students were completely
        responsible for building the robot. This model was made in Fusion 360
        and is comprised of a main 2-stage elevator, a slider, and an intake.
      </>
    ),

    image: [{
      description:
        "Robot CAD",

      src: require("../../../assets/FRC_Robot_CAD.jpg"),
    }],
    links: {
      url: "/first-robotics-mentor",
    },
  },
  {
    id: 2,
    imageFloat: "right",
    imageHeight: 550,
    subTitle: ("Finshed Build"),
    description: (
      <>
        With the presence of height obstacles and agressive robot-robot contact
        the team prioritized a robot with a low center of gravity and good
        protection of critical components such as sensors and control circuits.
        The design of the robot was decided by the students with the mentors
        providing necessary assistance to turn their ideas into a CAD model.
        Once the critical dimensions were laid out the students were completely
        responsible for building the robot. This model was made in Fusion 360
        and is comprised of a main 2-stage elevator, a slider, and an intake.</>
    ),

    image: [{
      description:
        "Team 5901, the Electric Eels, placing a game piece during the FRC World Championship.",

      src: require("../../../assets/FRC_Robot_Standalone.jpg"),
    }], 

    links: {
      url: "/first-robotics-mentor",
    },
  },
];
// skills: [
//   "Leadership",
//   "Mechanical Design",
//   "CAD",
//   "Electrical",
//   "Testing",
//   "Java",
// ],
