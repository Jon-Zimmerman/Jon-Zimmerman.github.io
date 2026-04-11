export const styles = (theme) => ({
  carouselImage: {
    objectFit: "contain",
    height: "100%",
  },

  video: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
  },

  videoBox: {
    position: "relative",
    display: "block",
    width: "100%",
    maxWidth: "100%",
    paddingBottom: "55%",
    marginBottom: "15%",
    marginTop: "15%",
    minHeight: 0,
  },

  arrows: {
    height: "70%",
    top: "15%",
    position: "absolute",
    zIndex: 2,
    cursor: "pointer",
    backgroundColor: "#fff0",
    borderColor: "#fff0",
    [theme.breakpoints.down("sm")]: {
      height: "60%",
      top: "20%",
    },
    "& svg": {
      top: "calc(50% - 15px)",
      color: "#ffffff",
      backgroundColor: "#00000069",
      borderRadius: "50%",
      "&:hover": {
        backgroundColor: "#000000a6",
        transition: "0.25s linear, border-bottom 0.2s ease-in-out",
      },
    },
  },
  imgContainer: {
    height: "100%",
    //maxHeight: "433px",
  },
  projectCarousel: {
    // maxHeight: "430px",
    display: "flex",
    cursor: "pointer",
    alignItems: "center",
    justifyContent: "center",
    [theme.breakpoints.up("lg")]: {
      maxWidth: "770px",
    },
    " .control-dots": {
      display: "none",
    },
    " .carousel-slider": {
      height: "100% !important",
    },
    " .carousel-status": {
      display: "none",
    },
    " iframe": {
      paddingBottom: "0",
      paddingTop: "0",
    },
    " .selected": {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    ".animated": {
      maxHeight: "650px!important",
      [theme.breakpoints.up("lg")]: {
        maxHeight: "433px!important",
      },
    },
  },
  carousel: {
    " .control-dots": {
      display: "none",
    },
    " .carousel-status": {
      display: "none",
    },
  },
  description: {
    position: "absolute",
    bottom: "0px",
    left: "0",
    margin: 0,
    width: "100%",
    background: "#00000094",
    color: "#ffffff",
    padding: "10px",
    textAlign: "center",
    [theme.breakpoints.down("md")]: {
      bottom: "0px",
      position: "relative",
      marginTop: "0.75rem",
    },
  },  
  descriptionPage: {
    position: "absolute",
    bottom: "0px",
    paddingTop: "10px",
    left: "0",
    margin: 0,
    width: "100%",
    background: "#00000094",
    color:  theme.palette.mode === "dark" ? "#ffffff" : "#000",
    padding: "10px",
    textAlign: "center",
    [theme.breakpoints.down("md")]: {
      bottom: "0px",
      position: "relative",
      marginTop: "0.75rem",
    },
  },
});
