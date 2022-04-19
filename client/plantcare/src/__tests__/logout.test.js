// navBar.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import Logout from '../containers/Logout/Logout';
import MemoryRouter from 'react-router-dom/BrowserRouter';

describe('Test Logout Page', () => {
  
  it('Test Render - Logout Message Should Appear', () => {
    render(<MemoryRouter><Logout /></MemoryRouter>);
    expect(screen.getByText('Successfully Logged Out')).toBeInTheDocument();
  });
});
