import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import BasicExample from "./components/navBar";
import AboutMe from "./components/aboutMe";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Resume from "./components/frankResume";

function App() {
  return (
    <React.StrictMode>
      <BasicExample />
      <div className="d-flex justify-content-center">
        <AboutMe />
      </div>
      {/* <Routes>
          <Route path="/resume">
            <Resume />
          </Route>

          <Route path="/">
            <AboutMe />
          </Route>
        </Routes>
       */}
    </React.StrictMode>
  );
}

export default App;
