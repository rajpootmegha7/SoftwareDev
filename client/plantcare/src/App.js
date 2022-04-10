import './App.css'

import React, { Component, useState } from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import Login from './containers/login/login'
import Register from './containers/register/register'
import forgotpassword from './containers/forgotpassword/forgotpassword'
import Search from './containers/search/search'
import About from './containers/about/about'
import Planner from './containers/planner/planner'
import Navigation from './components/navbar/navbar'
import useToken from './components/useToken/useToken';
import ProtectedRoute from './components/protectedRoute/protectedRoute'


function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <div className="App">
        <Switch>
            <Route path="/Login" exact component={Login} />
            <Route path="/Register" exact component={Register} />
            <Route path="/Forgot-Password" exact component={forgotpassword} />
          <div>
          <Navigation/>
              <Route path="/About" component={About} />
              <ProtectedRoute path="/Planner" component={Planner} />
              <ProtectedRoute path="/Search" component={Search} /> 
          </div> 
        </Switch>
      </div>
      </BrowserRouter>
    </div>
  );
}
export default App;