import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";
import Header from "./Header";
import Enroll from "./Enroll";
import School from "./School";

import getweb3 from "./ethereum/getweb3";
import compiledCreateSchool from "./ethereum/build/CreateSchool.json";

const useStyles = (theme) => ({
  root: {
    minHeight: "100vh",
    backgroundImage: `url(${process.env.PUBLIC_URL + "/asset/a.jpg "})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },

  draw: {
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    display: "flex",
  },
});

class Home extends Component {
  state = {
    web3: null,
    accounts: [],
    createSchool: null,
  };
  componentDidMount = async () => {
    const w = await getweb3();
    this.state.web3 = w;
    this.state.accounts = await w.eth.getAccounts();
    this.state.createSchool = new w.eth.Contract(
      compiledCreateSchool.abi,
      "0x67b1a6400E0E1735Ad8876cE28fE09150fd3E1d7"
    );
    console.log(this.state);
  };
  render() {
    const { classes } = this.props;
    return (
      <div>
        <div className={classes.root}>
          <CssBaseline />
          <Header />
          <div className={classes.draw}>
            <Enroll />
            <School />
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(useStyles)(Home);
