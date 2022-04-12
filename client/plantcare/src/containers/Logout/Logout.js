import React, { Component } from 'react'
import { Link} from "react-router-dom";
import './style.css'
import Button from '../../components/Button'
// class component for logout functionality.
export default class Logout extends Component {
  componentDidMount(){
    localStorage.clear('firstname');
    localStorage.setItem('isLogged', false);
  }
  render() {
    return (
      <div className='logoff_container'>
          <p>Successfully Logged Out</p>
            <Button className='login_btn'>
              <Link className='planner-link' to={{
              pathname: '/Login',
              }}>Login
              </Link>
            </Button>
        </div>
    )
  }
}
