import React from 'react';
import { render, screen } from '@testing-library/react';
import About from '../containers/about/about';
import MemoryRouter from 'react-router-dom/BrowserRouter';

describe('Test Render - About Page', () => {
  it('Intro Statement Should Appear', () => {
    render(<MemoryRouter><About /></MemoryRouter>);
    expect(screen.getByText('Your Garden, reimagined')).toBeInTheDocument();
  });
});