export const styles = (theme) => ({
  card: {
    display: "flex",

    alignItems: "center",
    [theme.breakpoints.down("lg")]: {
      flexDirection: "column",
      marginBottom: "3rem",
      justifyContent: "center",
    },
  },
  row: {
    
    [theme.breakpoints.up("lg")]: {
      flexDirection: "row",
    },
  },
  rowReverse: {
    [theme.breakpoints.up("lg")]: {
      flexDirection: "row-reverse",
    },
  },
  imageLeft: {
    justifyContent: "start !important",
  },
  imageRight: {
    justifyContent: "end !important",
  },
  contentWrapper: {
    display: "flex",
    flexGrow: "1",
    justifyContent: "flex-end",
  },
  cardContent: {
    marginTop: "1rem",
    [theme.breakpoints.up("lg")]: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      alignItems: "flex-start",
      marginTop: "0",
    },
    padding: "1rem",
    paddingBottom: "1.2rem",
    background: "#c4dbb4",

    borderRadius: "25px",
  },

  textLeft: {
    [theme.breakpoints.up("lg")]: {
      marginRight: "6rem",
    },
  },
  textRight: {
    [theme.breakpoints.up("lg")]: {
      marginLeft: "6rem",
    },
  },

  cardHeader: {
    fontSize: "2rem!important",
    fontFamily: ["Playfair Display", "serif !important"].join(","),
    fontStyle: "italic",
  },
  description: {
    fontSize: "1.05rem!important",
    fontFamily: ["Playfair Display", "serif !important"].join(","),
    fontStyle: "normal",
  },

  imgContainer: {
    " img": {
      borderRadius: "25px",
    },
  },
  imgContainerNoCaption: {
    [theme.breakpoints.down("lg")]: {
      width: "-webkit-fill-available",
    },
    
    " p": {
      position: "relative",
      backgroundColor: "transparent",
   
      minHeight: "2.5rem",
    },
    " img": {
      borderRadius: "25px",
    },
    " .slide": {
      display: "flex",
      justifyContent: "center",
      paddingTop: "40px",
    },
  },
  lowerDescription: {
    display: "block !important",
    textAlign: "center",
  },
});
