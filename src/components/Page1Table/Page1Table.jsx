import React, { useEffect } from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import IconButton from "@material-ui/core/IconButton";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";

import { connect } from "react-redux";
import { fetchPosts } from "../../actions/postAction";

import Grid from "@material-ui/core/Grid";
import DetailsTwoToneIcon from "@material-ui/icons/DetailsTwoTone";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  table: {
    minWidth: 650,
  },
  container: {
    overflowY: "auto",
    maxHeight: 400,
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.black, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.black, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(0),
      width: "100%",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  searchresult: {
    color: "yellow",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "40ch",
    },
  },
}));

/*
function PrintValue(props) {
  let { searchterm, value } = props;

  const classes = useStyles();

  const res = value.split(".");

  console.log(searchterm);

  return (
    <div>
      {res[0]}
      <div className={classes.searchresult}>{res[1]}</div>
    </div>
  );
} */

function Page1Table(props) {
  const classes = useStyles();
  const [filter, setFilter] = React.useState("");

  const handleSearch = (e) => {
    setFilter(e.target.value);
  };

  const rows = props.rows;
  const fetch = props.fetchPosts;

  useEffect(() => {
    fetch();
  }, [fetch]);

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid item xs={6}>
          <Paper>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                onChange={handleSearch}
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ "aria-label": "search" }}
              />
            </div>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <TableContainer className={classes.container} component={Paper}>
            <Table
              stickyHeader
              className={classes.table}
              size="small"
              aria-label="Page 1 table"
            >
              <TableHead>
                <TableRow hover={true}>
                  <TableCell align="right">id</TableCell>
                  <TableCell align="left">Name</TableCell>
                  <TableCell align="left">User&nbsp;name</TableCell>
                  <TableCell align="left">Email</TableCell>
                  <TableCell align="left">Website</TableCell>
                  <TableCell align="left">Button</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map(
                  (row) =>
                    (row.id.toString().includes(filter) ||
                      row.name.includes(filter) ||
                      row.username.includes(filter) ||
                      row.email.includes(filter) ||
                      row.website.includes(filter)) && (
                      <TableRow key={row.id}>
                        <TableCell align="right" component="th" scope="row">
                          {row.id}
                        </TableCell>
                        <TableCell align="left">{row.name}</TableCell>
                        <TableCell align="left">{row.username}</TableCell>
                        <TableCell align="left">{row.email}</TableCell>
                        <TableCell align="left">{row.website}</TableCell>
                        <TableCell align="left">
                          <IconButton
                            onClick={() => props.changetab(1, row.name)}
                          >
                            <DetailsTwoToneIcon />
                          </IconButton>
                        </TableCell>
                      </TableRow>
                    )
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </div>
  );
}

const mapStateToProps = state => ({
  rows: state.posts.items,
});

export default connect(mapStateToProps, { fetchPosts })(Page1Table);
