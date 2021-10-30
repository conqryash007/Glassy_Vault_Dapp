import React, { useEffect, useState } from "react";
import Navbar from "./Navbar.js";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  main: {
    backgroundColor: "#AEB6BF ",
    backgroundImage: `url(${process.env.PUBLIC_URL + "/asset/d.jpg "})`,
    minHeight: "200vh",
  },
  root: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(16),
    },
  },

  grid: {
    width: "100%",
    margin: "0px",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
  },
  paper: {
    marginInlineStart: "100px",
    marginTop: "100px",
    padding: theme.spacing(10),
    backgroundColor: "#1976d2",
    overflow: "auto",
  },
  text: {
    color: "#ffffff",
    justifyContent: "space-evenly",
    wordWrap: "break-word",
  },

  title: {
    justifyContent: "center",
    marginTop: "90px",
    display: "flex",
    flexWrap: "wrap",
    color: "#ffffff",
  },
}));

const SchoolList = (props) => {
  let [schoolList, setschoolList] = useState([]);
  let [cont, setcont] = useState(props.contract);

  const createSchoolCard = () => {
    return schoolList.map((curr, i) => {
      return (
        <Paper elevation={20} className={classes.paper} md={4} key={i}>
          <Typography
            align="center"
            className={classes.text}
            component="p"
            variant="h5"
          >
            {curr}
          </Typography>
          <Button variant="contained" href={`/studentlist/${curr}`}>
            VIEW STUDENTS
          </Button>
        </Paper>
      );
    });
  };

  useEffect(() => {
    console.log(cont);
    const call = async () => {
      try {
        const add = await cont.methods.getAllSchools().call();
        setschoolList(add);
      } catch (err) {
        console.log(err.message);
      }
    };
    if (typeof cont !== null) {
      if (typeof cont?.methods !== null) {
        call();
      }
    }
  }, [cont]);

  const classes = useStyles();
  return (
    <div className={classes.main}>
      <Navbar />
      <div className={classes.title}>
        <h1> 🏠 List Of Schools </h1>
      </div>

      <div className={classes.root}>
        <Grid container spacing={3} className={classes.grid}>
          <Grid item>
            <div className={classes.root}>
              <Paper elevation={20} className={classes.paper} md={4}>
                <Typography
                  align="center"
                  className={classes.text}
                  component="p"
                  variant="h5"
                >
                  LR.DAV SCHOOL
                </Typography>
                <Button variant="contained" href="/studentlist">
                  VIEW STUDENTS
                </Button>
              </Paper>

              {createSchoolCard()}
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default SchoolList;
