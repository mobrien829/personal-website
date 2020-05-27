import React from "react";
import { Grid } from "@material-ui/core";
import ProjectCard from "./project-card";

const ProjectGrid = () => {
  return (
    <Grid container spacing={4} style={{ padding: "24px" }}>
      <Grid key={1} item xs={12} sm={6} md={4} lg={4} xl={3}>
        <ProjectCard />
      </Grid>
      <Grid key={2} item xs={12} sm={6} md={4} lg={4} xl={3}>
        <div>hello</div>
      </Grid>
      <Grid key={3} item xs={12} sm={6} md={4} lg={4} xl={3}>
        <div>hello</div>
      </Grid>
    </Grid>
  );
};

export default ProjectGrid;
