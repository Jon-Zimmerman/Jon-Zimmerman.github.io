import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  SwipeableDrawer,
  Divider,
  List,
  ListItem,
  Typography,
} from "@mui/material";

import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import MenuIcon from "@mui/icons-material/Menu";
import DarkModeSwitch from "../themeSwitch/ThemeSwitch.js";
import { motion } from "framer-motion";
import { animateScroll as scroll } from "react-scroll";
import { Link } from "react-router-dom";
import { styles } from "./Navbar-style.js";
import useClasses from "../../useClasses.js";
import NavMenu from "./NavMenu.js";
import { PathStructure } from "../../../data/PathStructure.js";

const navVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};
const linkVariants = {
  hidden: (index) => ({
    y: -30,
    opacity: 0,
  }),
  visible: (index) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: index * 0,
      duration: 2,
      ease: "easeInOut",
    },
  }),
};

const backToTop = () => {
  scroll.scrollToTop();
};

const Navbar = (props) => {
  const classes = useClasses(styles);
  const [open, setOpen] = useState(false);

  return (
    <AppBar position="sticky" color="default" className={classes.navbar}>
      <Toolbar
        disableGutters
        component={motion.nav}
        variants={navVariants}
        initial="hidden"
        animate="visible"
      >
        <Typography className={classes.logo} variant="h5" onClick={backToTop}>
          Jon Zimmerman
        </Typography>
        {PathStructure.map((item, index) => (
          <NavMenu item={item} key={index} />
        ))}
        <DarkModeSwitch {...props} />
        <IconButton className={classes.menuIcon} onClick={() => setOpen(true)}>
          <MenuIcon />
        </IconButton>
      </Toolbar>
      <SwipeableDrawer
        anchor="right"
        open={open}
        onOpen={() => setOpen(true)}
        onClose={() => setOpen(false)}
      >
        <div
          onClick={() => setOpen(false)}
          onKeyPress={() => setOpen(false)}
          role="button"
          tabIndex={0}
        >
          <IconButton>
            <ChevronRightIcon />
          </IconButton>
        </div>
        <Divider />
        <List>
          {PathStructure.map((item) =>
            item.submenu ? (
              <React.Fragment key={item.name}>
                <ListItem>
                  <Link
                    className={`${classes.navlink}`}
                    //smooth={true}

                    key={item.name}
                    component={motion.a}
                    variants={linkVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    {item.name}
                  </Link>
                </ListItem>
                <List sx={{ mt: "-10px" }}>
                  {item.submenu.map((subItem) => (
                    <ListItem key={subItem.name} sx={{ pl: 4 }}>
                      <Link
                        className={`submenu ${classes.navlink}`}
                        to={subItem.href}
                        //smooth={true}
                        offset={-50}
                        duration={500}
                        key={subItem.name}
                        component={motion.a}
                        variants={linkVariants}
                        initial="hidden"
                        animate="visible"
                      >
                        {subItem.name}
                      </Link>
                    </ListItem>
                  ))}
                </List>
              </React.Fragment>
            ) : (
              <React.Fragment key={item.name}>
                <ListItem>
                  <Link
                    className={`${classes.navlink}`}
                    to={item.href}
                    //smooth={true}
                    offset={-50}
                    duration={500}
                    onClick={() => setOpen(false)}
                  >
                    {item.name}
                  </Link>
                </ListItem>
                <Divider variant="middle" />
              </React.Fragment>
            )
          )}
        </List>
      </SwipeableDrawer>
    </AppBar>
  );
};

export default Navbar;
