import './App.css'

import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import Login from './containers/login/login'
import Register from './containers/register/register'
import forgotpassword from './containers/forgotpassword/forgotpassword'
import About from './containers/about/about'
import Navigation from './components/navbar/navbar'
import ProtectedRoute from './components/protectedRoute/protectedRoute'
import Search from './containers/search/search'
import Logout from './containers/Logout/Logout'
import Planner from './containers/Planner/Planner'

/*
App.js handles all the routes and redirections of the websites.
Protective route is set for Planner and search components.
*/

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path="/">
              <Redirect to="/Search" />
            </Route>
            <Route path="/Login" exact component={Login} />
            <Route path="/Register" exact component={Register} />
            <Route path="/Forgot-Password" exact component={forgotpassword} />
            <div>
              <Navigation />
              <Route path="/About" component={About} />
              <ProtectedRoute path="/Planner" component={Planner} />
              <ProtectedRoute path="/Search" component={Search} /> 
              <Route path='/Logout' exact component={Logout} />
            </div>
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}
export default App;