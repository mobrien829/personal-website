import React from "react";
import logo from "./logo.svg";
import "./App.css";
import HomePage from "./home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AboutPage from "./about-me";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/about">
          <AboutPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
