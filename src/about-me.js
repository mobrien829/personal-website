import React from "react";
import ProfilePic from "./IMG_0808.png";
import "./App.css";
import NavBar from "./navbar";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Avatar, Box } from "@material-ui/core";
// import GitHubIcon from "@material-ui/icons/GitHub";
import { GitHub, Twitter, LinkedIn, MailOutline } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  profPic: {
    width: theme.spacing(16),
    height: theme.spacing(16),
  },
  bio: {
    textAlign: "center",
  },
  github: {
    color: "black",
  },
  twitter: {
    color: "#00ACEE",
  },
  linkedIn: {
    color: "#0E76A8",
  },
}));

const AboutPage = () => {
  const classes = useStyles();

  return (
    <>
      <NavBar />
      <Box display="flex" justifyContent="center" minHeight="100vh">
        <Box>
          <Typography variant="h5">About</Typography>
          <Avatar alt="img" src={ProfilePic} className={classes.profPic} />
          <Typography variant="p" className={classes.bio}>
            I'm an aspiring full-stack web developer currently searching for a
            role that to launch my career. When I'm not improving my skills, I
            spend my time gaming and playing Ultimate Frisbee.
          </Typography>
        </Box>
        <Box alignSelf="center" justifyContent="center">
          <a href="https://www.github.com/mobrien829" className="github">
            <GitHub className={classes.github} />
          </a>
          <a href="mailto:mobrien0829@gmail.com" className="email">
            <MailOutline />
          </a>
          <a href="https://www.linkedin.com/in/mobrien829" className="linkedin">
            <LinkedIn className={classes.linkedIn} />
          </a>
          <a href="https://www.twitter.com/mobrien829" className="twitter">
            <Twitter className={classes.twitter} />
          </a>
        </Box>
      </Box>
    </>
  );
};

export default AboutPage;
