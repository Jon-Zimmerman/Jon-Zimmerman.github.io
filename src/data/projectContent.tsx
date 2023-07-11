import React from "react";
declare var require: any;
export const projectContent = [
  {
    id: 1,
    title: "FRC Robotics Mentor",
    description: (
      <>
        <strong>
          I am the lead technical mentor for Team 5901, the Electric Eels, a
          Detroit based high school robotics team.
        </strong>
        They compete in the FIRST Robotics Competition, an internation
        competition serving more than 3,000 teams and 54,000 students.
        <strong>
          {" "}
          As the lead technical mentor I led the students through design,
          manufacturing, wiring, programming, and testing.{" "}
        </strong>
        Additionally, I acted as the drive team coach and led the team to become
        a <strong>Division Winner at the State Championship</strong> and attend
        the <strong>World Championship</strong> for the first time in their
        school's history.{" "}
      </>
    ),

    skills: [
      "Leadership",
      "Mechanical Design",
      "CAD",
      "Electrical",
      "Testing",
      "Java",
    ],
    slides: [
      {
        description:
          "Team 5901, the Electric Eels, placing a game piece during the FRC World Championship.",

        src: require("../assets/FRC_Robot_Championship.jpg"),
      },
      {
        description:
          "Team 5901 and mentors at the robot pit during competition.",

        src: require("../assets/FRC_Robot_Championship_Team.jpg"),
      },
      {
        type: "custom-slide",
        src: "https://www.youtube.com/embed/ewtG-txRmU0",
        videoId: "ewtG-txRmU0",
      },

      {
        description: "Team 5901 showing the robot to the judges.",
        src: require("../assets/FRC_Robot_Judging.png"),
      },
      {
        description:
          "The robot CAD created in Fusion 360 with a representation of the scoring positions.",
        src: require("../assets/FRC_Robot_CAD.jpg"),
      },
      {
        description:
          "The robot docking on the charge station at the end of the match for extra points.",
        src: require("../assets/FRC_Robot_Ramp.jpg"),
      },
    ],

    links: {
      url: "/first-robotics-mentor",
    },
  },
  {
    id: 2,
    title: "Robotics Research Granular Jamming Arm",
    description: (
      <>
        For my undergraduate capstone project our group created a
        <strong>
          {" "}
          7-DOF robot to experiment with implementing granular jamming into the
          hand of a anthropomorphic arm for use as an interactive animatronic or
          general purpose humanoid robot.
        </strong>{" "}
        Granular jamming utilizies small granules of material in a flexible
        gripper such that when suction is applied it "jams" the granules around
        an object creating a significantly better grip than conventional robotic
        grippers have especially for flat, delicate, or thin walled items.
      </>
    ),

    skills: ["C++", "OpenCV", "3D-Printing", "Solidworks", "Electrical Design"],
    slides: [
      {
        description: "Robot Arm",
        src: require("../assets/AniGram_Arm_Frame.png"),
      },
      {
        description: "Robot Arm CAD",
        src: require("../assets/AniGram_Arm_Exploded.jpg"),
      },
    ],
    links: {
      url: "/granular-jamming-arm",
    },
  },
  {
    id: 3,
    title: "Low-Cost Autonomous Navigation Platform",
    description:
      "A product concept design and working core technology prototype for indoor delivery in large buildings such as apartments and office spaces, reducing person to person contact and increasing delivery speed. The robot runs on ROS (coded in C++ and Python) and uses LIDAR plus odometry data for SLAM based navigation",
    skills: ["ROS", "C++", "Arduino", "SLAM"],
    slides: [
      {
        description: "HopperBot Delivery Robot Concept",
        src: require("../assets/HopperBot_Render.webp"),
      },
      {
        description: "HopperBot Tech",
        src: require("../assets/HopperBot_Tech.webp"),
      },
      {
        description: "HopperBot Lidar",
        src: require("../assets/HopperBot_Lidar.webp"),
      },
      {
        description: "HopperBot Electrical",
        src: require("../assets/HopperBot_Electrical.webp"),
      },
    ],
    links: {
      url: "/hopperbot",
    },
  },
  {
    id: 4,
    title: "Custom CNC",
    description: "A fully operational and compact CNC machine capable of 3 axis machining. It runs CNCjs which enables remote file upload and management through a smartphone or computer. I modeled it in Solidworks, 3D printed, assembled, and learned CAM tool path creation.",
    skills: ["CAD", "Electronics"],
    slides: [
      {
        description: "Custom CNC CAD",
        src: require("../assets/CNC_Version_2.PNG"),
      },
      {
        description: "Custom CNC Toolpath",
        src: require("../assets/CNC_Toolpath.webp"),
      },
    ],
    links: {
      url: "/custom-cnc",
    },
  },  
  {
    id: 5,
    title: "3D Printer Enclosure",
    description: "A fully operational and compact CNC machine capable of 3 axis machining. It runs CNCjs which enables remote file upload and management through a smartphone or computer. I modeled it in Solidworks, 3D printed, assembled, and learned CAM tool path creation.",
    skills: ["CAD", "Electronics"],
    slides: [
      {
        description: "3D Printer Enclosure",
        src: require("../assets/Printer_Front.jpg"),
      },
      {
        description: "3D Printer Enclosure Rear",
        src: require("../assets/Printer_Rear.jpg"),
      },
    ],
    links: {
      url: "/3d-printer",
    },
  },
];
