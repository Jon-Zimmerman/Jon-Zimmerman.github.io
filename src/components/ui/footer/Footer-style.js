//import { makeStyles } from '@mui/styles';

import { Center } from "@react-three/drei";

export const styles = theme => ({
  footer: {
    width: "100%",
    backgroundColor: "#121212",
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    backgroundImage: "linear-gradient(rgba(255, 255, 255, 0.09), rgba(255, 255, 255, 0.09))",
    alignItems: "center",
    bottom: 0,
  },

  footerContent: {
    display: "flex",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
    },
    margin: "1rem auto !important",
    "& svg": {
      color: "#FFF",
    },
    bottom: 0,
    width: "50%",
    justifyContent: "center",
    alignSelf: "flex-start",
    alignItems:"center",
    paddingInline: "1rem",
    marginTop: "1rem",
    "& svg": {
      color: "#FFF",
      paddingLeft: "0",
      "&:hover": {
        cursor: "pointer",
        color: [theme.palette.primary.main],
        transition: "all 0.3s linear",
      },
    },
    [theme.breakpoints.down("sm")]: {
      width: "60%",
    },
  },
  copyright: {
    color: "#FFFfff",
    fontSize: "0.8rem",
    width: "220px",
    top: 0,
    display: "inline-block",
  },
  colorText: {
    color: [theme.palette.primary.main],
    fontSize: "0.86rem",
  },
  iconWrapper: {
    alignItems: "center",
  },
  icon: {
    
    marginLeft: "8px", 
    marginRight: "8px" ,
    display: "inline-block",
  },

});