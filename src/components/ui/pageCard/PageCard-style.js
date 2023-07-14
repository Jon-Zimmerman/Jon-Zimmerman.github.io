export const styles = (theme) => ({
  card: {
    display: "flex",

    margin: "3rem auto",
    marginBottom: "8rem",
    alignItems: "center",
    [theme.breakpoints.down("lg")]: {
      flexDirection: "column",
      marginBottom: "2rem",
      justifyContent: "center",
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

  contentWrapper: {
    display: "flex",
    flexGrow: "1",
    //flexBasis: "45%",
    alignItems: "flex-end",
    
  },
  cardContent: {
    //paddingBottom: "0px!important",
    maxWidth: "600px",
    [theme.breakpoints.up("lg")]: {
      maxWidth: "500px",
    },
    height: "auto",
    marginTop: "1rem",
    [theme.breakpoints.up("lg")]: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      alignItems: "flex-start",
      marginTop: "0",
    },
    padding: "1rem",
    paddingBottom: "2rem",
    background: "#c4dbb4",

    borderRadius: "25px",
  },

  textLeft: {
    [theme.breakpoints.up("lg")]: {
      marginRight: "4rem"
    },
  },
  textRight: {
    [theme.breakpoints.up("lg")]: {
      marginLeft: "4rem"
    },
  },

  subTitle: {
    fontSize: "2rem!important",
    fontFamily: ["Playfair Display", "serif !important"].join(","),
    fontStyle: "italic",
  },
  description: {
    fontSize: "0.95rem!important",
    fontFamily: ["Playfair Display", "serif !important"].join(","),
    fontStyle: "normal",
  },

  video: {
    width: "10vw",
    height: "auto!important",
    aspectRatio: "16/9!important",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexGrow: "1",
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
    //height: "100%",
    display: "flex",
    flexBasis: "70%",
    //height: "100%",
    alignItems: "center",
    justifyContent: "flex-end",
    //maxHeight: "433px",
    flexGrow: "2",
    [theme.breakpoints.up("lg")]: {
      alignSelf: "flex-end",
    },
  },
  image: {
    // maxHeight: "430px",
    //width: "auto",
    //height: "100%",
    maxWidth: "600px",
    //maxHeight: "500px",
    borderRadius: "25px",
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
