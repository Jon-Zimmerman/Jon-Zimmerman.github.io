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
    maxWidth: 400,
    cardHeader: "Neon Light of Gingerman Raceway ",
    description: (
      <>
        This neon light models the track layout of Gingerman Raceway, a popular
        raceway for motorsports enthusiasts. It is made of special LED strips
        with a 3d printed track for the LED strip to sit in. The track is formed
        from 4 pieces and has special interlocking geometry, so glue isnt
        needed.{" "}
      </>
    ),

    slides: [
      {
        description: "",

        src: require("../assets/Racetrack.jpg"),
      },
    ],
  },
  {
    id: 0,
    imageFloat: "right",
    maxWidth: 550,
    cardHeader: "3D Chicago Skyline Wall Art ",
    description: (
      <>
        The skyline embedded in the lettering of Chicago includes all of my
        favorite landmarks of the city. I created the model of this piece in
        Fusion 360 before laser cutting it out of wood and painting it.
        Additionally it has lighting to illuminate the letters from behind.
      </>
    ),

    slides: [
      {
        description: "",

        src: require("../assets/Chicago.jpg"),
      },
    ],
  },
  {
    id: 0,
    imageFloat: "left",
    maxWidth: 500,
    cardHeader: "Photogrammetry of an Actual Island ",
    description: (
      <>
        This island model was captured with data from an online terrain mapping
        service. It was 3d printed, painted, and covered in modeling grass.{" "}
      </>
    ),

    slides: [
      {
        description: "",

        src: require("../assets/DSC_0148.jpg"),
      },
    ],
  },
  {
    id: 0,
    imageFloat: "right",
    maxWidth: 400,
    cardHeader: "Falcon Heavy Rocket Launch ",
    description: (
      <>
        I created my own CAD model of the Falcon Heavy rocket taking off from
        Kennedy Space Center Launch Complex 39A. This model includes LED lights
        inside the smoke trail to enhance the effect of the rocket taking off.
      </>
    ),

    slides: [
      {
        description: "",

        src: require("../assets/rocket launch edit.jpg"),
      },
    ],
  },

  {
    id: 2,
    imageFloat: "left",
    maxWidth: 400,
    cardHeader: "Lighthouse on A Rock Cliff",
    description: (
      <>
        This piece is a light house atop a rocky cliff. It was made with 3d
        printing, painting, and a resin pour for the water. It has lights inside
        the cloud and a WiFi enabled microcontroller that sends animations to
        the led strip that are based on the live weather.
      </>
    ),

    slides: [
      {
        description: "",

        src: require("../assets/lighthouse.jpg"),
      },      
      {
        description: "",

        src: require("../assets/lighthouse 2.jpg"),
      },
    ],
  },
];
