export const styles = (theme) => ({
  carouselImage: {
    objectFit: "contain",
    height: "100%",
  },
  carouselContainer: {
    [theme.breakpoints.up("lg")]: {
      
      flexBasis: "67%"
      
    },
    
  },  
  
  video: {
    width: "10vw",
    height: "auto!important",
    aspectRatio: "16/9!important",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexGrow: 1,
  },

  videoBox: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "95%",
    height: "95%",
    margin: "0",
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
  carousel: {
    // maxHeight: "430px",
    display: "flex",

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
      paddingBottom: "22.5px",
      paddingTop: "22.5px",
    },
    " .selected": {
      display: "flex",
      justifyContent: "center",
    },
    ".animated": {
      maxHeight: "650px!important",
      [theme.breakpoints.up("lg")]: {
        maxHeight: "433px!important",
      },
    },
    ".slider-wrapper": {
      //maxHeight: "433px!important",
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
    },
  },
});
