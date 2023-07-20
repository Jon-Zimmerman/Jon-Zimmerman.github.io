import { Container, Typography } from "@mui/material";

import { styles } from "./About-style";
import Title from "../SectionTitle.js";
import aboutMeImage from "../../../../assets/About_Me_4.png";
import useClasses from "../../../useClasses.js";
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material/styles";

const About = () => {
  let theme = createTheme();
  theme = responsiveFontSizes(theme);
  const classes = useClasses(styles);
  const handleClick = event => {
    // 👇️ refers to the image element
    //console.log(event.target);

    //console.log('Image clicked');
  };
  return (
    <Container id="about" name="about">
      <div>
        <Title title="About Me" />
        <div className={classes.aboutContent}>
          <div className={classes.textWrapper}>
            <ThemeProvider theme={theme}>
              <Typography className={classes.aboutText}>
                Hello! I am{" "}
                <span className={classes.colorText}>Jon Zimmerman</span>, a
                mechanical engineer with a passion for innovating in the world
                of robotics. I have experience in designing manufacturing
                equipment, mobile robotic devices, smart IoT products, websites,
                and software for robots.
                <br></br> In my free time, I enjoy mentoring a high school
                robotics team, 3D printing, art, and making my own board games!
              </Typography>
            </ThemeProvider>
          </div>

          <img
          onClick={handleClick}
            src={aboutMeImage}
            alt="about me"
            className={classes.aboutImage}
          />
        </div>
      </div>
    </Container>
  );
};

export default About;
