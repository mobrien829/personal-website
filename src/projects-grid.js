import React from "react";
import { Grid } from "@material-ui/core";
import ProjectCard from "./project-card";
import ProfilePic from "./IMG_0808.png";
import WaterPic from "./hydration-image.png";
import WeatherPic from "./weathering-hooks.png";
import "./App.css";

const ProjectGrid = () => {
  return (
    <Grid container spacing={4} style={{ padding: "24px" }}>
      <Grid key={1} item xs={12} sm={6} md={4} lg={4} xl={3}>
        <ProjectCard
          thumbnail={WeatherPic}
          projectName={"Weathering Hooks"}
          liveDemo={"https://hooks-n-weather.herokuapp.com/"}
          githubUrl={"https://github.com/mobrien829/react-weather-hooks"}
          description={
            "React hook based weather app using an Express server to route the weather requests. Built using React and Express with the Mapbox and WeatherStack APIs."
          }
        />
      </Grid>
      <Grid key={2} item xs={12} sm={6} md={4} lg={4} xl={3}>
        <ProjectCard
          thumbnail={WaterPic}
          projectName={"Hydration Helper"}
          liveDemo={"https://hydration-helper.herokuapp.com/"}
          githubUrl={"https://github.com/mobrien829/hydration-extension"}
          description={
            "React based webapp for tracking when and how many cups of water you've consumed in a day. Currently awaiting approval as a Chrome extension."
          }
        />
      </Grid>
      <Grid key={3} item xs={12} sm={6} md={4} lg={4} xl={3}>
        <ProjectCard
          projectName={"Homely Cooking"}
          description={
            "React, Express.js, and MongoDB powered app for sharing and tracking recipes you've made."
          }
          githubUrl={""}
          liveDemo={""}
        />
      </Grid>
    </Grid>
  );
};

export default ProjectGrid;
