import React from "react";
import { useHistory } from "react-router-dom";
import ProjectGrid from "./projects-grid";
const HomePage = () => {
  let history = useHistory();
  const goToAbout = () => {
    history.push("/about");
  };
  return (
    <div>
      <div>
        Home Page<div onClick={goToAbout}>About Me</div>
      </div>
      <ProjectGrid />
    </div>
  );
};

export default HomePage;
