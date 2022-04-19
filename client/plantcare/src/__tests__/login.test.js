import React from 'react';
import { render, screen } from '@testing-library/react';
import Login from '../containers/login/login';
import MemoryRouter from 'react-router-dom/BrowserRouter';

describe('Test Render - Login Page', () => {
  it('Welcome Message Should Appear', () => {
    render(<MemoryRouter><Login /></MemoryRouter>);
    expect(screen.getByText('Welcome to')).toBeInTheDocument();
    expect(screen.getByText('PlantCare')).toBeInTheDocument();
  });
});