import * as React from "react";

import Header from "./header/Header.js";
import About from "./about/About.js";
import Experience from "./experience/Experience.js";

const Projects = React.lazy(() => import('./projects/Projects.js'));
function Home(props) {
  return (
    <>
      <Header></Header>
      <About></About>
      <Experience></Experience>
      <Projects {...props}></Projects>
    </>
  );
}

export default Home;
