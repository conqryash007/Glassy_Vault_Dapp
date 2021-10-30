import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";
import Header from "./Header";
import Enroll from "./Enroll";
import School from "./School";

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
