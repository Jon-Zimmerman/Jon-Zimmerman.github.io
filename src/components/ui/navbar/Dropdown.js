import React from "react";


import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { styles } from "./Navbar-style.js";
import useClasses from "../../useClasses.js";

const linkVariants = {
  hidden: () => ({
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
const Dropdown = ({ submenus, dropdown }) => {
  const classes = useClasses(styles);
  return (
    <ul className={classes.dropdown + ` ${dropdown ? "show" : ""}`}>
      {submenus.map((item, index) => (
        <li key={index} className="menuItems">
          <Link
            className={`${classes.navlink} ${classes.hideLinks}`}
            to={item.href}
            //smooth={true}
            offset={-50}
            duration={500}
            key={item.name}
            component={motion.a}
            variants={linkVariants}
            initial="hidden"
            animate="visible"
          >
            {item.name}
          </Link>
          
        </li>
      ))}
    </ul>
  );
};

export default Dropdown;
