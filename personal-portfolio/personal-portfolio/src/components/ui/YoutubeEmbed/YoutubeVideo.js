import React from "react";

import { styles } from "../mediaCarousel/MediaCarousel-style.js";
import useClasses from "../../useClasses.js";
import ReactPlayer from "react-player";
import { Box } from "@mui/material";

const YoutubeVideo = ({ videoId }) => {
  const classes = useClasses(styles);
  return (
    <div id="videoBox" className={classes.videoBox}>
      <Box className={classes.videoBox}>
        <div className={classes.video}>
          <ReactPlayer
            className={classes.video}
            url={"https://www.youtube.com/watch?v=" + videoId}
            volume={0.2}
            controls={true}
            config={{
              youtube: {
                playerVars: { modestBranding: 1 },
              },
            }}
          />
        </div>
      </Box>
    </div>
  );
};

export default YoutubeVideo;
