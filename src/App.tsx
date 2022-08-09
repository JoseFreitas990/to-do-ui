import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./features/ui/GlobalStyles";
import { light } from "./features/ui/Themes";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Landing, Login } from "pages";

const authenticated = false;

function App() {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={light}>
        <Router>
          <Routes>
            <Route path='/' element={<Landing />} />
            <Route path='/login' element={<Login />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
