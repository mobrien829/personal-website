import React from "react";
import ProjectGrid from "./projects-grid";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import NavBar from "./navbar";

const HomePage = () => {
  return (
    <div>
      <NavBar />
      <ProjectGrid />
    </div>
  );
};

export default HomePage;
