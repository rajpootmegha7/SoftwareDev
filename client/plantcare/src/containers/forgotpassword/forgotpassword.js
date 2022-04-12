import React, { Component, Fragment } from 'react'
import './style.css'


import { InputText } from 'primereact/inputtext';
import { Toast } from 'primereact/toast';
import { Password } from 'primereact/password';
import Button from '../../components/Button';
import logo_reference from '../../images/plantcare.png';


export default class forgotpassword extends Component {

    constructor(props) {
        super(props)

        this.state = {
            showEmail: true,
            showEmailButton: true,
            showSecurity: false ,
            showResetPass: false,
            emailAddress: '',
            securityQuestion: '',
            securityAnswer: '',
            pass1: '',
            pass2: ''
        };

        this.clickSubmitEmail = this.clickSubmitEmail.bind(this);
        this.clickSubmitPass = this.clickSubmitPass.bind(this);
       
    }

    clickSubmitEmail() {
        var data = {
            email: this.state.emailAddress,
        };
        console.log("Email is " + this.state.emailAddress);
        console.log(data);
        this.verifyEmail(data);
    }

    clickSubmitPass() {
        var data = {
            email: this.state.emailAddress,
            password: this.state.pass1,
            security_answer: this.state.securityAnswer
        };
        console.log(data);

        if (!this.state.pass1) {
            this.showError('Password field cannot be blank');
            return;
        }
        if (!this.state.pass2) {
            this.showError('Verify password field cannot be blank');
            return;
        } else if (this.state.pass1 !== this.state.pass2) {
            this.showError("Passwords doesn't match");
            return;
        }
        this.updatePass(data);
        
    }
    updatePass(data) {
        var request = new Request('http://localhost:4000/forgotPassword/resetpass', {
            method: 'POST',
            headers: new Headers({ 'Content-Type': 'application/json' }),
            body: JSON.stringify(data)
        });

        var that = this;
        fetch(request)
            .then(function (response) {
                if (response.status === 500) throw new Error('Internal server error');
                else if (response.status === 401) throw new Error('Security answer is incorrect');
                else if (response.status === 404) throw new Error('Not found');
                response.json().then(function (data) {
                    that.showSuccess('Password is updated successfully');
                    console.log(data);
                    that.props.history.push("/Login");
                })
                .catch(function (err) {
                    console.log(err.message);
                    that.showError(err.message);
                });
        })
        .catch(function (err) {
            console.log(err.message);
            that.showError(err.message);
        });
    }

    verifyEmail(data) {
            var request = new Request('http://localhost:4000/forgotPassword/validate', {
                method: 'POST',
                headers: new Headers({ 'Content-Type': 'application/json' }),
                body: JSON.stringify(data)
            });
            var that = this;
            fetch(request)
                .then(function (response) {
                    if (response.status === 500) throw new Error('Internal server error');
                    else if (response.status === 401) throw new Error('Email is not registered');
                    
                    response.json().then(function (data) {
                        that.setState({securityQuestion: data.security_question});
                        console.log(that.state.securityQuestion);
                        that.showSuccess('Valid username');
                        that.setState({ showSecurity: true })
                        that.setState({ showResetPass: true })
                        that.setState({ showEmailButton: false })
                        that.setState({ showEmail: false })
                    });
                })
                .catch(function (err) {
                    console.log(err.message);
                    that.showError(err.message);
                });
        }
    


    showSuccess(message) {
        this.toast.show({ severity: 'success', summary: 'Success Message', detail: message, life: 3000 });
    }
    showError(message) {
        this.toast.show({ severity: 'error', summary: 'Error Message', detail: message, life: 3000 });
    }


    render() {
        return (
            <Fragment>
                <Toast ref={(el) => this.toast = el} />
                <div className='logo'><img src={logo_reference} alt="Plants" width="170px" height="60px" /></div>
                

                { this.state.showEmail ? <div className="forgotpass_container">
                    <div className="image_container"></div>
                    <div className="forgot">Forgot Password</div>
                    <div className="input_container">
                        <p id='label_text'>Enter Your email address</p>
                        <InputText  id="Email" aria-describedby="Email-help"
                                    placeholder = "Email"
                                    onChange={(e) => this.setState({ emailAddress: e.target.value })}
                                    required/>
                    
                        { this.state.showEmailButton ? 
                        <div>
                            <Button className='Fogot_btn' onClick={this.clickSubmitEmail}>
                                Submit
                            </Button >
                        </div> : null}
                    </div>
                </div> :null}
                { this.state.showResetPass ? <div className="resetpass_container">
                <div className="resetpass">Reset Password</div>
                    <div className="input_container">

                        <label htmlFor="s_question" className="block">{this.state.securityQuestion}</label>
                        <div className="security_question"></div>
                        <InputText  
                            id="username" 
                            placeholder='Security Answer' required
                            onChange={(e) => this.setState({ securityAnswer: e.target.value })}
                        />
                        <label htmlFor="password" className="block">Password</label>
                        <Password
                            id="password"
                            value={this.state.pass1}
                            placeholder='Enter a password'
                            onChange={(e) => this.setState({ pass1: e.target.value })} toggleMask
                            required
                        />
                        <div className="break"></div>
                        <label htmlFor="password" className="block">Confirm Password</label>
                        <Password
                            id="password"
                            value={this.state.pass2}
                            placeholder='Confirm your password'
                            onChange={(e) => this.setState({ pass2: e.target.value })} toggleMask
                            required
                        />
                        <Button className='Fogot_btn' onClick={this.clickSubmitPass}>
                            Submit
                        </Button >
                    </div>
                </div> : null}
            </Fragment>
        )
    }
}