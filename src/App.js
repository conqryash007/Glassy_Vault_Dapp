import "./App.css";
import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import SchoolForm from "./SchoolForm";
import SchoolList from "./SchoolList";
import StudentList from "./StudentList";
import Tenth from "./Tenth";
import Twelfth from "./Twelfth";
import Dashboard from "./Dashboard";
import StudentEnrollForm from "./StudentEnrollForm";
import TenthEnrollForm from "./StudentEnrollForm";
import TwelfthEnrollForm from "./StudentEnrollForm";

import getweb3 from "./ethereum/getweb3";
import compiledCreateSchool from "./ethereum/build/CreateSchool.json";

class App extends Component {
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
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/schoolform" component={SchoolForm} />
        <Route path="/schoollist" component={SchoolList} />
        <Route path="/studentlist" component={StudentList} />
        <Route path="/tenth" component={Tenth} />
        <Route path="/twelfth" component={Twelfth} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/studentenrollform" component={StudentEnrollForm} />
        <Route path="/tenthenrollform" component={TenthEnrollForm} />
        <Route path="/twelfthenrollform" component={TwelfthEnrollForm} />
      </Switch>
    );
  }
}

export default App;
