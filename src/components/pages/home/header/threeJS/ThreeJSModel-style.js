////import { makeStyles } from '@mui/styles';

export const styles = (theme) => ({
  canvas: {
    //display: "block",
    // width: "100%",
    // height:"100%",

    touchAction: "none",
    WebkitMaskImage:
      "linear-gradient(to top, black 0%, white 100%), linear-gradient(to top, transparent 0%, white 100%), linear-gradient(to right, transparent 0%, white 100%), linear-gradient(transparent 0%, white 100%), linear-gradient(to left, transparent 0%, black 100%)",
    WebkitMaskPosition:
      "center center, center top, right center, center bottom, left center",
    WebkitMaskSize: "100% 100%, 100% 30px, 10px 100%, 100% 40px, 30px 100%",
    WebkitMaskRepeat: "no-repeat, no-repeat, no-repeat, no-repeat, no-repeat",
    WebkitMaskComposite: "source-out, source-over, source-over, source-over",

    height: "80vw !important",
    width: "80vw !important",
    cursor: "grab",
    maxWidth: "550px",
    maxHeight: "520px",
    display: "inline-block",
    [theme.breakpoints.up("md")]: {
      height: "50vw !important",
      width: "50vw !important",
    },
    [theme.breakpoints.up("lg")]: {
      height: "45vw !important",
      width: "50vw !important",
    },

    "&:after": {
      content: '" "',
      position: "absolute",
      zIndex: "1",
      bottom: "0",
      left: "0",
      pointerEvents: "none",
      width: "auto",
      height: "auto",
    },
  },
});
