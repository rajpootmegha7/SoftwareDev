import React, { Component, Fragment } from 'react'
import './style.css'
import useToken from '../../components/useToken/useToken';
import Login from '../login/login';

const Planner = () => { 
    const { token, setToken } = useToken();

    /* doesn't let page access until user is logged in */

    if(!token) {
        return <Login setToken={setToken} />
    }
    return(
        <div> "Im a planner" </div>
    );
}

export default Planner;