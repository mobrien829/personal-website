import React from "react";
import { useHistory } from "react-router-dom";
import ProjectGrid from "./projects-grid";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {},
}));

const HomePage = () => {
  const classes = useStyles();

  let history = useHistory();
  const goToAbout = () => {
    history.push("/about");
  };
  return (
    <div>
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            {/* Home Page<div onClick={goToAbout}>About Me</div> */}
            <Typography variant="h6">Home</Typography>
            <Typography variant="h6">About</Typography>
          </Toolbar>
        </AppBar>
      </div>
      <ProjectGrid />
    </div>
  );
};

export default HomePage;
