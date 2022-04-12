import React, { Component, Fragment } from 'react'
import './style.css'

import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';
import { Dropdown } from 'primereact/dropdown';
import logo_reference from '../../images/plantcare.png'
import Footer from '../Footer/Footer';



// let options = useMemo(() => countryList().getData(), []);

export default class register extends Component {

    constructor(props) {
        super(props)

        this.state = {
            email: '',
            firstname: '',
            lastname: '',
            password: '',
            password2: '',
            securityQuestion: '',
            securityAnswer: '',
            contactNum:'',

        };
        this.countrylist = [];
        this.questions = [
            { name: 'What is your first school name?', code: 'Q1' },
            { name: 'What is your first pet name?', code: 'Q2' },
            { name: 'What is your favourite dish?', code: 'Q3' },
            { name: 'What is your favourite place?', code: 'Q4' },
            { name: 'What is your favourite color?', code: 'Q5' },
        ]

        this.onSecurityQuestionChange = this.onSecurityQuestionChange.bind(this);
        this.onclickSubmit = this.onclickSubmit.bind(this);
        this.showSuccess = this.showSuccess.bind(this);
        this.showError = this.showError.bind(this);

    }
    onSecurityQuestionChange(event) {
        event.preventDefault();
        console.log(event);
        this.setState({ securityQuestion: event.target.value })
        return;

    }
    onclickSubmit(event) {
        event.preventDefault();

        if (!this.state.email) {
            this.showError('Email address is blank');
            return;
        } else if (!/\S+@\S+\.\S+/.test(this.state.email)) {
            this.showError('Email address is invalid');
            return;
        }
        if (!this.state.firstname.trim()) {
            this.showError('Firstname is Blank');
            return;
        }
        if (!this.state.lastname.trim()) {
            this.showError('Lastname is Blank');
            return;
        }
        if (!this.state.password) {
            this.showError('Password is required');
            return;
        }
        if (!this.state.password2) {
            this.showError('Confirm Password is required');
            return;
        } else if (this.state.password2 !== this.state.password) {
            this.showError('Passwords do not match');
            return;
        }


        var data = {
            
            first_name: this.state.firstname,
            last_name: this.state.lastname,
            email: this.state.email,
            contact_number: this.state.contactNum,
            password: this.state.password,
            security_question: this.state.securityQuestion.name,
            security_answer: this.state.securityAnswer,
            
        };
        console.log(data);
        
        this.verifyRegistration(data);
    }

    verifyRegistration(data) {
        console.log('Verifying user input');
        var request = new Request('http://localhost:4000/auth/register', {
            method: 'POST',
            headers: new Headers({ 'Content-Type': 'application/json' }),
            body: JSON.stringify(data)
        });
        
        var that = this;
        fetch(request)
            .then(function (response) {
                if (response.status === 500) throw new Error('Internal Server Error');
                else if (response.status === 401) throw new Error('User already exists.');

                response.json().then(function (data) {
                    that.showSuccess('Successfully registered');
                    console.log("success")
                    that.props.history.push("/Login");
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
            <div>
                <Fragment>
                    <Toast ref={(el) => this.toast = el} />
                    <div className='logo'><img src={logo_reference} alt="Plants" width="170px" height="60px" /></div>
                    <div id='image_container'></div>
                    <div id="register_container">
                        <div className="container_welcome">
                            <p id="welcome">Register to </p><p id="welcome2"> PlantCare! </p>
                            <span id="no_account">
                                <a className='l-btn' href='/Login'>Have an account? Sign in </a>
                            </span>
                        </div>
                        <h1 id="sign_up">Sign up </h1>
                        {/* <p id='label_text'>Enter Your username or email address</p> */}
                        <span className="p-float-label">
                            <InputText
                                id="form_input"
                                placeholder='Enter your email address'
                                value={this.state.email}
                                onChange={(e) => this.setState({ email: e.target.value })}
                                required
                            />
                        </span>
                        <div id='formname'>
                            <InputText id="form_input"
                                placeholder='Firstname'
                                value={this.state.firstname}
                                onChange={(e) => this.setState({ firstname: e.target.value })}
                                required />
                            <InputText
                                id="form_input"
                                placeholder='Lastname'
                                value={this.state.lastname}
                                onChange={(e) => this.setState({ lastname: e.target.value })}
                                required />

                        </div>
                        <Password
                            value={this.state.password}
                            placeholder='Enter a password'
                            onChange={(e) => this.setState({ password: e.target.value })} toggleMask
                            required
                        />
                        <Password
                            value={this.state.password2}
                            placeholder='Confirm your password'
                            onChange={(e) => this.setState({ password2: e.target.value })} toggleMask
                            required
                        />
                        <InputText id="form_input"
                                placeholder='Contact Number'
                                value={this.state.contactNum}
                                onChange={(e) => this.setState({ contactNum: e.target.value })}
                                required />
                        <Dropdown
                            value={this.state.securityQuestion}
                            placeholder='Choose a security question'
                            options={this.questions}
                            onChange={this.onSecurityQuestionChange} optionLabel="name"
                            required
                        />
                        <InputText id="form_input"
                            placeholder='Your Answer'
                            value={this.state.securityAnswer}
                            onChange={(e) => this.setState({ securityAnswer: e.target.value })} />

                        {/* <span className="p-float-label"> */}
                        

                        <Button id="button_submit" label="Submit" className="p-button-outlined p-button-success" onClick={this.onclickSubmit} />
                    </div>
                    <Footer/>
                </Fragment>


            </div>
        )
    }
}
