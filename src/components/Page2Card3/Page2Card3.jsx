import React from "react";
import { Typography } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import IconButton from "@material-ui/core/IconButton";

function DataCard(props) {

    return (
        <Card elevation={10}>
            <CardContent>
                <Typography variant="h6">Go back to Page 1 table</Typography>
                <IconButton onClick={() => props.changetab(0)}>Click</IconButton>
               
            </CardContent>
        </Card>
    );
}

export default DataCard;
