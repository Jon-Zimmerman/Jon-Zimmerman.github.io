import { styles } from "./AnimatedName-style";
import useClasses from "../../../../../components/useClasses.js";

//import { useTheme } from '@emotion/react';
import { Typography } from "@mui/material";

import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material/styles";
import React, { useState } from "react";
import { motion } from "framer-motion";
//import AnimatedText from "./AnimatedText";

const Wrapper = (props) => {
  // We'll do this to prevent wrapping of words using CSS
  return <span className="word-wrapper">{props.children}</span>;
};

// Map API "type" vaules to JSX tag names
const tagMap = {
  paragraph: "p",
  name1: "h1",
  name2: "h1",
};
const AnimatedCharacters = (props) => {
  let theme = createTheme();
  theme = responsiveFontSizes(theme);

  // Framer Motion variant object, for controlling animation
  const item = {
    hidden: {
      //y: "100%",
      opacity: "0%",
      transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 1.2 },
    },
    visible: {
      //y: 0,
      opacity: "100%",
      transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 1.0 },
    },
  };

  //  Split each word of props.text into an array
  const splitWords = props.text.split(" ");

  // Create storage array
  const words = [];

  // Push each word into words array
  for (const [, item] of splitWords.entries()) {
    words.push(item.split(""));
  }

  // Add a space ("\u00A0") to the end of each word
  words.map((word) => {
    return word.push("\u00A0");
  });

  // Get the tag name from tagMap
  const Tag = tagMap[props.type];

  return (
    <Tag style={{ margin: "0" }}>
      {words.map((word, index) => {
        return (
          // Wrap each word in the Wrapper component
          <Wrapper style={{ height: "100%" }} key={index}>
            {words[index].flat().map((element, index) => {
              return (
                <span
                  style={{
                    overflow: "hidden",
                    display: "inline-block",
                    margin: 0,
                  }}
                  key={index}
                >
                  <motion.span
                    style={{ display: "inline-block", margin: 0 }}
                    variants={item}
                  >
                    <ThemeProvider theme={theme}>
                      <Typography
                        variant="h1"
                        style={{
                          display: "inline-block",
                          margin: 0,
                          fontWeight: "500",
                        }}
                        variants={item}

                        //className={classes.h1}
                      >
                        {element}
                      </Typography>
                    </ThemeProvider>
                  </motion.span>
                </span>
              );
            })}
          </Wrapper>
        );
      })}
    </Tag>
  );
};

const AnimatedName = () => {
  const classes = useClasses(styles);

  const [replay] = useState(true);
  // Placeholder text data, as if from API
  const placeholderText = [
    { type: "name1", text: "Jon" },
    { type: "name2", text: "Zimmerman" },
  ];
  const container = {
    visible: {
      transition: {
        staggerChildren: 0.05,
      },
    },
  };
  return (
    <div className={classes.wrapper}>
      <motion.div
        className={classes.container}
        initial="hidden"
        // animate="visible"
        animate={replay ? "visible" : "hidden"}
        variants={container}
      >
        <div className={classes.wordWrapper}>
          {placeholderText.map((item, index) => {
            return <AnimatedCharacters {...item} key={index} />;
          })}
        </div>
      </motion.div>
    </div>
  );
};

export default AnimatedName;
