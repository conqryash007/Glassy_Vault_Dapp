import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  app: {
    fontFamily: "Nunito",
  },
  appbarWrapper: {
    width: "90%",
    margin: "0 auto",
  },

  colourTitle: {
    color: "#FF0099",
  },

  title: {
    flexGrow: "1",
    fontFamily: "Nunito",
    fontSize: "2rem",
  },
}));

const Navbar = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar className={classes.app}>
        <Toolbar className={classes.appbarWrapper}>
          <Link to={"/"}>
            <h1 className={classes.title}>
              {" "}
              Glassy <span className={classes.colourTitle}>Vault.</span>{" "}
            </h1>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
