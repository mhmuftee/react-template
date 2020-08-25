import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import IconButton from "@material-ui/core/IconButton";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import DetailsTwoToneIcon from '@material-ui/icons/DetailsTwoTone';


import userData from "../../res/users.json";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  container: {
    overflowY: "auto",
    maxHeight: 400,
  },
});

function createData(id, name, username, website, email) {
  return { id, name, username, website, email };
}

export default function DenseTable() {
  const classes = useStyles();
  const [rows, setrows] = React.useState([]);

  useEffect(() => {
    let rows = [];
    userData.forEach((data) => {
      rows.push(
        createData(data.id, data.name, data.username, data.website, data.email)
      );
    });
    setrows(rows);
  }, []);

  return (
    <TableContainer className={classes.container} component={Paper}>
      <Table
        stickyHeader
        className={classes.table}
        size="small"
        aria-label="Page 1 table"
      >
        <TableHead>
          <TableRow>
            <TableCell align="right">id</TableCell>
            <TableCell align="left">Name</TableCell>
            <TableCell align="left">User&nbsp;name</TableCell>
            <TableCell align="left">Email</TableCell>
            <TableCell align="left">Website</TableCell>
            <TableCell align="left">Button</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell align="right" component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="left">{row.name}</TableCell>
              <TableCell align="left">{row.username}</TableCell>
              <TableCell align="left">{row.email}</TableCell>
              <TableCell align="left">{row.website}</TableCell>
              <TableCell align="left"><IconButton><DetailsTwoToneIcon/></IconButton></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
