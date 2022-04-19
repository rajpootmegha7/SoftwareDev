import React from 'react';
import { render, screen } from '@testing-library/react';
import Register from '../containers/register/register';
import MemoryRouter from 'react-router-dom/BrowserRouter';

describe('Test Render - Register Page', () => {
  it('Register Message Should Appear', () => {
    render(<MemoryRouter><Register /></MemoryRouter>);
    expect(screen.getByText('Register to')).toBeInTheDocument();
    expect(screen.getByText('PlantCare!')).toBeInTheDocument();
  });
});