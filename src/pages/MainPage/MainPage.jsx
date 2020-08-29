import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Collapse from "@material-ui/core/Collapse";
import CssBaseline from "@material-ui/core/CssBaseline";
import List from "@material-ui/core/List";
import { Tab, Tabs } from "@material-ui/core";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";

import Page1 from "pages/Page1";
import Page2 from "pages/Page2";
import TabPanel from "components/TabPanel";

const drawerWidth = 120;

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    height: "100vh",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    marginLeft: 120,
  },
  drawerContainer: {
    overflow: "auto",
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing(1),
    backgroundColor: "white",
  },
}));

export default function MainPage(props) {
  const classes = useStyles();

  const [open, setOpen] = React.useState(true);
  const [tabindex, setTabIndex] = React.useState(0);
  const [username, setUsername] = React.useState("Not found");

  const clickTab = (event, index) => {
    setTabIndex(index);
  };

  const clickMenu = () => {
    setOpen(!open);
  };

  const changeTab = (tabIndex, username = "Not found") => {
    setTabIndex(tabIndex);
    setUsername(username);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.toolbar} />
        <div className={classes.drawerContainer}>
          <List>
            <ListItem button onClick={clickMenu}>
              <ListItemText primary="Menu" />
              {open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Tabs
                orientation="vertical"
                variant="scrollable"
                value={tabindex}
                onChange={clickTab}
                aria-label="Vertical tabs"
                className={classes.tabs}
              >
                <Tab label="Page 1" {...a11yProps(0)} />
                <Tab label="Page 2" {...a11yProps(1)} />
              </Tabs>
            </Collapse>
          </List>
        </div>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <TabPanel value={tabindex} index={0}>
          <Page1 changetab={changeTab} />
        </TabPanel>
        <TabPanel value={tabindex} index={1}>
          <Page2 changetab={changeTab} username={username} />
        </TabPanel>
      </main>
    </div>
  );
}
