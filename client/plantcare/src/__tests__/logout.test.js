// navBar.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import Logout from '../containers/logout/logout';

it('renders without crashing', () => {
  render(<Logout />);
  expect(screen.getByText('Successfully Logged Out')).toBeInTheDocument();
});

// // include as many test cases as you want here
// const links = [
//   { text: 'About', location: "./about" },
//   { text: 'Search', location: "./search" },
//   { text: 'Planner', location: "./planner" },
// ];
// // I use test.each to iterate the test cases above
// test.each(links)(
//   "Check if Nav Bar have %s link.",
//   (link) => {
//     render(<Navigation />);
//     //Ensure the text is in the dom, will throw error it can't find
//     const linkDom = screen.getByText(link.text); 
		
//     //use jest assertion to verify the link property
//     expect(linkDom).toHaveAttribute("href", link.location);
//   }
// );

// import React, { Component } from 'react'
// import { Link} from "react-router-dom";
// import './style.css'
// import Button from '../../components/Button'
// // class component for logout functionality.

// export default class Logout extends Component {
//   componentDidMount(){
//     localStorage.clear('firstname');
//     localStorage.setItem('isLogged', false);
//   }
//   render() {
//     return (
//       <div className='logoff_container'>
//           <p>Successfully Logged Out</p>
//             <Button className='login_btn'>
//               <Link className='planner-link' to={{
//               pathname: '/Login',
//               }}>Login
//               </Link>
//             </Button>
//         </div>
//     )
//   }
// }
