import "./style.css"

import React, { Component, Fragment } from 'react'
import {  Link } from "react-router-dom";
import logo from '../../images/plantcare.png'
import { Menubar } from 'primereact/menubar'
import { Button } from 'primereact/button'
 
const Navigation = () => {
   const navlist = [
      {label: 'About', command: () => {
          window.location.href='./about'
      }}, 
      {label: 'Search', command: () => {
         window.location.href='./search'
      }}, 
     {label: 'Planner', command: () => {
      window.location.href='./planner'
      }}
   ];
   const start = <img alt="logo" src={logo} width="200"
   height="60"></img>;
   return(
       <div>
          <header>
             <nav>
                <Menubar model={navlist} start={start}/>
             </nav>
          </header>
       </div>
   )
}

export default Navigation;

