import * as React from "react";
import { Suspense } from "react";
import { CircularProgress, Box } from "@mui/material";

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
      <Suspense fallback={<Box display="flex" justifyContent="center" alignItems="center" minHeight="200px"><CircularProgress /></Box>}>
        <Projects {...props}></Projects>
      </Suspense>
    </>
  );
}

export default Home;
