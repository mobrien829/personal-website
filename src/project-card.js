import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardMedia,
  CardActions,
  CardContent,
  CardActionArea,
  Button,
  Typography,
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
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Michael O'Brien
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            project name
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          live demo
        </Button>
        <Button
          size="small"
          color="primary"
          href="https://github.com/mobrien829"
        >
          github
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProjectCard;
