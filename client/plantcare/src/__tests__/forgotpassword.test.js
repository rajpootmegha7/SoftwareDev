// navBar.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import ForgotPass from '../containers/forgotpassword/forgotpassword';
import MemoryRouter from 'react-router-dom/BrowserRouter';

describe('Render Forgot Password Page', () => {
  it('Should be prompted for email', () => {
    render(<MemoryRouter><ForgotPass /></MemoryRouter>);
    expect(screen.getByText('Enter Your email address')).toBeInTheDocument();
  });
});