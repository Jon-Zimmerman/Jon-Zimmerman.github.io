import { Typography, Card, CardContent, Chip } from "@mui/material";
import CardButtons from "./CardButtons";
import MediaCarousel from "../../../../ui/mediaCarousel/MediaCarousel.tsx";
import { styles } from "./ProjectCard-style";
import useClasses from "../../../../useClasses.js";

const ProjectCard = (props) => {
  const classes = useClasses(styles);
  const { project } = props;
  return (
    <Card className={classes.card} id="card" elevation={15}>

      <MediaCarousel {...props}  className={classes.MediaCarousel} project={project} />
      <div id="contentWrapper" className={classes.contentWrapper}>

        <CardContent className={classes.cardContent}>
          <Typography gutterBottom variant="h5" className={classes.title} component="div">
            {project.title}
          </Typography>
          <Typography className={classes.description} color="text.primary">
            {project.description}
          </Typography>
        </CardContent>
        <div>
          <div className={classes.allChips}>
            {project.skills.map((skills, index) => (
              <Chip className={classes.chip} label={skills} key={index} />
            ))}
          </div>
          <CardButtons links={project.links} />
        </div>
      </div>
    </Card>
  );
};

export default ProjectCard;
