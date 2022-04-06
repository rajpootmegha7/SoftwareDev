import './App.css'

import React, { Component } from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import login from './containers/login/login'
import register from './containers/register/register'
import forgotpassword from './containers/forgotpassword/forgotpassword'
import Search from './containers/search/search'
import About from './containers/about/about'
import Planner from './containers/planner/planner'
import Navigation from './components/navbar/navbar'



function App() {
  return (
    <div className="App">
      <BrowserRouter>
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
      </BrowserRouter>
    </div>
  );
}

// function App() {
//   return (
//     <div className="App">
//       <Navigation />
//         <BrowserRouter>
//             <Route path='/about' element={<About/>}/>
//         </BrowserRouter>
//     </div>
//   );
// }

export default App;