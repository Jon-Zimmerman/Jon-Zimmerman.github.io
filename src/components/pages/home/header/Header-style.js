
export const styles = (theme) => ({
  // home: {
  //   height: "calc(100vh - 70px)",
  //   display: "flex",
  //   maxWidth: "1200px!important",
  //   flexDirection: "column",
  //   alignItems: "center",
  //   [theme.breakpoints.up(1000)]: {
  //     height: "90vh",
  //     flexDirection: "row-reverse",
  //     justifyContent: "center",
  //     alignItems: "end",
  //     margin: "0 0rem ",
  //     //marginBottom: "5rem ",
  //     width: "95%",
  //     paddingLeft: "5rem",
  //     paddingRight: "5rem",
  //   },

  //   [theme.breakpoints.up("xl")]: {
  //     margin: "0 7rem ",
  //   },
  // },

  home: {


    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    [theme.breakpoints.up(1000)]: {
    
      flexDirection: "row-reverse",
      justifyContent: "center",

      alignItems: "end",
    },
  },

  modelWrapper: {
    display: "flex",
    alignItems: "center",
    width: "20%",
    maxWidth: "500px!important",
    maxHeight: "500px!important",
  },
  container: {
    display: "flex !important",
    flexDirection: "column",
    // height: "45%",
    zIndex: 1,
    padding: "0px",
    maxWidth: "600px!important",    
   
  },
  text: {
    color: "#8c8c8c",
    paddingTop: "0px",

    alignSelf: "flex-start",
    fontSize: "1.5rem !important",
    fontWeight: "700 !important",

    [theme.breakpoints.down("sm")]: {
      marginTop: "51px ",
    },
  },
  homeButtonsWrapper: {
    display: "flex",
    paddingTop: "20px",

    marginBottom: "30px",
  },
  homeButton: {
    fontWeight: "600 !important",
    fontSize: "0.85rem !important",
    paddingBottom: "0.2rem !important",

    transition: "all 0.0s ease-in-out",
    [theme.breakpoints.down(400)]: {
      fontSize: "0.75rem !important",
    },

    borderRadius: "13px !important",
    border: "none",
    // color: "#5a5a5a",
    // background: "#d9d9d9",
    // boxShadow: "5px 5px 10px #a9a9a9,   -5px -5px 10px #ffffff",
    "&:hover": {
      opacity: "0.85",
      transition: "all 0.1s ease-in-out",
    },
    "&:last-child": {
      marginLeft: "2rem",
    },
  },
  modelContainer: {
    width: "35%",
    height: "35%",
    margin: " 1rem 3rem",
    order:3,
    mixBlendMode: "normal",
    [theme.breakpoints.down(1000)]: {
      width: "45%",
    },
    [theme.breakpoints.down("sm")]: {
      width: "220px",
    },
    display:"inline",

    [theme.breakpoints.down("md")]: {
      order: 0,
      
    },
  },
});
