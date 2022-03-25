import React, { Component, Fragment } from 'react'
import {  Link } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import logo from '../../images/plantcare.png'

const Navigation = () => {
  return (
    <Navbar bg="light" expand="lg">
    <Container>
    <Navbar.Brand href="#home">
      <img
        src={logo}
        width="200"
        height="60"
        className="d-inline-block align-top"
      />
    </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="/About">About</Nav.Link>
          <Nav.Link href="/Search">Search</Nav.Link>
          <Nav.Link href="/Planner">Planner</Nav.Link>
          <Nav.Link href="/Login">Log In</Nav.Link>
          <Nav.Link href="/Signup">Sign Up</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
}
export default Navigation;