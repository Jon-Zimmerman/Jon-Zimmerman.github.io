//import { makeStyles } from '@mui/styles';

export const styles = theme => ({
  aboutText: {
    fontSize: "1.1rem !important",
    lineHeight: "1.7 !important",

    [theme.breakpoints.up("md")]: {

      fontSize: "1.2rem !importan"
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "1.25rem !important"
    },
    [theme.breakpoints.up("xl")]: {
      fontSize: "1.25rem !important"
    },
    "&:last-child": {
      marginTop: "0.5rem",
    }

  },
  aboutImage: {
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
    borderRadius:"50%"
  },
  colorText: {
    color: [theme.palette.primary.main],
  },
  aboutContent: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    [theme.breakpoints.up("md")]: {
      flexDirection: "row",
    },

  },
  textWrapper: {
    order:2
    
  }
});