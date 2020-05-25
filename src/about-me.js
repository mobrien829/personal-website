import React from "react";
import { useHistory } from "react-router-dom";

const AboutPage = () => {
  let history = useHistory();

  const returnToHome = () => {
    history.push("/");
  };
  return (
    <div>
      About Page
      <div onClick={returnToHome}>Return to Home</div>
    </div>
  );
};

export default AboutPage;
