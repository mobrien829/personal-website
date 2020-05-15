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
      <button onClick={returnToHome}>return home</button>
    </div>
  );
};

export default AboutPage;
