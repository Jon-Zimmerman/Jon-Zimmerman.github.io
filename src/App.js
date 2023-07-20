import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { green } from "@mui/material/colors";
import { Container } from "@mui/system";
import NavBar from "./components/ui/navbar/Navbar.js";
import Footer from "./components/ui/footer/Footer.js";
import ScrollToTop from "./components/ui/scrollToTop/ScrollToTop.js";

import Home from "./components/pages/home/Home.tsx";
import RoboticsMentor from "./components/pages/projectPages/RoboticsMentor.js";
import AnigramArm from "./components/pages/projectPages/AnigramArm.js";
import HopperBot from "./components/pages/projectPages/HopperBot.js";
import SpotMicro from "./components/pages/projectPages/SpotMicro.js";
import CustomCNC from "./components/pages/projectPages/CustomCNC.js";
import SmartPrinter from "./components/pages/projectPages/SmartPrinter.js";
import Education from "./components/pages/projectPages/Education.js";
import Software from "./components/pages/projectPages/Software.js";
import Art from "./components/pages/projectPages/Art.js";

let initialTheme = false;
//If the the value from the local storage equals to dark
if (localStorage.getItem("theme") === "dark") {
  //Set initial theme value to true, that means dark theme
  initialTheme = true;
}

function App() {
  const [isDarkMode, setIsDarkMode] = useState(initialTheme);

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
            <NavBar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
            <Container sx={{ paddingTop: "70px" }}>
              <Routes>
                <Route exact path="/" element={<Home />}></Route>
                <Route
                  exact
                  path="/first-robotics-mentor"
                  element={<RoboticsMentor />}
                ></Route>
                <Route
                  exact
                  path="/granular-jamming-arm"
                  element={<AnigramArm />}
                ></Route>
                 <Route exact path="/hopperbot" element={<HopperBot />}></Route>
                <Route exact path="/spot-micro" element={<SpotMicro />}></Route>
                <Route exact path="/custom-cnc" element={<CustomCNC />}></Route>
                <Route
                  exact
                  path="/smart-printer"
                  element={<SmartPrinter />}
                ></Route>
                <Route exact path="/education" element={<Education />}></Route>
                <Route exact path="/software" element={<Software />}></Route>
                <Route exact path="/art" element={<Art />}></Route>
              </Routes>
            </Container>

            <Footer isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
            <ScrollToTop showBelow={200} theme={isDarkMode} />
          </CssBaseline>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
