// navBar.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import Login from '../containers/login/login';


// include as many test cases as you want here
const links = [
  { text: 'About', location: "./about" },
  { text: 'Search', location: "./search" },
  { text: 'Planner', location: "./planner" },
];
// I use test.each to iterate the test cases above
test.each(links)(
  "Check if Nav Bar have %s link.",
  (link) => {
    render(<Navigation />);
    //Ensure the text is in the dom, will throw error it can't find
    const linkDom = screen.getByText(link.text); 
		
    //use jest assertion to verify the link property
    expect(linkDom).toHaveAttribute("href", link.location);
  }
);

// import React, { Component, Fragment, useState } from 'react'
// import './style.css'


// import { InputText } from 'primereact/inputtext';
// import { Password } from 'primereact/password';
// import { Button } from 'primereact/button';
// import logo_reference from '../../images/plantcare.png'
// import { useHistory } from "react-router-dom";
// import Footer from '../Footer/Footer';


// export default function Login() {
//     const [email, setEmail] = useState();
//     const [password, setPassword] = useState(); 
//     const [errorMsg, setErrorMsg] = useState(''); 
//     let history = useHistory(); 

//     async function loginUser(credentials) {
//         return fetch('http://localhost:4000/auth/login', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json'
//           },
//           body: JSON.stringify(credentials)
//         })
//         .then(response => response.json())
//         .then(data => {
//           if (data.token !== undefined) {
//             localStorage.setItem('token', JSON.stringify(data.token).slice(1,-1));
//             history.push('./search')
//           } else {
//             setErrorMsg(data);
//             setPassword('');
//           }
//         })
//         .catch(error =>     
//             console.log(error)
//         ); 
//     }

//     return(
//         <Fragment>
//             <div className='logo'><img src={logo_reference} alt="Plants" width="200" height="60" /></div>
//                 <div id='image_container'></div>
//                 <div id="login_container">
//                     <div className="container_welcome">
//                         <p id="welcome">Welcome to</p><p id="welcome2"> PlantCare </p>
//                         <span id="no_account">
//                             <a className='l-btn' href="register">No account? Sign up </a>
//                         </span>
//                     </div>
//                     <h1 id="sign_in">Sign in </h1>
//                     <div className="email">
//                         <span className="p-float-label">
//                         <p id='label_text'>Enter your email address</p>
//                             <InputText
//                                 id="form_input"
//                                 placeholder='Enter your email address'
//                                 onChange={e => setEmail(e.target.value)}
//                                 required
//                             />
//                         </span>    
//                     </div>
//                     <p id='label_text'>Enter your Password</p>
//                     <Password placeholder ='Enter your password' onChange={e => setPassword(e.target.value)} toggleMask />
//                     <span id="forgot_password">
//                         <a  className='l-btn' href="/Forgot-Password"> Forgot Password </a>
//                     </span>
//                     {errorMsg.length > 0 ? (<p>{errorMsg}</p>): null}

//                     <Button id="button_submit" label="Submit" className="p-button-outlined p-button-success" onClick={() => loginUser({email: email, password: password})} />
//                 </div>
//                 <Footer/>
//             </Fragment>
//     )
//   }