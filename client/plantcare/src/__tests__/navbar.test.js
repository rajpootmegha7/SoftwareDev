// navBar.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import { shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-17'
import Navigation from '../components/navbar/navBar';
import MemoryRouter from 'react-router-dom/BrowserRouter';

configure({ adapter: new Adapter() })

describe('Render Forgot Password Page', () => {
  it('Should be prompted for email', () => {
    let wrapper;// render(<MemoryRouter><Navigation /></MemoryRouter>);
    wrapper = shallow(<MemoryRouter><Navigation /></MemoryRouter>);
    const my_menu = wrapper.find('Menubar');
    expect(my_menu).toHaveLength(1)
  });
});
// include as many test cases as you want here
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


// const Navigation = () => {
//    const navlist = [
//       {label: 'About', command: () => {
//           window.location.href='./about'
//       }}, 
//       {label: 'Search', command: () => {
//          window.location.href='./search'
//       }}, 
//      {label: 'Planner', command: () => {
//       window.location.href='./planner'
//       }},
//       {label: 'Logout', command: () => {
//          window.location.href='./logout'
//          }}
//    ];
//    const start = <img alt="logo" src={logo} width="200"
//    height="60"></img>;
//    return(
//        <div>
//           <header>
//              <nav>
//                 <Menubar model={navlist} start={start} end={localStorage.getItem('firstname')}/>
//              </nav>
//           </header>
//        </div>
//    )
// }

// export default Navigation;

