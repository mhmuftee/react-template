import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import Drawer from "@material-ui/core/Drawer";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { withRouter } from "react-router-dom";

const drawerWidth = 120;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: "grey",
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(0),
  },
}));

const MainDrawer = (props) => {
  const { history } = props;
  const classes = useStyles();

  const drawerItemList = [
    {
      text: "Main page",
      onClick: () => history.push("/mainpage"),
    },
    {
      text: "Test page",
      onClick: () => history.push("/testpage"),
    },
  ];

  return (
    <Drawer
      className={classes.drawer}
      variant="permanent"
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <div className={classes.toolbar} />
      <List>
        {drawerItemList.map((item, index) => {
          const { text, onClick } = item;
          return (
            <ListItem
              onClick={onClick}
              button
              key={text}
              className={classes.listItem}
            >
              <ListItemText primary={text} />
            </ListItem>
          );
        })}
      </List>
    </Drawer>
  );
};

export default withRouter(MainDrawer);
