import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Route, Switch, Redirect } from "react-router-dom";

import MainPage from "pages/MainPage";
import TestPage from "pages/TestPage";
import MainDrawer from "components/MainDrawer";

const drawerWidth = 120;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    zIndex: theme.zIndex.drawer + 1,
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(0),
  },
}));

export default function App(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <MainDrawer />
      <Switch>
        <Redirect exact from="/" to="/mainpage" />
        <Route
          exact
          path="/mainpage"
          render={(props) => <MainPage {...props} />}
        />
        <Route
          exact
          path="/testpage"
          render={(props) => <TestPage {...props} />}
        />
      </Switch>
    </div>
  );
}
