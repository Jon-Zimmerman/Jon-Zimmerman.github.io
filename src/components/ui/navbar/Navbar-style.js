////import { makeStyles } from '@mui/styles',
export const styles = (theme) => ({
  navbar: {
    height: "70px",
    position: "fixed !important",
  },
  navlink: {
    padding: "10px 20px",
    paddingBottom: "2.3px",
    top: "0px",
    fontWeight: "600 !important",
    cursor: "pointer",
    color: theme.palette.mode === "dark" ? "#fff" : "#000",
    textDecoration: "none",
    [theme.breakpoints.up("md")]: {
      "&:hover": {
        color: [theme.palette.primary.main],
        transition: "color 0.3s linear, border-bottom 0.2s ease-in-out",
        "&:after": {
          width: "75%",
          transition: "width 0.25s linear, border-bottom 0.2s ease-in-out",
        },
      },
    },

    "&:after": {
      content: "''",
      display: "block",
      paddingTop: "5px",
      borderBottom: "3px solid",
      borderColor: theme.palette.primary.main + "!important",
      width: 0,
    },

    "&.multi": {
      padding: "10px 20px",
      "&:after": {
        content: "''",
        display: "none",
        paddingTop: "0",
        borderBottom: "0",
        borderColor: "",
        width: 0,
      },
    },
    "&.submenu": {
      fontSize: "1rem",
      paddingTop: "0",
      lineHeight: "0.5rem",
    },
  },

  hideLinks: {
    display: "none",
    [theme.breakpoints.up("md")]: { display: "block" },
  },
  logo: {
    marginRight: "auto !important",
    fontWeight: "600 !important",
    padding: "20px",
  },
  menuIcon: {
    display: "visible",
    height: "100%",
    color: "#999!important",
    [theme.breakpoints.up("md")]: { visibility: "hidden" },
  },

  menuItems: {
    position: "relative",
    fontSize: "14px",

    "& a": {
      display: "block",
      fontSize: "inherit",
      color: "inherit",
      textDecoration: "none",
    },
    "& button": {
      display: "flex",
      alignItemsItems: "center",
      color: "inherit",
      fontSize: "inherit",
      border: "none",
      backgroundColor: "transparent",
      cursor: "pointer",
      width: "100%",
      textAlign: "left",
      padding: "0.7rem 1rem",
    },

    "a:hover": {

      //backgroundColor: theme.palette.mode === "light" ? "#f5f5f5" : "#000" ,
    },
    "button:hover": {
      //backgroundColor: theme.palette.mode === "light" ? "#f5f5f5" : "#000" ,
    },
  },

  menus: {
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    listStyle: "none",
  },

  button: {
    "& span": {
      marginLeft: "3px",
    },
  },
  arrow: {
    "&:after": {
      content: "''",
      display: "inline-block",
      marginLeft: "0.28em",
      verticalAlign: "0.09em",
      borderTop: "0.42em solid",
      borderRight: "0.32em solid transparent",
      borderLeft: "0.32em solid transparent",
    },
  },
  dropdown: {
    position: "absolute",
    right: "auto",
    left: "-4px",
    boxShadow:
      "0 10px 15px -3px rgba(46, 41, 51, 0.08),0 4px 6px -2px rgba(71, 63, 79, 0.16)",
    fontSize: "0.875rem",
    zIndex: "9999",
    minWidth: "10rem",
    padding: "0.0rem 0",
    listStyle: "none",
    marginTop: "0px",
    paddingBottom: "0.6rem",

    backgroundColor: theme.palette.mode === "light" ? "#fff" : "#000" ,
    borderRadius: "0.5rem",
    display: "none",
    "&.show": {
      display: "block",
    },
    "&.dropdown-submenu": {
      position: "absolute",
      left: "100%",
      top: "-7px",
    },
  },
});
