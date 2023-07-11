//import { makeStyles } from '@mui/styles';

export const styles = theme => ({
  wrapperDiv: {
    display: "flex",
    justifyContent: "end",
  },
  fab: {
    position: "fixed !important",
    bottom: "10vh",
    right: "2vh",
    zIndex: "100",
    [theme.breakpoints.down("md")]: {
      bottom: "14vh",
          right: "2vh",
        },
  },

});