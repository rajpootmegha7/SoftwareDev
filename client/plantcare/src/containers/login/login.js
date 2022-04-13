import React, { Component, Fragment, useState } from 'react'
import './style.css'


import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';
import logo_reference from '../../images/plantcare.png'
import { useHistory } from "react-router-dom";


export default function Login() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState(); 
    const [errorMsg, setErrorMsg] = useState(''); 
    let history = useHistory(); 

    async function loginUser(credentials) {
        return fetch('http://localhost:4000/auth/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(credentials)
        })
        .then(response => response.json())
        .then(data => {
          if (data.token !== undefined) {
            localStorage.setItem('token', JSON.stringify(data.token).slice(1,-1));
            history.push('./planner')
          } else {
            setErrorMsg(data);
            setPassword('');
          }
        })
        .catch(error =>     
            console.log(error)
        ); 
    }

    return(
        <Fragment>
            <div className='logo'><img src={logo_reference} alt="Plants" width="200" height="60" /></div>
                <div id='image_container'></div>
                <div id="login_container">
                    <div className="container_welcome">
                        <p id="welcome">Welcome to</p><p id="welcome2"> PlantCare </p>
                        <span id="no_account">
                            <a href="register">No account? Sign up </a>
                        </span>
                    </div>
                    <h1 id="sign_in">Sign in </h1>
                    <div className="email">
                        <span className="p-float-label">
                        <p id='label_text'>Enter your email address</p>
                            <InputText
                                id="form_input"
                                placeholder='Enter your email address'
                                onChange={e => setEmail(e.target.value)}
                                required
                            />
                        </span>    
                    </div>
                    <p id='label_text'>Enter your Password</p>
                    <Password placeholder ='Enter your password' onChange={e => setPassword(e.target.value)} toggleMask />
                    <span id="forgot_password">
                        <a href="/Forgot-Password"> Forgot Password </a>
                    </span>
                    {errorMsg.length > 0 ? (<p>{errorMsg}</p>): null}

                    <Button id="button_submit" label="Submit" className="p-button-outlined p-button-success" onClick={() => loginUser({email: email, password: password})} />
                </div>
            </Fragment>
    )
  }

