import "./App.css";
import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import SchoolForm from "./SchoolForm";
import SchoolList from "./SchoolList";
import StudentList from "./StudentList";
// import Tenth from "./Tenth";
// import Twelfth from "./Twelfth";
import ReportCardten from "./ReportCardten";
import ReportCardtwel from "./ReportCardtwel";
import Dashboard from "./Dashboard";
import StudentEnrollForm from "./StudentEnrollForm";
import TenthEnrollForm from "./TenthEnrollForm";
import TwelfthEnrollForm from "./TwelfthEnrollForm";

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
    const acc = await w.eth.getAccounts();
    const createSc = new w.eth.Contract(
      compiledCreateSchool.abi,
      "0x67b1a6400E0E1735Ad8876cE28fE09150fd3E1d7"
    );
    this.setState({ accounts: acc, createSchool: createSc, web3: w });
    // console.log(this.state);
  };
  render() {
    return (
      <Switch>
        <Route exact path="/" component={() => <Home />} />
        <Route
          path="/schoolform"
          component={() => (
            <SchoolForm
              web3={this.state.web3}
              contract={this.state.createSchool}
              accounts={this.state.accounts}
            />
          )}
        />
        <Route
          path="/schoollist"
          component={() => (
            <SchoolList
              contract={this.state.createSchool}
              accounts={this.state.accounts}
            ></SchoolList>
          )}
        />
        <Route
          exact
          path="/studentlist/:address"
          component={() => (
            <StudentList
              web3={this.state.web3}
              contract={this.state.createSchool}
              accounts={this.state.accounts}
            />
          )}
        />
        <Route
          exact
          path="/studentlist/:address/:id/tenthReport"
          component={() => (
            <ReportCardten
              accounts={this.state.accounts}
              web3={this.state.web3}
            />
          )}
        />
        <Route
          exact
          path="/studentlist/:address/:id/twelthReport"
          component={() => (
            <ReportCardtwel
              accounts={this.state.accounts}
              web3={this.state.web3}
            />
          )}
        />
        <Route
          exact
          path="/studentlist/:address/dashboard"
          component={Dashboard}
        />
        <Route
          exact
          path="/studentlist/:address/enrollStudent"
          component={() => (
            <StudentEnrollForm
              web3={this.state.web3}
              contract={this.state.createSchool}
              accounts={this.state.accounts}
            />
          )}
        />
        <Route
          exact
          path="/studentlist/:address/tenthResult"
          component={() => (
            <TenthEnrollForm
              web3={this.state.web3}
              accounts={this.state.accounts}
            />
          )}
        />
        <Route
          exact
          path="/studentlist/:address/twelthResult"
          component={() => (
            <TwelfthEnrollForm
              web3={this.state.web3}
              accounts={this.state.accounts}
            />
          )}
        />
      </Switch>
    );
  }
}

export default App;
