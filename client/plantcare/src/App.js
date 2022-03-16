import './App.css';

import React, { Component } from 'react';
import { Switch,Route,BrowserRouter as Router,withRoute, Redirect} from 'react-router-dom';
import login from './containers/login/login';
import register from './containers/register/register';
import forgotpassword from './containers/forgotpassword/forgotpassword';
import dashboard from './containers/dashboard/dashboard';



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
          <Route path="/Register" exact component={register} />
          <Route path="/Forgot-Password" exact component={forgotpassword} />
          <Route path="/Dashboard" exact component={dashboard} />
          </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;
