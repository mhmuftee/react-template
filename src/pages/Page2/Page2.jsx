import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import Page2Card1 from "components/Page2Card1";
import Page2Card2 from "components/Page2Card2";
import Page2Card3 from "components/Page2Card3";
import Page1Table from "components/Page1Table";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  user: {
    padding: theme.spacing(2),
    textAlign: 'left',
    color: theme.palette.text.secondary,
  }
}));

export default function Page2(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Paper className={classes.user}>
            UserID: {props.userid}
            </Paper>
        </Grid>
        <Grid item xs={4}>
          <Page2Card1/>
        </Grid>
        <Grid item xs={4}>
          <Page2Card2/>
        </Grid>
        <Grid item xs={4}>
          <Page2Card3 goBack={props.changetab}/>
        </Grid>
        <Grid item xs={12}>
          <Page1Table/>
        </Grid>
      </Grid>
    </div>
  );
}
