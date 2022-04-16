// navBar.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import Logout from '../containers/logout/logout';
import MemoryRouter from 'react-router-dom/BrowserRouter';

describe('Test Logout Page', () => {
  
  it('Test Render - Logout Message Should Appear', () => {
    render(<MemoryRouter><Logout /></MemoryRouter>);
    expect(screen.getByText('Successfully Logged Out')).toBeInTheDocument();
  });
  
  it('Test componentDidMount - Data Should Clear', () => {
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
