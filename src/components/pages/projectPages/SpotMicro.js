import React from "react";
import PageCard from "../../ui/pageCard/PageCard.js";
import { styles } from "../../ui/pageTitle/pageTitle-style.js";
import useClasses from "../../useClasses.js";
import {
  title,
  intro,
  sections,
} from "../../../data/SpotMicroContent.tsx";
import { Typography, Container } from "@mui/material";
function SpotMicro() {
  const classes = useClasses(styles);
  return (
    <Container>
      <div>
        {" "}
        <Typography className={classes.title}>{title}</Typography>
        <Typography className={classes.intro}>{intro}</Typography>
        {sections.map((section) => (
          <PageCard section={section} />
        ))}
      </div>
    </Container>
  );
}
export default SpotMicro;
