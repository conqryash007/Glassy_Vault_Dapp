import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Title from "./Title";
import Navbar from "./Navbar";
import { Button, Card, CardContent, Grid, TextField } from "@material-ui/core";
import { useParams } from "react-router-dom";
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

const TwelfthEnrollForm = (props) => {
  const add = useParams();
  const classes = useStyles();
  let [web3] = useState(props.web3);
  let [acc] = useState(props.accounts);
  let [id, setid] = useState("");
  let [physics, setphysics] = useState(-1);
  let [chemistry, setchemistry] = useState(-1);
  let [biology, setbiology] = useState(-1);
  let [maths, setmaths] = useState(-1);
  let [english, setenglish] = useState(-1);
  let [computerScience, setcomputerScience] = useState(-1);
  let [history, sethistory] = useState(-1);
  let [geography, setgeography] = useState(-1);
  let [politicalScience, setpoliticalScience] = useState(-1);
  let [economics, seteconomics] = useState(-1);
  let [businessStudies, setbusinessStudies] = useState(-1);
  let [physicaledu, setphysicaledu] = useState(-1);

  let arr = [
    "physics",
    "chemistry",
    "biology",
    "maths",
    "computerScience",
    "history",
    "geography",
    "politicalScience",
    "economics",
    "businessStudies",
    "physicaledu",
  ];

  const justSubmit = async (event) => {
    event.preventDefault();
    try {
      console.log(physics, chemistry, biology, maths, english);
      const instance = new web3.eth.Contract(compiledSchool.abi, add.address);
      await instance.methods
        .setTwelthResult(id, [
          physics,
          chemistry,
          biology,
          maths,
          english,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
        ])
        .send({ from: acc[0] });
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div className={classes.root}>
      <Navbar />
      <div className={classes.form}>
        <Title>12th Marks Form </Title>
      </div>
      <Card className={classes.insert}>
        <h3>
          Enter the marks of respective subject and put -1 if subject not
          aplicable
        </h3>
        <CardContent>
          <form onSubmit={justSubmit}>
            <Grid container spacing={1}>
              <Grid xs={12} item>
                <TextField
                  label="id"
                  placeholder="Enter your Roll Id "
                  variant="outlined"
                  fullWidth
                  required
                  onChange={(e) => setid(e.target.value)}
                />
              </Grid>
              <Grid xs={12} item>
                <TextField
                  label={arr[0]}
                  placeholder={`Enter your ${arr[0]} marks `}
                  variant="outlined"
                  fullWidth
                  onChange={(e) => setphysics(e.target.value)}
                />
              </Grid>
              <Grid xs={12} item>
                <TextField
                  label={arr[1]}
                  placeholder={`Enter your ${arr[1]} marks `}
                  variant="outlined"
                  fullWidth
                  onChange={(e) => setchemistry(e.target.value)}
                />
              </Grid>
              <Grid xs={12} item>
                <TextField
                  label={arr[2]}
                  placeholder={`Enter your ${arr[2]} marks `}
                  variant="outlined"
                  fullWidth
                  onChange={(e) => setbiology(e.target.value)}
                />
              </Grid>
              <Grid xs={12} item>
                <TextField
                  label={arr[3]}
                  placeholder={`Enter your ${arr[3]} marks `}
                  variant="outlined"
                  fullWidth
                  onChange={(e) => setmaths(e.target.value)}
                />
              </Grid>
              <Grid xs={12} item>
                <TextField
                  label="english"
                  placeholder={`Enter your english marks `}
                  variant="outlined"
                  fullWidth
                  onChange={(e) => setenglish(e.target.value)}
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
};

export default TwelfthEnrollForm;
