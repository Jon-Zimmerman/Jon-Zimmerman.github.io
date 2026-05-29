import React from "react";
declare var require: any;

export const title = "Air Quality Sensor (Injection Molding Design Practice)";

export const intro = (
  <>
    "Airwave" is a comprehensive environmental monitoring device that measures air quality
    parameters including <strong>PM2.5 and PM10 particulate matter</strong>,{" "}
    <strong>volatile organic compounds (VOCs)</strong>, along with ambient{" "}
    <strong>temperature, pressure, and humidity</strong>. The sensor includes all of these data streams on a easy to read display in an aesthetically pleasing design to easily understand indoor or outdoor air quality.

  </>
);

export const sections = [
  {
    id: 0,
    imageFloat: "right",
    maxWidth: 500,
    cardHeader: "Hardware Design & Sensor Integration",
    description: (
      <>
        The system features a PM2.5/PM10 particulate matter sensor for measuring fine dust and coarse particles,
        a gas sensor for detecting volatile organic compounds, and a sensor for measuring temperature, pressure,
        and humidity. The sensors communicate via I2C/SPI protocols.
      </>
    ),
    slides: [
      {
        description: "Complete AQS assembly with integrated sensors",
        src: require("../assets/AQS/AQS_Main.jpg"),
      },
      {
        description: "Rear view of sensor enclosure",
        src: require("../assets/AQS/AQS_back.jpg"),
      },
      {
        description: "Rear shell of sensor enclosure",
        src: require("../assets/AQS/AQS_rear_shell.jpg"),
      },
      {
        description: "Exploded view showing sensor arrangement",
        src: require("../assets/AQS/AQS_exploded.jpg"),
      },
    ],
  },
  {
    id: 1,
    imageFloat: "left",
    maxWidth: 500,
    cardHeader: "Draft Angle Visualization",
    description: (
      <>
        The sensor is designed with a focus on manufacturability, including considerations for 3D printing and injection molding. The design incorporates appropriate draft angles and other injection molding design techniques to ensure ease of manufacture and stiffness in the design.
      </>
    ),
    slides: [
      {
        description: "Draft Angle Visualization showing design for manufacturability",
        src: require("../assets/AQS/AQS_draft_analysis.jpg"),
      },
    ],
  },
];
