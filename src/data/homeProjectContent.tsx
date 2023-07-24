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
        description: "Team 5901 and alliance members becoming State Division Champion",
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
        in the robots hand small granules of material are contained in a
        flexible gripper and are jammed around an object when suction is applied
        creating a significantly better grip than conventional grippers
        especially for flat, delicate, or thin walled items.
      </>
    ),

    skills: ["C++", "OpenCV", "3D-Printing", "Solidworks", "Electrical Design"],
    slides: [
      {
        description: "Anigram Robot Arm",
        src: require("../assets/AniGram_Arm_Frame.png"),
      },

      {
        description: "Anigram Robot Arm Finished",
        src: require("../assets/AniGram_Arm_Finished.jpg"),
      },
      {
        type: "custom-slide",
        src: "https://www.youtube.com/watch?v=Ikw7pUl9Z5E",
        videoId: "Ikw7pUl9Z5E",
      },
      {
        description: "Robot Hand with Granular Jamming Areas",
        src: require("../assets/AniGram_Arm_Hand.jpg"),
      },
      {
        description: "Robot Hand Details",
        src: require("../assets/AniGram_Arm_Hand_Details.JPG"),
      },
      {
        description: "Robot Arm CAD",
        src: require("../assets/AniGram_Arm_Exploded.jpg"),
      },
      {
        description: "Robot Arm FEA on Elbow Section",
        src: require("../assets/AniGram_Arm_FEA.jpg"),
      },
      {
        description: "Robot Arm Hand Interface Belt Setup",
        src: require("../assets/AniGram_Arm_Belt.jpg"),
      },

      {
        description: "Robot Arm Vision System",
        src: require("../assets/AniGram_Arm_Vision_System.JPG"),
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
        type: "custom-slide",
        src: "https://www.youtube.com/watch?v=KSGEKOYDzTs",
        videoId: "KSGEKOYDzTs",
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
    description:
      "A fully operational and compact CNC machine capable of 3 axis machining. It runs CNCjs which enables remote file upload and management through a smartphone or computer. I modeled it in Solidworks, 3D printed, assembled, and learned CAM tool path creation.",
    skills: ["CAD", "Electronics", "Mechanism Design", "CAM"],
    slides: [
      {
        description: "Custom CNC CAD",
        src: require("../assets/CNC_Version_2.PNG"),
      },
      {
        description: "Custom CNC Toolpath",
        src: require("../assets/CNC_Toolpath.webp"),
      },
      {
        type: "custom-slide",
        src: "https://www.youtube.com/watch?v=0xI43rbJjB0",
        videoId: "0xI43rbJjB0",
      },
      {
        description: 'Custom CNC mountain cut from a 2" piece of wood',
        src: require("../assets/mountain cnc.jpg"),
      },
    ],
    links: {
      url: "/custom-cnc",
    },
  },
  {
    id: 5,
    title: "3D Printer Enclosure",
    description: (
      <>
        I built a custom{" "}
        <strong>
          Smart 3D Printer Enclosure with a variable speed fume extraction fan,
          temperature and humidity tracking, and a custom plugin for Ocotprint,
          a remote web-based management tool.
        </strong>{" "}
        The fan speed is controlled by a PID loop with sensor input from the
        enclosure temperature sensor. This maintains the enclosure at an optimal
        temperature while removing VOCs and ultrafine particles and venting them
        to the outside.
      </>
    ),
    skills: ["CAD", "3D Printing", "Electronics", "Python"],
    slides: [
      {
        description: "3D printer rendering of front",
        src: require("../assets/Printer_Render.png"),
      },      
      {
        description: "3D printer rendering of fan system",
        src: require("../assets/Fan_Render.JPG"),
      },
         {
        description: "3D printer enclosure front",
        src: require("../assets/Printer_Front.jpg"),
      },
      {
        description: "3D printer enclosure custom electronics and fan.",
        src: require("../assets/Printer_Rear.jpg"),
      },
      {
        description: "3D printer enclosure plugin",
        src: require("../assets/Printer_Plugin.jpg"),
      },
    ],
    links: {
      url: "/smart-printer",
    },
  },
  {
    id: 6,
    title: "Walking Quadruped",
    description: (
      <>
        A small walking quadruped inspired by Spot from Boston Dynamics. The
        compact design created many design challenges to overcome. The robot was
        designed to meet the available manufacturing methods and was formed
        almost entirely with a 3D printer with some parts coming from my custom
        built CNC machine.
      </>
    ),
    skills: ["CAD", "3D Printing", "Electronics", "Arduino", "C/C++"],
    slides: [
      {
        description:
          "Solidworks design of robot with fully detailed legs, sensors, motors, and body.",
        src: require("../assets/Spot_Micro_CAD.PNG"),
      },
      {
        description:
          "Close up of leg design with secondary motor 4 bar to allow for motor to be more concealed and protected.",
        src: require("../assets/Spot_Micro_Leg.PNG"),
      },
      {
        description:
          "This part was cut on my custom build CNC to ensire precise hole aligment and overall shape to fit within the 3d printed shell.",
        src: require("../assets/CNC_Finished_Part.jpg"),
      },
      {
        description:
          "The robot was printed out of PLA and features 8 servos and two ultrasonic sensors for basic obstacle avoidance.",
        src: require("../assets/Spot_Micro_Real.jpg"),
      },
    ],
    links: {
      url: "/spot-micro",
    },
  },
];
