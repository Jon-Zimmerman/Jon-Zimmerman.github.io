//import { makeStyles } from '@mui/styles';

const styles = theme => ({
  colorText: {
    backgroundColor: `${[theme.palette.primary.light]} !important`,
    fontWeight: "bold",
    marginBottom: "0.5rem",
  },
  jobWrapper: {
    margin: "0 auto",
    [theme.breakpoints.up("md")]: {
      width: "90%",
    },
    [theme.breakpoints.up("lg")]: {
      marginInline: "2rem !important",
      lineHeight: "2 !important",
    },
  },
  description: {
    marginTop: "0.4rem !important",
  },
  listIcon: {
    marginTop: "0.3rem !important",
    minWidth: "35px !important",
  },
});
export default styles;
