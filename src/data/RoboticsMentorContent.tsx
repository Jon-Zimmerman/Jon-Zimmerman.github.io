import React from "react";
declare var require: any;
export const title = "FIRST Robotics Mentor";
export const intro = (
  <>
    I am the lead technical mentor for Team 5901, the Electric Eels, a Detroit
    based high school robotics team.{" "}
  </>
);

export const sections = [
  {
    id: 0,
    imageFloat: "left",
    maxWidth: 600,
    cardHeader: "Intro",
    description: (
      <>
        <strong>
          I am the lead technical mentor for Team 5901, the Electric Eels, a
          Detroit based high school robotics team.
        </strong>{" "}
        As the lead technical mentor I led the students through design,
        manufacturing, wiring, programming, and testing.{" "}
      </>
    ),

    slides: [
      {
        description: "",

        src: require("../assets/FRC_Robot_Championship_Team.jpg"),
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
        I acted as the drive team coach and led the team to become a{" "}
        <strong>Division Winner at the State Championship</strong> and attend
        the <strong>World Championship</strong> for the first time in their
        school's history.{" "}
      </>
    ),

    slides: [
      {
        description: "",

        src: require("../assets/FRC_Robot_Championship.jpg"),
      },
    ],
  },
  {
    id: 0,
    imageFloat: "left",
    maxWidth: 700,
    cardHeader: "State + World Championship",
    description: (
      <>
        I acted as the drive team coach and led the team to become a{" "}
        <strong>Division Winner at the State Championship</strong> and attend
        the <strong>World Championship</strong> for the first time in their
        school's history.{" "}
      </>
    ),

    slides: [
      {
        type: "custom-slide",
        src: "https://www.youtube.com/embed/ewtG-txRmU0",
        videoId: "ewtG-txRmU0",
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
        The design of the robot was decided by the students with the mentors
        providing necessary assistance to turn their ideas into a CAD model.
        Once the critical dimensions were laid out the students were completely
        responsible for building the robot. This model was made in Fusion 360
        and is comprised of a main 2-stage elevator, a slider, and an intake.
      </>
    ),

    slides: [
      {
        description: "",

        src: require("../assets/FRC_Robot_CAD.jpg"),
      },
    ],
  },
  {
    id: 2,
    imageFloat: "left",
    maxWidth: 450,
    cardHeader: "Finished Build",
    description: (
      <>
        With the FRC game containing a seesaw-like field element and agressive
        robot-robot contact, the team prioritized a robot with a low center of
        gravity and good protection of critical components such as sensors and
        control circuits. The design of the robot was decided by the students
        with the mentors providing necessary assistance to turn their ideas into
        a CAD model. This model was made in Fusion 360 and is comprised of a
        main 2-stage elevator, a slider, and an intake.
      </>
    ),

    slides: [
      {
        description: "",

        src: require("../assets/FRC_Robot_Standalone.jpg"),
      },
    ],
  },
  {
    id: 2,
    imageFloat: "right",
    maxWidth: 700,
    cardHeader: "Robot Balancing",
    description: (
      <>
        The endgame of each match involves the two alliances trying to have as
        many robots as they can balance on the "charge station", a see-saw like
        platform. Teams score points for getting onto the charge station and
        extra points for successfully balancing on the charge station.
      </>
    ),

    slides: [
      {
        description: "",

        src: require("../assets/FRC_Robot_Ramp.jpg"),
      },
    ],
  },
];
