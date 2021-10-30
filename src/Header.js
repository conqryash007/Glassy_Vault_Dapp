import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Collapse, IconButton, Toolbar } from "@material-ui/core";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  },

  app: {
    background: "none",
    fontFamily: "Nunito",
  },

  title: {
    flexGrow: "1",
    fontFamily: "Nunito",
    fontSize: "2rem",
  },

  appbarWrapper: {
    width: "90%",
    margin: "0 auto",
  },

  colourTitle: {
    color: "#FF0099",
  },

  boom: {
    color: "#FFFFFF",
  },

  contain: {
    justifyContent: "center",
    textAlign: " center",
  },

  goDown: {
    color: "#FF0099 ",
    fontSize: "9rem",
  },
}));

function Header() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar className={classes.app}>
        <Toolbar className={classes.appbarWrapper}>
          <h1 className={classes.title}>
            {" "}
            Glassy <span className={classes.colourTitle}>Vault</span>{" "}
          </h1>
        </Toolbar>
      </AppBar>

      <Collapse in={true}>
        <div>
          <div>
            <h1 className={classes.title}>
              {" "}
              <span className={classes.boom}>
                {" "}
                Welcome to your <br /> safest{" "}
              </span>{" "}
              <span className={classes.colourTitle}>
                {" "}
                Digital WareHouse{" "}
              </span>{" "}
            </h1>
            <IconButton className={classes.contain}>
              <KeyboardArrowDownIcon className={classes.goDown} />
            </IconButton>
          </div>
        </div>
      </Collapse>
    </div>
  );
}

export default Header;
