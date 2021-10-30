import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Title from "./Title";
import Navbar from "./Navbar";
import { Button, Card, CardContent, Grid } from "@material-ui/core";

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

const SchoolForm = (props) => {
  let [acc] = useState(props.accounts);
  let [contract] = useState(props.contract);
  let [done, setDone] = useState(true);
  let [addr, setAddr] = useState("");
  let [message, setMessage] = useState("");
  const whenSubmit = async (event) => {
    event.preventDefault();
    try {
      setMessage("Please wait untill your transaction is processed");
      await contract.methods.addSchool().send({ from: acc[0] });
      const arr = await contract.methods.getAllSchools().call();
      setMessage("This is your school's unique address");
      setAddr(arr[arr.length - 1]);
    } catch (err) {
      console.log(err.message);
    }
  };
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Navbar />
      <div className={classes.form}>
        <Title>School Registration Form </Title>
      </div>

      <Card className={classes.insert}>
        <CardContent>
          <form onSubmit={whenSubmit}>
            <Grid xs={1} item>
              <Button type="submit" variant="contained" color="primary">
                SUBMIT
              </Button>
            </Grid>
          </form>
          <div>
            <h1>{message}</h1>
            <p>{addr}</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SchoolForm;
