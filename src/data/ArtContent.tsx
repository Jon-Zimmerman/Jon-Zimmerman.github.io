import React from "react";
declare var require: any;
export const title = "Art";
export const intro = (
  <>
    In addition to my many robotics and prototyping projects I enjoy making
    things such as art and board games. Below are some of my favorite things I
    have created.
  </>
);

export const sections = [
  {
    id: 0,
    imageFloat: "left",
    imageHeight: 350,
    cardHeader: "Photogrammetry of an Actual Island ",
    description: (
      <>
        This island model was captured with data from an online terrain mapping
        service. It was 3d printed, painted, and covered in simulation grass.{" "}
      </>
    ),

    image: [
      {
        description: "",

        src: require("../assets/DSC_0148.jpg"),
      },
    ],
  },
  {
    id: 0,
    imageFloat: "right",
    imageHeight: 525,
    cardHeader: "Falcon Heavy Rocket Launch ",
    description: (
      <>
        I created my own CAD model of the Falcon Heavy rocket taking off from
        Kennedy Space Center Launch Complex 39A. This model includes LED lights
        inside the smoke trail to enhance the effect of the rocket taking off.
      </>
    ),

    image: [
      {
        description: " ",

        src: require("../assets/rocket launch edit.jpg"),
      },
    ],
  },

  {
    id: 2,
    imageFloat: "left",
    imageHeight: 575,
    cardHeader: "Lighthouse on A Rock Cliff",
    description: (
      <>
        This piece is a light house atop a rocky cliff. It was made with 3d
        printing, painting, and a resin pour for the water. It has lights inside
        the cloud and a WiFi enabled microcontroller that sends animations to
        the led strip that are based on the live weather.
      </>
    ),

    image: [
      {
        description: " ",

        src: require("../assets/lighthouse.jpg"),
      },
    ],
  },
];
