import React, { Component, Fragment } from 'react'
import './style.css'


import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';
import logo_reference from '../../images/plantcare.png'



export default class login extends Component {

    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: ''
        };
        this.clickSubmit = this.clickSubmit.bind(this);
        this.showSuccess = this.showSuccess.bind(this);
        this.showError = this.showError.bind(this);
    }

    clickSubmit(event) {

        event.preventDefault();

        var data = {
            email: this.state.email,
            password: this.state.password,
        };
        console.log(data);
        this.verifyLogin(data);
    }

    showSuccess(message) {
        this.toast.show({ severity: 'success', summary: 'Success Message', detail: message, life: 3000 });
    }
    showError(message) {
        this.toast.show({ severity: 'error', summary: 'Error Message', detail: message, life: 3000 });
    }

    verifyLogin(data) {
        console.log('In Submit Login');
        var request = new Request('http://localhost:4000/auth/login', {
            method: 'POST',
            headers: new Headers({ 'Content-Type': 'application/json' }),
            body: JSON.stringify(data)
        });

        var that = this;
        fetch(request)
            .then(function (response) {
                if (response.status === 500) throw new Error('Internal server error');
                else if (response.status === 401) throw new Error('Password or Email is incorrect');
                
                response.json().then(function (data) {
                    localStorage.setItem('email', that.state.email);
                    localStorage.setItem('isLogged', 'true');

                    that.showSuccess('Sucessfully Logged In.');
                    that.props.history.push('/Planner');
                   
                });
            })
            .catch(function (err) {
                console.log(err.message);
                that.showError(err.message);
            });
    }





    render() {
        return (
            <Fragment>
                <Toast ref={(el) => this.toast = el} />
                <div className='logo'><img src={logo_reference} alt="Plants" width="170px" height="60px" /></div>
                <div id='image_container'></div>
                <div id="login_container">
                    <div className="container_welcome">
                        <p id="welcome">Welcome to</p><p id="welcome2"> PlantCare! </p>
                        <span id="no_account">
                            <a href="register">No account? Sign up </a>
                        </span>
                    </div>
                    <h1 id="sign_in">Sign in </h1>
                    <div className="email">
                        <span className="p-float-label">
                        <p id='label_text'>Enter Your email address</p>
                            <InputText
                                id="form_input"
                                placeholder='Enter your email address'
                                value={this.state.email}
                                onChange={(e) => this.setState({ email: e.target.value })}
                                required
                            />
                        </span>    
                    </div>
                    <p id='label_text'>Enter Your Password</p>
                    <Password value={this.state.password} placeholder ='Enter your password' onChange={(e) => this.setState({ password: e.target.value })} toggleMask />
                    <span id="forgot_password">
                        <a href="/Forgot-Password"> Forgot Password </a>
                       
                    </span>

                    <Button id="button_submit" label="Submit" className="p-button-outlined p-button-success" onClick={this.clickSubmit} />
                </div>
            </Fragment>

        )
    }
}
