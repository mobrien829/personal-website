import React from "react";
import { useHistory } from "react-router-dom";

const HomePage = () => {
  let history = useHistory();
  const goToAbout = () => {
    history.push("/about");
  };
  return (
    <div>
      Home Page<div onClick={goToAbout}>About Me</div>
    </div>
  );
};

export default HomePage;
