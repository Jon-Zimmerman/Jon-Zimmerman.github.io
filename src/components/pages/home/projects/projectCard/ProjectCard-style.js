
export const styles = theme => ({
  chip: {
    margin: "0.1rem",
    color: "white",
  },
  allChips: {
    margin: "0.5rem 0.3rem",
  },
  card: {
    margin: "3rem auto",
    marginBottom: "5rem",
    
    [theme.breakpoints.up("lg")]: {
      display: "flex",
      flexDirection: "row-reverse",
    },
  },
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