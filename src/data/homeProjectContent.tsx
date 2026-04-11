import React from "react";
declare var require: any;
export const projectContent = [
  {
    id: 1,
    title: "FRC Robotics Mentor",
    description: (
      <>
        
         I am the <strong> lead engineering mentor</strong> for Team 226 Hammerheads, a Troy Michigan
    based high school robotics team. They compete in the FIRST Robotics Competition, an international
        competition serving more than <strong>3,000 teams and 54,000 students.</strong>
        <br /><br />
          As the lead technical mentor I lead the students through strategy, design, fabrication,
          assembly, wiring, programming, and testing.{" "}
        By developing strong engineering skills in students, I've helped them to be <strong>Division Winners at the Michigan State Championship</strong> and qualify for
        the <strong>World Championship</strong> for the past 3 years.{" "}
      </>
    ),

    skills: [
      "Leadership",
      "Mechanical Design",
      "Onshape",
      "Electrical",
      "Vision Systems",
      "Java",
    ],
    slides: [
      {
        description:
          "Team 226's Robot CAD for the 2026 FRC Game \"Rebuilt\" made in Onshape.",

        src: require("../assets/226/Triton_CAD.jpg"),
      },
      {
        description:
          "Team 226 Robot on field during a match.",

        src: require("../assets/226/2026_Lake_City_2.jpg"),
      },      
      {
        description:
          "Team 226's robot 'Triton' volleying balls into the goal to score points.",
        src: require("../assets/226/W_2.jpg"),
      },
      {
        description: "Team 226 and alliance members set event high score of 568 points.",
        type: "custom-slide",
        src: "https://www.youtube.com/watch?v=yISE-72afTE",
        videoId: "yISE-72afTE",
      },

      {
        description: "Team 226's robot 'Triton' volleying balls into the goal to score points.",
        src: require("../assets/226/Triton_Volleying.jpg"),
      },      

      {
        description:
          "The vision system allows the robot to see april tags around the field for localization.",
        src: require("../assets/226/vision_system.gif"),
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
    title: "VLA Enabled Robot Arm",
    description:
      "A low cost robot arm for experimenting with VLA models. The arm is 3D printed and makes use of cost effective closed-loop servos. The robot arm is trained via a leader follower setup. ",
    skills: ["VLAs", "Onshape", "Mechanical Design", "Design for 3D Printing"],
    slides: [
      {
        description: "Low Cost VLA Enabled Robot Arm",
        src: require("../assets/LCRA/LCRA_1.png"),
      },
      {
        description: "Low Cost VLA Enabled Robot Arm",
        src: require("../assets/LCRA/LCRA_3.jpg"),
      },
            {
        description: "Progress on arm assembly.",
        src: require("../assets/LCRA/LCRA_5.jpg"),
      },

    ],
    links: {
      url: "/",
    },
  },
  {
    id: 4,
    title: "Robo Dog V2",
    description: (
      <>
        A significantly larger and more advanced version of the original Robo Dog. The robot features 12 DOF, a more powerful onboard computer, and a more robust design overall. The robot is designed to be relatively afforable and can mostly be made with 3D printing and laser cutting.
      </>
    ),
    skills: ["Solidworks", "3D Printing", "Electronics", "ROS", "Brushless Motors"],
    slides: [
      {
        description:
          "Nearly Complete Solidworks design of robot with fully detailed legs, sensors, motors, and body.",
        src: require("../assets/Robodog/dog_1.png"),
      },
      {
        description:
          "Cutaway showing internals and drive motor packaging.",
        src: require("../assets/Robodog/dog_2.png"),
      },
      {
        description:
          "Electronics internals featuring a raspberry pi for motor control, a Jetson Nano for vision processing, a custom battery pack, and vision sensors.",
        src: require("../assets/Robodog/dog_3.png"),
      },
      {
        description:
          "Generatively designed components for mounting the front sensor package, and embedded heat sink for motor drivers.",
        src: require("../assets/Robodog/dog_4.png"),
      },
      {
        description:
          "Progress on leg assembly. The leg features a unique linkage design by using a large pitch lead screw, achieving a significant reduction in the size of the leg while maintaining a large range of motion and the ability to back drive the mechanism.",
        src: require("../assets/Robodog/Robodog_Leg_mech.jpg"),
      },
            {
        description:
          "Progress on leg motor drive unit.",
        src: require("../assets/Robodog/Robodog_Motor.jpg"),
      },
    ],
    links: {
      url: "/",
    },
  },
  {
    id: 5,
    title: "Low-Cost Autonomous Navigation Platform",
    description:
      "A product concept design and working core technology prototype for indoor delivery in large buildings such as apartments and office spaces, reducing person to person contact and increasing delivery speed. The robot runs on ROS (coded in C++ and Python) and uses LIDAR plus odometry data for SLAM based navigation",
    skills: ["ROS", "C++", "Arduino", "SLAM"],
    slides: [
      {
        description: "HopperBot Delivery Robot Concept (3D Render)",
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
    id: 6,
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
    id: 7,
    title: "Smart 3D Printer Enclosure",
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
        description: "3D printer enclosure custom electronics and fan",
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
    id: 8,
    title: "Robo Dog V1",
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
