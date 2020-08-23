import React from "react";
import { Typography } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

function DataCard(props) {
    return (
        <Card elevation={10}>
            <CardContent>
                <Typography variant="h6">details</Typography>
                <Typography variant="body1">
                    This is a sample for grid layout. Here 5 grids are being used.
                </Typography>
               
            </CardContent>
        </Card>
    );
}

export default DataCard;
