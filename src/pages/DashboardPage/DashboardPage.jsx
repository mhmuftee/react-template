import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Drawer from "@material-ui/core/Drawer";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/styles";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100vw",
    "min-height": "100vh",
    "flex-direction": "column",
    display: "flex",
  },
  sidebar: {
    width: "20vw",
    "min-height": "100vh",
    backgroundColor: "white",
  },
  hidebutton: {
    right: "0",
  },
  drawer: {
    position : "relative",
    width: "20%"
  },
  header: {
    width: "80vw",
    "min-height": "100vh",
    height: "100%",
    backgroundColor: "red",
  },
}));

function DashboardPage() {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const toggleDrawer = () => {
      if(open)
        handleDrawerClose();
      else
        handleDrawerOpen();
  }

  return (
    <div className={classes.root}>
      <div className={classes.sidebar}>
        <AppBar position="relative">
          <Toolbar>
            <IconButton className={classes.hidebutton} onClick={toggleDrawer}>
            {open ? (
                <Typography>Hide menu</Typography>
              ) : (
                <Typography>Show menu</Typography>
              )}
              
              {open ? (
                <ExpandMoreIcon />
              ) : (
                <ChevronLeftIcon />
              )}
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="bottom"
          open={open}
        >
          <List>
            {["Page 1", "Page 2"].map((text, index) => (
              <ListItem button key={text}>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </Drawer>
      </div>
      <div className={classes.header}>
          <AppBar position="relative">
              <Toolbar>

              </Toolbar>
          </AppBar>
      </div>
    </div>
  );
}

export default DashboardPage;
