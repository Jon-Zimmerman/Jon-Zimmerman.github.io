import { Typography, CardContent } from "@mui/material";


import { styles } from "./PageCard-style";
import useClasses from "../../useClasses.js";

const PageCard = (props) => {
  const classes = useClasses(styles);
  const { section } = props;
  console.log(section);
  var imageFloat = section.imageFloat === "left"? classes.imageLeft :classes.imageRight
  return (
    <div className= {classes.card + " " + imageFloat} id={section.id}  elevation={15}>
      
      <div className={classes.imgContainer}>
        <img
          className={classes.image}
          key={section.image.src}
          src={section.image.src}
          alt={section.image.description}
        />
      </div>
      <div id="contentWrapper" className={classes.contentWrapper}>
        <CardContent className={classes.cardContent}>

          <Typography className={classes.description} color="text.primary">
            {section.description}
          </Typography>
        </CardContent>
        <div></div>
      </div>
    </div>
  );
};

export default PageCard;
