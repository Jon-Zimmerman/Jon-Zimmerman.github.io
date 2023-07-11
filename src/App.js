//import logo from './logo.svg';
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//import './components/pages/home2/Home.js';

import CssBaseline from "@mui/material/CssBaseline";
import Home from "./components/pages/home/Home.tsx";
//import About from "./components/pages/home/about/About.js";
import Prototyping from "./components/pages/prototyping/Prototyping.js";

import NavBar from "./components/ui/navbar/Navbar.js";
import Footer from "./components/ui/footer/Footer.js";
import ScrollToTop from "./components/ui/scrollToTop/ScrollToTop.js";

// import { styles } from "./App-style";
// import useClasses from "./components/useClasses.js";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import { green } from "@mui/material/colors";
import { Container } from "@mui/system";

let initialTheme = false;
//If the the value from the local storage equals to dark
if (localStorage.getItem("theme") === "dark") {
  //Set initial theme value to true, that means dark theme
  initialTheme = true;
}

function App() {
  //const classes = useClasses(styles);
  const [isDarkMode, setIsDarkMode] = useState(initialTheme);

  //const { slides, title } = projectContent[0];

  const theme = createTheme({
    palette: {
      header: {
        main: green[500],
      },

      mode: isDarkMode ? "dark" : "light",
      primary: {
        main: "#43b019",
        light: "#43b019e8",
        contrastText: isDarkMode ? "white" : "black",
      },
      secondary: {
        main: "#6e5494",
      },
      text: {
        secondary: "#000",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      theme = responsiveFontSizes(theme);
      <Router>
        <div className="App">
          <CssBaseline>
            <NavBar
              isDarkMode={isDarkMode}
              setIsDarkMode={setIsDarkMode}
      
            />
            <Container sx={{ paddingTop: "70px" }}>
              <Routes>
                <Route 
                exact 
                path="/" 
                element={<Home></Home>}></Route>
                <Route
                  exact
                  path="/prototyping"
                  element={<Prototyping />}
                ></Route>
                <Route
                  exact
                  path="/work-experience"
                  element={<work-experience />}
                ></Route>
                <Route
                  exact
                  path="/product-design"
                  element={<product-design />}
                ></Route>
                <Route exact path="/software" element={<software />}></Route>
                <Route exact path="/cad-3d-printing" element={<cad />}></Route>
                <Route exact path="/art" element={<art />}></Route>
              </Routes>
            </Container>

            <Footer
              isDarkMode={isDarkMode}
              setIsDarkMode={setIsDarkMode}
     
            />
            <ScrollToTop showBelow={200} theme={isDarkMode} />
          </CssBaseline>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
