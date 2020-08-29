
import Page1Table from "components/Page1Table";
import React, {useEffect} from "react";
import Drawer from "@material-ui/core/Drawer";
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
import TabPanel from 'components/TabPanel';

const drawerWidth = 170;

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

export default function TestPage(props) {

    const classes = useStyles();

    
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState(0);
  const [userid, setUserid] = React.useState('Not found');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const changetab = (tabIndex, userid='Not found') => {
    setValue(tabIndex);
    setUserid(userid);
  }
  return (
  <div>

      <Drawer>
      className={classes.drawer}
        variant="persistent"
        anchor="top"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
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
          <Page1 changetab={changetab}/>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Page2 changetab={changetab} userid={userid}/>
        </TabPanel>
      </main>

  </div>);
}
