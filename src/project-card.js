import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardMedia,
  CardActions,
  CardContent,
  CardActionArea,
  Button,
} from "@material-ui/core";
import ProfilePic from "./IMG_0808.png";

const useStyles = makeStyles({
  card: { maxWidth: 345 },
  media: { height: 140 },
});

const ProjectCard = () => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia className={classes.media} image={ProfilePic} />
        <CardContent></CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ProjectCard;
