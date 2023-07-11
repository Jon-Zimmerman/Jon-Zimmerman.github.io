

export const styles = theme => ({
  wrapper: {
    display: "flex",
    flexDirection: "column",
    
    margin: "0 auto",
    bottom: "0",
    [theme.breakpoints.up("md")]: {
     
      margin: 0,
    },
  },

  
  h1: {

    
    lineHeight: 1,
    margin: "0",
  },
  

  container: {
    alignItems: "flex-end"
  },
  wordWrapper: {
    whiteSpace: "nowrap",
    display: "block",
  }
  

});