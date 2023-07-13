export const styles = (theme) => ({
  card: {
    display: "flex",

    margin: "3rem auto",
    marginBottom: "2rem",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("lg")]: {
      flexDirection: "column",
    },
  },
  imageLeft: {
    [theme.breakpoints.up("lg")]: {
      flexDirection: "row",
    },
  },
  imageRight: {
    [theme.breakpoints.up("lg")]: {
      flexDirection: "row-reverse",
    },
  },
  title: {
    fontWeight: "600 !important",
    fontSize: "1.65rem !important",
  },
  contentWrapper: {
    [theme.breakpoints.up("lg")]: {
      display: "flex",
      flexBasis: "45%",
      flexDirection: "column",
      justifyContent: "space-between",
    },
  },
  cardContent: {
    //paddingBottom: "0px!important",
  },
  description: {
    fontSize: "0.85rem!important",
  },

  carouselContainer: {
    [theme.breakpoints.up("lg")]: {
      flexBasis: "67%",
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

  imgContainer: {
    height: "100%",
    display: "flex",

    alignItems: "center",
    justifyContent: "center",
    //maxHeight: "433px",
  },
  image: {
    // maxHeight: "430px",
    width: "100%",
    maxWidth: "600px",
    maxHeight: "500px",
    [theme.breakpoints.up("lg")]: {
      maxWidth: "800px",
    },

    " iframe": {
      paddingBottom: "22.5px",
      paddingTop: "22.5px",
    },
  },
  // description: {
  //   position: "absolute",
  //   bottom: "0px",
  //   left: "0",
  //   margin: 0,
  //   width: "100%",
  //   background: "#00000094",
  //   color: "#ffffff",
  //   padding: "10px",
  //   textAlign: "center",
  //   [theme.breakpoints.down("md")]: {
  //     bottom: "0px",
  //     position: "relative",
  //   },
  // },
});
