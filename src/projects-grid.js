import React from "react";
import { Grid } from "@material-ui/core";
import ProjectCard from "./project-card";
import ProfilePic from "./IMG_0808.png";
import WaterPic from "./hydration-image.png";

const ProjectGrid = () => {
  return (
    <Grid container spacing={4} style={{ padding: "24px" }}>
      <Grid key={1} item xs={12} sm={6} md={4} lg={4} xl={3}>
        <ProjectCard thumbnail={ProfilePic} />
      </Grid>
      <Grid key={2} item xs={12} sm={6} md={4} lg={4} xl={3}>
        <ProjectCard
          thumbnail={WaterPic}
          projectName={"Hydration Helper"}
          liveDemo={"https://hydration-helper.herokuapp.com/"}
          githubUrl={"https://github.com/mobrien829/hydration-extension"}
        />
      </Grid>
      <Grid key={3} item xs={12} sm={6} md={4} lg={4} xl={3}>
        <div>hello</div>
      </Grid>
    </Grid>
  );
};

export default ProjectGrid;
