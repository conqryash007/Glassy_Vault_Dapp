import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Title from "./Title";
import Navbar from "./Navbar";
import { Button, Card, CardContent, Grid, TextField } from "@material-ui/core";
import { useParams, Redirect } from "react-router-dom";
import compiledSchool from "./ethereum/build/School.json";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex ",
    margin: theme.spacing(1),
  },
  form: {
    display: "flex",
    lineHeight: "0",
    marginTop: "70px",
    justifyContent: "center",
  },

  insert: {
    marginTop: "150px",
    minWidth: "600px",
  },
}));

const SchoolEnrollForm = (props) => {
  const adr = useParams();
  let [name, changeName] = useState("");
  let [id, changeId] = useState("");
  let [father, changeFather] = useState("");
  let [mother, changeMother] = useState("");
  const classes = useStyles();
  let [web3, setweb3] = useState(props.web3);
  let [acc, setAcc] = useState(props.accounts);
  let [log, setlog] = useState(false);
  // useEffect(() => {
  //   const call = async () => {
  //     try {
  //     } catch (err) {
  //       console.log(err.message);
  //     }
  //   };
  //   if (web3) {
  //     call();
  //   }
  // }, [web3]);

  const submitForm = async (event) => {
    event.preventDefault();
    try {
      const instance = new web3.eth.Contract(compiledSchool.abi, adr.address);
      console.log(instance, name, id, father, mother);
      await instance.methods
        .createStudent(name, id, father, mother)
        .send({ from: acc[0] });
      setlog(true);
    } catch (err) {
      console.log(err.mesage);
    }
  };

  return (
    <div className={classes.root}>
      <Navbar />
      <div className={classes.form}>
        <Title>Student Registration Form </Title>
      </div>

      <Card className={classes.insert}>
        <CardContent>
          <form onSubmit={submitForm}>
            <Grid container spacing={1}>
              <Grid xs={12} sm={6} item>
                <TextField
                  label="NAME"
                  placeholder="Enter your name "
                  variant="outlined"
                  onChange={(e) => changeName(e.target.value)}
                  fullWidth
                  required
                />
              </Grid>

              <Grid xs={12} sm={6} item>
                <TextField
                  label="ID"
                  placeholder="Enter your gender"
                  variant="outlined"
                  onChange={(e) => changeId(e.target.value)}
                  fullWidth
                  required
                />
              </Grid>

              <Grid xs={12} item>
                <TextField
                  label="Father's Name"
                  placeholder="Enter Father's Name "
                  variant="outlined"
                  onChange={(e) => changeFather(e.target.value)}
                  fullWidth
                  required
                />
              </Grid>

              <Grid xs={12} item>
                <TextField
                  label="Mother's Name"
                  placeholder="Enter Mother's Name"
                  variant="outlined"
                  onChange={(e) => changeMother(e.target.value)}
                  fullWidth
                  required
                />
              </Grid>

              <Grid xs={3} item>
                <Button type="submit" variant="contained" color="primary">
                  SUBMIT
                </Button>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>
      {log ? <Redirect to={`/studentlist/${adr.address}`} /> : null}
    </div>
  );
};

export default SchoolEnrollForm;
