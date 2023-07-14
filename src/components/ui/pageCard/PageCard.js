import { Typography, CardContent } from "@mui/material";

import { styles } from "./PageCard-style";
import useClasses from "../../useClasses.js";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@emotion/react";

import React from "react";
import { Lightbox } from "yet-another-react-lightbox";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Zoom from "yet-another-react-lightbox/plugins/zoom";

const PageCard = (props) => {
  const classes = useClasses(styles);
  const { section } = props;
  const slides = section.image;
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("lg"));
  const [modalOpen, setModalOpen] = React.useState(false);
  const [index, setIndex] = React.useState(0);
  console.log(section);
  var imageFloat =
    section.imageFloat === "left" ? classes.imageLeft : classes.imageRight;
    var textFloat =
    section.imageFloat === "left" ? classes.textRight : classes.textLeft;
  const clickItem = (index) => {
    setModalOpen(true);
    setIndex(index);
  };

  return (
    <div
      className={classes.card + " " + imageFloat}
      id={section.id}
      elevation={15}
    >
      <div id="imgCont" className={classes.imgContainer}>
        <Lightbox
          open={modalOpen}
          close={() => setModalOpen(false)}
          index={index}
          //zoom={{ scrollToZoom: true }}
          plugins={[Fullscreen, Zoom]}
          slides={slides}
          render={{
            buttonPrev: slides.length <= 1 ? () => null : undefined,
            buttonNext: slides.length <= 1 ? () => null : undefined,
          }}
        />
        <img
          style={{
            maxHeight: mobile ? 1000 : section.imageHeight,
            right:0
          }}
          //height={section.imageHeight}
          className={classes.image}
          key={section.image[0].src}
          src={section.image[0].src}
          alt={section.image[0].description}
          onClick={() => clickItem()}
        />
      </div>
      <div id="contentWrapper" className={classes.contentWrapper}>
        {/* <CardContent className={classes.cardContent}> */}
        <div id="cardContent" className={classes.cardContent + " " + textFloat} >
          <Typography className={classes.subTitle} color="text.primary">
            {section.subTitle}
          </Typography>
          <Typography className={classes.description} color="text.primary">
            {section.description}
          </Typography>
        </div>

        {/* </CardContent> */}
        <div></div>
      </div>
    </div>
  );
};

export default PageCard;
