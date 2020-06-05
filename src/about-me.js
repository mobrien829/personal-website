import React from "react";
import ProfilePic from "./IMG_0808.png";
import "./App.css";
import NavBar from "./navbar";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Avatar, Box } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  profPic: {
    width: theme.spacing(16),
    height: theme.spacing(16),
  },
}));

const AboutPage = () => {
  const classes = useStyles();

  return (
    <>
      <NavBar />
      <Box display="flex" flexDirection="column">
        <Box>
          <Typography variant="h5">About</Typography>
          <Avatar alt="img" src={ProfilePic} className={classes.profPic} />
          <Typography variant="p">
            I'm an aspiring full-stack web developer currently searching for a
            role that to launch my career. When I'm not improving my skills, I
            spend my time gaming and playing Ultimate Frisbee.
          </Typography>
        </Box>
        <Box justifyContent="center">
          <a href="https://www.github.com/mobrien829" className="github">
            Github
          </a>
          <a href="mailto:mobrien0829@gmail.com" className="email">
            Email me!
          </a>
          <a href="https://www.linkedin.com/in/mobrien829" className="linkedin">
            LinkedIn
          </a>
        </Box>
      </Box>
    </>
  );
};

export default AboutPage;
