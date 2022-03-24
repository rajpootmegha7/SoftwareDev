import React, { Component, Fragment } from 'react'
import {  Link } from "react-router-dom";

const Navbar = () => {
  return (
  <div>
    <li>
      <Link to="/about">About Us</Link>
    </li>
    <li>
      <Link to="/search">Search</Link>
    </li>
    <li>
      <Link to="/planner">Planner</Link>
    </li>
    <li>
      <Link to="/login">Login</Link>
    </li>
    <li>
      <Link to="/register">Register</Link>
    </li>
  </div>
  );
}
export default Navbar;