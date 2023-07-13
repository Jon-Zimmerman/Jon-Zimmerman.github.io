
export const styles = theme => ({

  title: {
    fontWeight: "600 !important",
    fontSize: "1.65rem !important"
  },
  contentWrapper: {
    
    
    [theme.breakpoints.up("lg")]: {
      display: "flex",
      flexBasis: "33%",
      flexDirection: "column",
      justifyContent: "space-between",
    },
  },
  cardContent: {
    paddingBottom: "0px!important",
  },
  description:{
    fontSize: "0.80rem!important",
  },
  MediaCarousel: {
    width:"70%"
  }
});