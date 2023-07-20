import {
  Container,
  Typography,

  List,
  ListItem,
  ListItemIcon,
} from "@mui/material";
import styles from "./Experience-style";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import jobs from "../../../../data/experienceContent.js";
import Title from "../SectionTitle.js";

import useClasses from "../../../useClasses.js";
const Experience = () => {
  const classes = useClasses(styles);
  return (
    <Container id="experience">
      <Title title="Work Experience" />
      {jobs.map((job, index) => (
        <div className={classes.jobWrapper} key={index}>
          <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
            {job.title}
          </Typography>
          <Typography variant="body2" display="block" gutterBottom>
            {job.range}
          </Typography>
          <List>
            {job.descriptions.map((description, index) => (
              <ListItem disablePadding alignItems="flex-start" key={index}>
                <ListItemIcon className={classes.listIcon}>
                  <ArrowRightIcon color="primary" />
                </ListItemIcon>
                <Typography className={classes.description}>
                  {description}
                </Typography>
              </ListItem>
            ))}
          </List>
        </div>
      ))}
    </Container>
  );
};

export default Experience;
