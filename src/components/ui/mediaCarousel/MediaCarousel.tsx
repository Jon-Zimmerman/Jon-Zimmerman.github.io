import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { styles } from "./MediaCarousel-style";

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
//import YoutubeVideo from "../YoutubeEmbed/YoutubeVideo";
//import useMediaQuery from "@mui/material/useMediaQuery";
// import { useTheme } from "@emotion/react";
// import { styled } from "@mui/system";

import { Slide, YoutubeSlide } from "yet-another-react-lightbox";
const YoutubeVideo = React.lazy(() => import("../YoutubeEmbed/YoutubeVideo"));

const Lightbox = React.lazy(() =>
  import("yet-another-react-lightbox").then((module) => ({
    default: module.Lightbox,
  }))
);

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
  // const captionsBool = props.captionsBool;
  const { carouselType } = props;
  const [modalOpen, setModalOpen] = React.useState(false);
  const { index, setIndex } = props;

  const clickItem = (newIndex: number) => {
    setModalOpen(true);
    setIndex(newIndex);
  };
  const updateIndex = ({ index: current }: { index: number }) => {
    setIndex(current);

    //console.log(current);
  };
  // const plugins = captionsBool
  //   ?
  //   : [Counter, Fullscreen, Zoom];

  // const theme = useTheme();
  //const mobile = useMediaQuery(theme.breakpoints.down("lg"));
  // const StyledCarousel = styled(Carousel)(({ theme }) => ({

  //     //maxWidth: props.maxWidth,
  //     "& img": {
  //       borderRadius: "25px",
  //     }

  //   // "& .slide": {
  //   //   width: "100%",

  //   // },
  //   // "& .slider": {
  //   //   width: "max-content!important",
  //   //   display: "inline-flex",
  //   //   flexDirection: "row",
  //   // },
  //   // "& div div div ul li div": {
  //   //   display: "inline-flex",
  //   //   flexDirection: "row",
  //   //   width: "max-content!important",
  //   //   justifyContent: props.imageFloat=== "left" ? "flex-start" : "flex-end",
  //   //   flexShrink: 1,
  //   // }

  // }));

  //console.log(props)
  const renderNext = slides.length > 1;
  const renderPrev = renderNext;
  const projectTypeCarousel = carouselType === "projectCarousel";
  return (
    <>
      <Lightbox
        open={modalOpen}
        close={() => setModalOpen(false)}
        slides={slides}
        index={index}
        //zoom={{ scrollToZoom: true }}

        plugins={[Captions, Counter, Fullscreen, Zoom]}
        on={{ view: updateIndex }}
        render={{
          buttonPrev: renderPrev ? undefined : () => null,
          buttonNext: renderNext ? undefined : () => null,

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
        className={`${
          projectTypeCarousel ? classes.projectCarousel : classes.carousel
        } `}
        selectedItem={index}
        //dynamicHeight= {true}
        width={props.width}
        onChange={setIndex}
        showThumbs={false}
        infiniteLoop={true}
        swipeable={false}
        showIndicators={true}
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
              />{" "}
              <Typography
                variant="body1"
                key={mediaItem.description}
                className={`${
                  projectTypeCarousel
                    ? classes.description
                    : classes.descriptionPage
                } `}
              >
                {mediaItem.description}
              </Typography>
            </React.Fragment>
          ) : (
            <React.Fragment key={mediaItem.src}>
              <div
                className={`${
                  projectTypeCarousel ? classes.imgContainer : ""
                } `}
              >
                <img
                  className={`${
                    projectTypeCarousel ? classes.carouselImage : ""
                  } `}
                  key={mediaItem.src}
                  src={mediaItem.src}
                  alt={mediaItem.description}
                />
              </div>
              <Typography
                variant="body1"
                key={mediaItem.description}
                className={`${
                  projectTypeCarousel
                    ? classes.description
                    : classes.descriptionPage
                } `}
              >
                {mediaItem.description}
              </Typography>
            </React.Fragment>
          )
        )}
      </Carousel>
    </>
  );
};

export default MediaCarousel;
