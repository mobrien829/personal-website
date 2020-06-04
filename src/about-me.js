import React from "react";
import ProfilePic from "./IMG_0808.png";
import "./App.css";
import NavBar from "./navbar";
import { Typography } from "@material-ui/core";

const AboutPage = () => {
  return (
    <div>
      <NavBar />
      <div className="about-body">
        <div className="bio">
          <div className="profile-pic">
            <img id="prof-pic" src={ProfilePic} alt="" />
          </div>
          <div id="personal-bio">
            <Typography variant="h5">About Me</Typography>
            <Typography variant="p">
              I'm an aspiring full-stack web developer currently searching for a
              role that to launch my career. When I'm not improving my skills, I
              spend my time gaming and playing Ultimate Frisbee.
            </Typography>
          </div>
          <div id="skills"></div>
          <div id="links">
            <a href="https://www.github.com/mobrien829" className="github">
              Github
            </a>
            <a href="mailto:mobrien0829@gmail.com" className="email">
              Email me!
            </a>
            <a
              href="https://www.linkedin.com/in/mobrien829"
              className="linkedin"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
