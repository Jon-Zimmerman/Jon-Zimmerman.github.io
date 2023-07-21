import React from "react";
import AnimationName from "./animatedName/AnimatedName";
import { Container, Typography } from "@mui/material";
import { motion } from "framer-motion";

import { Button } from "@mui/material";
//import Button from '@mui/base/Button';
import { Link } from "react-scroll";

import { styles } from "./Header-style";
import useClasses from "../../../../components/useClasses.js";


const ThreeJSModel = React.lazy(() => import('./threeJS/ThreeJSModel.js'));
const textVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { ease: "easeOut", delay: 0.0, duration: 1.2 },
  },
};

const buttonVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { ease: "easeOut", delay: 0.0, duration: 1.2 },
  },
};

const buttons = [
  { link: "projects", text: "MY PROJECTS" },
  { link: "experience", text: "WORK EXPERIENCE" },
];
const HomeButtons = () => {
  const classes = useClasses(styles);

  return (
    <motion.div className={classes.homeButtonsWrapper}>
      {buttons.map((btn) => (
        <Button
          key={btn.link}
          variant="contained"
          className={classes.homeButton}
          component={motion.div}
          variants={buttonVariants}
          initial="hidden"
          animate="visible"
        >
          <Link to={btn.link} smooth={true} offset={-150} duration={500}>
            {btn.text}
          </Link>
        </Button>
      ))}
    </motion.div>
  );
};

const Home = (props) => {
  const classes = useClasses(styles);

  return (
    <Container>
      <div style={{ display: "flex" }} className={classes.home}>
        <ThreeJSModel className={classes.modelContainer} /> 

        <div style={{ height: "100%" }} className={classes.container}>
          <AnimationName style={{ height: "100%" }} {...props} />

          <Typography
            variant="h3"
            component={motion.div}
            variants={textVariants}
            initial="hidden"
            animate="visible"
            className={classes.text}
          >
            Mechanical Engineer
          </Typography>
          <HomeButtons></HomeButtons>
        </div>
      </div>
    </Container>
  );
};

export default Home;
