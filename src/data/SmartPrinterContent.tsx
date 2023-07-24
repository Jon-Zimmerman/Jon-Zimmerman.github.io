import React from "react";
declare var require: any;
export const title = "Smart 3D Printer Enclosure";
export const intro = (
  <>
    I built a custom Smart 3D Printer Enclosure with a variable speed fume
    extraction fan, temperature and humidity tracking, and a custom plugin for
    Ocotprint, a remote web-based management tool. The fan speed is controlled
    by a PID loop with sensor input from the enclosure temperature sensor. This
    maintains the enclosure at an optimal temperature to improve print quality
    while also removing VOCs and ultrafine particles and venting them to the
    outside.
  </>
);

export const sections = [
  {
    id: 0,
    imageFloat: "left",
    maxWidth: 650,
    cardHeader: "CAD Model ",
    description: (
      <>
        I created the model of the enclosure in Fusion 360. This design was
        created to be close to air tight, easy to disassemble, and aesthetically
        appealing.
      </>
    ),

    slides: [
      {
        description: "",

        src: require("../assets/Printer_Render.png"),
      },
    ],
  },
  {
    id: 1,
    imageFloat: "right",
    maxWidth: 650,
    cardHeader: "Fan and Vent CAD Model ",
    description: (
      <>
        The fan for this system removes fumes and ultrafine particles via an
        attached flexible ducting, while also acting as part of a closed loop
        temperature control system. All but 2 of the pieces shown can be removed
        without tools thanks to clever sliding and locking geometry features.
        This makes it much easier to transport the system.
      </>
    ),

    slides: [
      {
        description: "",

        src: require("../assets/Fan_Render.JPG"),
      },
    ],
  },
  {
    id: 2,
    imageFloat: "left",
    maxWidth: 500,
    cardHeader: "Finished Build ",
    description: (
      <>
        The front of the enclosure with clear acrylic doors and ambient
        lighting. The fan located at the rear of the enclosure has an LED ring
        that gives quick status information about the enclosure, namely it shows
        a blue spinning animation when cooling and it shows a green color when
        within a tolerance of the set point.
      </>
    ),

    slides: [
      {
        description: "",

        src: require("../assets/Printer_Front.jpg"),
      },
    ],
  },
  {
    id: 3,
    imageFloat: "right",
    maxWidth: 400,
    cardHeader: "Electronics ",
    description: (
      <>
        The printer and enclosure are controlled by a Raspberry Pi 3 running
        OctoPi, an open source 3D printing software. I created a custom
        electronics board that connects an arduino to the Raspberry Pi, power,
        the fan, sensors, and the LED strip in a very small form factor. I also
        created custom parts to mount all the components and adapt the fan to
        the exhaust tubing.
      </>
    ),

    slides: [
      {
        description: " ",

        src: require("../assets/Printer_Rear.jpg"),
      },
    ],
  },
  {
    id: 4,
    imageFloat: "left",
    maxWidth: 400,
    cardHeader: "Custom Python Plugin ",
    description: (
      <>
        I wrote a custom python plugin to connect the enclosure with the OctoPi
        API. This allows for access to the controls of the enclosure through the
        OcotPi web portal. In combination with remote camera monitoring its
        possible to adjust settings from any internet connected device to
        optimize the print in real time. This system includes control over the
        interior ambient leds using a pre-filled color pallet, control over the
        target setpoint and information about the current temperature, fan
        speed, and humidity. These values are retrieved over a custom serial
        interface from an Arduino.
      </>
    ),

    slides: [
      {
        description: "",

        src: require("../assets/Printer_Plugin.jpg"),
      },
    ],
  },
];
