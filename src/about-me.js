import React from "react";
import { useHistory } from "react-router-dom";
import ProfilePic from "./IMG_0808.png";
import "./App.css";

const AboutPage = () => {
  let history = useHistory();

  const returnToHome = () => {
    history.push("/");
  };
  return (
    <div>
      About Page
      <div onClick={returnToHome}>Return to Home</div>
      <div className="about-body">
        <div className="bio">
          <div className="profile-pic">
            <img id="prof-pic" src={ProfilePic} alt="" />
          </div>
          <div id="personal-bio">
            <h4>Blurb</h4>
            <p>things about me</p>
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
