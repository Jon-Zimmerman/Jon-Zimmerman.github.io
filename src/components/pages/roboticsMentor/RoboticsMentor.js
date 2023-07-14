import React from "react";
import Title from "../../ui/pageTitle/PageTitle.js";
import PageCard from "../../ui/pageCard/PageCard.js";

import { styles } from "./RoboticsMentor-style";
import useClasses from "../../useClasses.js";
import {
  RoboticsMentorTitle,
  RoboticsMentorIntro,
  RoboticsMentorSections,
} from "./RoboticsMentorContent.tsx";
import { Typography, Container } from "@mui/material";
function RoboticsMentor() {
  const classes = useClasses(styles);
  return (
    <Container>
      <div>
        {" "}
        <Typography  className={classes.title}>{RoboticsMentorTitle}</Typography>
        <Typography className={classes.intro}>{RoboticsMentorIntro} </Typography>
        {RoboticsMentorSections.map((section) => (
          <PageCard section={section} />
        ))}
      </div>
    </Container>
  );
}
export default RoboticsMentor;
