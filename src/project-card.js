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

const useStyles = makeStyles({
  card: { maxWidth: 345 },
  media: { height: 140 },
});

const ProjectCard = ({
  thumbnail,
  projectName,
  description,
  liveDemo,
  githubUrl,
}) => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia className={classes.media} image={thumbnail} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {projectName}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" href={liveDemo}>
          live demo
        </Button>
        <Button size="small" color="primary" href={githubUrl}>
          github
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProjectCard;
