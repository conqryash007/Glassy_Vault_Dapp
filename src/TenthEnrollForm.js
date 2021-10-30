import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Title from "./Title";
import Navbar from "./Navbar";
import { Button, Card, CardContent, Grid, TextField } from "@material-ui/core";
import compiledSchool from "./ethereum/build/School.json";
import { useParams } from "react-router-dom";

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

function TenthEnrollForm(props) {
  const add = useParams();
  let [id, setid] = useState("");
  let [maths, setmaths] = useState("-1");
  let [socials, setsocials] = useState("-1");
  let [science, setscience] = useState("-1");
  let [hindi, sethindi] = useState("-1");
  let [english, setenglish] = useState("-1");
  let [web3] = useState(props.web3);
  let [acc] = useState(props.accounts);
  const handler1 = (event) => {
    setmaths(event.target.value);
  };
  const handler2 = (event) => {
    setsocials(event.target.value);
  };
  const handler3 = (event) => {
    setscience(event.target.value);
  };
  const handler4 = (event) => {
    sethindi(event.target.value);
  };
  const handler5 = (event) => {
    setenglish(event.target.value);
  };
  const handler6 = (event) => {
    setid(event.target.value);
  };

  const justSubmit = async (event) => {
    event.preventDefault();
    try {
      const sum = +maths + +english + +hindi + +science + +socials;
      console.log(maths, english, hindi, science, socials, String(sum));
      const instance = new web3.eth.Contract(compiledSchool.abi, add.address);
      await instance.methods
        .setTenthResult(id, [maths, english, hindi, science, socials, sum])
        .send({ from: acc[0] });
    } catch (err) {
      console.log(err.message);
    }
  };

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Navbar />
      <div className={classes.form}>
        <Title>10th Marks Form </Title>
      </div>

      <Card className={classes.insert}>
        <CardContent>
          <form onSubmit={justSubmit}>
            <Grid container spacing={1}>
              <Grid xs={12} item>
                <TextField
                  type="text"
                  label="Roll id."
                  placeholder="Enter your Roll no."
                  variant="outlined"
                  fullWidth
                  onChange={handler6}
                  required
                />
              </Grid>

              <Grid xs={12} item>
                <TextField
                  type="text"
                  label="Maths Score"
                  placeholder="Enter your Maths Score "
                  variant="outlined"
                  fullWidth
                  required
                  onChange={handler1}
                />
              </Grid>

              <Grid xs={12} item>
                <TextField
                  type="text"
                  label="Science Score"
                  placeholder="Enter your Science Score"
                  variant="outlined"
                  fullWidth
                  required
                  onChange={handler3}
                />
              </Grid>

              <Grid xs={12} item>
                <TextField
                  type="text"
                  label="Social Studies Score"
                  placeholder="Enter your Social Studies Score"
                  variant="outlined"
                  fullWidth
                  onChange={handler2}
                  required
                />
              </Grid>

              <Grid xs={12} item>
                <TextField
                  type="text"
                  label="Hindi Score"
                  placeholder="Enter your Sanskrit/Hindi Score"
                  variant="outlined"
                  fullWidth
                  required
                  onChange={handler4}
                />
              </Grid>

              <Grid xs={12} item>
                <TextField
                  type="text"
                  label="English Score"
                  placeholder="Enter your English Score"
                  variant="outlined"
                  onChange={handler5}
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
    </div>
  );
}

export default TenthEnrollForm;
