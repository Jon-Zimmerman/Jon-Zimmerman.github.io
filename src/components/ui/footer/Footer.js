
import { styles } from "./Footer-style";
import useClasses from "../../useClasses.js"
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";


const Footer = () => {
  const classes = useClasses(styles);
  return (
    <footer className={classes.footer}>
      <div className={classes.footerContent}>
        <p className={classes.copyright}>Copyright © 2023
          <span className={classes.colorText}> Jon Zimmerman</span>
        </p>

        <div className="classes.iconWrapper">
          <a
            className={classes.icon}
            style={{"paddingLeft": "1px"}}
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon sx={{ verticalAlign: "middle"}} fontSize="large" />
          </a>

          <a
            className={classes.icon}
            style={{"paddingLeft": "1px"}}
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon sx={{ verticalAlign: "middle" , alignItems:"center"}} fontSize="large" />
          </a>
        </div>


      </div>
    </footer>

  );
};

export default Footer;
