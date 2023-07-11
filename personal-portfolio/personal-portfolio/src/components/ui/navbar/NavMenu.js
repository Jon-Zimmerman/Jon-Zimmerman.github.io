import React, { useState } from "react";

import { motion } from "framer-motion";

import { Link } from "react-router-dom";
import { styles } from "./Navbar-style.js";
import useClasses from "../../useClasses.js";
import Dropdown from "./Dropdown.js";

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

const NavMenu = ({ item }) => {
  const classes = useClasses(styles);
  const [dropdown, setDropdown] = useState(false);
  return (
    <li className={` ${classes.hideLinks} ${classes.menuItems}`}>
      {item.submenu ? (
        <div
          onMouseOver={() => setDropdown(() => true)}
          onMouseLeave={() => setDropdown(() => false)}
        >
          <Link className={ "multi " +` ${classes.navlink}`} type="button"
          >
            {item.name}
          </Link>
          <Dropdown
            submenus={item.submenu}
            setDropdown={setDropdown}
            dropdown={dropdown}
          />
        </div>
      ) : (
        <Link
        className={ `${classes.navlink} ${classes.hideLinks}`}
        to={item.href}

        duration={500}
        key={item.name}
        component={motion.a}
        variants={linkVariants}
        initial="hidden"
        animate="visible"
      >
        {item.name}
      </Link>
      )}
    </li>
  );
};

export default NavMenu;
