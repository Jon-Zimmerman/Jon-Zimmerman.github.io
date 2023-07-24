import React from "react";
import { Typography, Card, CardContent, Chip } from "@mui/material";
import CardButtons from "./CardButtons";
import MediaCarousel from "../../../../ui/mediaCarousel/MediaCarousel.tsx";
import { styles } from "./ProjectCard-style";
import useClasses from "../../../../useClasses.js";

const ProjectCard = (props) => {
  const classes = useClasses(styles);
  const { project } = props;
  const [index, setIndex] = React.useState(0);
  return (
    <Card className={classes.card} id="card" elevation={15}>
      
      <MediaCarousel
        {...props}
        className={classes.MediaCarousel}
        project={project}
        captionsBool={true}
        index={index}
        setIndex={setIndex}
        carouselType={"projectCarousel"}
      />
      <div id="contentWrapper" className={classes.contentWrapper}>
        <CardContent className={classes.cardContent}>
          <Typography
            gutterBottom
            variant="h5"
            className={classes.title}
            component="div"
          >
            {project.title}
          </Typography>
          <Typography className={classes.description} color="text.primary">
            {project.description}
          </Typography>
          <div className={classes.allChips}>
            {project.skills.map((skills, index) => (
              <Chip className={classes.chip} label={skills} key={index} />
            ))}
          </div>
          <CardButtons links={project.links} />
        </CardContent>
      </div>
    </Card>
  );
};

export default ProjectCard;
