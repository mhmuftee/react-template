import React from "react";
import { Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

import WelcomePage from "pages/WelcomePage";
import DashboardPage from "pages/DashboardPage";

const useStyles = makeStyles(() => ({
    paperStyles: {
        "min-height": "100vh",
        overflow: "hidden",
    },
}));

function ContentSection() {
    const classes = useStyles();

    return (
        <Paper className={classes.paperStyles}>
            <DashboardPage />
        </Paper>
    );
}

export default ContentSection;
