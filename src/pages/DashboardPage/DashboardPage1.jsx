import React, {useEffect} from "react";
import PropTypes from "prop-types";
import Drawer from "@material-ui/core/Drawer";
import Box from "@material-ui/core/Box";
import AppBar from "@material-ui/core/AppBar";
import { Tab, Tabs } from "@material-ui/core";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";

import Page1 from "pages/Page1";
import Page2 from "pages/Page2";

const drawerWidth = 170;

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={1}>{children}</Box>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: "#BEBAA7",
  },
  drawer: {
    width: drawerWidth,
    height: "100vh",
    backgroundColor: "#BEBAA7",
    flexShrink: 0,
    borderRight: `1px solid ${theme.palette.divider}`,
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: "#BEBAA7",
  },
  hidebutton: {
    width: drawerWidth - 20,
  },
  drawerContainer: {
    overflow: "auto",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(1),
    backgroundColor: "White",
  },
}));

export default function DashboardPage1(props) {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const toggleTab1 = () => {
    setValue(0);
  }

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const toggleDrawer = () => {
    if (open) handleDrawerClose();
    else handleDrawerOpen();
  };

  useEffect(() => {
      handleDrawerOpen();
      return () => handleDrawerClose();
  }, []);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton className={classes.hidebutton} onClick={toggleDrawer}>
            {open ? (
              <Typography>Hide menu</Typography>
            ) : (
              <Typography>Show menu</Typography>
            )}

            {open ? <ExpandMoreIcon /> : <ChevronLeftIcon />}
          </IconButton>
          <Typography variant="h6" noWrap>
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="top"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
          <Tabs
            orientation="vertical"
            variant="scrollable"
            value={value}
            onChange={handleChange}
            aria-label="Vertical tabs"
            className={classes.tabs}
          >
            <Tab label="Page 1" {...a11yProps(0)} />
            <Tab label="Page 2" {...a11yProps(1)} />
          </Tabs>
        </div>
      </Drawer>
      <main className={classes.content}>
        <Toolbar />
        <TabPanel value={value} index={0}>
          <Page1 />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Page2 changetab={toggleTab1} userid="not found"/>
        </TabPanel>
      </main>
    </div>
  );
}
