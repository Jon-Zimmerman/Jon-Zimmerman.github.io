import React from "react";
declare var require: any;

export const title = "Robo Dog V2";

export const intro = (
  <>
    A significantly larger and more advanced version of my original Robo Dog.
    The robot features <strong>12 degrees of freedom</strong>, a more powerful
    onboard computer, and a more robust overall design. Built to be relatively
    affordable, the robot can be constructed mostly with 3D printing and laser
    cutting, making it accessible for enthusiasts and researchers.
  </>
);

export const sections = [
  {
    id: 0,
    imageFloat: "right",
    maxWidth: 550,
    cardHeader: "Design & CAD Modeling",
    description: (
      <>
        The Robo Dog V2 was  designed in Solidworks with
        detail including legs, sensors, motors, and the body structure. The
        design emphasizes manufacturability using 3D printing and laser cutting
        while maintaining structural integrity and functionality. Each leg
        features a unique linkage mechanism that achieves significant reduction
        in leg size while maintaining a large range of motion and the ability to
        back drive the mechanism using a large pitch lead screw.
      </>
    ),
    slides: [
      {
        description:
          "Complete Solidworks design of robot with fully detailed legs, sensors, motors, and body.",
        src: require("../assets/Robodog/Robodog_CAD.jpg"),
      },
      {
        description: "Cutaway showing internals and drive motor packaging.",
        src: require("../assets/Robodog/dog_2.png"),
      },
      {
        description:
          "Generatively designed components for mounting the front sensor package, and embedded heat sink for motor drivers.",
        src: require("../assets/Robodog/dog_4.png"),
      },
    ],
  },
  {
    id: 1,
    imageFloat: "left",
    maxWidth: 550,
    cardHeader: "Electronics & Control Systems",
    description: (
      <>
        The electronics system features a Raspberry Pi for motor control, a
        Jetson Nano for vision processing, custom battery pack, and multiple
        vision sensors. The motor control architecture uses brushless motors
        with integrated drivers for each leg, providing precise control of the
        robot's movement. The dual-computer architecture allows for
        simultaneous motor control and autonomous vision-based decision making.
      </>
    ),
    slides: [
      {
        description:
          "Electronics internals featuring a Raspberry Pi for motor control, a Jetson Nano for vision processing, a custom battery pack, and vision sensors.",
        src: require("../assets/Robodog/Robodog_electrical.jpg"),
      },
    ],
  },
  {
    id: 2,
    imageFloat: "right",
    maxWidth: 550,
    cardHeader: "Leg Mechanism & Drive System",
    description: (
      <>
        Each leg uses an innovative lead screw-based linkage design that
        achieves high reduction ratio in a compact form factor. The legs can
        achieve large range of motion while maintaining low profile for storage
        and transport. The motor drive units are modular and can be easily
        assembled or replaced, making the robot maintainable and upgradeable.
      </>
    ),
    slides: [
      {
        description:
          "Progress on leg assembly. The leg features a unique linkage design by using a large pitch lead screw, achieving a significant reduction in the size of the leg while maintaining a large range of motion and the ability to back drive the mechanism.",
        src: require("../assets/Robodog/Robodog_Leg_mech.jpg"),
      },
      {
        description: "Progress on leg motor drive unit.",
        src: require("../assets/Robodog/Robodog_Motor.jpg"),
      },
    ],
  },
];
