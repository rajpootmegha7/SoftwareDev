import './App.css'

import React, { Component } from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import login from './containers/login/login'
import register from './containers/register/register'
import forgotpassword from './containers/forgotpassword/forgotpassword'
import About from './containers/about/about'
import Planner from './containers/planner/planner'
import Navigation from './components/navbar/navbar'
import Search from './containers/search/search'



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path="/">
              <Redirect to="/search" />
            </Route>
            <Route path="/Login" exact component={login} />
            <Route path="/Register" exact component={register} />
            <Route path="/Forgot-Password" exact component={forgotpassword} />
            <div>
              <Navigation />
              <Route path="/About" component={About} />
              <Route path="/Planner" component={Planner} />
              <Route path="/search" component={Search} />
            </div>
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;