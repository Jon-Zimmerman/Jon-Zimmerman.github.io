import { Typography } from "@mui/material";

import { styles } from "./PageCard-style.js";
import useClasses from "../../useClasses.js";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@emotion/react";

import React from "react";

import MediaCarousel from "../mediaCarousel/MediaCarousel.tsx";

const PageCard = (props) => {
  const classes = useClasses(styles);
  const { section } = props;

  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("lg"));

  var flexDirection =
    section.imageFloat === "left" ? classes.row : classes.rowReverse;
  var imageFloat =
    section.imageFloat === "left" ? classes.imageLeft : classes.imageRight;
  var textFloat =
    section.imageFloat === "left" ? classes.textRight : classes.textLeft;

  const width = mobile ? "auto" : section.maxWidth + "px";

  const [index, setIndex] = React.useState(0);

  return (
    <div
      className={classes.card + " " + flexDirection}
      id={section.id}
      elevation={15}
    >
      <div
        id="imgCont"
        className={classes.imgContainerNoCaption + " " + imageFloat}
      >

        <MediaCarousel
          {...props}
          width={width}
          project={section}
          imageFloat={section.imageFloat}
          captionsBool={false}
          className={classes.image}
          index={index}
          setIndex={setIndex}
          carouselType={"pageCarousel"}
        />

      </div>
      <div id="contentWrapper" className={classes.contentWrapper}>
        <div id="cardContent" className={classes.cardContent + " " + textFloat}>
          <Typography className={classes.cardHeader} color="#000">
            {section.cardHeader}
          </Typography>
          <Typography className={classes.description} color="#000">
            {section.description}
          </Typography>
        </div>
      
      </div>
    </div>
  );
};

export default PageCard;
