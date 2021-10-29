import './App.css';
import React from 'react';
import { Route , Switch } from 'react-router-dom';
import Home from './Home';
import SchoolForm from './SchoolForm';
import SchoolList from './SchoolList';
import StudentList from './StudentList';
import Tenth from './Tenth';
import Twelfth from './Twelfth';
import Dashboard from './Dashboard';
import StudentEnrollForm from './StudentEnrollForm';
import TenthEnrollForm from './StudentEnrollForm';
import TwelfthEnrollForm from './StudentEnrollForm';




function App() {

  
  return (
    <Switch>
      <Route  exact path = '/' component = {Home} />
      <Route  path = '/schoolform' component = {SchoolForm} />
      <Route  path = '/schoollist' component = {SchoolList} />
      <Route  path = '/studentlist' component = {StudentList}/>
      <Route  path = '/tenth' component = {Tenth} />
      <Route  path = '/twelfth' component = {Twelfth}/>
      <Route   path= '/dashboard' component = {Dashboard}/>
      <Route  path = '/studentenrollform' component = {StudentEnrollForm} />
      <Route  path = '/tenthenrollform' component = {TenthEnrollForm} />
      <Route  path = '/twelfthenrollform' component = {TwelfthEnrollForm} />
    </Switch>

  );
}

export default App;
