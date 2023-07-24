import React from "react";
declare var require: any;
export const title = "Custom CNC";
export const intro = (
  <>
    I designed a fully operational and compact CNC machine capable of 3 axis
    machining. It runs CNCjs which enables remote file upload and management
    through a smartphone or computer. I modeled it in Solidworks, 3D printed,
    assembled, and learned CAM tool path creation.
  </>
);

export const sections = [
  {
    id: 0,
    imageFloat: "left",
    maxWidth: 550,
    cardHeader: "Finished CNC Design ",
    description: (
      <>
        I designed the CNC in Solidworks utilizing many parts I already had to
        minimize cost. I designed a series of strong but lightweight
        3D-printable brackets to assemble the finished product.{" "}
      </>
    ),

    slides: [
      {
        description: "",

        src: require("../assets/CNC_Version_2.PNG"),
      },
    ],
  },
  {
    id: 0,
    imageFloat: "right",
    maxWidth: 325,
    cardHeader: "Z Carriage ",
    description: (
      <>
        The z carriage moves the spindle {"("}in this case a Dremel Rotary Tool{" "}
        {")"}, vertically to achieve different cut depths. The CNC can cut
        depths up to 2" with the right endmill.{" "}
      </>
    ),

    slides: [
      {
        description: "",

        src: require("../assets/CNC Z Carriage.jpg"),
      },
    ],
  },

  {
    id: 1,
    imageFloat: "left",
    maxWidth: 300,
    cardHeader: "Motion Controller ",
    description: (
      <>
        I use CNC.js on a Raspberry Pi for Gcode parsing and an Arduino with a
        stepper motor attachment board for motion control.
      </>
    ),

    slides: [
      {
        description: "",

        src: require("../assets/CNC_Rasp_Pi.jpg"),
      },
    ],
  },
  {
    id: 0,
    imageFloat: "right",
    maxWidth: 500,
    cardHeader: "CAM Toolpaths ",
    description: (
      <>
        I learned CAM tool path creation in fusion360 to quickly create parts
        cheaply or in cases where 3D printing doesn't make as much sense.
      </>
    ),

    slides: [
      {
        description: "",

        src: require("../assets/CNC_Toolpath.webp"),
      },
    ],
  },
  {
    id: 2,
    imageFloat: "left",
    maxWidth: 600,
    cardHeader: "Milling",
    description: (
      <>
        This video shows the milling process in action on a test piece of wood
        carving a mountain shape.
      </>
    ),

    slides: [
      {
        type: "custom-slide",
        src: "https://www.youtube.com/watch?v=0xI43rbJjB0",
        videoId: "0xI43rbJjB0",
      },
    ],
  },
  {
    id: 2,
    imageFloat: "right",
    maxWidth: 500,
    cardHeader: "Finished Part",
    description: (
      <>
        This part is the finished test part I created which is a small mountain
        range.
      </>
    ),

    slides: [
      {
        description: " ",

        src: require("../assets/mountain cnc.jpg"),
      },
    ],
  },
  {
    id: 2,
    imageFloat: "left",
    maxWidth: 600,
    cardHeader: "Finished Part for Quadruped Robot",
    description: (
      <>
        The main structural plate for my quadruped robot would be very close to
        the size limits of my 3D printer and likely have issues with warping and
        print speed. CNC machining took 10 minutes and less than $1 in material.
      </>
    ),

    slides: [
      {
        description: " ",

        src: require("../assets/CNC_Finished_Part.jpg"),
      },
    ],
  },
];
