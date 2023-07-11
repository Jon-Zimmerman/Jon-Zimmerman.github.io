import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { styles } from "./MediaCarousel-style";
import YoutubeVideo from "../YoutubeEmbed/YoutubeVideo";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

import useClasses from "../../useClasses.js";
import { Typography } from "@mui/material";

import "yet-another-react-lightbox/styles.css";
import Captions from "yet-another-react-lightbox/plugins/captions";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";

import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Counter from "yet-another-react-lightbox/plugins/counter";
import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import "yet-another-react-lightbox/plugins/counter.css";

import { Lightbox, Slide, YoutubeSlide } from "yet-another-react-lightbox";


function isCustomSlide(slide: Slide): slide is YoutubeSlide {
  return slide.type === "custom-slide";
}
declare module "yet-another-react-lightbox" {
  export interface YoutubeSlide extends GenericSlide {
    type: "custom-slide";
  }

  interface SlideTypes {
    "custom-slide": YoutubeSlide;
  }
}
const MediaCarousel = (props) => {
  const classes = useClasses(styles);
  const { slides } = props.project;

  const [modalOpen, setModalOpen] = React.useState(false);
  const [index, setIndex] = React.useState(0);
  const clickItem = (index) => {
    setModalOpen(true);
    setIndex(index);
  };
  const updateIndex = ({ index: current }: { index: number }) => {
    setIndex(current);
    console.log(current);
  };

  return (
    <div className={classes.carouselContainer}>
      <Lightbox
        open={modalOpen}
        close={() => setModalOpen(false)}
        slides={slides}
        index={index}
        //zoom={{ scrollToZoom: true }}
        plugins={[Captions, Counter, Fullscreen, Zoom]}
        on={{ view: updateIndex }}
        render={{
          slide: ({ slide }) =>
            isCustomSlide(slide) ? (
              <React.Fragment key={slides[index].videoId}>
                <YoutubeVideo
                  key={slides[index].videoId}
                  videoId={slides[index].videoId}
                  //title={title}
                />
              </React.Fragment>
            ) : undefined,
        }}
      />

        <Carousel
          onClickItem={clickItem}
          className={classes.carousel}
          selectedItem={index}
          //style={{ backgroundColor: "#fff" }}
          showThumbs={false}
          infiniteLoop={true}
          swipeable={false}
          //height={"auto"}
          renderArrowPrev={(onClickHandler, hasPrev, label) =>
            hasPrev && (
              <button
                type="button"
                onClick={onClickHandler}
                title={label}
                className={classes.arrows}
              >
                <NavigateBeforeIcon fontSize="large" />
              </button>
            )
          }
          renderArrowNext={(onClickHandler, hasNext, label) =>
            hasNext && (
              <button
                type="button"
                onClick={onClickHandler}
                title={label}
                className={classes.arrows}
                style={{
                  right: 0,
                }}
              >
                <NavigateNextIcon fontSize="large" />
              </button>
            )
          }
        >
          {slides.map((mediaItem) =>
            mediaItem.videoId ? (
              <React.Fragment key={mediaItem.videoId}>
                <YoutubeVideo
                  key={mediaItem.videoId}
                  videoId={mediaItem.videoId}
                />
              </React.Fragment>
            ) : (
              <React.Fragment key={mediaItem.src}>
                <div className={classes.imgContainer}>
                  <img
                    className={classes.carouselImage}
                    key={mediaItem.src}
                    src={mediaItem.src}
                    alt={mediaItem.description}
                  />
                </div>
                <Typography
                  variant="body2"
                  key={mediaItem.description}
                  className={classes.description}
                >
                  {mediaItem.description}
                </Typography>
              </React.Fragment>
            )
          )}
        </Carousel>
      </div>
 
  );
};

export default MediaCarousel;
