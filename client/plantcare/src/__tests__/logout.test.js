// navBar.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import Logout from '../containers/logout/logout';
import MemoryRouter from 'react-router-dom/BrowserRouter';

describe('Render Logout Page', () => {
  it('Logout Message should appear', () => {
    render(<MemoryRouter><Logout /></MemoryRouter>);
    expect(screen.getByText('Successfully Logged Out')).toBeInTheDocument();
  });
});

describe('Sign Out a User', () => {
  it('should sign out a user', () => {
    const spyLoStoRemove = jest.spyOn(Logout.prototype, 'componentDidMount');
    render(<MemoryRouter><Logout /></MemoryRouter>);
    expect(spyLoStoRemove).toHaveBeenCalled();
  });
});

// let wrapper;
// beforeEach(() => {
//   wrapper = shallow(<MemoryRouter><Logout /></MemoryRouter>);
// });

//   it('should check `componentDidMount()`', () => {
//     const instance = wrapper.instance(); // you assign your instance of the wrapper
//     jest.spyOn(instance, 'randomFunction'); // You spy on the randomFunction
//     instance.componentDidMount();
//     expect(instance.randomFunction).toHaveBeenCalledTimes(1); // You check if the condition you want to match is correct.
//   });

// it('renders without crashing', () => {
//   render(<Logout />);
//   expect(screen.getByText('Successfully Logged Out')).toBeInTheDocument();
// });

// import React, { Component } from 'react'
// import { Link} from "react-router-dom";
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
