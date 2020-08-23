import React from "react";
import { makeStyles } from "@material-ui/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";

import carImage from "../../res/images/cards/tesla-car.jpg";

const useStyles = makeStyles(() => ({
  media: {
    height: 130,
  },
  firstLabelStyles: {
    "margin-top": "10px",
  },
}));

function DataCard(props) {
  const classes = useStyles();

  return (
    <Card elevation={10}>
      <CardMedia
        className={classes.media}
        image={carImage}
        title="A car"
      />
    </Card>
  );
}

export default DataCard;
