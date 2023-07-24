import { Typography } from "@mui/material";

import { styles } from "./PageCard-style.js";
import useClasses from "../../useClasses.js";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@emotion/react";

import React from "react";
// import { Lightbox } from "yet-another-react-lightbox";
// import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
// import Zoom from "yet-another-react-lightbox/plugins/zoom";
//import FullscreenIcon from "@mui/icons-material/Fullscreen";

import MediaCarousel from "../mediaCarousel/MediaCarousel.tsx";

const PageCard = (props) => {
  const classes = useClasses(styles);
  const { section } = props;
  //const slides = section.image;
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("lg"));
  //const [modalOpen, setModalOpen] = React.useState(false);

  //console.log(section);
  var flexDirection =
    section.imageFloat === "left" ? classes.row : classes.rowReverse;
  var imageFloat =
    section.imageFloat === "left" ? classes.imageLeft : classes.imageRight;
  var textFloat =
    section.imageFloat === "left" ? classes.textRight : classes.textLeft;

  const width = mobile ? "auto" : section.maxWidth + "px";
  // const clickItem = (index) => {
  //   setModalOpen(true);
  //   setIndex(index);
  // };
  const [index, setIndex] = React.useState(0);
  // const description = React.useMemo(() => {
  //   console.log(index)
  //   console.log("desc usememo")
  //   return section.slides[index].description;

  // },[index])

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
        {/* <Typography className={classes.lowerDescription} align="center">
          {section.slides[index].label}
        </Typography> */}
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
