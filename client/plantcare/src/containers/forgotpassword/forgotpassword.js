// import React, { Component, Fragment } from 'react'
// import './style.css'


// import { InputText } from 'primereact/inputtext';
// import { Toast } from 'primereact/toast';
// import logo_reference from '../../images/plantcare.png';


// export default class forgotpassword extends Component {

//     constructor(props) {
//         super(props)

//         this.state = {
//             showEmail: true,
//             showEmailButton: true,
//             showSecurity: false ,
//             showResetPass: false,
//             Email: '',
//             securityQuestion: 'What is your first pet name?',
//             securityAnswer: '',
//             pass1: '',
//             pass2: ''
//         };

//         this.clickSubmitEmail = this.clickSubmitEmail.bind(this);
       
//     }

//     clickSubmitEmail() {
//         var data = {
//             _Email: this.state.Email,
//         };
//         console.log("Email is " + this.state.Email);
//         console.log(data);
//         this.verifyEmail(data);
//     }


//     verifyEmail(data) {
//         var link_api = 'http://localhost:4000/forgot_password/api/check_userid'
            

//     }


//     showSuccess(message) {
//         this.toast.show({ severity: 'success', summary: 'Success Message', detail: message, life: 3000 });
//     }
//     showError(message) {
//         this.toast.show({ severity: 'error', summary: 'Error Message', detail: message, life: 3000 });
//     }


//     render() {
//         return (
//             <Fragment>
//                 <Toast ref={(el) => this.toast = el} />
//                 <div className='logo'><img src={logo_reference} alt="Plants" width="170px" height="60px" /></div>
//                 <div className="image_container"></div>

//                 { this.state.showEmail ? 
//                 <div className="forgotpass_container">
//                     <div className="forgot">Forgot Password</div>
//                     <div className="input_container">
//                         <p id='label_text'>Enter Your email address</p>
//                         <InputText  id="Email" aria-describedby="Email-help"
//                                     placeholder = "Email"
//                                     onChange={(e) => this.setState({ Email: e.target.value })}
//                                     required/>
                    
//                         { this.state.showEmailButton ? 
//                         <div>
//                             <Button onClick={this.clickSubmitEmail}>
//                                 Submit
//                             </Button >
//                         </div> : null}
//                     </div>
//                 </div>
//                 :null}
//             </Fragment>
//         )
//     }
// }