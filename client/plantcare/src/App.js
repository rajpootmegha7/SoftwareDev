import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import React, { Component } from 'react'
import { Switch,Route,BrowserRouter as Router,withRoute, Redirect} from 'react-router-dom'
import login from './containers/login/login'
import register from './containers/register/register'
import forgotpassword from './containers/forgotpassword/forgotpassword'
import Search from './containers/search/search'
import Navigation from './components/navbar/navbar'
import About from './containers/about/about'
import Planner from './containers/planner/planner'



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
          <div>
            <Navigation/>
              <Route path="/About" component={About} />
              <Route path="/Planner" component={Planner} />
              <Route path="/Search" component={Search} /> 
          </div> 
        </Switch>
      </div>
      </Router>
    </div>
  );
}

export default App;