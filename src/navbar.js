import React from "react";
import { useHistory } from "react-router-dom";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  aboutButton: {
    flexGrow: 1,
  },
  pageTitle: {
    flexGrow: 1,
  },
}));

const NavBar = () => {
  const classes = useStyles();

  let history = useHistory();

  const goToHome = () => {
    history.push("/");
  };

  const goToAbout = () => {
    history.push("/about");
  };

  return (
    <div className={classes.root}>
      <AppBar position="sticky">
        <Toolbar>
          <Typography
            variant="h6"
            className={classes.pageTitle}
            onClick={goToHome}
          >
            Home
          </Typography>
          <Typography
            className={classes.aboutButton}
            variant="h6"
            align="right"
            onClick={goToAbout}
          >
            About Me
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
