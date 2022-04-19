import "./style.css"

import React from 'react'
import logo from '../../images/plantcare.png'
import { Menubar } from 'primereact/menubar'

// Navigation bar for the plant care
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
      }},
      {label: 'Logout', command: () => {
         localStorage.clear('fname');
         localStorage.setItem('isLogged', false);
         window.location.href='./logout'
         }}
   ];
   const start = <img alt="logo" src={logo} width="200"
   height="60"></img>;
   return(
       <div>
          <header>
             <nav>
                {localStorage.getItem('fname') === null ? <Menubar model={navlist} start={start} /> :
                <Menubar model={navlist} start={start} end={'Hi, '+ localStorage.getItem('fname')}/>}
             </nav>
          </header>
       </div>
   )
}

export default Navigation;

