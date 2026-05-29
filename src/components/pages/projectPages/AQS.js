import React from "react";
import PageCard from "../../ui/pageCard/PageCard.js";
import { styles } from "../../ui/pageTitle/pageTitle-style.js";
import useClasses from "../../useClasses.js";
import {
  title,
  intro,
  sections,
} from "../../../data/AQSContent.tsx";
import { Typography, Container } from "@mui/material";

function AQS() {
  const classes = useClasses(styles);
  return (
    <Container>
      <div>
        <Typography className={classes.title}>{title}</Typography>
        <Typography className={classes.intro}>{intro}</Typography>
        {sections.map((section) => (
          <PageCard section={section} key={section.id} />
        ))}
      </div>
    </Container>
  );
}

export default AQS;
