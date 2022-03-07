import './App.css';

import React, { Component } from 'react';
import { Switch,Route,BrowserRouter as Router,withRoute, Redirect} from 'react-router-dom';
import login from './containers/login/login';



function App() {
  return (
    <div className="App">
      <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Redirect to="/Login" />
          </Route>
          <Route path="/Login" exact component={login} />
          </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;
