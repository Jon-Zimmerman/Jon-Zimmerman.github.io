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
    imageHeight: 350,
    cardHeader: "Finished CNC Design ",
    description: (
      <>
        I designed the CNC in Solidworks utilizing many parts I already had to
        minimize cost. I designed a series of strong but lightweight
        3D-printable brackets to assemble the finished product.{" "}
      </>
    ),

    image: [
      {
        description: "Finished CNC Design ",

        src: require("../assets/CNC_Version_2.PNG"),
      },
    ],
  },
  {
    id: 0,
    imageFloat: "right",
    imageHeight: 500,
    cardHeader: "CAM Toolpaths ",
    description: (
      <>
        I learned CAM tool path creation in fusion360 to quickly create parts
        cheaply or in cases where 3D printing doesn't make as much sense.
      </>
    ),

    image: [
      {
        description: "CAM Toolpaths ",

        src: require("../assets/CNC_Toolpath.webp"),
      },
    ],
  },
  {
    id: 1,
    imageFloat: "left",
    imageHeight: 500,
    cardHeader: "Motion Controller ",
    description: (
      <>
        I use CNC.js on a Raspberry Pi for Gcode parsing and an Arduino with a
        stepper motor attachment board for motion control.
      </>
    ),

    image: [
      {
        description: "Motion Controller",

        src: require("../assets/CNC_Rasp_Pi.jpg"),
      },
    ],
  },
  {
    id: 2,
    imageFloat: "right",
    imageHeight: 550,
    cardHeader: "Finished Part",
    description: (
      <>
        The main structural plate for my quadruped robot would be very close to
        the size limits of my 3D printer and likely have issues with warping and
        print speed. CNC machining took 10 minutes and less than $1 in material.
      </>
    ),

    image: [
      {
        description: " ",

        src: require("../assets/CNC_Finished_Part.jpg"),
      },
    ],
  },
];
