import React from "react";
import { Button, Grid } from "@material-ui/core";

const ProjectGrid = () => {
  return (
    // <Button variant="contained" color="primary">
    //   Material Button Demo
    // </Button>
    <Grid container spacing={4} style={{ padding: "24px" }}>
      <Grid key={1} item xs={12} sm={6} md={4} lg={4} xl={3}>
        <div>hello</div>
      </Grid>
      <Grid key={2} item xs={12} sm={6} md={4} lg={4} xl={3}>
        <div>hello</div>
      </Grid>
    </Grid>
  );
};

export default ProjectGrid;
